import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Subtitle = ({ children, numberOfLines = 2, size = 15 }: any) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={numberOfLines} 
                style={{fontSize: size }}>
                {children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
})

export default Subtitle;