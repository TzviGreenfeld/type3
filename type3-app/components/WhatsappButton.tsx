import { Button } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';
import * as Linking from 'expo-linking';

export default function WhatsappButton({ phoneNumber }: { phoneNumber: string }) {
    const handleWhatsapp = () => {
        Linking.openURL(`http://api.whatsapp.com/send?phone=${phoneNumber}`);
    };

    return (
        <Button onPress={handleWhatsapp} icon="whatsapp" mode="contained" style={styles.button} labelStyle={styles.buttonLabel}>
            Whatsapp
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
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