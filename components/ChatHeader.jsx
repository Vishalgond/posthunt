import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'
import Avatar from './Avatar'
import BackButton from './BackButton'

const ChatHeader = ({username,bio,picture,onlineStatus,onPress}) => {
  return (
    <View style={styles.container}>
      <BackButton router={router}/>
      <View style={styles.profileOptions}>
        <TouchableOpacity style={styles.profile}>
            <Avatar size={hp(4.5)} rounded={theme.radius.md} />
            <View style={styles.usernameAndOnlineStatus}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.onlineStatus}>{onlineStatus}</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.options}>
            <TouchableOpacity style={{paddingHorizontal:5}}>
                <MaterialIcons name="phone" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal:20}}>
                <FontAwesome name="ellipsis-v" size={30} color="white" />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:theme.colors.primary,
        paddingTop:30,
        paddingBottom:20,
    },
    profileOptions:{
        flexDirection:'row',
        justifyContent:'space-around',
        flex:1,
        paddingHorizontal:10,
        alignItems:'center',
    },
    profile:{
        flexDirection:'row',
        flex:4,
    },
    image:{
        height:65,
        width:65,
        borderRadius:32.5
    },
    usernameAndOnlineStatus:{
        flexDirection:'column',
        justifyContent:'center',
        paddingHorizontal:10
    },
    username:{
        color:theme.colors.textLight,
        fontSize:18,
        fontWeight:'bold'
    },
    onlineStatus:{
        color:theme.colors.textLight,
    },
    options:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})