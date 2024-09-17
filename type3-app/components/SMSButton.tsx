import { Button } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';
import * as Linking from 'expo-linking';

export default function SMSButton({ phoneNumber }: { phoneNumber: string }) {
    const handleSMS = () => {
        Linking.openURL(`sms:${phoneNumber}`);
    };

    return (
        <Button onPress={handleSMS} icon="message" mode="contained" style={styles.button} labelStyle={styles.buttonLabel}>
            SMS
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        width: Dimensions.get('window').width / 2,
        height: 50,
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})