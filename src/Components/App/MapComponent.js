import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps'
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button } from 'native-base';


const { width, height } = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.098
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      changingData: {
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
    }
  }

  render() {
    <Container>
      <Header style={styles.header}>
        <Left>
          {/* <Button onPress={() => { this._drawer._root.open() }} transparent >
            <Icon name='menu' style={{ color: '#000000' }} />
          </Button> */}
        </Left>
        <Body>
          <Title>Map Page</Title>
        </Body>
      </Header>
      <View style={styles.view}>
        <MapView
          region={this.state.initialPosition}
          onRegionChange={(region) => { this.setState({ initialPosition: region, changingData: { latitudeDelta: region.latitudeDelta, longitudeDelta: region.longitudeDelta } }) }}
          style={styles.map}
          showsCompass={true}
          loadingEnabled={true}
          showsUserLocation={true}
          showsBuildings={true}
          provider='google'
        >
        </MapView>
      </View>
    </Container>
  }
}