import { SafeAreaView } from "react-native-safe-area-context";
import { CallButton, WhatsappButton, SMSButton } from "@/components/ContactButtons";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import SmallMapOverview from "@/components/SmallMapOverview";
import LinkNameLabel from "@/components/LinkNameLabel";

const LinkingPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinkNameLabel name="Israel Israeli" />
            <SmallMapOverview askerPoint={{ latitude: 32.0853, longitude: 34.7818 }} donorPoint={{ latitude: 31.0853, longitude: 34.7818 }} />
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
