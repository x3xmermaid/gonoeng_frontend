import React, { Component } from 'react'
import { Platform, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from '../Assets/Style'
import { carousel } from '../Assets/dummy'

const windowWidth = Dimensions.get('window').width
export default class CarouselView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: 4,
            activeSlide: 0
        }
    }
    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <View style={styles.carouselFooter}>
                <Pagination
                    dotsLength={entries}
                    activeDotIndex={activeSlide}
                    containerStyle={{ alignSelf: 'flex-start', maxHeight: 70 }}
                    dotStyle={{
                        width: 7,
                        height: 7,
                        borderRadius: 5,
                        backgroundColor: '#03AC0E'
                    }}
                    inactiveDotStyle={{
                        width: 7,
                        height: 7,
                        borderRadius: 5,
                        backgroundColor: '#E6E8EA'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={1}
                />
                <View style={styles.viewMore}>
                    <Text></Text>
                </View>
            </View>

        );
    }

    renderItem = ({ item, index }) => (

        <View style={styles.carouselSecondBox}>
            <Text style={styles.textMountain}>{item.name}</Text>
            <Image
                source={{ uri: item.ads }}
                style={styles.carouselImage}

            />
            <TouchableOpacity style={styles.buttonMore}
            onPress={ () => this.props.navigation.navigate('Mountain') } >
                <Text style={styles.viewMore}>View More</Text>
            </TouchableOpacity>
        </View>

    )
    _keyExtractor = (item, index) => item.id
    render() {
        return (
            <View style={styles.carouselBox}>

                <Carousel
                    data={carousel}
                    sliderWidth={windowWidth}
                    style={styles.carouselView}
                    itemWidth={windowWidth}
                    autoplay={true}
                    autoplayInterval={7000}
                    loop={true}
                    horizontal={true}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    renderItem={this.renderItem}
                />
                {/* {this.pagination} */}
            </View>
        )
    }
}