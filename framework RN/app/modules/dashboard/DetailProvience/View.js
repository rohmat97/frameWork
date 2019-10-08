/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import {
  Container,
  Header,
  Button,
  Left,
  Right,
  Body,
  Icon,
  View,
  Spinner,
  ListItem,
} from 'native-base';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Title, Subtitle, Text } from '../../../components/generic';
import { Colors, Sizes } from '../../../configs';
import Styles from './style';

export default class DetailProvience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      canAction: false,
    };
    this.goTo = this.goTo.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderLoadMore = this.renderLoadMore.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
  }

  componentDidMount() {
    const { getListRing, navigation, company_id } = this.props;
    getListRing({
      company_id,
      provinsi_id: navigation.state.params.provinsi_id,
      region_id: navigation.state.params.region_id,
      page: 1,
    });
  }

  onEndReached() {
    const { canAction } = this.state;
    if (canAction) return;
    const {
      getListPagingRing,
      getListRingResponse,
      navigation,
      company_id,
    } = this.props;
    const { page } = this.state;
    if (page < getListRingResponse.last_page)
      getListPagingRing({
        page: page + 1,
        company_id,
        provinsi_id: navigation.state.params.provinsi_id,
        region_id: navigation.state.params.region_id,
      });
  }

  goTo(nav, params) {
    const { navigation } = this.props;
    const modParams = {
      ...params,
      region: navigation.state.params.region,
      region_id: navigation.state.params.region_id,
      provinsi: navigation.state.params.provinsi,
      provinsi_id: navigation.state.params.provinsi_id,
    };
    navigation.navigate(nav, modParams);
  }

  // eslint-disable-next-line class-methods-use-this
  renderItem(data) {
    return (
      <ListItem onPress={() => {}} key={data.id}>
        <Left />
        <Body>
          <Text>{data.ring_name}</Text>
          <Text note>{data.site_name}</Text>
        </Body>
        <Right>
          <Icon name="ios-arrow-forward" />
        </Right>
      </ListItem>
    );
  }

  renderLoadMore() {
    const { getListPagingRingFetch } = this.props;
    if (!getListPagingRingFetch) return null;
    if (getListPagingRingFetch) {
      return (
        <View style={Styles.list.loading}>
          <Spinner />
        </View>
      );
    }
    return null;
  }

  renderMain() {
    const { getListRingFetch, getListRingResponse } = this.props;
    if (getListRingFetch) {
      return (
        <View style={Styles.list.loading}>
          <Spinner />
        </View>
      );
    }

    return (
      <FlatList
        data={getListRingResponse.data}
        extraData={this.state}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={this.renderLoadMore}
        // refreshing={refreshing}
        // onRefresh={this.onRefresh}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => this.setState({ canAction: true })}
        onScrollEndDrag={() => this.setState({ canAction: false })}
        onMomentumScrollBegin={() => this.setState({ canAction: true })}
        onMomentumScrollEnd={() => this.setState({ canAction: false })}
      />
    );
  }

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
            <Title>
              {navigation.state.params.region
                ? navigation.state.params.region
                : ''}
            </Title>
            <Subtitle>
              {navigation.state.params.provinsi
                ? navigation.state.params.provinsi
                : ''}
            </Subtitle>
          </Body>
          <Right />
        </Header>
        {this.renderMain()}
      </Container>
    );
  }
}

DetailProvience.propTypes = {
  getListRing: PropTypes.func.isRequired,
  getListPagingRing: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
  company_id: PropTypes.string.isRequired,
  getListRingFetch: PropTypes.bool.isRequired,
  getListPagingRingFetch: PropTypes.bool.isRequired,
  getListRingResponse: PropTypes.shape({
    data: PropTypes.arrayOf(Object).isRequired,
    last_page: PropTypes.number.isRequired,
  }).isRequired,
  getListPagingRingResponse: PropTypes.shape({
    data: PropTypes.arrayOf(Object).isRequired,
    last_page: PropTypes.number.isRequired,
  }).isRequired,
};
