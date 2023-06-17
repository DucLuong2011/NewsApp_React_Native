import React, { useState, useEffect } from "react";
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNews } from "../../context/NewsProvider";


const AddNews = ({ titleAdd ,icon ,navigation }: any) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const {news,setNews,getNews}:any = useNews();

    const save = async () => {
        let formData = {
            title,
            content,
            time: Date.now(),
            category,
            image

        }

        const pushNews = [...news,formData];
        setNews(pushNews);
        await AsyncStorage.setItem('data',JSON.stringify(pushNews));
        navigation.navigate('Home')
        console.log(pushNews)
    }


    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrowleft" size={30} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.titleAdd}>Thêm báo mới</Text>
            </View>
            <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ padding: 30 }}>
                    <View>
                        <TextInput placeholder="Title" style={styles.title} onChangeText={(value) => setTitle(value)} />
                    </View>

                    <View style={{ marginTop: 30}}>
                        <TextInput placeholder="Category" style={styles.title} onChangeText={(value) => setCategory(value)} />
                    </View>
                    <View style={{ marginTop: 30}}>
                        <TextInput placeholder="Image" style={styles.title} onChangeText={(value) => setImage(value)} />
                    </View>

                    <View style={{ marginTop: 30, height: 300, borderRadius: 10, borderWidth: 1, }}>
                        <TextInput placeholder="Content" style={styles.desc} multiline={true} onChangeText={(value) => setContent(value)} />
                    </View>

                    

                    <TouchableOpacity style={styles.btn_save} onPress={() => save()}>
                        <Text style={{ color: "white", fontSize: 16 }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: "gray"
    },
    title: {
        borderRadius: 10,
        borderWidth: 1,
    },
    desc: {

    },
    btn_save: {
        width: "100%",
        backgroundColor: "red",
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
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

export default AddNews;