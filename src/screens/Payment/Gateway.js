import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, StatusBar, TouchableOpacity, Picker, Dimensions } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import Header from '../../components/HeaderBack';

export default class Gateway extends Component {
	state = {
		name: '',
		number: '',
		expiry: '',
		cvc: '',
		type: '',
	}

	_onChange = (form) => {
		this.setState({
			name: form.values.name,
			number: form.values.number,
			expiry: form.values.expiry,
			cvc: form.values.cvc,
			type: form.values.type || 'salah'
		});
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Header title='Pembayaran'/>
				<View style={[styles.container, {width: '100%'}]}>
					<StatusBar backgroundColor="transparent" barStyle="dark-content" />
					<View style={{padding: 20, alignItems: 'center'}}>
                        <CreditCardInput onChange={this._onChange} requiresName requiresName allowScroll
                        inputContainerStyle={{backgroundColor: '#00000010', paddingTop: 10, paddingLeft: 10, borderRadius: 10}}/>
                    </View>
				</View>
				<View style={{width: '100%'}}>
					<TouchableOpacity style={styles.inputBtn}>
						<Text style={{fontWeight: '500', fontSize: 16}}>Bayar</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex          : 1,
	},
	text: {
		fontSize: 18,
		color: '#000'
	},
	textInput: {
		height         : 50,
		width          : Dimensions.get('window').width * 0.8,
		backgroundColor: '#00000010',
		borderRadius   : 4,
		paddingLeft    : 15,
		paddingRight   : 15,
	},
	inputBtn: {
		backgroundColor: '#34c759',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: '100%',
		paddingLeft    : 15,
		paddingRight   : 15,
	},
	textBtn: {
		color   : '#000',
	},
});