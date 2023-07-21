import { StyleSheet, Text, View  } from 'react-native';

// export default function Calendar({ navigation }: RootTabScreenProps<'Calendar'>) {

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
