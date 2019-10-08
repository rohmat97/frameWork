import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Left,
  Icon,
  View,
  List,
  ListItem,
  Card,
  Spinner,
} from 'native-base';
import { Image, TouchableWithoutFeedback, Platform } from 'react-native';
import Svg from 'react-native-svg';
import { VictoryPie, VictoryContainer } from 'victory-native';
import PropTypes from 'prop-types';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Toast from 'react-native-simple-toast';
import { Text } from '../../../components/generic';
import InvestImage from '../../../assets/images/png/invest.png';
import EmptyImage from '../../../assets/images/png/empty.png';
import { Colors, Sizes } from '../../../configs';
import {
  Padder as PadderContainer,
  HorizontalScroll as HorizontalScrollContainer,
} from '../../../components/containers';
import Styles from './style';
import { CLEAR_AUTH, SET_COMPANY } from '../../auth/authConstants';
import { GET_COMPANY_FAILED, GET_COMPANY_SUCCESS } from '../dashboardConstants';
import { formatCurrency } from '../../../utils';

export default class DasboardMainView extends Component {
  constructor(props) {
    super(props);

    this.renderSlidingPanel = this.renderSlidingPanel.bind(this);
    this.renderListCompany = this.renderListCompany.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderCard = this.renderCard.bind(this);
    this.goTo = this.goTo.bind(this);
    this.renderRingFoByRegion = this.renderRingFoByRegion.bind(this);
    this.renderSvg = this.renderSvg.bind(this);
  }

  componentDidMount() {
    const { getCashCount, company_id, getSumRingByRegion } = this.props;
    getCashCount({ company_id });
    getSumRingByRegion({ company_id });
  }

  componentDidUpdate(prevProps) {
    const { sessionAction, navigation, dashboardAction } = this.props;
    if (sessionAction === SET_COMPANY) {
      this.panel.hide();
    }

    if (prevProps.sessionAction !== sessionAction) {
      switch (sessionAction) {
        case CLEAR_AUTH:
          navigation.navigate('Login');
          break;
        default:
      }
    }

    if (prevProps.dashboardAction !== dashboardAction) {
      switch (dashboardAction) {
        case GET_COMPANY_SUCCESS:
          this.panel.show(Sizes.screen.height / 1.75);
          break;
        case GET_COMPANY_FAILED:
          Toast.show('Oops server is busy, please try again later', Toast.LONG);
          break;
        default:
      }
    }
  }

  onPressList(item) {
    const { setCompany, getCashCount } = this.props;
    setCompany({
      company_id: item.company_id,
      wh_name: item.wh_name,
      wh_id: item.wh_id,
    });
    getCashCount({ company_id: item.company_id });
  }

  goTo(nav, params) {
    const { navigation } = this.props;
    navigation.navigate(nav, params);
  }

  renderCard() {
    const { getCashCountResponse, getCashCountFetch } = this.props;
    if (getCashCountResponse.length > 0)
      return (
        <HorizontalScrollContainer
          itemSpacing={16.5}
          loading={getCashCountFetch}
        >
          {getCashCountResponse.map(item => {
            return (
              <TouchableWithoutFeedback
                key={item.Account_Number}
                onPress={() =>
                  this.goTo('DetailCashCount', {
                    Acc_ID: item.Acc_ID,
                    Account_Name: item.Account_Name,
                  })
                }
              >
                <Card style={Styles.cardContainer}>
                  <View style={Styles.contentCard}>
                    <View style={Styles.titleCardText}>
                      <Text style={Styles.cardCurrAccount}>
                        {item.Account_Name}
                      </Text>
                      <View style={Styles.cardCurrContainer}>
                        <Text style={Styles.cardCurr}>Rp </Text>
                        <Text style={Styles.cardCurrMoney}>
                          {formatCurrency(item.Balance)}
                        </Text>
                      </View>
                    </View>
                    <View style={Styles.imageCardContainer}>
                      <Image source={InvestImage} style={Styles.cardImage} />
                    </View>
                  </View>
                </Card>
              </TouchableWithoutFeedback>
            );
          })}
        </HorizontalScrollContainer>
      );
    return (
      <HorizontalScrollContainer itemSpacing={16.5} loading={getCashCountFetch}>
        <Card style={Styles.cardContainer}>
          <View style={Styles.contentCard}>
            <View style={Styles.titleCardText}>
              <Text style={Styles.cardCurrAccount}>
                Not Found, Please try again
              </Text>
            </View>
            <View style={Styles.imageCardContainer}>
              <Image source={InvestImage} style={Styles.cardImage} />
            </View>
          </View>
        </Card>
      </HorizontalScrollContainer>
    );
  }

  renderRingFoByRegion() {
    const { getSumRingByRegionResponse } = this.props;
    return (
      <PadderContainer style={Styles.padderRegion}>
        <View>
          <Text
            style={{
              fontSize: Sizes.text.m.size,
              color: Colors.main.baseBlack,
            }}
          >
            Summary Ring By Region
          </Text>
        </View>
        <Card style={Styles.cardRegion}>
          <View style={Styles.cardTotal}>
            <Text>
              Total :{' '}
              {getSumRingByRegionResponse.length > 0
                ? getSumRingByRegionResponse
                    .map(item => Number(item.y))
                    .reduce((sum, y) => sum + y)
                : 0}{' '}
              Rings
            </Text>
          </View>
          {this.renderSvg()}
        </Card>
      </PadderContainer>
    );
  }

  renderSvg() {
    const { getSumRingByRegionResponse, getSumRingByRegionFetch } = this.props;
    if (getSumRingByRegionFetch) return <Spinner />;
    if (getSumRingByRegionResponse.length === 0)
      return (
        <View>
          <Image source={EmptyImage} style={Styles.emptyImage} />
          <Text style={Styles.emptyText}>Nothing here, please try again</Text>
        </View>
      );
    if (Platform.OS === 'android')
      return (
        <Svg>
          <VictoryPie
            containerComponent={<VictoryContainer disableContainerEvents />}
            height={Sizes.screen.width - 96}
            width={Sizes.screen.width - 32}
            colorScale="green"
            data={getSumRingByRegionResponse}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onPress: () => {
                    return [
                      {
                        target: 'data',
                        mutation: props => {
                          return this.goTo('Provience', {
                            region: props.datum.Region,
                            regionId: props.datum.RegionID,
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
    if (Platform.OS === 'ios')
      return (
        <VictoryPie
          containerComponent={<VictoryContainer disableContainerEvents />}
          height={Sizes.screen.width - 96}
          width={Sizes.screen.width - 32}
          colorScale="green"
          data={getSumRingByRegionResponse}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPress: () => {
                  return [
                    {
                      target: 'data',
                      mutation: props => {
                        return this.goTo('Provience', {
                          region: props.datum.Region,
                          regionId: props.datum.RegionID,
                        });
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      );
  }

  renderButton() {
    const { getCompanyFetch, wh_name, getCompany } = this.props;
    return (
      <View style={Styles.padder}>
        <TouchableWithoutFeedback
          onPress={() => (getCompanyFetch ? {} : getCompany())}
        >
          <View style={Styles.buttonCenter}>
            {getCompanyFetch ? (
              <Spinner />
            ) : (
              <Text style={Styles.buttonCenterText}>{wh_name}</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  renderListCompany() {
    const { getCompanyResponse, company_id } = this.props;
    const secondary = {
      ...Styles.textFamily,
      color: Colors.main.secondary,
    };
    const primary = {
      ...Styles.textFamily,
      color: Colors.main.primary,
    };
    return (
      <View style={Styles.listPaddingTop}>
        <List>
          {getCompanyResponse.length > 0 &&
            getCompanyResponse.map(item => {
              return (
                <ListItem
                  key={item.wh_id}
                  onPress={() => this.onPressList(item)}
                >
                  <Left>
                    <Text
                      style={
                        item.company_id === company_id ? primary : secondary
                      }
                    >
                      {item.wh_name}
                    </Text>
                  </Left>
                </ListItem>
              );
            })}
        </List>
      </View>
    );
  }

  renderSlidingPanel() {
    return (
      <SlidingUpPanel
        ref={c => {
          this.panel = c;
        }}
        draggableRange={{ top: Sizes.screen.height - 72, bottom: 0 }}
        minimumDistanceThreshold={1.5}
        minimumVelocityThreshold={0.1}
      >
        <View style={Styles.companyContainer}>
          <PadderContainer>
            <View style={Styles.companySlideIcon}>
              <Icon name="ios-reorder" style={Styles.headerRightIconColor} />
            </View>
            <Text style={Styles.companyHeaderText}>Select Company</Text>
          </PadderContainer>
          {this.renderListCompany()}
        </View>
      </SlidingUpPanel>
    );
  }

  render() {
    const { logout } = this.props;
    return (
      <Container>
        <Content>
          <View style={Styles.headerContainer} />
          <View style={Styles.headerContent}>
            <View style={Styles.headerFlexDirection}>
              <Text style={Styles.headerLeftText}>Today</Text>
              <Icon style={Styles.headerLeftIcon} name="arrow-dropdown" />
            </View>
          </View>
          <View style={Styles.headerRightIcon}>
            <Button transparent onPress={() => logout()}>
              <Icon name="exit" style={Styles.headerRightIconColor} />
            </Button>
          </View>
          {this.renderButton()}
          {this.renderCard()}
          {this.renderRingFoByRegion()}
        </Content>
        {this.renderSlidingPanel()}
      </Container>
    );
  }
}

DasboardMainView.propTypes = {
  logout: PropTypes.func.isRequired,
  getCompany: PropTypes.func.isRequired,
  setCompany: PropTypes.func.isRequired,
  getCashCount: PropTypes.func.isRequired,
  getSumRingByRegion: PropTypes.func.isRequired,
  sessionAction: PropTypes.string.isRequired,
  dashboardAction: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  wh_name: PropTypes.string.isRequired,
  company_id: PropTypes.string.isRequired,
  getCompanyFetch: PropTypes.bool.isRequired,
  getCashCountFetch: PropTypes.bool.isRequired,
  getCompanyResponse: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCashCountResponse: PropTypes.arrayOf(PropTypes.object).isRequired,
  getSumRingByRegionResponse: PropTypes.arrayOf(PropTypes.object).isRequired,
  getSumRingByRegionFetch: PropTypes.bool.isRequired,
};
