import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Car from "./components/Car";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Car
        name={"Model X"}
        tagLine={"Order online for"}
        tagLineCta={"Touchless Delivery"}
        image={require("./assets/images/ModelX.jpeg")}
      /> */}
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
