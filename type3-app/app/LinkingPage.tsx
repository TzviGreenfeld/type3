import { SafeAreaView } from "react-native-safe-area-context";
import { CallButton, WhatsappButton, SMSButton, OpenMapButton } from "@/components/ContactButtons";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import SmallMapOverview from "@/components/SmallMapOverview";
import LinkNameLabel from "@/components/LinkNameLabel";

import React, { useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

type LinkingPageRouteProp = RouteProp<{ params: { resultJson: string } }, 'params'>;

const LinkingPage = () => {
    const route = useRoute<LinkingPageRouteProp>();
    const result = JSON.parse(route.params.resultJson);
    const name = result.responseUser.firstName + " " + result.responseUser.lastName;
    console.log(result)
    return (
        <SafeAreaView style={styles.container}>
            <LinkNameLabel name={name} />
            <View style={styles.mapContainer}>
                <SmallMapOverview selfPoint={result.requestUser.location} otherPoint={result.responseUser.location} />
            </View>
            <View style={styles.buttonContainer}>
                <OpenMapButton start={result.requestUser.location} end={result.responseUser.location} />
            </View>
            <View style={styles.buttonContainer}>
                <CallButton phoneNumber={result.responseUser.phoneNumber} />
            </View>
            <View style={styles.buttonContainer}>
                <WhatsappButton phoneNumber={result.responseUser.phoneNumber} />
            </View>
            <View style={styles.buttonContainer}>
                <SMSButton phoneNumber={result.responseUser.phoneNumber} />
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
