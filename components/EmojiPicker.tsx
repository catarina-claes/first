import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import { PropsWithChildren } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: ()=> void
}>

export default function EmojiPicker({children, isVisible, onClose}: Props){
    return(
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" size={22} color="#fff"/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"25%",
        width:"100%",
        backgroundColor:"#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0
    },
    title:{
        alignItems:"center",
        justifyContent:"space-between",
        height:"16%",
        backgroundColor:"#464C55",
        flexDirection:"row",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        paddingHorizontal:20

    },
    text:{
        color:"#fff",
        fontSize:16
    }
})