import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';
import EmojiPicker from './EmojiPicker';

const ChatInput = () => {
  const [message, setMessage] = useState("");
  const sendMessage = (text)=>{
    setMessage(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicrophone}>
            <TouchableOpacity style={styles.emotionButton}>
                <MaterialIcons name="insert-emoticon" size={23} color="#9f9f9f" />
            </TouchableOpacity>
            <TextInput
                multiline
                placeholder='Type something...'
                style={styles.input}
                onChangeText={text=>sendMessage(text)}
            />
            <TouchableOpacity style={styles.rightIconButtonStyle}>
                <FontAwesome name="paperclip" size={23} color="#9f9f9f" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightIconButtonStyle}>
                <FontAwesome name="camera" size={23} color="#9f9f9f" />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton}>
            <FontAwesome name={message ? "send" : "microphone"} size={23} color="#9f9f9f" />
        </TouchableOpacity>
      </View>
      <EmojiPicker/>
    </View>
  )
}

export default ChatInput

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      backgroundColor:theme.colors.white,
    },
    innerContainer:{
      paddingHorizontal:10,
      marginHorizontal:10,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      paddingVertical:10
    },
    inputAndMicrophone:{
      flexDirection:'row',
      backgroundColor:theme.colors.gray,
      flex:3,
      marginRight:10,
      paddingVertical:Platform.OS === 'ios' ? 10:0,
      borderRadius:30,
      alignItems:'center',
      justifyContent:'space-around'
    },
    input:{
      backgroundColor:'transparent',
      paddingLeft:10,
      color:theme.colors.text,
      flex:3,
      maxHeight:45,
      alignSelf:'center',
    },
    rightIconButtonStyle:{
      justifyContent:'center',
      alignItems:'center',
      paddingRight:15,
      paddingLeft:10,
      borderLeftWidth:1,
      borderLeftColor:'#fff',
    },
    emotionButton:{
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:10,
      borderLeftColor:'#fff',
      borderLeftWidth:1,
    },
    sendButton:{
      backgroundColor:theme.colors.primary,
      borderRadius:50,
      height:40,
      width:40,
      alignItems:'center',
      justifyContent:'center'
    }
})