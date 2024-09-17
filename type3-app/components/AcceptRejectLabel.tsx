import { Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default function LinkNameLabel({ name }: { name: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.permanentText}>Insolin Needed!</Text>
            <Text style={styles.nameText}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        alignItems: 'center',
    },
    permanentText: {
        color: 'black',
        fontSize: 60,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nameText: {
        color: 'grey',
        fontSize: 50,
        fontWeight: 'bold',
    },
});
