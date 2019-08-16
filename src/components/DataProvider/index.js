import React, { useState, useEffect } from 'react'
import { Header } from '../Header'
import { FilterableList } from '../FilterableList'


export const DataProvider = () => {
    const [cards, setCards] = useState({ cards: [], isLoaded: false });
    const [fetchedFilters, setFetchedFilters] = useState({ filters: {}, isLoaded: false })
    const [currentFilters, setCurrentFilters] = useState({ level: '', category: '', language: '' });

    const fetchCards = async () => {
        const result = await fetch('https://api.jsonbin.io/b/5d4be91d00947c04a5a75da2/latest');
        const data = await result.json();
        setCards({ cards: [...data], isLoaded: true });
    }

    const fetchFilters = async () => {
        const result = await fetch('https://api.jsonbin.io/b/5d4beaabf090a433857b567a/latest');
        const data = await result.json();
        setFetchedFilters({ filters: data, isLoaded: true });
    }

    const onFilterChange = (e) => { //basically just saves filter values in the state
        const targetId = e.target.id;
        const targetValue = e.target.value;

        switch (targetId) {
            case 'levelFilter':
                if (targetValue !== 'Любой Уровень') {
                    setCurrentFilters({
                        ...currentFilters,
                        level: targetValue
                    });
                } else {
                    setCurrentFilters({
                        ...currentFilters,
                        level: ''
                    });
                }
                break;
            case 'categoryFilter':
                if (targetValue !== 'Все Категории') {
                    setCurrentFilters({
                        ...currentFilters,
                        category: targetValue
                    });
                } else {
                    setCurrentFilters({
                        ...currentFilters,
                        category: ''
                    });
                }
                break;
            case 'languageFilter':
                if (targetValue !== 'Все Языки') {
                    setCurrentFilters({
                        ...currentFilters,
                        language: targetValue
                    });
                } else {
                    setCurrentFilters({
                        ...currentFilters,
                        language: ''
                    });
                }
                break;
            default:
                console.log(`target id ${targetId} is unknown`);
        }
    }

    const categorize = (cards) => {
        return {
            articles: [...cards.filter(item => item.category === 'Статьи')],
            interviews: [...cards.filter(item => item.category === 'Интервью')],
            tasks: [...cards.filter(item => item.category === 'Задачи')],
            books: [...cards.filter(item => item.category === 'Книги')]
        };
    }

    const filtering = (cards, filters) => {
        let filteredCards = cards;

        Object.keys(filters).forEach(filterName => {
            if (filters[filterName]) {
                filteredCards = filteredCards.filter(card => card[filterName] === filters[filterName]);
            }
        });
        return filteredCards;
    }

    const data = (cards, filters) => {
        const filteredItems = filtering(cards, filters);
        const categorizedItems = categorize(filteredItems);
        return categorizedItems;
    }

    useEffect(() => {
        fetchCards();
        fetchFilters();
        console.log('-----------COMPONENT DID MOUNT!-----------');
    }, []);

    useEffect(() => {
        console.log('------------COMPONENT UPDATED------------');
        console.log('cards: ', cards);
        console.log('filters: ', fetchedFilters);
        console.log('current filters: ', currentFilters);
    });

    return (
        <>
            <Header
                fetchedFilters={fetchedFilters}
                currentFilters={currentFilters}
                onFilterChange={onFilterChange}
            />
            <FilterableList cards={data(cards.cards, currentFilters)}/>
        </>
    );
};
