import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, ImageBackground, FlatList, SectionList, ActivityIndicator } from 'react-native'
import { shopList2 } from '../Assets/dummy'
import { connect } from 'react-redux'
import styles from '../Assets/Style'
import Axios from 'axios';
 
class ShopSectionlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            shop: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({isLoading:true})
        await Axios.get('https://menung.herokuapp.com/partners', {
            headers: {
                'x-app-name':'menung982998372771'
            }
        }).then(response => {
            this.setState({shop: response.data.data})
        })
        this.setState({isLoading:false})
    }

    renderStore = ({ item, index }) => {
        return ( 
            <View style={styles.shadow}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'column', paddingRight: 20 }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>{item.partner.name}</Text>
                        <Text>{item.partner.address}</Text>
                        <FlatList
                            // style={{flex: 3, flexDirection: "row", justifyContent: 'space-around', width:'100%'}}
                            data={item.products}
                            renderItem={this.renderItem}
                            numColumns={3}
                        />
                        {/* <View style={{flexDirection:'row', justifyContent}}> */}
                        <TouchableOpacity style={styles.goShop}
                        onPress={ () => this.props.navigation.navigate('Store',item) }>
                            <Text style={{ color: 'white' }}>{"Go to Shop"}</Text>
                        </TouchableOpacity>
                        {/* </View> */}
                    </View>
                </View>
            </View>
        )
    }
    renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.itemFLat}>
                <View style={styles.itemFlat2}>
                    <ImageBackground style={{ height: 60, width: 60 }} source={{ uri: item.images_product[0] }}></ImageBackground>
                    <Text style={{ color: 'black', marginBottom: 3 }}>
                        {item.name_product}
                    </Text>
                    <Text style={{ color: '#FF5722', fontWeight: '600', marginBottom: 3 }}>{"Rp" + item.price}</Text>
                </View>
            </View>
        )
    }
    _keyExtractor = (item, index) => item.id
    render() {
        return (
            <View style={styles.flatCard}>
                {/* <CheckBox></CheckBox> */}
                {this.state.isLoading ? <ActivityIndicator size="large" color="blue" /> : <FlatList
                    data={this.state.shop}
                    renderItem={this.renderStore}
                /> }
                
            </View>
        )
    }
}

export default ShopSectionlist;