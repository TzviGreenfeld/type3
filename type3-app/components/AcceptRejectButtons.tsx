import { Button } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const AcceptRejectButtons = () => {
    return (
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={() => {}} style={styles.acceptButton}>Accept</Button>
                <Button mode="contained" onPress={() => {}} style={styles.rejectButton}>Reject</Button>
            </View>
    );
}

export default AcceptRejectButtons;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
    },
    acceptButton: {
        width: '48%',
        borderRadius: 20,
        aspectRatio: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    rejectButton: {
        width: '48%',
        borderRadius: 20,
        aspectRatio: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
    },

});