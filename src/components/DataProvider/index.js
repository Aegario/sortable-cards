import React, { useState, useEffect } from 'react'
import { Header } from '../Header'
import { FilterableList } from '../FilterableList'


export const DataProvider = () => {
    const [cards, setCards] = useState({ cards: [], isLoaded: false });
    const [fetchedFilters, setFetchedFilters] = useState({ filters: {}, isLoaded: false })
    const [currentFilters, setCurrentFilters] = useState({ level: '', category: '', language: '' });

    const onFilterChange = (e) => { //basically just saves filter values in the state
       const targetId = e.target.id;
       const targetValue = e.target.value;

        switch (targetId) {
        case 'levelFilter':
            setCurrentFilters({ ...currentFilters, level: targetValue });
            break;
        case 'categoryFilter':
            setCurrentFilters({ ...currentFilters, category: targetValue });
            break;
        case 'languageFilter':
            setCurrentFilters({ ...currentFilters, language: targetValue });
            break;
        default:
            console.log(`target id ${targetId} is unknown`);
        }
    }

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

    useEffect(() => {
        console.log(cards);
        console.log(fetchedFilters);
        console.log(currentFilters);
    });

    return (
        <>
            <Header fetchedFilters={fetchedFilters} onFilterChange={onFilterChange}/>
            <FilterableList />
        </>
    );
};
