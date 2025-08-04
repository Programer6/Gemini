import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{}}
        >
            <Tabs.Screen
                 name="index"
                 options={{
                    title:"Todos",  
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="flash-outline" />
                    ),
                }}
            />
                <Tabs.Screen
                name="settings"
                options={{
                   title:"Todos",  
                   tabBarIcon: ({ color, size }) => (
                       <Ionicons name="flash-outline" />
                   ),
               }}
            />

    </Tabs>
    )
}

export default TabsLayout