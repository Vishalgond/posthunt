import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddressExtractor() {
    const [inputText, setInputText] = useState("");
    const [result, setResult] = useState(null); 
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleExtract = async () => {
        if (!inputText.trim()) return;
        setLoading(true);

        try {
      
            const response = await axios.post('http://10.137.207.250/ADRESS_API/api.php', {
                text_input: inputText
            });
            

            setResult({ address: response.data }); 
        } catch (error) {
            alert("Network Error: Check IP or Server");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={{marginTop: 40}}>
                <Text style={{color: 'blue'}}>← Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>AI Address Fixer</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Paste messy address text here..."
                multiline
                value={inputText}
                onChangeText={setInputText}
            />

            <TouchableOpacity style={styles.button} onPress={handleExtract}>
                {loading ? <ActivityIndicator color="white" /> : <Text style={{color: 'white'}}>Extract Now</Text>}
            </TouchableOpacity>

            {result && result.address && result.address.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={{fontWeight: 'bold', color: 'green'}}>Address {index + 1}</Text>
                    <Text>Country: {item.Country}</Text>
                    <Text>Street: {item.street}</Text>
                    <Text>City: {item.city}</Text>
                    <Text>District: {item.district}</Text>
                    <Text>State: {item.state}</Text>
                    <Text>Zip: {item.zip_code}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: 'white' },
    title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 15, minHeight: 120, textAlignVertical: 'top' },
    button: { backgroundColor: 'black', padding: 15, borderRadius: 8, marginTop: 15, alignItems: 'center' },
    card: { 
        marginTop: 15, 
        padding: 15, 
        backgroundColor: '#f9f9f9', 
        borderRadius: 8, 
        borderWidth: 1, 
        borderColor: '#eee' 
    }
});