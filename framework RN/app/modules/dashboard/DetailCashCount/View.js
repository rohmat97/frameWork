import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { Title } from '../../../components/generic';
import { Colors } from '../../../configs';

export default class DetailCashCount extends Component {
  shouldComponentUpdate() {}

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header
          style={{ backgroundColor: Colors.main.primary }}
          androidStatusBarColor={Colors.main.primary}
        >
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon
                name="ios-arrow-back"
                style={{ color: Colors.main.secondary }}
              />
            </Button>
          </Left>
          <Body>
            <Title>{navigation.state.params.Account_Name}</Title>
          </Body>
          <Right />
        </Header>
        <Content />
      </Container>
    );
  }
}

DetailCashCount.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
};
