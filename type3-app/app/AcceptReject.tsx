import AcceptRejectButtons from "@/components/AcceptRejectButtons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import SmallMapOverview from "@/components/SmallMapOverview";
import AcceptRejectLabel from "@/components/AcceptRejectLabel";
import { View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { getUserById, getRequestingUserByRequestId } from "@/userService";
import { User } from "@/constants/User";
import { useEffect, useState } from "react";

type LinkingPageRouteProp = RouteProp<
  { params: { requestId: string } },
  "params"
>;

const AcceptReject = () => {
  const [requestingUserData, setRequestingUserData] = useState<User>(
    new User("", "", 0, "", 0, 0, "", "")
  );

  const route = useRoute<LinkingPageRouteProp>();
  const requestId = route.params.requestId;
  console.log("requestId from AcceptReject", requestId);

  useEffect(() => {
    getRequestingUserByRequestId(requestId).then((user) =>
      setRequestingUserData(user || new User("", "", 0, "", 0, 0, "", ""))
    );
  }, [requestId]);

  return (
    <SafeAreaView style={styles.container}>
      <AcceptRejectLabel name={requestingUserData.getFullName()} />
      <View style={styles.innerContainer}>
        <SmallMapOverview
          selfPoint={{ latitude: 32.1624, longitude: 34.8447 }}
          otherPoint={{
            latitude: requestingUserData?.getLocation().lat,
            longitude: requestingUserData?.getLocation().long,
          }}
        />
        <AcceptRejectButtons requestId={requestId} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default AcceptReject;
