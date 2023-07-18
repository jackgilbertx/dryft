import React, { useState } from "react";
import { Appbar, Menu, Avatar as MuiAvatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation";

const Avatar = () => (
  <MuiAvatar.Text size={24} label="JG" />
)

const ProfileAvatar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <Appbar.Action
      icon={Avatar}
      color="white"
      // @ts-ignore
      onPress={() =>  navigation.openDrawer()}
    />
  );
};

export default ProfileAvatar;

