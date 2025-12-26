import { Image } from 'expo-image';
import { Heart, MessageCircle, MoreHorizontal, Share2 } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';
import Avatar from './Avatar';

const PostCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Avatar size={hp(4.5)} rounded={theme.radius.md} />
                    <View style={{ gap: 2 }}>
                        <Text style={styles.username}>{item.userName}</Text>
                        <Text style={styles.time}>{item.createdAt}</Text>
                    </View>
                </View>
                <TouchableOpacity><MoreHorizontal size={hp(2.5)} color={theme.colors.textDark} /></TouchableOpacity>
            </View>

            {/* Post Content: Text & Image */}
            <View style={styles.content}>
                <Text style={styles.postText}>{item.text}</Text>
                {item.postImage && (
                    <Image source={item.postImage} style={styles.postImage} contentFit='cover' transition={100} />
                )}
            </View>

            {/* Footer: Like, Comment, Share */}
            <View style={styles.footer}>
                <View style={styles.footerAction}>
                    <TouchableOpacity><Heart size={24} color={theme.colors.textLight} /></TouchableOpacity>
                    <Text style={styles.count}>{item.likes}</Text>
                </View>
                <View style={styles.footerAction}>
                    <TouchableOpacity><MessageCircle size={24} color={theme.colors.textLight} /></TouchableOpacity>
                    <Text style={styles.count}>{item.comments}</Text>
                </View>
                <View style={styles.footerAction}>
                    <TouchableOpacity><Share2 size={24} color={theme.colors.textLight} /></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 12,
        paddingVertical: 15,
        borderRadius: theme.radius.xxl,
        borderWidth: 0.5,
        borderColor: theme.colors.gray,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 1
    },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
    userInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    username: { fontSize: hp(1.8), fontWeight: '600', color: theme.colors.textDark },
    time: { fontSize: hp(1.4), color: theme.colors.textLight },
    content: { gap: 10 },
    postText: { fontSize: hp(1.7), color: theme.colors.textDark, lineHeight: 22 },
    postImage: { height: hp(40), width: '100%', borderRadius: theme.radius.xl, marginTop: 5 },
    footer: { flexDirection: 'row', alignItems: 'center', gap: 15, marginTop: 15 },
    footerAction: { flexDirection: 'row', alignItems: 'center', gap: 5 },
    count: { fontSize: hp(1.6), color: theme.colors.textLight }
});