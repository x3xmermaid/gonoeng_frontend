import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, Dimensions, FlatList, Image,ImageBackground } from 'react-native';
import styles from '../Assets/Styles';
const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.031;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class Maps extends Component {
    constructor(props) {
        super(props)
        const { navigation } = this.props;
        const target = navigation.getParam('target');
        this.state = {
            nameStore: target[2],
            latitude: target[1],
            longitude: target[0],
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            store: (navigation.getParam('shops') != null) ? navigation.getParam('shops') : [],
        }
    }
    static navigationOptions = {
        header: null
    }
    async componentDidMount() {
       //await this.getLocation()
    }
    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemMap} onPress={() => {
                let LatitudeDelta = LATITUDE_DELTA - 0.003
                let LongitudeDelta = LatitudeDelta * ASPECT_RATIO
                _mapView.animateToRegion({
                    latitude: item.latitude,
                    longitude: item.longitude,
                    latitudeDelta: LatitudeDelta,
                    longitudeDelta: LongitudeDelta,
                })
            }}>
                <Image source={{ uri: item.photo }} style={{ width: '100%', height: '80%' }} />
                <Text numberOfLines={1} style={{ textAlign: 'center' }}>{item.name}</Text>
                {(item.status) ?
                    (<Text style={[styles.textStatusMap, { color: '#11f515' }]}>Online</Text>) :
                    (<Text style={[styles.textStatusMap, { color: '#f00514' }]}>Offline</Text>)
                }
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.containerMap}>
                <MapView
                    showsUserLocation={true}
                    ref={(mapView) => { _mapView = mapView }}
                    style={{ flex: 1, width: width, }}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: this.state.latitudeDelta,
                        longitudeDelta: this.state.longitudeDelta
                    }}>
                    <Marker coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }} title={this.state.nameStore} pinColor='red' />
                    {(this.state.store.length != 0) ? this.state.store.map(store => (
                        <Marker coordinate={{
                            latitude: store.location.coordinates[1],
                            longitude: store.location.coordinates[0]
                        }} title={store.partner.name} pinColor='blue' >
                            
                        </Marker>
                    )) : <View />
                    }
                </MapView>
                <View style={styles.buttonMap} >
                <TouchableOpacity style={{ backgroundColor: 'white',
        borderRadius: 100,
        borderWidth: 2}} onPress={() => this.props.navigation.goBack()}>
                    <Image style={{marginLeft: 2, width: 28, height: 28, opacity: 0.9}}
                           source={require('../Assets/Icons/ic_back.png')}/>
                </TouchableOpacity>
            </View>
            </View >
        )
    }
}