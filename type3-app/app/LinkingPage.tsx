import { SafeAreaView } from "react-native-safe-area-context";
import { CallButton, WhatsappButton, SMSButton, OpenMapButton } from "@/components/ContactButtons";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import SmallMapOverview from "@/components/SmallMapOverview";
import LinkNameLabel from "@/components/LinkNameLabel";

const tempPhone="+972509952527";
const LinkingPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinkNameLabel name="Israel Israeli" />
            <View style={styles.mapContainer}>
                <SmallMapOverview selfPoint={{ latitude: 32.0853, longitude: 34.7818 }} otherPoint={{ latitude: 31.0853, longitude: 34.7818 }} />
            </View>
            <View style={styles.buttonContainer}>
                <OpenMapButton start={{ latitude: 32.0853, longitude: 34.7818 }} end={{ latitude: 31.0853, longitude: 34.7818 }} />
            </View>
            <View style={styles.buttonContainer}>
                <CallButton phoneNumber={tempPhone} />
            </View>
            <View style={styles.buttonContainer}>
                <WhatsappButton phoneNumber={tempPhone} />
            </View>
            <View style={styles.buttonContainer}>
                <SMSButton phoneNumber={tempPhone} />
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
        marginTop: 10,
        marginBottom: 10,
    },
    mapContainer: {
        marginTop: 30,
        marginBottom: 30,
    },
});
