import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
    return(
        <>
            <Stack.Screen options={{title:"Not Found"}}/>
            <View style={styles.container}>
                <Text style={styles.text}>Halaman yang anda cari tidak ada</Text>
                <Link href="/" style={styles.btn}>Kembali</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e"
    },
    text: {
        color: "white"
    },
    btn: {
        color: "gold",

    }
})