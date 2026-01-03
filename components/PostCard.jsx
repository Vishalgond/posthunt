import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Heart, MessageCircle, MoreHorizontal, Share2 } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Modal, Pressable, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import Avatar from './Avatar';

const PostCard = ({ item, showIcons = true }) => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(item?.likes || 0);

    const onShare = async () => {
        try {

            let shareMessage = String(item?.text || 'Check out this post on PostHunt!');
            
            if (item?.postImage) {
                shareMessage = shareMessage + "\n\nImage: " + String(item.postImage);
            }
            
            await Share.share({ message: shareMessage });
        } catch (error) {
            Alert.alert("Share Error", error.message);
        }
    };

    const handleEdit = () => {
        setShowMenu(false);
        router.push({
            pathname: 'create-post',
            params: {  
                text: item?.text, 
                postImage: item?.postImage, 
                edit: 'true' 
            }
        });
    };

    const onLike = () => {
        setLiked(!liked);
        setLikesCount(prev => liked ? prev - 1 : prev + 1);
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Avatar size={hp(4.5)} rounded={theme.radius.md} />
                    <View style={{ gap: 2 }}>
                        <Text style={styles.username}>{item?.userName || 'User'}</Text>
                        <Text style={styles.time}>{item?.createdAt || 'Just now'}</Text>
                    </View>
                </View>

                {/* Three Dot Menu Trigger */}
                <TouchableOpacity onPress={() => setShowMenu(true)}>
                    <MoreHorizontal size={hp(2.5)} color={theme.colors.textDark} />
                </TouchableOpacity>
            </View>

            {/* Post Content */}
            <View style={styles.content}>
                {item?.text && <Text style={styles.postText}>{item.text}</Text>}
                {item?.postImage && (
                    <Image source={item.postImage} style={styles.postImage} contentFit='cover' transition={100} />
                )}
            </View>

            {/* Footer Actions */}
            {showIcons && (
                <View style={styles.footer}>
                    <View style={styles.footerAction}>
                        <TouchableOpacity onPress={onLike}>
                            <Heart 
                                size={24} 
                                color={liked ? theme.colors.rose : theme.colors.textLight} 
                                fill={liked ? theme.colors.rose : 'transparent'} 
                            />
                        </TouchableOpacity>
                        <Text style={styles.count}>{likesCount}</Text>
                    </View>

                    <View style={styles.footerAction}>
                        <TouchableOpacity onPress={() => router.push('postDetail')}>
                            <MessageCircle size={24} color={theme.colors.textLight} />
                        </TouchableOpacity>
                        <Text style={styles.count}>{item?.comments || 0}</Text>
                    </View>

                    <View style={styles.footerAction}>
                        <TouchableOpacity onPress={onShare}>
                            <Share2 size={24} color={theme.colors.textLight} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {/* Edit Options Modal */}
            <Modal transparent visible={showMenu} animationType="fade" onRequestClose={() => setShowMenu(false)}>
                <Pressable style={styles.modalOverlay} onPress={() => setShowMenu(false)}>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuItem} onPress={handleEdit}>
                            <Text style={styles.menuText}>Edit Post</Text>
                        </TouchableOpacity>
                        <View style={styles.separator} />
                        <TouchableOpacity style={styles.menuItem} onPress={() => {setShowMenu(false); Alert.alert("Delete", "Post deleted!");}}>
                            <Text style={[styles.menuText, {color: 'red'}]}>Delete Post</Text>
                        </TouchableOpacity>
                        <View style={styles.separator} />
                        <TouchableOpacity style={styles.menuItem} onPress={() => setShowMenu(false)}>
                            <Text style={styles.menuText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    container: { backgroundColor: 'white', padding: 12, borderRadius: theme.radius.xxl, borderWidth: 0.5, borderColor: theme.colors.gray, marginBottom: 15, elevation: 1 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
    userInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    username: { fontSize: hp(1.8), fontWeight: '600', color: theme.colors.textDark },
    time: { fontSize: hp(1.4), color: theme.colors.textLight },
    content: { gap: 10 },
    postText: { fontSize: hp(1.7), color: theme.colors.textDark, lineHeight: 22 },
    postImage: { height: hp(40), width: '100%', borderRadius: theme.radius.xl, marginTop: 5 },
    footer: { flexDirection: 'row', alignItems: 'center', gap: 15, marginTop: 15 },
    footerAction: { flexDirection: 'row', alignItems: 'center', gap: 5 },
    count: { fontSize: hp(1.6), color: theme.colors.textLight },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    menuContainer: { width: wp(70), backgroundColor: 'white', borderRadius: 15, overflow: 'hidden' },
    menuItem: { paddingVertical: 15, alignItems: 'center' },
    menuText: { fontSize: hp(2), fontWeight: '500' },
    separator: { height: 1, backgroundColor: '#eee', width: '100%' }
});