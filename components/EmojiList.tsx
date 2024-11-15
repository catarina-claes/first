import { FlatList, Pressable, Platform, StyleSheet } from "react-native";
import { useState } from "react";
import { Image, type ImageSource } from "expo-image";

type Props={
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
}

export default function EmojiList({onSelect, onCloseModal}: Props){
    const [emoji] = useState<ImageSource[]>([
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    ])
    return(
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={Platform.OS ==='web'}
        data={emoji}
        contentContainerStyle={styles.container}
        renderItem={({item, index})=>(
            <Pressable onPress={()=>{
                onSelect(item);
                onCloseModal();
            }}>
                <Image source={item} key={index} style={styles.img}/>
            </Pressable>
        )}
        >

        </FlatList>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:20,
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    img:{
        width:100,
        height:100,
        marginRight:20
    }
})