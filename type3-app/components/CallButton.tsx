import * as Linking from 'expo-linking';
import { Button } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';

export default function CallButton({ phoneNumber }: { phoneNumber: string }) {
    const handleCall = () => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <Button 
        onPress={handleCall} 
        icon="phone"
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonLabel}
        >
            Call
        </Button>
    );
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        width: Dimensions.get('window').width / 2,
        height: 50,
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },
});
