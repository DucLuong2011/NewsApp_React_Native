import React from "react";
import { View,TextInput, StyleSheet, Image } from "react-native";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import BlockCard from "../components/BlockCard";

const SmallCard = ({item}:any) =>{
    return(
        <BlockCard item={item} content={styles.content} style={styles.container} imageStyle={styles.image}/>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:8,
        overflow:"hidden",
        marginBottom: 10,
        height:100,
        width:380
    },
    image:{
        flex:0.35,
        height:'100%',
    },
    content:{
        flex:0.65,
        paddingHorizontal:10
    },
})

export default SmallCard;