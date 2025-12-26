import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';
import Loading from './Loading';

const Button = ({ buttonStyle, textStyle, title = '', onPress = () => {}, loading = false, hasShadow = true }) => {
    if (loading) {
        return (
            <View style={[styles.button, buttonStyle, { backgroundColor: 'white' }]}>
                <Loading />
            </View>
        );
    }

    return (
        <Pressable 
            onPress={onPress} 
            style={({ pressed }) => [
                styles.button, 
                buttonStyle, 
                { opacity: pressed ? 0.8 : 1 },
                hasShadow && styles.shadow
            ]}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.xl
    },
    text: {
        fontSize: hp(2.5),
        color: 'white',
        fontWeight: '700'
    },
    shadow: {
        shadowColor: theme.colors.dark,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    }
});