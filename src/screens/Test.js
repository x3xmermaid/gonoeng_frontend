import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList
} from "react-native";

class Transaction extends Component {

    constructor(props) {
        // console.disableYellowBox = true;
        super(props)
        this.state = {
            transaction: [
                {
                    id: '01',
                    image: 'https://id-test-11.slatic.net/p/6/tas-gunung-carrier-consina-centurion-50l-8459-94124583-bfbb9a8ec8c523bfe88b948d03d32989-catalog.jpg_340x340q80.jpg_.webp',
                    namaBarang: 'Carrier',
                    hargaBarang: 300000,
                },
                {
                    id: '02',
                    image: 'https://id-test-11.slatic.net/p/6/spotec-rocky-sepatu-hikingsepatu-gunung-hitammerah-1510135991-78364345-df6e73d8db7ce1f76924fabc601a6521.jpg',
                    namaBarang: 'Sepatu Gunung',
                    hargaBarang: 200000,
                },
                {
                    id: '03',
                    image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/30/31724409/31724409_8bcfe6ea-eb79-4b3e-bf76-d761964f6002_672_672.jpg',
                    namaBarang: 'Sleeping Bed',
                    hargaBarang: '250000',
                },
                {
                    id: '04',
                    image: 'http://cdn.elevenia.co.id/g/3/5/4/2/9/8/20354298_B.jpg',
                    namaBarang: 'Tenda',
                    hargaBarang: '100000',
                },
                {
                    id: '05',
                    image: 'https://id-test-11.slatic.net/p/6/tas-gunung-carrier-consina-centurion-50l-8459-94124583-bfbb9a8ec8c523bfe88b948d03d32989-catalog.jpg_340x340q80.jpg_.webp',
                    namaBarang: 'Carrier',
                    hargaBarang: 300000,
                },
                {
                    id: '06',
                    image: 'https://id-test-11.slatic.net/p/6/spotec-rocky-sepatu-hikingsepatu-gunung-hitammerah-1510135991-78364345-df6e73d8db7ce1f76924fabc601a6521.jpg',
                    namaBarang: 'Sepatu Gunung',
                    hargaBarang: 200000,
                },
                {
                    id: '07',
                    image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/30/31724409/31724409_8bcfe6ea-eb79-4b3e-bf76-d761964f6002_672_672.jpg',
                    namaBarang: 'Sleeping Bed',
                    hargaBarang: '250000',
                },
                {
                    id: '08',
                    image: 'http://cdn.elevenia.co.id/g/3/5/4/2/9/8/20354298_B.jpg',
                    namaBarang: 'Tenda',
                    hargaBarang: '100000',
                },
                {
                    id: '09',
                    image: 'https://id-test-11.slatic.net/p/6/tas-gunung-carrier-consina-centurion-50l-8459-94124583-bfbb9a8ec8c523bfe88b948d03d32989-catalog.jpg_340x340q80.jpg_.webp',
                    namaBarang: 'Carrier',
                    hargaBarang: 300000,
                },
                {
                    id: '10',
                    image: 'https://id-test-11.slatic.net/p/6/spotec-rocky-sepatu-hikingsepatu-gunung-hitammerah-1510135991-78364345-df6e73d8db7ce1f76924fabc601a6521.jpg',
                    namaBarang: 'Sepatu Gunung',
                    hargaBarang: 200000,
                },
                {
                    id: '11',
                    image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/30/31724409/31724409_8bcfe6ea-eb79-4b3e-bf76-d761964f6002_672_672.jpg',
                    namaBarang: 'Sleeping Bed',
                    hargaBarang: '250000',
                },
                {
                    id: '12',
                    image: 'http://cdn.elevenia.co.id/g/3/5/4/2/9/8/20354298_B.jpg',
                    namaBarang: 'Tenda',
                    hargaBarang: '100000',
                },
            ]
        }
    }

    keyExtractor = (item, index) => item.id

    render() {
        return (
            <FlatList
                data={[{ key: 'a' }, { key: 'b' }]}
                renderItem={({ item }) => 
                <Text>Juwar</Text>}
            />
        );
    }
}

export default Transaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    flatList: {
        flex: 1,
        flexDirection: 'row',
    },
    containerImage: {
        flex: 2
    },
    image: {
        width: '40%',
        height: '40%'
    },
    text: {
        flex: 3
    }
});