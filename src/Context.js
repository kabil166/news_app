import React, { useState } from 'react'
import axios from 'axios'

export const NewsContext = React.createContext();

export const ContextProvider = ({children}) => {

    const [data, setData] = useState();
    const apiKey = "24735dcbeaf243ee9bf1aa963ca434b4"

    React.useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=apple&from=2021-12-11&to=2021-12-11&sortBy=popularity&apiKey=${apiKey}`)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <NewsContext.Provider value={{data}}>
            {children}
        </NewsContext.Provider>
    )
}
