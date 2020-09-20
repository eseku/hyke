import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    src: require("../../assets/shoe1.png"),
    background: "#E2E8F0",
    foreground: "#000",
    name: "John Shoe",
    price: "$40.00",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    src: require("../../assets/shoe2.png"),
    background: "#EDF2F7",
    foreground: "#000",
    name: "John Shoe",
    price: "$40.00",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    src: require("../../assets/shoe3.png"),
    background: "#FEB2B2",
    foreground: "#000",
    name: "John Shoe",
    price: "$40.00",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    title: "Fourth Item",
    src: require("../../assets/shoe4.png"),
    background: "#9B2C2C",
    foreground: "#fff",
    name: "John Shoe",
    price: "$40.00",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d79",
    title: "Fifth Item",
    src: require("../../assets/shoe5.png"),
    background: "#2F855A",
    foreground: "#fff",
    name: "John Shoe",
    price: "$40.00",
  },
];

const Item = ({ title, src, background, foreground }) => (
  <View style={[styles.item, { backgroundColor: background }]}>
    <Text style={[{ color: foreground }, styles.title]}>{title}</Text>
    <Image source={src} style={styles.image} />
  </View>
);

const FlatListRenderer = () => {
  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    marginVertical: 15,
    marginHorizontal: 16,
    height: "95%",
    borderRadius: 30,
    width: 0.66 * Dimensions.get("window").width,
  },
  title: {
    fontSize: 25,
    padding: 10,
  },
  image: {
    height: 300,
    width: 0.66 * Dimensions.get("window").width,
    resizeMode: "contain",
    transform: [
      {
        rotate: "330deg",
      },
    ],
  },
});

export default FlatListRenderer;
