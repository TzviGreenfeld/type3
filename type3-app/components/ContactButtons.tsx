import { Button } from 'react-native-paper';
import * as Linking from 'expo-linking';
import { StyleSheet, Dimensions } from 'react-native';

export function CallButton({ phoneNumber }: { phoneNumber: string }) {
    const handleCall = () => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <Button 
        onPress={handleCall} 
        icon="phone"
        mode="contained"
        style={styles.callButton}
        labelStyle={styles.buttonLabel}
        >
            Call
        </Button>
    );
}

export function WhatsappButton({ phoneNumber }: { phoneNumber: string }) {
    const handleWhatsapp = () => {
        Linking.openURL(`http://api.whatsapp.com/send?phone=${phoneNumber}`);
    };

    return (
        <Button onPress={handleWhatsapp} icon="whatsapp" mode="contained" style={styles.whatsappButton} labelStyle={styles.buttonLabel}>
            Whatsapp
        </Button>
    );
}

export function SMSButton({ phoneNumber }: { phoneNumber: string }) {
    const handleSMS = () => {
        Linking.openURL(`sms:${phoneNumber}`);
    };

    return (
        <Button onPress={handleSMS} icon="message" mode="contained" style={styles.smsButton} labelStyle={styles.buttonLabel}>
            SMS
        </Button>
    );
}

const styles = StyleSheet.create({
    callButton: {
        backgroundColor: 'black',
        width: Dimensions.get('window').width / 2,
        height: 50,
    },
    whatsappButton: {
        backgroundColor: 'green',
        width: Dimensions.get('window').width / 2,
        height: 50,
    },
    smsButton: {
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
});
