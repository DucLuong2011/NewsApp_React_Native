import React from "react";
import { View,TextInput, StyleSheet, Image } from "react-native";
import Title from "./Title";
import Subtitle from "./Subtitle";

const BlockCard = ({ style ,imageStyle, content, item}:any) =>{
    const imageUrl = `${item.image}`
    return(
        <View style={[styles.container,style]}>
            <Image style={[styles.image, imageStyle]} source={{uri : imageUrl}} />
            <View style={[styles.content,content]}>
                <Title>{item.title}</Title>

                <Subtitle>{item.content}</Subtitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:300,
        backgroundColor:'white',
        borderRadius:8,
        overflow:"hidden"
    },
    image:{
        width:'100%',
        height:200,
        borderWidth:1
    },
    content:{
        padding:5,
    },
})

export default BlockCard;