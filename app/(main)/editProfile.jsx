import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

const EditProfile = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [userData, setUserData] = useState({
        name: 'Divya Pandey',
        phoneNumber: '+1 234 567 890',
        address: 'Uttarakhand, India',
        bio: 'React Native Developer | Learning Full Stack',
        image: null
    });

    const onUpdate = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Profile Updated Successfully!");
            router.back();
        }, 1000);
    };

    return (
        <ScreenWrapper bg="white">
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    <Header title="Edit Profile" showBackButton={true} />

                    <View style={styles.form}>
                        <View style={styles.avatarContainer}>
                            <Avatar uri={userData.image} size={hp(14)} rounded={theme.radius.xxl*1.4} />
                            <Text style={styles.changePhotoText}>Change Photo</Text>
                        </View>

                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            value={userData.name}
                            onChangeText={value => setUserData({...userData, name: value})}
                        />

                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your phone"
                            value={userData.phoneNumber}
                            onChangeText={value => setUserData({...userData, phoneNumber: value})}
                        />

                        <Text style={styles.inputLabel}>Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your address"
                            value={userData.address}
                            onChangeText={value => setUserData({...userData, address: value})}
                        />

                        <Text style={styles.inputLabel}>Bio</Text>
                        <TextInput
                            style={[styles.input, {height: hp(10), textAlignVertical: 'top', paddingTop: 10}]}
                            placeholder="Enter your bio"
                            multiline={true}
                            value={userData.bio}
                            onChangeText={value => setUserData({...userData, bio: value})}
                        />

                        <Button title="Update" loading={loading} onPress={onUpdate} />
                    </View>
                </ScrollView>
            </View>
        </ScreenWrapper>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingHorizontal: wp(4) },
    form: { 
        marginTop: 30, 
        gap: 15 },
    avatarContainer: { 
        alignItems: 'center', 
        marginBottom: 10 },
    changePhotoText: { 
        color: theme.colors.primary, 
        fontWeight: '600', 
        marginTop: 10 },
    inputLabel: { 
        fontSize: hp(1.7), 
        color: theme.colors.textLight, 
        marginBottom: -5 },
    input: {
        flexDirection: 'row',
        height: hp(7.2),
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        paddingHorizontal: 20,
        fontSize: hp(1.9),
    }
});