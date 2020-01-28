
import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { width, height } from '../../../Dimensions'

const ProfileDrawerItem = (props) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row', marginTop: height*0.03, marginStart: width*0.05, alignItems: 'center',
            marginBottom: props.isInBottom === undefined || props.isInBottom === false ? 0 : height*0.03
        }}>
            <Image source={props.icon} style={{ width: width*0.06, height: width*0.06 }} resizeMode='contain' />
            <Text style={{ color: '#fff', marginStart: width*0.045, fontSize: width*0.035 }}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default ProfileDrawerItem