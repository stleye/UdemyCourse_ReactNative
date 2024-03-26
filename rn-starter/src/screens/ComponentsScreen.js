import react from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const myName = "Sebastian";
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.subheaderStyle}>My name is {myName}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subheaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;