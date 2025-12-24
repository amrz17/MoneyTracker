import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

// export const unstable_settings = {
//   anchor: '(tabs)',
// };

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'Inter': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'Inter-Semibold': require('../assets/fonts/Inter_18pt-SemiBold.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter_24pt-Bold.ttf'),
  });

  if (!loaded) {
    return null; // atau loading screen
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}
        {/* <Stack.Screen name='index' options={{ headerShown: false }}/>       */}
        <Stack.Screen name='index' 
          options={{
            header: () => (
              <View style={{ height: 65, backgroundColor: '#31326f', justifyContent: 'flex-end', padding: 12 }}>
                <Ionicons name="wallet-sharp" size={24} color="#FBFBFB" />
                {/* <Text style={{ color: '#fff', fontFamily: 'Inter-Bold', fontSize: 20}}>
                  MyMon
                </Text> */}
              </View>
            ),
          }}
        />      
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
