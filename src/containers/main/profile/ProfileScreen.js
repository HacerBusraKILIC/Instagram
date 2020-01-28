import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import images from 'res/images'
import colors from 'res/colors'
import { width, height } from '../../../Dimensions'

const ProfileScreen = () => {

    const profileData = {
        name: 'Hacer Büşra KILIÇ',
        url: 'https://github.com/HacerBusraKILIC',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit justo, sodales sit amet pulvinar quis, egestas eu justo. Phasellus elit volutpat..',
        statistics: {
            posts: 348,
            followers: 187,
            following: 431
        }
    };
    const dataSource = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' }, { key: '13' },];
    
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, aspectRatio: 1 }}>
                <Image style={{ flex: 1 }} resizeMode='cover' source={{ uri: 'https://picsum.photos/512' }}></Image>
            </TouchableOpacity>
        );
    }

    renderProfileHeader = () => {
        return (
            <View style={styles.bioContainer}>
                <View style={styles.profileImageSection}>
                    <Image source={images.profile} style={styles.profileImage} />
                    <View style={{ alignItems: 'center' }} >
                        <Text style={styles.statisticsValue}>{profileData.statistics.posts}</Text>
                        <Text style={styles.statisticsTitle}>Gönderiler</Text>
                    </View>
                    <View style={{ alignItems: 'center' }} >
                        <Text style={styles.statisticsValue}>{profileData.statistics.followers}</Text>
                        <Text style={styles.statisticsTitle}>Takipçi</Text>
                    </View>
                    <View style={{ alignItems: 'center' }} >
                        <Text style={styles.statisticsValue}>{profileData.statistics.following}</Text>
                        <Text style={styles.statisticsTitle}>Takip</Text>
                    </View>
                </View>
                <Text style={styles.name}>{profileData.name}</Text>
                <Text style={styles.bio}>{profileData.bio}</Text>
                <Text style={styles.link} onPress={() => Linking.openURL(profileData.url)}>
                    {profileData.url}
                </Text>
                <TouchableOpacity style={styles.editProfileButton}>
                    <Text style={styles.editProfileText}>Profili Düzenle</Text>
                </TouchableOpacity>

            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={dataSource}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                numColumns={3}
                ListHeaderComponent={renderProfileHeader}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: colors.tabBackground, flex: 1, },
    bioContainer: { padding: 20, },
    profileImageSection: { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', },
    profileImage: { width: width*0.2, height: height*0.12, borderRadius: width*0.2, },
    statisticsValue: { color: colors.text, fontSize: 18, fontWeight: 'bold', },
    statisticsTitle: { color: colors.text, fontSize: 15, fontWeight: 'normal' },
    name: { color: colors.text, marginTop: height*0.03 },
    bio: { color: colors.text, marginTop: 0 },
    link: { color: colors.link, },
    editProfileButton: { marginTop: height*0.03, backgroundColor: colors.background, borderColor: colors.seperator, borderRadius: 3, borderWidth: 1, padding: height*0.01 },
    editProfileText: { color: colors.text, textAlign: 'center', fontWeight: 'normal' },
});

export default ProfileScreen;