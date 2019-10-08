/* eslint-disable lines-between-class-members */
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
  Footer,
  FooterTab,
} from 'native-base';
import PropTypes from 'prop-types';
import Svg from 'react-native-svg';
import { VictoryPie, VictoryLegend } from 'victory-native';
import { Title, Text } from '../../../components/generic';
import { Colors, Sizes } from '../../../configs';
import Styles from './style';

export default class Provience extends Component {
  constructor(props) {
    super(props);

    this.renderPieChart = this.renderPieChart.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  componentDidMount() {
    const { getSumRingByProvience, navigation, company_id } = this.props;
    getSumRingByProvience({
      company_id: company_id,
      region_id: navigation.state.params.regionId,
    });
  }

  goTo(nav, params) {
    const { navigation } = this.props;
    const modParams = {
      ...params,
      region: navigation.state.params.region,
      region_id: navigation.state.params.regionId,
    };
    navigation.navigate(nav, modParams);
  }

  renderPieChart() {
    const { getSumRingByProvienceResponse } = this.props;
    return (
      <Svg height={Sizes.screen.width + 64} width={Sizes.screen.width - 32}>
        <VictoryLegend
          standalone={false}
          colorScale="qualitative"
          x={0}
          y={270}
          gutter={20}
          title="Legend"
          centerTitle
          style={{
            border: { stroke: Colors.main.inActive },
            title: { fontFamily: Sizes.fontFamily },
            labels: { fontFamily: Sizes.fontFamily },
          }}
          data={getSumRingByProvienceResponse}
        />
        <VictoryPie
          standalone={false}
          colorScale="qualitative"
          height={Sizes.screen.width - 64}
          width={Sizes.screen.width - 32}
          data={getSumRingByProvienceResponse}
          labels={({ datum }) => datum.y}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPress: () => {
                  return [
                    {
                      target: 'labels',
                      mutation: props => {
                        return this.goTo('DetailProvience', {
                          provinsi: props.datum.name,
                          provinsi_id: props.datum.Provinsi_ID,
                        });
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </Svg>
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
            <Title>{navigation.state.params.region}</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={Styles.content}>
          {this.renderPieChart()}
        </Content>
        <Footer style={Styles.footer}>
          <FooterTab style={Styles.footerTab}>
            <Button
              style={Styles.button}
              rounded
              onPress={() =>
                this.goTo('DetailProvience', {
                  provinsi: 'All',
                  provinsi_id: 0,
                })
              }
            >
              <Text style={Styles.text}>See All Ring</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

Provience.propTypes = {
  getSumRingByProvience: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
  company_id: PropTypes.string.isRequired,
  getSumRingByProvienceResponse: PropTypes.arrayOf(Object).isRequired,
};
