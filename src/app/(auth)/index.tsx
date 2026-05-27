import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Login() {
  return (
    <View>
      <Text>This is the login screen</Text>
      {/* <Button onPress={() => router.push('/register')} title="Register"></Button> */}
      <Pressable onPress={() => router.push('/register')}>
        <Text>Register</Text>
      </Pressable>
    </View>
  )
}