import React,{Component} from "react";
import {Text,View,Stylesheet} from "react-native"

export default class TransactionScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    The transaction is complete.
                </Text>
            </View>
        )
}   
}



const styles = Stylesheet.create({
    container: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "red"
    },
    text: {
        fontSize : 35,
        color : "blue"
    }
})