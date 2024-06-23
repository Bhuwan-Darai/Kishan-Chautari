import { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import WebView from "react-native-webview";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <Image
            source={require("../assets/images/inprologo.jpg")}
            style={styles.loadingImage}
          />
          <Image
            source={require("../assets/images/loading.gif")}
            style={styles.loadingGif}
          />
        </View>
      )}
      <WebView
        style={styles.webview}
        source={{ uri: "https://kishanchautari.vercel.app/" }}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  webview: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
