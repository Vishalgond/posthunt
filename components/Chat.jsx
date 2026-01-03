// import moment from 'moment'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'
import Avatar from './Avatar'

const Chat = ({router}) => {

  const handleClick =()=>{
    router.push('/chatScreen');
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Avatar
        size={hp(5)}
      />
      <View style={styles.nameTitle}>
          <Text style={styles.text}>
            Vishal Gond
          </Text>
          <Text style={[styles.text,{color:theme.colors.textDark}]}>
            Hello
          </Text>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={[styles.text,{color:theme.colors.textLight}]}>
            Jan 1
        </Text>
        <Text style={styles.msgnumber}>1</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:12,
    backgroundColor:'white',
    borderWidth:0.5,
    borderColor:theme.colors.darkLight,
    padding:15,
    borderRadius:theme.radius.xxl,
    borderCurve:'continuous'
  },
  nameTitle:{
    flex:1,
    gap:2
  },
  text:{
    fontSize:hp(1.6),
    fontWeight:theme.fonts.medium,
    color:theme.colors.text,
  },
  msgnumber:{
    fontSize:hp(1.3),
    color:theme.colors.textLight,
    textAlign:'center',
    backgroundColor:theme.colors.primary,
    borderRadius:theme.radius.xxl,
    width:14,
  }
})