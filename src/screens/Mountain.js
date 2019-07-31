import React, { Component } from 'react';
import { Platform, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../Assets/Style'
import MountainList from '../components/MountainFlatlist'

export default class Mountain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={styles.iconBox3}
                    onPress={ () => this.props.navigation.goBack()}>
                        <ImageBackground style={{ height: 40, width: 40 }}
                            source={require('../Assets/Icons/back.png')} />
                    </TouchableOpacity>
                    <View style={styles.searchBox}>

                        <TextInput style={{ color: '#20ab43' }} placeholder={"Search...."}></TextInput>
                        <View style={styles.iconBox2}>
                            <ImageBackground style={{ height: 40, width: 40 }}
                                source={require('../Assets/Icons/search.png')} />
                        </View>
                    </View>
                </View>
                <MountainList navigation={this.props.navigation} />
                
            </View>
        );
    }
}

