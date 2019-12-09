import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Burgers" onPress={() => this.props.navigation.navigate('Burgers')} />
                <Button title="Pizzas" onPress={() => this.props.navigation.navigate('Pizzas')} />
            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});