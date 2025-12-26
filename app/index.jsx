import { useRouter } from 'expo-router';
import { Button, StyleSheet } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Login() {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <Button title='welcome' onPress={()=>router.push('welcome')}/>
      <Button title='Tab' onPress={()=>router.push('(tabs)/newPost')}/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
