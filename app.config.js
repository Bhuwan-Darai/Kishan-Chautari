import "dotenv/config";

export default {
  expo: {
    name: "Kishan-Chautari",
    slug: "kishan-chautari",
    version: "2.0.0",
    orientation: "portrait",
    icon: "./assets/images/sahidlakhhan-foreground.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/sahidlakhhan-foreground.png",
      resizeMode: "contain",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.bhuwan_darai.kishanchautari",
      infoPlist: {
        NSCameraUsageDescription: "This app uses the camera to scan QR codes.",
        NSLocationWhenInUseUsageDescription:
          "This app uses your location to show nearby places.",
        NSMicrophoneUsageDescription:
          "This app needs access to your microphone for audio recording.",
        UIBackgroundModes: ["fetch", "remote-notification"],
        NSUserTrackingUsageDescription:
          "This app uses tracking to improve your experience.",
        NSLocationAlwaysAndWhenInUseUsageDescription:
          "Allow Kishan Chautari to use your location.",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/sahidlakhhan-foreground.png",
        backgroundColor: "#ffffff",
      },
      package: "com.bhuwan_darai.kishanchautari",
      permissions: [
        "CAMERA",
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION",
        "RECORD_AUDIO",
        "NOTIFICATIONS",
      ],
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow Kishan Chautari to use your location.",
          isAndroidBackgroundLocationEnabled:
            "Allow Kishan Chautari to use your location.",
        },
      ],
      [
        "expo-camera",
        {
          cameraPermission: "Allow Kishan Chautari to access your camera",
          microphonePermission:
            "Allow Kishan Chautari to access your microphone",
          recordAudioAndroid: true,
        },
      ],
      [
        "expo-notifications",
        {
          notificationPermission: {
            ios: {
              description: "Allow Kishan Chautari to send you notifications",
              mode: "always",
            },
            android: {
              description: "Allow Kishan Chautari to send you notifications",
              mode: "default",
            },
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "224b1fdc-e49f-41af-84c6-59c73b65b1b6",
      },
      supabaseUrl: process.env.supabaseUrl,
      supabaseAnonKey: process.env.supabaseAnonKey,
    },
    owner: "bhuwan_darai",
  },
};
