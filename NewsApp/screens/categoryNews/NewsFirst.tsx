import React from "react";
import { View, StyleSheet } from "react-native";
import BlockCard from "../components/BlockCard";
import { useNews } from "../../context/NewsProvider";

const NewsFirst = ({item,data}:any) =>{
    const feedNews = data.filter((item:any) => item.category ==="abc")
    return(
        <View>
        {feedNews.map((item:any)=><BlockCard item={item} key={item.time} style={{marginVertical:15}}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
})

export default NewsFirst;