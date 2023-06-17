import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const Header = ()=>{
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Đọc báo 24h</Text>
            </View>
            <View>
                <Image source={require('../../assets/baomoi.png')} style={{width:60,height:60,marginRight:20,borderRadius:10}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
    },
    title:{
        color:'red',
        fontWeight:'700',
        fontSize:24,
        textTransform:'uppercase'
    }
})

export default Header;