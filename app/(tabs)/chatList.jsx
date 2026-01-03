import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Chat from '../../components/Chat';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

const ChatList = () => {
  const [person, setPerson] = useState([1,2]);
  const router = useRouter();
  useEffect(()=>{

  },[]);

  const getNotification = async()=>{

  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title="Chats"  showBackButton={true}/>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listStyle}>
          {
            [1,2,3,4,5,6].map((index,item)=>{
              return(
                <Chat
                  router={router}
                  key={index}
                />
              )
            })
          }
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default ChatList

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:wp(4),
  },
  listStyle:{
    paddingVertical:20,
    gap:10
  },
  noData:{
    fontSize:hp(1.8),
    fontWeight:theme.fonts.medium,
    color:theme.colors.text,
    textAlign:'center'
  }
})