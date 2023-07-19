import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';
import { RootStackParams } from '../../navigation';
import NotificationBell from './NofificationBell';
import ProfileAvatar from './ProfileAvatar';
import Logo from './VyncaLogo';

const AppBar = (props) => {
  const { canGoBack, goBack } = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute();
  console.log('ROUTE', props.currentRoute)

     return (
      <Appbar.Header >
        {canGoBack() && <Appbar.BackAction onPress={goBack} />}
        <Appbar.Content title={props.currentRoute} />
        <ProfileAvatar />
      </Appbar.Header>
    );
  };

  export default AppBar;