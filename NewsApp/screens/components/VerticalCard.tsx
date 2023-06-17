import React from "react";
import { StyleSheet,View, FlatList, ScrollView } from "react-native";
import Title from "../components/Title";
import SmallCard from "./SmallCard";

const VerticalCard = ({ title, data }: any) => {
    return<>

    <Title size={20}>{title}</Title>
    <View>
        {data.map((item:any)=><SmallCard item={item} key={item.time}/>)}
    </View>
     </>
}

const styles = StyleSheet.create({
    container: {

    },
})

export default VerticalCard;