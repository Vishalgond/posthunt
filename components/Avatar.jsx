import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';

const Avatar = ({ uri, size = hp(4.5), rounded = theme.radius.md, style = {} }) => {
    return (
        <View style={[styles.container, { height: size, width: size, borderRadius: rounded }, style]}>
            {uri ? (
                <Image
                    source={{ uri }}
                    transition={100}
                    style={styles.avatar}
                />
            ) : (
                <View style={[styles.placeholder, { borderRadius: rounded }]}>
                    <Text style={{ color: theme.colors.textLight, fontSize: size / 3 }}>U</Text>
                </View>
            )}
        </View>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    container: { overflow: 'hidden', borderWidth: 1, borderColor: '#eee' },
    avatar: { height: '100%', width: '100%' },
    placeholder: { flex: 1, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }
});