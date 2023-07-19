import {
  useNavigation,
  useRoute,
  useNavigationState,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { RootStackParams } from "../../navigation";
import { useTheme } from "react-native-paper";
import ProfileAvatar from "./ProfileAvatar";
import Logo from "./VyncaLogo";

const AppBar = (props) => {
  const { canGoBack, goBack } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const theme = useTheme()
  console.log(theme)


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: theme.colors.border,
    },
  });


  return (
    // @ts-ignore
    <View style={styles.container}>
      <Appbar.Header>
        {canGoBack() && <Appbar.BackAction onPress={goBack} />}
        <Appbar.Content title={props.currentRoute} />
        <ProfileAvatar />
      </Appbar.Header>
    </View>
  );
};


export default AppBar;
