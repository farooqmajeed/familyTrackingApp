import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Header from './Header';
import { Container, Grid, Col, Row, Card, CardItem, Body, Footer, FooterTab, Icon, Text, Left, Button, Title, Content, Thumbnail } from 'native-base';
const window = Dimensions.get('window');


export default class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Image style={Style.backImage} source={require("../../Assets/welcome1.png")}>
                    {/* <Header style={{ marginLeft: 15 }} name="Family Tracker APP" iconName="menu" /> */}
                    <Content>
                        {/* <Home /> */}
                    </Content>
                </Image>
            </Container>
        );
    }
}

const Style = {
    backImage: {
        flex: 1,
        width: window.width * 1,
        height: window.height * 1
    },
    mainWindow: {
        flex: 1,
        display: "flex",
    },
    icon: { width: 40, height: 40 },
}