import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button } from 'native-base';

const window = Dimensions.get('window');

class Welcome extends Component {
    render() {
        return (
            <Container>
                {/* <Content> */}
                <Image style={styles.backImage} source={require("../../Assets/main.png")}>
                    {/* <Button> <Text> Continue </Text> </Button> */}

                </Image>
                {/* </Content> */}
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    backImage: {
        flex: 1, width: undefined, height: window.height * 1,
        marginTop: '-40%',
        // flex: 1,
        // width: window.width * 1,
        // height: window.height * 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    mainWindow: {
        flex: 1,
        display: "flex",
    },
    icon: { width: 40, height: 40 },
})

export default Welcome;