import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ProfileDrawerItem from './ProfileDrawerItem'
import images from 'res/images'
import colors from 'res/colors'
import { width, height } from '../../../Dimensions'

const ProfileDrawer = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'space-between' }}>
            <View>
                <Text style={{ color: '#fff', padding: width*0.05, paddingTop: width*0.04, paddingBottom: width*0.045, fontSize: width*0.04, fontWeight: 'bold' }}>hacerbusrakilic</Text>
                <View style={{ backgroundColor: '#222', height: 0.5 }}></View>
                <ProfileDrawerItem icon={images.past} text='Arşiv' />
                <ProfileDrawerItem icon={images.qr_code} text='Ad Etiketi' />
                <ProfileDrawerItem icon={images.bookmark} text='Kaydedilenler' />
                <ProfileDrawerItem icon={images.friendship} text='Yakın Arkadaşlar' />
                <ProfileDrawerItem icon={images.add_user} text='Yeni İnsanlar Keşfet' />
                <ProfileDrawerItem icon={images.facebook} text="Facebook'u aç" />
            </View>
            <View>
                <View style={{ backgroundColor: '#222', height: 0.5 }}></View>
                <ProfileDrawerItem icon={images.settings} text="Ayarlar" isInBottom={true} />
            </View>
        </SafeAreaView>
    );
};

export default ProfileDrawer