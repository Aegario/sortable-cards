import React, { useState, useEffect } from 'react'
import { Header } from '../Header'
import { FilterableList } from '../FilterableList'


export const DataProvider = () => {
    const [cards, setCards] = useState({ cards: [], isLoaded: false });
    const [fetchedFilters, setFetchedFilters] = useState({ filters: {}, isLoaded: false })
    const [currentFiltersValues, setCurrentFiltersValues] = useState({ level: '', category: '', language: '' });
    const [isEveryCardShown, setIsEveryCardShown] = useState({
        isEveryArticlesCardShown: false,
        isEveryBooksCardShown: false,
        isEveryInterviewsCardShown: false,
        isEveryTasksCardShown: false
    });
    const [searchBarValue, setSearchBarValue] = useState('');
    let NumberOfSortedCards = 0;
    let isDataReady = false;

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
    }, []);

    const onFilterChange = (e) => { //basically just saves filter values in the state
        const targetId = e.target.id;
        const targetValue = e.target.value;

        switch (targetId) {
            case 'levelFilter':
                if (targetValue !== 'Любой Уровень') {
                    setCurrentFiltersValues({
                        ...currentFiltersValues,
                        level: targetValue
                    });
                } else {
                    setCurrentFiltersValues({
                        ...currentFiltersValues,
                        level: ''
                    });
                }
                break;
            case 'categoryFilter':
                if (targetValue !== 'Все Категории') {
                    setCurrentFiltersValues({
                        ...currentFiltersValues,
                        category: targetValue
                    });
                } else {
                    setCurrentFiltersValues({
                        ...currentFiltersValues,
                        category: ''
                    });
                }
                break;
            case 'languageFilter':
                if (targetValue !== 'Все Языки') {
                    setCurrentFiltersValues({
                        ...currentFiltersValues,
                        language: targetValue
                    });
                } else {
                    setCurrentFiltersValues({
                        ...currentFiltersValues,
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
        setSearchBarValue(e.target.value);
        setIsEveryCardShown({
            isEveryArticlesCardShown: false,
            isEveryBooksCardShown: false,
            isEveryInterviewsCardShown: false,
            isEveryTasksCardShown: false
        });
    }

    const categorize = (cards, {
        isEveryArticlesCardShown,
        isEveryBooksCardShown,
        isEveryInterviewsCardShown,
        isEveryTasksCardShown
    }) => (
        [
            { categoryName: 'Статьи', data: [...cards.filter(item => item.category === 'Статьи')], isEveryCardShown: isEveryArticlesCardShown },
            { categoryName: 'Интервью', data: [...cards.filter(item => item.category === 'Интервью')], isEveryCardShown: isEveryInterviewsCardShown },
            { categoryName: 'Задачи', data: [...cards.filter(item => item.category === 'Задачи')], isEveryCardShown: isEveryTasksCardShown },
            { categoryName: 'Книги', data: [...cards.filter(item => item.category === 'Книги')], isEveryCardShown: isEveryBooksCardShown }
        ]
    );

    const filtering = (cards, currentFilters) => {
        let filteredCards = cards;

        Object.keys(currentFilters).forEach(filterName => {
            if (currentFilters[filterName]) {
                filteredCards = filteredCards.filter(card => card[filterName] === currentFilters[filterName]);
            }
        });
        return filteredCards;
    }

    const search = (cards, inputValue) => cards.filter(item => item.text.toLowerCase().includes(inputValue.toLowerCase()));

    const data = (cards, currentFilters, isEveryCardShown, inputValue) => {
        const filteredItems = filtering(cards, currentFilters);
        const searchedItems = search(filteredItems, inputValue);
        NumberOfSortedCards = searchedItems.length;
        if (cards.length > 0) isDataReady = true;
        return categorize(searchedItems, isEveryCardShown);
    }

    const onButtonClick = (categoryName) => {
        setIsEveryCardShown({
            ...isEveryCardShown,
            [`isEvery${categoryName}CardShown`]: !isEveryCardShown[`isEvery${categoryName}CardShown`]
        });
    }

    const onCardClick = (e) => {
        console.log(e.target.id);
    }

    return (
        <>
            <Header
                fetchedFilters={fetchedFilters}
                currentFiltersValues={currentFiltersValues}
                onFilterChange={onFilterChange}
                onSearchBarChange={onSearchBarChange}
                searchBarValue={searchBarValue}
            />
            <FilterableList
                cards={data(cards.cards, currentFiltersValues, isEveryCardShown, searchBarValue)}
                onButtonClick={onButtonClick}
                isDataReady={isDataReady}
                NumberOfSortedCards={NumberOfSortedCards}
                onCardClick={onCardClick}
            />
        </>
    );
};
