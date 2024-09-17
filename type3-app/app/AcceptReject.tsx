import AcceptRejectButtons from "@/components/AcceptRejectButtons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import SmallMapOverview from "@/components/SmallMapOverview";
import AcceptRejectLabel from "@/components/AcceptRejectLabel";
import { View } from "react-native";
const AcceptReject = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AcceptRejectLabel name="Tzvi Greenfeld" />
            <View style={styles.innerContainer}>
                <SmallMapOverview selfPoint={{ latitude: 32.0853, longitude: 34.7818 }} otherPoint={{ latitude: 31.0853, longitude: 34.7818 }} />
                <AcceptRejectButtons />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});

export default AcceptReject;