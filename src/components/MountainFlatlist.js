import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, ImageBackground, FlatList, SectionList, ActivityIndicator } from 'react-native'
import { mountDetail } from '../Assets/dummy'
import { connect } from 'react-redux'
import styles from '../Assets/Style'
import Axios from 'axios';

class Mountainlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            mountains: []
        }
    }

    componentDidMount() {
        this.fetchMountain()
    }

    fetchMountain = async () => {
        this.setState({isLoading: true})
        await Axios.get('https://menung.herokuapp.com/mountains', {
            headers: {
                'x-app-name':'menung982998372771'
            }
        }).then(response => {
            console.log(response)
            this.setState({mountains: response.data.data})
        })
        this.setState({isLoading:false})
    }

    renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.itemMount}>
                <View style={styles.itemMount}>
                    <View style={styles.listStyle}>
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('MountainDetail', item)}>
                        <Text style={styles.statusText}>
                        {item.status}
                    </Text>
                        </TouchableOpacity>
                    
                    <Text style={styles.mountTitle}>{item.name}</Text>
                    <Text style={styles.mountDetail}>{"Tinggi : "+item.summit}</Text>
                    <Text style={styles.mountDetail}>{"Level : "+item.mountainType}</Text>
                    <Text style={styles.mountDetail}>{"sisa Kuota : "+item.quota}</Text>
                    <ImageBackground style={styles.mountImage} source={{ uri: item.images[0] }}></ImageBackground>
                    </View>
                </View>
            </View>
        )
    }
    _keyExtractor = (item, index) => item.id
    render() {
        return (
            <View style={styles.flatMountain}>
                {/* <CheckBox></CheckBox> */}
                {this.state.isLoading ? <ActivityIndicator size="large" color="blue" /> : <FlatList
                    data={this.state.mountains}
                    renderItem={this.renderItem}
                />}
            </View>
        )
    }
}

export default Mountainlist;