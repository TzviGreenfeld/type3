import { SafeAreaView } from "react-native-safe-area-context";
import { CallButton, WhatsappButton, SMSButton } from "@/components/ContactButtons";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const LinkingPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <CallButton phoneNumber="1234567890" />
            </View>
            <View style={styles.buttonContainer}>
                <WhatsappButton phoneNumber="1234567890" />
            </View>
            <View style={styles.buttonContainer}>
                <SMSButton phoneNumber="1234567890" />
            </View>
        </SafeAreaView>
    );
}

export default LinkingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 30,
    },
});
