import colors from '../res/colors';
import { width, height } from '../Dimensions'

const palette = {
    header: {
        headerStyle: {
            backgroundColor: colors.tabBackground,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
            fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        },
        image: { 
            height: height*0.06, 
            width: width*0.06, 
            resizeMode: 'contain'
        },
        headerLeftContainer: {
            marginLeft: width*0.04, 
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center',
        },
        headerRightContainer: {
            marginRight:  width*0.04, 
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
};

export default palette;