import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import WebView from "react-native-webview";
import * as SecureStore from "expo-secure-store";
import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import { Camera } from "expo-camera";

import { supabase } from "@/supabaseClient";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ErrorScreen from "@/components/ErrorScreen";

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [loading, setLoading] = useState(true);
  const [uri, setUri] = useState("");
  const [error, setError] = useState("");
  const [locationPermission, setLocationPermission] = useState("");
  const [cameraPermission, setCameraPermission] = useState("");
  const [notificationPermission, setNotificationPermission] = useState("");

  useEffect(() => {
    const initialize = async () => {
      await requestPermissions();
      await fetchUri();
    };
    initialize();
  }, []);

  const fetchUri = async () => {
    try {
      const { data, error } = await supabase
        .from("kishanchautari")
        .select("url")
        .limit(1);

      console.log("data", data);

      if (error) throw error;

      if (data && data.length > 0) {
        const webviewUri = `${data[0].url}?cameraPermission=${cameraPermission}&locationPermission=${locationPermission}&notificationPermission=${notificationPermission}`;
        setUri(webviewUri);
        await SecureStore.setItemAsync("webview_uri", webviewUri);
      } else {
        setError("No WebView URI found in settings.");
      }
    } catch (error) {
      console.error("Error fetching URI:", error);
      setError("Failed to load content. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const requestPermissions = async () => {
    try {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus);

      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      setLocationPermission(locationStatus);

      const { status: notificationStatus } =
        await Notifications.requestPermissionsAsync();
      setNotificationPermission(notificationStatus);
    } catch (error) {
      console.error("Error requesting permissions:", error);
      setError("Failed to request permissions. Please try again later.");
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen message={error} />;
  }

  return (
    <View style={styles.container}>
      {uri ? (
        <WebView
          style={styles.webview}
          source={{ uri }}
          onError={() =>
            setError(
              "Failed to load content. Please check your internet connection."
            )
          }
        />
      ) : (
        <Text>No content available.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
