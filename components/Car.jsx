import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import StyledButton from "./StyledButton";

const Car = (props) => {
  const { name, tagline, taglineCTA, image } = props.data;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.imageBackground} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.tagLineCta}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom order was clicked");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing inventory was clicked");
          }}
        />
      </View>
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({
  carContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 50,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  tagLineCta: {
    textDecorationLine: "underline",
  },
});
