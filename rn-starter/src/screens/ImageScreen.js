import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from "../components/ImageDetails";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg') } score="7"/>
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score="8"/>
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="9"/>
            <ImageDetail title="River" imageSource={require('../../assets/river.png')} score="10"/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageScreen;