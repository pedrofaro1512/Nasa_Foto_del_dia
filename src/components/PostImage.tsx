import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PostImage as PostImageTypes } from '../types';

const PostImage: React.FC<PostImageTypes> = ({title, date}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.boton}>
            <Button title='View' />
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