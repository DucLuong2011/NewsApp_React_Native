import React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import HorizontalCard from "../components/HorizontalCard";
import Title from "../components/Title";
import { useNews } from "../../context/NewsProvider";

const NewsSecond = ({ title, navigation }: any) => {
    const {news,setNews,getNews}:any = useNews();
    const feedNews = news.filter((item:any) => item.category ==="abc")
    return (<>
    <Title size={20}>{title}</Title>
    <FlatList
        data={feedNews} // Mảng dữ liệu chứa các mục trong danh sách
        keyExtractor={item => item.time} // Hàm để trích xuất khóa duy nhất từ mỗi mục
        horizontal // Hiển thị danh sách theo chiều ngang
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
        renderItem={({item}) => // Hàm render cho mỗi mục trong danh sách
        <TouchableOpacity onPress={()=>navigation.navigate('Detail')}>
         <HorizontalCard item={item} />
        </TouchableOpacity>
         }/>
     </>)
}

const styles = StyleSheet.create({
    container: {

    },
})

export default NewsSecond;