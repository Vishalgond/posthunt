import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Avatar from '../../components/Avatar';
import PostCard from '../../components/PostCard';
import ScreenWrapper from '../../components/ScreenWrapper';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

import { Heart, PlusSquare } from 'lucide-react-native';

const Home = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([
        {
            id: '1',
            userName: 'Divya Pandey',
            text: 'Working',
            postImage: 'https://picsum.photos/id/1/600/600',
            createdAt: '2 min ago',
            likes: 15,
            comments: 4
        },
          {
            id: '2',
            userName: 'Rishabh',
            text: 'Nature',
            postImage: 'https://picsum.photos/id/10/600/600',
            createdAt: '2 min ago',
            likes: 15,
            comments: 4
        }
    ]);

    return (
        <ScreenWrapper bg="white">
            <View style={styles.container}>
                {/* --- VIDEO STYLE HEADER --- */}
                <View style={styles.header}>
                    <Text style={styles.title}>PostHunt</Text>
                    <View style={styles.icons}>
                        <Pressable onPress={()=> router.push('newPost')}>
                            <PlusSquare size={hp(3.2)} color={theme.colors.textDark} strokeWidth={2} />
                        </Pressable>
                        <Pressable>
                            <Heart size={hp(3.2)} color={theme.colors.textDark} strokeWidth={2} />
                        </Pressable>
                        <Pressable onPress={()=> router.push('profile')}>
                            <Avatar 
                                size={hp(4.3)} 
                                rounded={theme.radius.sm} 
                                style={{borderWidth: 2, borderColor: theme.colors.primary}}
                            />
                        </Pressable>
                    </View>
                </View>

                {/* --- POSTS FEED --- */}
                <FlatList
                    data={posts}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listStyle}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <PostCard item={item} />}
                />
            </View>
        </ScreenWrapper>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: wp(4) },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10
    },
    title: {
        fontSize: hp(3.2),
        fontWeight: 'bold',
        color: theme.colors.primary, 
    },
    icons: { flexDirection: 'row', alignItems: 'center', gap: 18 },
    listStyle: { paddingTop: 20, paddingBottom: 100 }
});