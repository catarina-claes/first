import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
    label: string
    theme?: "primary"
    onpress?: () => void
}

export default function Button({label, theme, onpress}:Props) {
    if (theme === "primary") {
        return(
            <View style={[styles.container,
                {borderWidth:4, borderColor:"gold", borderRadius:18}
            ]}>
                <Pressable onPress={onpress} style={[styles.press, {backgroundColor:"#fff"}]}>
                    <FontAwesome name="picture-o" color="#25292e" size={18} style={styles.buttonIcon}/>
                    <Text style={[styles.text, {color: '#25292e'}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Pressable onPress={onpress} style={styles.press}>
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        width:320,
        height:68,
        marginHorizontal:20,
        padding:3
    },
    press:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        borderRadius:10,
        flexDirection:"row"
    },
    buttonIcon:{
        paddingRight:8
    },
    text:{
        fontSize:16,
        color:"white"
    }
})