import React, { useState, useEffect } from 'react'
import { Header } from '../Header'
import { FilterableList } from '../FilterableList'


export const DataProvider = () => {
    const [cards, setCards] = useState({ cards: [], isLoaded: false });
    const [fetchedFilters, setFetchedFilters] = useState({ filters: {}, isLoaded: false })
    const [currentFilters, setCurrentFilters] = useState({ level: '', category: '', language: '' });
    const [isEveryCardShown, setIsEveryCardShown] = useState({
        isEveryArticlesCardShown: false,
        isEveryBooksCardShown: false,
        isEveryInterviewsCardShown: false,
        isEveryTasksCardShown: false
    });
    const [searchBarValue, setSearchBarValue] = useState('');
    let NumberOfSortedCards = 0;

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
        console.log('IS EVERY CARD SHOWN: ----------', isEveryCardShown);
       console.log(searchBarValue);
    });

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
        setIsEveryCardShown({
            isEveryArticlesCardShown: false,
            isEveryBooksCardShown: false,
            isEveryInterviewsCardShown: false,
            isEveryTasksCardShown: false
        });
    }

    const onSearchBarChange = (e) => {
        setSearchBarValue(e.target.value)
    }

    const categorize = (cards, {
        isEveryArticlesCardShown,
        isEveryBooksCardShown,
        isEveryInterviewsCardShown,
        isEveryTasksCardShown
    }) => {
        return {
            articles: { data: [...cards.filter(item => item.category === 'Статьи')], isEveryCardShown: isEveryArticlesCardShown },
            interviews: { data: [...cards.filter(item => item.category === 'Интервью')], isEveryCardShown: isEveryInterviewsCardShown },
            tasks: { data: [...cards.filter(item => item.category === 'Задачи')], isEveryCardShown: isEveryTasksCardShown },
            books: { data: [...cards.filter(item => item.category === 'Книги')], isEveryCardShown: isEveryBooksCardShown }
        };
    }

    const filtering = (cards, currentFilters) => {
        let filteredCards = cards;

        Object.keys(currentFilters).forEach(filterName => {
            if (currentFilters[filterName]) {
                filteredCards = filteredCards.filter(card => card[filterName] === currentFilters[filterName]);
            }
        });
        return filteredCards;
    }

    const search = (cards, inputValue) => cards.filter(item => item.text.includes(inputValue));

    const data = (cards, currentFilters, isEveryCardShown, inputValue) => {
        const filteredItems = filtering(cards, currentFilters);
        const searchedItems = search(filteredItems, inputValue);
        NumberOfSortedCards = searchedItems.length;
        return categorize(searchedItems, isEveryCardShown);
    }

    const onButtonClick = (categoryName) => {
        setIsEveryCardShown({
            ...isEveryCardShown,
            [`isEvery${categoryName}CardShown`]: !isEveryCardShown[`isEvery${categoryName}CardShown`]
        });
    }

    return (
        <>
            <Header
                fetchedFilters={fetchedFilters}
                currentFilters={currentFilters}
                onFilterChange={onFilterChange}
                onSearchBarChange={onSearchBarChange}
                searchBarValue={searchBarValue}
            />
            <FilterableList
                cards={data(cards.cards, currentFilters, isEveryCardShown, searchBarValue)}
                onClick={onButtonClick}
                NumberOfSortedCards={NumberOfSortedCards}
            />
        </>
    );
};
