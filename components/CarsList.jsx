import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import cars from "./cars";
import Car from "./Car";

const CarsList = () => {
  return (
    <View>
      <FlatList
        data={cars}
        renderItem={({ item }) => <Car data={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height + 50}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
