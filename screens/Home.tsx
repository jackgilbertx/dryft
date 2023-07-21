import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getReminders } from "../redux/slices/reminderSlice";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";
import { ActivityIndicator } from "react-native-paper";
import { useAppTheme } from '../theme'
import { getUser } from "../redux/slices/userSlice";

const Reminders = (props: { title: string; subTitle: string }) => {
  const { title, subTitle } = props;
  const theme = useAppTheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing[4],
    },
    reminderContainer: {
      marginBottom: theme.spacing[3],
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 24,
    },
    reminderHeader: {
      fontSize: 20,
      marginBottom: 4,
      fontWeight: 500,
    },
    text: {
      fontSize: 12,
      marginBottom: 4,
    },
    divider: {
     // borderBottom: "1px solid grey",
    },
  });

  return (
    <View style={styles.reminderContainer}>
      <Text style={styles.reminderHeader}>{title}</Text>
      <Text style={styles.text}>{subTitle}</Text>
      <View style={styles.divider} />
    </View>
  );
};

// @ts-ignore
const Home = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { reminders, loading, error } = useSelector(
    (state: RootState) => state.reminders
  );

  useEffect(() => {
    console.log(navigation);

    dispatch(getReminders());
    dispatch(getUser());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Upcoming</Text>
      {loading && <ActivityIndicator />}
      {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
      {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
      {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
      {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
      {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
        {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
        {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
        {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
        {reminders.length > 0 &&
        reminders.map((reminder) => (
          <Reminders title={reminder.title} subTitle={reminder.description} />
        ))}
    </ScrollView>
  );
};

export default Home;

