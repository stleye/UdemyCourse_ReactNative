import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = (props) => {
    console.log(props);
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}, score = {props.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageDetail;