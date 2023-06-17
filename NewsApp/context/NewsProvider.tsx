import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext<any>('');

const NewsProvider = ({children}:any)=>{

    const [news,setNews] = useState([]);//khởi tạo mảng rỗng

    const getNews = async ()=>{
        const result = await AsyncStorage.getItem('data');

        if (result !== null){
            setNews(JSON.parse(result))
        }

        //await AsyncStorage.clear();
    }

    useEffect(()=>{
        getNews();
    },[]);


    return(
    <>
        <NewsContext.Provider value={{news,setNews,getNews}}>
            {children}
        </NewsContext.Provider>
    </>
    )
}
export const useNews = ()=> useContext(NewsContext);

export default NewsProvider;