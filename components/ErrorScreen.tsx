import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ErrorScreen = ({ message }: { message: string }) => {
  return (
    <View style={styles.errorContainer}>
      <Image
        source={require("../assets/images/sahidlakhhan.png")}
        style={styles.errorImage}
      />
      <Text style={styles.errorTitle}>Oops!</Text>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  errorImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e74c3c",
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: "#34495e",
    textAlign: "center",
    marginBottom: 20,
  },
});
