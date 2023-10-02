import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PostImage as PostImageTypes, RootStackParams } from '../types';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>

const PostImage: React.FC<PostImageTypes> = ({title, date, url, explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationProps>();
    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation});
      };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.boton}>
            <Button title='View' onPress={handleViewPress}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18,39,113,255)',
        borderRadius: 10,
        marginBottom: 12,
        padding: 16
    },
    title: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 12
    },
    date: {
        color: "#FFF",
    },
    boton: {
        alignItems: "flex-end",
    },
});

export default PostImage;