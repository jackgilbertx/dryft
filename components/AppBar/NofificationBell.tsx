import React, { useState } from 'react'
import { View } from 'react-native'
import { Appbar, Menu, Badge } from 'react-native-paper'

const NotificationBell = () => {
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <View>
          <Badge
            visible={true}
            size={16}
            style={{ position: 'absolute', top: 5, right: 5 }}
          >
            3
          </Badge>
          <Appbar.Action
            icon={true ? 'bell' : 'bell-outline'}
            onPress={openMenu}
          />
        </View>
      }
    >
      <Menu.Item
        onPress={() => {
          console.log('Option 2 was pressed')
        }}
        title='Call with clinician'
      />
      <Menu.Item
        onPress={() => {
          console.log('Option 2 was pressed')
        }}
        title='Message from physician'
      />
      <Menu.Item
        onPress={() => {
          console.log('Option 3 was pressed')
        }}
        title='Message from someone'
      />
    </Menu>
  )
}

export default NotificationBell
