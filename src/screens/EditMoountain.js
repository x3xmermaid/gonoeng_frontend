import React, { Component } from 'react';
import { Platform, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../Assets/Style'

export default class AddMountain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.iconBox3}>
                        <ImageBackground style={{ height: 40, width: 40 }}
                            source={require('../Assets/Icons/back.png')} />
                    </View>
                    <View style={styles.headBox}>
                        <Text style={styles.headTitle} >Edit Jasa</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10, borderColor:'#03AC0E', borderWidth: 3, marginLeft:15, marginRight: 15, borderRadius: 20}}>
                    <View style={styles.inputBox}>
                        <Text style={{ fontSize: 18 }}>Name</Text>
                        <TextInput style={styles.inputTextAdd} placeholder={"Product Name..."}></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={{ fontSize: 18 }}>Price</Text>
                        <TextInput style={styles.inputTextAdd} placeholder={"Product Price..."}></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={{ fontSize: 18 }}>Description</Text>
                        <TextInput style={styles.inputTextAdd} placeholder={"Product Description..."}></TextInput>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={{ fontSize: 18 }}>Image</Text>
                        <TextInput style={styles.inputTextAdd} placeholder={"Image Link..."}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{flexDirection: 'row', alignItems: "center"}}>
                            <Text style={{ fontSize: 18 }}>Stock: </Text>
                            <Text style={{ marginLeft: 10, color: '#03AC0E', fontSize: 15, borderColor: '#03AC0E', borderRadius: 100, borderWidth: 2, textAlign: 'center', paddingLeft: 7, paddingRight: 7, fontWeight: 'bold' }}>-</Text>
                            <TextInput style={[styles.inputTextAdd, { marginLeft: 5 , fontSize: 12, borderColor: 'white'}]} placeholder={"0"}>0</TextInput>
                            <Text style={{color: '#03AC0E', fontSize: 15, borderColor: '#03AC0E', borderRadius: 100, borderWidth: 2, textAlign: 'center', paddingLeft: 7, paddingRight: 7, fontWeight: 'bold' }}>+</Text>
                        </View>
                        <TouchableOpacity style={[styles.buttonAddProduct, { alignSelf: 'center', width: 100, backgroundColor: 'rgb(45, 173, 78)', marginRight: 20, marginBottom: 20}]} onPress={() => this.goback()}>
                            <Text style={[styles.loginText, { color: 'white' }]}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

