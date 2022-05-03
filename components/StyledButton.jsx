import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const StyledButton = (props) => {
  const type = props.type;
  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffff" : "#171a20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={props.onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{props.content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
