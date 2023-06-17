import React from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import HorizontalCard from "../components/HorizontalCard";
import Title from "../components/Title";
import VerticalCard from "../components/VerticalCard";
import { useNews } from "../../context/NewsProvider";

const NewsThird = () => {
    const {news,setNews,getNews}:any = useNews();
    const feedNews = news.filter((item:any) => item.category ==="xyz")
    return<>
        <VerticalCard title='Tin tức 2' data={feedNews}/>
     </>
}

const styles = StyleSheet.create({
    container: {

    },
})

export default NewsThird;