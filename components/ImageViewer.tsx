import { Text, View, StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type props = {
    imageSource: ImageSource;
    selectedImage?: string;
}

export default function ImageViewer({imageSource, selectedImage}: props){
    return(
        <Image source={selectedImage? {uri: selectedImage}: imageSource} style={styles.img}/>
    )
}

const styles = StyleSheet.create({
    img: {
        width:320,
        height:440,
        borderRadius:18
    }
})
