import React,{useState, useEffect} from "react";
import { FlatList, StyleSheet, Text,TouchableOpacity,View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNews } from "../../context/NewsProvider";
import SmallCard from "../components/SmallCard";


const ListCard = ({route,navigation}:any)=>{
    const { cate } = route.params;
    const {news,setNews,getNews}:any = useNews();
    const feedNews = news.filter((item:any) => item.category === cate)

   

    console.log(feedNews)
    const deleteItem = async (item:any)=>{
        let newData = news.filter((e:any)=> e.time !== item.time);

        await AsyncStorage.setItem('data',JSON.stringify(newData));
        getNews();
    }

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrowleft" size={30} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.titleAdd}>Danh sách báo</Text>
            </View>
            <View style={{padding:15,marginBottom:50}}>
                <FlatList 
                    data={feedNews}
                    renderItem={({item})=>
                    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{item})}>
                        <TouchableOpacity style={{}} onPress={()=>deleteItem(item)}>
                                <Icon name="close" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={()=>navigation.navigate('Edit',{item})}>
                                <Icon name="edit" size={30} color="black" />
                        </TouchableOpacity>
                        <SmallCard title='Tin tuc' item={item}/>
                    </TouchableOpacity>
                } 
                />
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:16,
    },
    btn_add:{
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "red",
        borderRadius:50,
        position:"absolute",
        right:30,
        bottom:30
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:15,
        backgroundColor:"white"
    },
    titleAdd:{
        color:"black",
        fontWeight:'bold',
        fontSize:16,
        textTransform:'uppercase'
    }
})

export default ListCard;