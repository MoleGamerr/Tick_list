import React, {createContext, useState, useEffect} from "react";
import axios from "axios";


export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const[data,setData] = useState()
    const apiKey = "";
    const site ="https://newsapi.org/v2/top-headlines";
    const country = "lv";
    const category = "general";

    useEffect(() => {
        axios
        .get(`${site}?country=${country}&category=${category}&apiKey=${apiKey}`)
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, [data])

    return (
        <NewsContext.Provider value={{data}}>{props.children}</NewsContext.Provider>
    )
};