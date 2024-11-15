import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function IconButton({icon, label, onPress}: Props){
    return (
        <Pressable style={styles.press} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff"/>
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    press: {
        justifyContent:"center",
        alignItems:"center"
    },
    text: {
        marginTop:12,
        color:"#fff"
    }

})