import { Platform, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, bg = 'white' }) => {
  const { top } = useSafeAreaInsets();
  
  const paddingTop = Platform.OS === 'ios' ? top : top > 0 ? top : StatusBar.currentHeight;

  return (
    <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
