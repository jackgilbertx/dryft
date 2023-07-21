/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';

export const linking: LinkingOptions<any> = {
  prefixes: [Linking.createURL('/root')],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              Login: 'Login',
            },
          },
          Home: {
            screens: {
              Home: 'Home',
            },
          },
          Search: {
            screens: {
              Search: 'Search',
            },
          },
          Notifications: {
            screens: {
              Notifications: 'Notifications',
            },
          },
          Messages: {
            screens: {
              Messages: 'Messages',
            },
          },
          Profile: {
            screens: {
              Profile: 'Profile',
            },
          },
          // @ts-ignore
          NotFound: '*',
        },
      },
    },
  },
};
