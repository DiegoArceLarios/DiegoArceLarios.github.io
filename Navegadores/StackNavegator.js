import React, {Component} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import Sopa from '../Pantallas/Sopa';
import Combinar from '../Pantallas/Combinar';
import Serpiente from '../Pantallas/Serpiente';

const Stack=createStackNavigator();

export default class StackNavigator extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown:false}}>
                <Stack.Screen name='BottomTab' component={BottomTab}/>
                <Stack.Screen name='Sopa de letras' component={Sopa}/>
                <Stack.Screen name='Lineas' component={Combinar}/>
                <Stack.Screen name='Serpiente' component={Serpiente}/>
            </Stack.Navigator>
        );
    }
    
}