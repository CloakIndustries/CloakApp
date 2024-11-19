import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtext = ({ subtext }) => {
  return (
    <View>
      <Text style={styles.subtitle}>{subtext}</Text>
    </View>
  );
};

export default Subtext;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 30,
  },
});
