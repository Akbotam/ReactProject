import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { burgers } from '../Data'
import { connect } from 'react-redux'

class BurgersScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Burgers'
    }
    render() {
        return (
            <View style={styles.container}>
                <Products products={burgers} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(BurgersScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});