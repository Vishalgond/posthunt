import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

const Profile = () => {
    const router = useRouter(); 

    const dummyUser = {
        name: "Divya Pandey",
        address: "Uttarakhand, India",
        email: "divya@example.com",
        phoneNumber: "+1 234 567 890",
        bio: "React Native Developer | Learning Full Stack",
        image: null 
    };

    const onLogout = async ()=>{
        router.push('../welcome');
    }
    const handleLogout = async ()=>{
        Alert.alert("Confirm",'Are you sure you want to log out ?',[
            {
                text:'Cancel',
                onPress:()=> console.log('modal cancelled'),
                style:'cancel'
            },
            {
                text:'Logout',
                onPress:()=>onLogout(),
                style:'destructive'
            }
        ])
    }

    return (
        <ScreenWrapper bg="white">
            <View style={styles.container}>
                <Header title="Profile" mb={30} showBackButton={true} />
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Ionicons name="log-out-outline" size={26} color="black" />
                </TouchableOpacity>
                <View style={styles.content}>
                    <View style={styles.avatarContainer}>
                        <Avatar
                            uri={dummyUser.image}
                            size={hp(12)}
                            rounded={theme.radius.xxl*1.4} 
                        />
                        <Pressable 
                            style={styles.editIcon} 
                            onPress={() => router.push('editProfile')}
                        >
                            <AntDesign name="edit" size={20} color="black" />
                        </Pressable>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={styles.userName}>{dummyUser.name}</Text>
                        <Text style={styles.infoText}>{dummyUser.address}</Text>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.infoText}>📧 {dummyUser.email}</Text>
                        <Text style={styles.infoText}>📞 {dummyUser.phoneNumber}</Text>
                        <Text style={styles.bioText}>{dummyUser.bio}</Text>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingHorizontal: wp(4) },
    content: { 
        marginTop: 30, 
        gap: 15 },
    avatarContainer: { 
        height: hp(12), 
        width: hp(12), 
        alignSelf: 'center' },
    editIcon: {
        position: 'absolute', bottom: 0, right: -8,
        padding: 7, backgroundColor: 'white', borderRadius: 10,
        elevation: 5, shadowColor: '#000', shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2, borderWidth: 0.5, borderColor: '#ccc'
    },
    userName: { fontSize: hp(3), 
        fontWeight: '700', 
        color: theme.colors.textDark },
    infoText: {
        fontSize: hp(1.8), 
        color: theme.colors.textLight },
    footer: { 
        marginTop: 20, 
        alignItems: 'center', 
        gap: 5 },
    bioText: { 
        fontSize: hp(1.8), 
        color: theme.colors.textDark,
         textAlign: 'center', 
         marginTop: 10 },
    logoutButton:{
        position:'absolute',
        right:20,
        padding:5,
        borderRadius:theme.radius.sm,
        backgroundColor:'#fee2e2'
    }
});