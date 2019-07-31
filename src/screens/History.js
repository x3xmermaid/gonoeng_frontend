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
import NumberFormat from 'react-number-format';

class Transaction extends Component {

    constructor(props) {
        // console.disableYellowBox = true;
        super(props)
        this.state = {
            total: 0,
            history: [
                {
                    id: '01',
                    namaToko: 'Rent Ini',
                    harga: '600000',
                    tanggalPinjam: '27-06-2019',
                    tanggalKembali: '30-06-2019',
                },
                {
                    id: '02',
                    namaToko: 'Rentaller',
                    harga: '700000',
                    tanggalPinjam: '23-05-2019',
                    tanggalKembali: '26-05-2019',
                },
                {
                    id: '03',
                    namaToko: 'Rental Outdoor',
                    harga: '800000',
                    tanggalPinjam: '18-05-2019',
                    tanggalKembali: '23-05-2019',
                },
                {
                    id: '04',
                    namaToko: 'Aziz Rent',
                    harga: '650000',
                    tanggalPinjam: '18-04-2019',
                    tanggalKembali: '25-04-2019',
                },
            ]
        }
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
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>History Transaksi</Text>
                </View>
                <FlatList
                    data={this.state.history}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item, total }) => {
                        return (
                            <View style={styles.flatList}>
                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={{ justifyContent: 'flex-end', fontSize: 17, color: '#ffffff', flex: 4 }}>{item.namaToko}</Text>
                                    <Text style={{ fontSize: 20, color: '#ffff00', flex: 3 }}>{this.priceFormat(item.harga)}</Text>
                                </View>
                                <Text style={{ fontSize: 15, color: '#ffffff', }}>Tanggal peminjaman {item.tanggalPinjam}</Text>
                                <Text style={{ fontSize: 15, color: '#ffffff', }}>Tanggal pengembalian {item.tanggalKembali}</Text>
                            </View>
                        )
                    }
                    }
                />
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
        backgroundColor: '#34c759',
        borderRadius: 10,
        flex: 3,
        margin: 5,
        padding: 10,
    },
});