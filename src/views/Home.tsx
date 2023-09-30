import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import fetch from "../utils/fetch";
import TodaysImage from "../components/TodaysImage";
import LastFiveDaysImages from "../components/LastFiveDaysImages";
import { PostImage } from "../types";
import { format, sub } from "date-fns";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);


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

    const loadLast5DaysImage = async () => {
      try {
        const date =new Date();
        const todaysDtae = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');

        const lastFiveDaysImageResponse = await fetch(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDtae}`)
        setLastFiveDaysImages(lastFiveDaysImageResponse);
        
      } catch (error) {
        console.error(error);
      }
    };

    loadTodayImage().catch(null);
    loadLast5DaysImage().catch(null);
  }, []); 
  
  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default Home;
