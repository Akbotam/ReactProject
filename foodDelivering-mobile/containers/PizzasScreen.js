import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { pizzas } from '../Data'
import Products from '../components/Products'
import { connect } from 'react-redux'

class PizzasScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Pizzas'
    }

    render() {
        return (
            <View style={styles.container}>
                <Products products={pizzas} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}
export default connect(null, mapDispatchToProps)(PizzasScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});