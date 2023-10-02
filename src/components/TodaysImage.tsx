import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { PostImage, RootStackParams } from "../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>

const TodaysImage: React.FC<PostImage> = ({ date, title, url, explanation }) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation});
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.boton}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    borderRadius: 15,
    padding: 16,
    marginHorizontal: 10
  },
  image: {
    width: "100%",
    height: 210,
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 15
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold"
  },
  date: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  boton: {
    alignItems: "flex-end",
  }
});

export default TodaysImage;
