import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import colors from 'res/colors'
import images from 'res/images'
import prettyTime from '../../../../utils/preetyTime'
import ProfilePicture from 'components/ProfilePicture'
import { width, height } from '../../../../Dimensions'

const MessageListItem = (props) => {
    const prettyTimeTemplates = {
        short: {
          prefix: "",
          suffix: "",
          seconds: "şimdi",
          minute: "1d",
          minutes: "%dd",
          hour: "1s",
          hours: "%ds",
          day: "1g",
          days: "%dg",
          month: "1a",
          months: "%da",
          year: "1y",
          years: "%dy"
        }
      };

    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log("test")}>
            <ProfilePicture item={props.item} />
            <View style={styles.textContainer}>
                <Text style={stylesParams(props.item).username}>{props.item.key}</Text>
                <View style={styles.messageContainer} >
                    <Text style={stylesParams(props.item).message} numberOfLines={1}>
                        {props.item.isRead ? props.item.lastMsg : "Bir mesaj gönderdi"}
                    </Text>
                    <Text style={stylesParams(props.item).message}> · </Text>
                    <Text style={stylesParams(props.item).message}>{prettyTime(prettyTimeTemplates.short, props.item.sendTime)}</Text>
                </View>
            </View>
            {!props.item.isRead && <View style={styles.unreadIndicator} />}
            <TouchableOpacity>
                <Image source={props.item.isRead ? images.photo_camera_gray : images.photo_camera} style={styles.cameraImage} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height*0.03,
        justifyContent: 'space-between'
    },
    textContainer: {
        flex: 1,
        marginStart: width*0.05
    },
    messageContainer: {
        flexDirection: 'row',
        marginRight: width*0.17,
        marginTop: height*0.002
    },
    unreadIndicator: {
        backgroundColor: colors.storyAdd,
        width: width*0.02,
        height: height*0.01,
        borderRadius: width*0.02,
        marginRight: width*0.03,
    },
    cameraImage: {
        width: width*0.065,
        height: height*0.04,
    },
});

const stylesParams = (params) => StyleSheet.create({
    username: {
        color: colors.text,
        fontWeight: params.isRead ? 'normal' : 'bold'
    },
    message: {
        color: params.isRead ? colors.textFaded1 : colors.text,
        fontWeight: params.isRead ? 'normal' : 'bold',
    },
});

export default MessageListItem;