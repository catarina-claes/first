import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    onPress: () => void;
}

export default function CircleButton({onPress}: Props) {
    return(
        <View style={styles.container}>
            <Pressable style={styles.press} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e"/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 84,
        height: 84,
        marginHorizontal: 60,
        padding: 3,
        borderWidth: 4,
        borderRadius: 42,
        borderColor: "gold"
    },
    press:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: "#fff"
    }
})