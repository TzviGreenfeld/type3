import { Button } from "react-native-paper";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { completeRequest } from "@/scripts/requestService";
import api from "@/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const router = useRouter();
const onReject = () => {
  console.log("Reject");
  router.replace("/button_page");
};
const onAccept = async (requestId: string) => {
  console.log("Accept");
  const response2 = await api.post(
    `/api/Request/${requestId}/complete`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      },
    }
  );
  console.log(response2);
  router.push({
    pathname: "/LinkingPage",
    params: {
      resultJson: JSON.stringify(response2.data),
      showType: "response",
    },
  });
};

const AcceptRejectButtons = ({ requestId }: { requestId: string }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        mode="contained"
        onPress={() => onAccept(requestId)}
        style={styles.acceptButton}
      >
        Accept
      </Button>
      <Button
        mode="contained"
        onPress={() => onReject()}
        style={styles.rejectButton}
      >
        Reject
      </Button>
    </View>
  );
};

export default AcceptRejectButtons;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  acceptButton: {
    width: "48%",
    borderRadius: 20,
    aspectRatio: 1,
    backgroundColor: "green",
    justifyContent: "center",
  },
  rejectButton: {
    width: "48%",
    borderRadius: 20,
    aspectRatio: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
});
