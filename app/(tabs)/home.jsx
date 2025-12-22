import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const posts = [
  { id: '1', user: 'Rahul', image: 'https://picsum.photos/400' },
];

export default function Home() {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.username}>{item.user}</Text>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  username: {
    fontWeight: 'bold',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
