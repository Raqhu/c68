import React,{Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/search";
import TransactionScreen from "../screens/transaction";

const Tab = createBottomTabNavigator();
export default class BottomTab extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator> 
                    <Tab.Screen name = "search" component={SearchScreen}>    </Tab.Screen>
                    <Tab.Screen name="transaction" component={TransactionScreen}>   </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
