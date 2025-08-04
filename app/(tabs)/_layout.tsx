import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarStyle: {
                backgroundColor: "lightblue",
                borderTopWidth: 1,
                height: 90,
                borderTopColor: "darkblue",
                paddingTop: 10,
                paddingBottom: 30,
                
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "800",
            },
            headerShown: false,
        }}
        >
            <Tabs.Screen
                 name="index"
                 options={{
                    title:"Todos",  
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="flash-outline" sizse={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                 name="settings"
                 options={{
                    title:"Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color}/>
                    ),
                }}
                />     
    </Tabs>
    );
}

export default TabsLayout