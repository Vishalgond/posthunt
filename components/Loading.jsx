import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';

const Header = ({ title, showBackButton = false, mb = 10 }) => {
    const router = useRouter();
    return (
        <View style={[styles.container, { marginBottom: mb }]}>
            {showBackButton && (
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <Text style={{fontSize: 20, color: theme.colors.text}}>{"<"}</Text>
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 },
    title: { fontSize: hp(2.7), fontWeight: '700', color: theme.colors.textDark },
    backButton: { position: 'absolute', left: 0, padding: 5 }
});