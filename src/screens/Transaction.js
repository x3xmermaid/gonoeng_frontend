import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity,
} from "react-native";
import Moment from 'react-moment';
import moment from 'moment'

let total = 0

class Transaction extends Component {

    constructor(props) {
        // console.disableYellowBox = true;
        super(props)
        this.state = {
            total: 0,
            lama: 7,
            transaction: [
                {
                    id: '01',
                    image: 'https://id-test-11.slatic.net/p/6/tas-gunung-carrier-consina-centurion-50l-8459-94124583-bfbb9a8ec8c523bfe88b948d03d32989-catalog.jpg_340x340q80.jpg_.webp',
                    namaBarang: 'Carrier',
                    qty: 5,
                    hargaBarang: 300000,
                    lama: 7,
                },
                {
                    id: '02',
                    image: 'https://id-test-11.slatic.net/p/6/spotec-rocky-sepatu-hikingsepatu-gunung-hitammerah-1510135991-78364345-df6e73d8db7ce1f76924fabc601a6521.jpg',
                    namaBarang: 'Sepatu Gunung',
                    qty: 6,
                    hargaBarang: 200000,
                    lama: 7,
                },
                {
                    id: '03',
                    image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/30/31724409/31724409_8bcfe6ea-eb79-4b3e-bf76-d761964f6002_672_672.jpg',
                    namaBarang: 'Sleeping Bed',
                    qty: 9,
                    hargaBarang: '250000',
                    lama: 7,
                },
                {
                    id: '04',
                    image: 'http://cdn.elevenia.co.id/g/3/5/4/2/9/8/20354298_B.jpg',
                    namaBarang: 'Tenda',
                    qty: 2,
                    hargaBarang: '100000',
                    lama: 7,
                },
                {
                    id: '05',
                    image: 'https://id-test-11.slatic.net/p/6/tas-gunung-carrier-consina-centurion-50l-8459-94124583-bfbb9a8ec8c523bfe88b948d03d32989-catalog.jpg_340x340q80.jpg_.webp',
                    namaBarang: 'Carrier',
                    qty: 5,
                    hargaBarang: 300000,
                    lama: 7,
                },
                {
                    id: '06',
                    image: 'https://id-test-11.slatic.net/p/6/spotec-rocky-sepatu-hikingsepatu-gunung-hitammerah-1510135991-78364345-df6e73d8db7ce1f76924fabc601a6521.jpg',
                    namaBarang: 'Sepatu Gunung',
                    qty: 6,
                    hargaBarang: 200000,
                    lama: 7,
                },
                {
                    id: '07',
                    image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/30/31724409/31724409_8bcfe6ea-eb79-4b3e-bf76-d761964f6002_672_672.jpg',
                    namaBarang: 'Sleeping Bed',
                    qty: 9,
                    hargaBarang: '250000',
                    lama: 7,
                },
                {
                    id: '08',
                    image: 'http://cdn.elevenia.co.id/g/3/5/4/2/9/8/20354298_B.jpg',
                    namaBarang: 'Tenda',
                    qty: 2,
                    hargaBarang: '100000',
                    lama: 7,
                },
                {
                    id: '09',
                    image: 'https://id-test-11.slatic.net/p/6/tas-gunung-carrier-consina-centurion-50l-8459-94124583-bfbb9a8ec8c523bfe88b948d03d32989-catalog.jpg_340x340q80.jpg_.webp',
                    namaBarang: 'Carrier',
                    qty: 5,
                    hargaBarang: 300000,
                    lama: 7,
                },
                {
                    id: '10',
                    image: 'https://id-test-11.slatic.net/p/6/spotec-rocky-sepatu-hikingsepatu-gunung-hitammerah-1510135991-78364345-df6e73d8db7ce1f76924fabc601a6521.jpg',
                    namaBarang: 'Sepatu Gunung',
                    qty: 6,
                    hargaBarang: 200000,
                    lama: 7,
                },
                {
                    id: '11',
                    image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/30/31724409/31724409_8bcfe6ea-eb79-4b3e-bf76-d761964f6002_672_672.jpg',
                    namaBarang: 'Sleeping Bed',
                    qty: 9,
                    hargaBarang: '250000',
                    lama: 7,
                },
                {
                    id: '12',
                    image: 'http://cdn.elevenia.co.id/g/3/5/4/2/9/8/20354298_B.jpg',
                    namaBarang: 'Tenda',
                    qty: 2,
                    hargaBarang: '100000',
                    lama: 7,
                },
            ]
        }
    }

    componentWillMount() {
        this.state.transaction.map((item) => {
            total += parseInt(item.hargaBarang)
        })
    }

    priceFormat(number) {
        var number_string = number.toString(),
            sisa = number_string.length % 3,
            rupiah = number_string.substr(0, sisa),
            ribuan = number_string.substr(sisa).match(/\d{3}/g);

        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        return 'Rp ' + rupiah;
    }

    keyExtractor = (item, index) => item.id

    render() {
        const date = new Date();
        dateNow = moment(date).format('YYYY-MM-DD');
        dateAgo = moment(date).add(this.state.lama, 'day').format('YYYY-MM-DD');
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Detail transaksi</Text>
                </View>
                <FlatList
                    data={this.state.transaction}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item, total }) => {
                        return (
                            <View style={styles.flatList}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.image}
                                />
                                <View style={styles.containerText}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 17, color: '#ffffff', flex: 6}}>{item.namaBarang}</Text>
                                        <Text style={{ fontSize: 17, color: '#ffffff', flex: 1}}>{item.qty}x</Text>
                                    </View>
                                    <Text style={{ fontSize: 20, color: '#ffff00', }}>{this.priceFormat(item.hargaBarang)}</Text>
                                    <Text style={{ fontSize: 15, color: '#ffffff', }}>Tanggal pinjam {dateNow}</Text>
                                    <Text style={{ fontSize: 15, color: '#ffffff', }}>Tanggal kembali {dateAgo}</Text>
                                </View>
                            </View>
                        )
                    }
                    }
                />
                <View style={styles.total}>
                    <Text style={styles.textTotal}>Total Price</Text>
                    < Text style={styles.numberTotal} >{this.priceFormat(total)}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 25 }}>SEWA</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Transaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    flatList: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#34c759',
        borderRadius: 10,
    },
    image: {
        flex: 3,
        margin: 10,
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 5,
    },
    containerText: {
        flex: 7,
        margin: 10,
        marginLeft: 5,
        color: '#111',
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    textTotal: {
        flex: 5,
        alignSelf: 'flex-start',
        fontSize: 15,
    },
    numberTotal: {
        flex: 6,
        alignSelf: 'flex-end',
        fontSize: 22,
    },
    button: {
        backgroundColor: '#34c759',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
    }
});