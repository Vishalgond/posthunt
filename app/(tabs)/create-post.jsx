import { useLocalSearchParams, useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';

export default function CreatePost() {
  const params = useLocalSearchParams(); 
  const router = useRouter();
  
  const [text, setText] = useState("");
  const [hasFilled , setHasFilled] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (params && params.edit === 'true' &&  !hasFilled) {
      setText(params.text || "");
      if (params.postImage) setFile(params.postImage);
      setHasFilled(true);
    }
  }, [params]);

  const handlePost = () => {
    const actionType = params.edit === 'true' ? "Update" : "Upload";
    

    Alert.alert("Post", `${actionType} successful!`); 
    
    router.back();
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Header title="Edit Post" showBackButton={true}/>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="What's on your mind?"
            multiline
            style={styles.input}
          />

          {file && (
            <View style={styles.imageWrapper}>
              <Image source={{ uri: file }} style={styles.previewImage} />
              <TouchableOpacity style={styles.closeIcon} onPress={() => setFile(null)}>
                <X size={20} color="white" />
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Image", "Pick Image Clicked")}>
            <Text style={styles.buttonText}>Pick Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.uploadBtn]} onPress={handlePost}>
            <Text style={styles.buttonText}>
              {params.edit === 'true' ? "Update Post" : "Upload Post"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 15, paddingVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#ddd' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  input: { fontSize: 18, paddingVertical: 20, textAlignVertical: 'top', minHeight: 100 },
  imageWrapper: { width: '100%', height: 300, borderRadius: 12, overflow: 'hidden', marginBottom: 20, position: 'relative' },
  previewImage: { width: '100%', height: '100%' },
  closeIcon: { position: 'absolute', top: 10, right: 10, backgroundColor: 'rgba(0,0,0,0.5)', padding: 5, borderRadius: 20 },
  button: { backgroundColor: '#000', padding: 15, borderRadius: 8, marginBottom: 15 },
  uploadBtn: { backgroundColor: '#00C26F' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});