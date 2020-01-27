import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import images from 'res/images';
import colors from 'res/colors';

const ProfilePicture = ({ item, onStoryPress, size }) => {

    const params = {
        size: size || 64,
        get borderSize() { return this.size * 6 / 100 }, //profil fotoğraflarının etrafında yer alan renkli halkanın boyutunu 3/4 pixel
        get innerBorderSize() { return this.size * 3 / 100 }, //innerBorderSize ise, halka ile profil fotoğrafı arasında kalan siyah boşluk
        get innerCircleSize() { return this.size - this.borderSize }, //profil fotoğrafının boyutu hesaplanır
        get profileImgBorderSize() { return item.hasStory ? this.innerBorderSize : 0 }, //profil fotoğrafı için bir border 
        get notificationSize() { return this.size / 4 }, //bildirimler ekranı için kullanılacak. Kırmızı renkte bir daire ve bu dairenin nerede duracağı ile ilgili hesaplamalar
        get notificationPositionTop() { return this.size * 1 / 12 },
        get notificationPositionStart() { return this.size * 8 / 12 },
        get insertStorySize() { return this.size / 3 }, //insertStory ile baslayan degerler ise mevcut kullanıcının bir story’si yoksa + işaretli mavi renkte daire eklemek için kullanılacak
        get insertStoryIconSize() { return this.size / 8 },
        get insertStoryBorderWidth() { return this.size / 20 },
        get insertStoryTop() { return this.size * 8 / 12 },
        get insertStoryStart() { return this.size * 8 / 12 },
    }

    return <TouchableOpacity style={styles.container} onPress={onStoryPress}>
        <LinearGradient
            colors={
                item.isStoryRead ? colors.storyRead
                    : item.hasStory ? colors.storyGradient
                        : [colors.background, colors.background]}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }} //A(0,0) to B(0,1). Meaning the position of A( the horizontal ) does not change
            useAngle={true}
            angle={45}
            style={styles(params).storyRing}
        >
            <Image
                source={{ uri: item.src }}
                style={styles(params).profileImg} />
        </LinearGradient>
        {!item.hasStory && item.isStoryInsertable &&
            <View style={styles(params).insertIconContainer}>
                <Image source={images.add_story}
                    style={styles(params).insertIcon}
                    resizeMode='contain' />
            </View>
        }
        {item.notificationCount &&
            <View style={styles(params).notificationContainer}>
                <Text style={styles(params).notificationText}>{item.notificationCount}</Text>
            </View>
        }
    </TouchableOpacity>
};

const styles = (params) => StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    storyRing: {
        height: params.size,
        width: params.size,
        borderRadius: params.size,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImg: {
        width: params.innerCircleSize,
        height: params.innerCircleSize,
        borderRadius: params.innerCircleSize,
        borderWidth: params.profileImgBorderSize,
        borderColor: colors.background,
    },
    insertIconContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: params.insertStoryTop,
        start: params.insertStoryStart,
        backgroundColor: colors.storyAdd,
        width: params.insertStorySize,
        height: params.insertStorySize,
        borderRadius: params.insertStorySize,
        borderWidth: params.insertStoryBorderWidth,
        borderColor: colors.background,
    },
    insertIcon: {
        width: params.insertStoryIconSize,
        height: params.insertStoryIconSize
    },
    notificationContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: params.notificationPositionTop,
        start: params.notificationPositionStart,
        backgroundColor: colors.storyNotification,
        width: params.notificationSize,
        height: params.notificationSize,
        borderRadius: params.notificationSize,
    },
    notificationText: {
        fontSize: params.notificationSize / 1.5,
        color: colors.text,
        fontWeight: 'bold'
    }
});

export default ProfilePicture;