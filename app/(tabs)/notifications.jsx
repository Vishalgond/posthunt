import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import NotificationItem from '../../components/NotificationItem';
import ScreenWrapper from '../../components/ScreenWrapper';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

const notifications = () => {
  const [notifications, setNotifications] = useState([{
    'id':1,
    'name':'vishal',
    'comments':'Hello, How are you',
    'time':'Jan 1'
  }]);
  const router = useRouter();
  useEffect(()=>{

  },[]);

  const getNotification = async()=>{

  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title="Notification"  showBackButton={true}/>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.listStyle}>
          {
            notifications.map(item=>{
              return(
                <NotificationItem
                  item={item}
                  key={item?.id}
                  router={router}
                />
              )
            })
          }
          {
            notifications.length==0 && (
              <Text style={styles.noData}>No notifications yet</Text>
            )
          }
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default notifications

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