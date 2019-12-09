import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import BurgersScreen from './containers/BurgersScreen'
import PizzasScreen from './containers/PizzasScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'
class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}
export default ShoppingCart;

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Burgers: BurgersScreen,
    Pizzas: PizzasScreen,
    Cart: CartScreen
}, {
        navigationOptions: {
            headerTitle: 'Shopping App',
            headerRight: (
                <ShoppingCartIcon />
            )
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});