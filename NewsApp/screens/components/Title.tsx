import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = ({ children, numberOfLines = 2, size = 18 }: any) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={numberOfLines} style={{ fontWeight: 'bold', fontSize: size }}>
                {children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom:10
    },
})

export default Title;