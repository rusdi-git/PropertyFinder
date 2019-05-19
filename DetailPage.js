'use strict';

import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
} from 'react-native';

type Props = {};
export default class DetailPage extends Component<Props>{
    static navigationOptions = {
        title:'Detail',
    };

    render(){
        const {data}=this.props.navigation.state.params;
        console.log(data);
        return (
            <View>
                <Image style={styles.preview} source={{uri:data.img_url}}/>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.info}>Bathroom Number {data.bathroom_number}</Text>
                <Text style={styles.info}>Bedroom Number {data.bedroom_number}</Text>
            </View>
        );
    }
}

const dimension = Dimensions.get('window');

const styles = StyleSheet.create({
    preview:{
        width:dimension.width,
        height:dimension.width,
        alignSelf:'center',
    },
    title: {
        fontSize:25,
        fontWeight:'bold',
        color:'#58BBEC',
    },
    info:{
        fontSize:15,
        color:'#000000',
    }
})