import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Image,Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');// trả về một đối tượng có chứa thông tin về kích thước của cửa sổ hiện tại

const DetailNews = ({route ,navigation}: any) => {
    const { item } = route.params;
    console.log(item)
    
    const convertTime = (time:any) =>{
        let date = new Date(time)
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();

        return `ngay ${day} thang ${month} nam ${year}`;
    }

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrowleft" size={30} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.titleAdd}>Báo mới</Text>
            </View>

            <ScrollView style={styles.container}>
                <Image style={styles.image} source={{uri :  `${item.image}`}} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>Thời gian :{convertTime(item.time)}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                </View>
            </ScrollView>

        </>
    )
};

const styles = StyleSheet.create({
    container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#4e4d4d',
  },
  relatedPostContainer: {
    padding: 10,
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
    fontSize:20,
    textTransform:'uppercase'

}
})

export default DetailNews;