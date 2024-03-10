import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Loading } from '@components/Loading';

export const Layout = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-GRAY-600">
      <Slot />/
    </SafeAreaView>
  );
};
