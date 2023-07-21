import React, { useState } from "react";
import { Appbar, Avatar as MuiAvatar } from "react-native-paper";
import { useAppNavigation } from "../../navigation";

const Avatar = () => <MuiAvatar.Text size={30} label="JG" color="#fff" />;

const ProfileAvatar = () => {
  const navigation =
    useAppNavigation();

  return (
    <Appbar.Action
      icon={Avatar}
      color="white"
      // @ts-ignore
      onPress={() => navigation.openDrawer()}
    />
  );
};

export default ProfileAvatar;
