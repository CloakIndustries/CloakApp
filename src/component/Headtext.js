import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HeadText = ({ headtext }) => {
  return (
    <View>
      <Text style={styles.title}>{headtext}</Text>
    </View>
  );
};

export default HeadText;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
