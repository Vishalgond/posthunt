import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function Login() {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <Button title='welcome' onPress={()=>router.push('welcome')}/>
      <Button title='Tab' onPress={()=>router.push('(tabs)/newPost')}/>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.replace('/(tabs)/home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
            <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.replace('/(main)/addressExtractor')}>
        <Text style={styles.buttonText}>Ai address fixer</Text>
      </TouchableOpacity>
    </ScreenWrapper>
    
  );
}

const styles = StyleSheet.create({});
