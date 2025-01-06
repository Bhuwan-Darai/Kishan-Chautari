import { Image, StyleSheet, View } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <Image
        source={require("../assets/images/sahidlakhhan.png")}
        style={styles.loadingImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingImage: {
    width: 100,
    height: 100,
  },
  loadingGif: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
