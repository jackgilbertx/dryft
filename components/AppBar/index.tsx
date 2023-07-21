import {
  useNavigation,
  useRoute,
  useNavigationState,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { RootStackParams } from "../../navigation";
import { useAppTheme } from "../../theme";
import ProfileAvatar from "./ProfileAvatar";
import Logo from "./VyncaLogo";

const AppBar = ({currentRoute}) => {
  const { canGoBack, goBack } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const theme = useAppTheme()
  console.log(theme)


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: theme.colors.border,
    },
  });

  const backRoutes = ['Profile']

  return (
    // @ts-ignore
    <View style={styles.container}>
      <Appbar.Header>
        {backRoutes.includes(currentRoute) && <Appbar.BackAction onPress={goBack} />}
        <Appbar.Content title={currentRoute} />
        <ProfileAvatar />
      </Appbar.Header>
    </View>
  );
};


export default AppBar;
