import React, { Component } from 'react';
import { Container, Spinner, Content, Text, Item, Input, Button, } from 'native-base';
import { Dimensions } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');

class AddCircle extends Component {
    constructor() {
        super();
        this.state = {
            circleName: '',
            loading: false,
        }
    }

    addcircle() {
        this.setState({ loading: true })
        console.log(this.state.circleName);
        const { circleName } = this.state;
        var db = firebase.auth().currentUser.uid;
        var key = firebase.database().ref('Circle/').push().key;
        let circle = {
            circleName,
            admin: db,
            key1: key,
            members: [db]
        }
        firebase.database().ref('Circle/' + key).set(circle).then(() => {
            this.setState({ loading: false })
            alert('Circle created')
        })
    }
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: 'white', paddingTop: 50, justifyContent: 'center', alignItems: 'center', }} >
                <Content>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', }}>Enter Your Circle Name</Text>
                    <Item style={{ marginTop: 30, paddingLeft: 40 }} rounded >
                        <Input onChangeText={(circleName) => this.setState({ circleName })} placeholder='Enter Circle Name' />
                    </Item>
                    <Button onPress={this.addcircle.bind(this)} style={{ marginTop: 30, backgroundColor: 'pink', marginLeft: 70 }} rounded large >
                        <Text>Create</Text>
                    </Button>
                    {this.state.loading ? <Spinner /> : <Text />}
                </Content>
            </Container>
        )
    }
}

export default AddCircle;