import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../components/Loading';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Index() {
  const router = useRouter()
  useEffect(()=>{
    const timerId = setTimeout(() => {
        router.push('/welcome')
    }, 3000);
    return () => {
      clearTimeout(timerId);
    }
  },[])
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Loading title="" showBackButton={true}/>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
