import React, {createContext, useState} from 'react';

const TemaContext = createContext('Light');

const TemaProvider = ({children}) => {
    const[tema, setTema] = useState('light');

    const toggleTema = () =>{
        setTema(tema === 'light' ? 'dark' : 'light');
    };

    return (
        <TemaContext.Provider value={{tema, toggleTema}}> {children}</TemaContext.Provider>
    );
}; export {TemaContext, TemaProvider};