import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import fetch from "../utils/fetch";
import TodaysImage from "../components/TodaysImage";
import { PostImage } from "../types";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState < PostImage > {};
  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todaysImageResponse = await fetch();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };
    loadTodayImage().catch(null);
  }, []);

  console.log(todaysImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default Home;
