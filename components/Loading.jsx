import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { theme } from '../constants/theme'

const Loading = ({size="large", color=theme.colors.primary}) => {
  return (
    <View>
        <ActivityIndicator size={size} color={color}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})