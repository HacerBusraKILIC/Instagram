import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import colors from '../res/colors';
import ReadMore from 'react-native-read-more-text';
import { width, height } from '../Dimensions'

const PostDescription = ({ post }) => {

    renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={styles.readMoreText} onPress={handlePress}>
                ...devamını oku
            </Text>
        );
    }

    renderRevealedFooter = () => {
        return; //daha az gster kullanilmayacak
    }

    return (
        <View style={styles.container}>
            <ReadMore
                numberOfLines={2}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}>
                <Text style={styles.username}>
                    {post.username}
                </Text>
                <Text style={styles.text}>
                    {' ' + post.text}
                </Text>
            </ReadMore>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: height*0.0,
        paddingStart: height*0.03,
        paddingEnd: height*0.03,
    },
    username: {
        color: colors.text,
        fontWeight: 'bold',
    },
    text: {
        color: colors.text,
    },
    readMoreText: {
        color: colors.textFaded2,
        marginTop: height*0.02,
    },
});

export default PostDescription;