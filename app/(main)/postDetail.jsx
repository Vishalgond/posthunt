import { useLocalSearchParams, useRouter } from 'expo-router';
import { Send } from 'lucide-react-native';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PostCard from '../../components/PostCard';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

const PostDetails = () => {
    const { postId } = useLocalSearchParams();
    const router = useRouter();


    const item = {
        content: "This is the post content where users will comment.",
        file: null, 
        user: { name: 'User' },
        createdAt: '5 min ago'
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Comments</Text>
            </View>

  
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.scrollContent}
            >
                <PostCard item={item} hasShadow={false} showIcons={false} />

                <View style={styles.commentSection}>
                    <Text style={styles.sectionTitle}>Comments</Text>
                    

                    <View style={styles.commentItem}>
                        <View style={styles.avatarMini}><Text>U</Text></View>
                        <View style={styles.commentBubble}>
                            <Text style={styles.commentUser}>Divya Pandey</Text>
                            <Text style={styles.commentText}>Great work on this UI</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="Type a comment..." 
                        style={styles.input}
                        placeholderTextColor={theme.colors.textLight}
                    />
                    <TouchableOpacity style={styles.sendIcon}>
                        <Send color={theme.colors.primary} size={hp(2.8)} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default PostDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(4),
        paddingVertical: hp(2),
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray,
    },
    headerTitle: {
        fontSize: hp(2.5),
        fontWeight: 'bold',
        color: theme.colors.primary,
        flex: 1,
        textAlign: 'center',
        marginRight: wp(10),
    },
    backButton: {
        fontSize: hp(3),
        color: theme.colors.text,
    },
    scrollContent: {
        paddingBottom: hp(10), 
    },
    commentSection: {
        paddingHorizontal: wp(4),
        marginTop: hp(2),
    },
    sectionTitle: {
        fontSize: hp(2.2),
        fontWeight: '600',
        color: theme.colors.text,
        marginBottom: hp(2),
    },
    commentItem: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: hp(2),
    },
    avatarMini: {
        height: hp(4),
        width: hp(4),
        borderRadius: 20,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commentBubble: {
        backgroundColor: '#f0f2f5',
        padding: 12,
        borderRadius: 15,
        flex: 1,
    },
    commentUser: {
        fontWeight: 'bold',
        fontSize: hp(1.6),
    },
    commentText: {
        color: theme.colors.textDark,
        fontSize: hp(1.7),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(4),
        paddingVertical: hp(1.5),
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        height: hp(6),
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: theme.radius.xl,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    sendIcon: {
        padding: 5,
    }
});