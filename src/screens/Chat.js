import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'firebase';
import { TouchableOpacity, Image } from 'react-native';
import { View, Text } from 'native-base';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        let uid = props.navigation.getParam('sender')
        this.state = {
            // person: "Toko/Gunung",
            // uid: "user",
            person: props.navigation.getParam('receiver'),
            //uid: props.navigation.getParam('sender'),
            myUid: uid._id,
            myName: uid.user.name,
            myAvatar: uid.image,
            text: '',
            messagesList: []
        }
        console.warn('receiver')
        console.warn(this.props.navigation.state.params.receiver)
        console.warn('sender')
        console.warn(this.props.navigation.state.params.sender)
    }
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         headerVisible: true,
    //         headerTitle: navigation.getParam("name", null),
    //         // headerTitle: "Toko/Gunung",
    //         headerTitleStyle: {
    //             width: '90%',
    //             textAlign: 'right',
    //             color: 'white'
    //         },
    //         headerTintColor: 'white',
    //         headerStyle: {
    //             elevation: null,
    //             backgroundColor: '#34c759'
    //         },
    //     }
    // }
    componentDidMount = async () => {
        // this.setState({
        //     myUid: User.id,
        //     myName: User.name,
        //     myAvatar: User.avatar
        // })

        await firebase.database().ref('messages/').child(this.state.myUid).child(this.state.person.idStore).on('child_added', (val) => {
            this.setState((prevState) => {
                return {
                    messagesList: GiftedChat.append(prevState.messagesList, val.val())
                }
            })
        })
    }



    sendMessage = async () => {
        if (this.state.text.length > 0) {
            let msgId = firebase.database().ref('messages').child(this.state.myUid).child(this.state.person.idStore).push().key;
            let updates = {};
            let message = {
                _id: msgId,
                text: this.state.text,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    _id: this.state.myUid,
                    name: this.state.myName,
                    avatar: this.state.myAvatar
                },
            }
            updates["messages/" + this.state.myUid + '/' + this.state.person.idStore + '/' + msgId] = message;
            updates["messages/" + this.state.person.idStore + '/' + this.state.myUid + '/' + msgId] = message;
            firebase.database().ref().update(updates);
            this.setState({ text: '' })

        }
        else {
            alert('Please type a message first')
        }

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', padding: 10, fontWeight: 'bold', fontSize: 20, color: 'white', backgroundColor: '#34c759' }}>
                    {this.state.person.nameStore}
                </Text>
            <GiftedChat
                text={this.state.text}
                messages={this.state.messagesList}
                user={{
                    _id: this.state.myUid
                }}
                onInputTextChanged={(text) => { this.setState({ text: text }) }}
                onSend={this.sendMessage}
            />
            </View>
        );
    }
}