import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import StackRoutes from './../routes/stack';


const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#39424E',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#e72f49',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff'
            }}
        >
            <Drawer.Screen name='Home' component={Home}
                options={{
                    title: 'Início',
                    headerShown: false
                }}
            />
            <Drawer.Screen name='StackRoutes' component={StackRoutes}
                options={{
                    title: 'Meus Projetos',
                    headerShown: false
                }}
            />
        </Drawer.Navigator >
    );
}