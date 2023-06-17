import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import BlockCard from "../components/BlockCard";

const {width} = Dimensions.get('window')// nó trả về một đối tượng chứa thông tin về kích thước của cửa sổ hiển thị

const HorizontalCard = ({item}:any) =>{
    return(
        <BlockCard item={item} style={styles.container} imageStyle={styles.image}/>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width / 2,
        marginRight:15,
        height:200
    },
    image:{
        height:100,
    }
})

export default HorizontalCard;