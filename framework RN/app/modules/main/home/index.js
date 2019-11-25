/* eslint-disable react/require-optimization */
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { Button } from 'native-base';
import { getMhs } from '../mainActions';

const BUTTONS = ['Edit', 'Delete', 'Cancel'];

const CANCEL_INDEX = 2;

class Home extends Component {
  
    
    constructor(props) {
        super(props);
            this.state = {
            selectedCountry: null,
            selected2: undefined,
            selectedFilter: null,
            searchKey: null,
            selectedSort: '',
            statusSort: false,
            name: null,
            address: null,
            phone: null,
            status: false,
            edit: false,
            valid: {
                nama: '',
                nim: '',
            },
    };
    this.filter = ['All', 'NAMA', 'NIM'];
    this.sort = ['NAMA', 'NIM'];
    }

  componentWillMount() {}

  componentDidMount() {
    getMhs();
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>ckckkc</Text>
        <FlatList
          ref="listRef"
          data={this.props.quotes}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
        <TouchableHighlight
          style={styles.addButton}
          underlayColor="#ff7043"
          onPress={() => Actions.new_quote()}
        >
          <Text style={{ fontSize: 25, color: 'white' }}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }



    const mapStateToProps = state => ({
        tableData: state.main.tableData,
    });

const mapDispatchToProps = {
  return bindActionCreators(ReduxActions, dispatch);
};

// function mapDispatchToProps(dispatch) {
//   return {
//   };
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(items);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },

  addButton: {
    alignItems: 'center',
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderRadius: 50 / 2,
    borderWidth: 1,
    bottom: 20,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 50,
  },

  author: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8 * 2,
  },

  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },

  quote: {
    fontSize: 14,
    marginTop: 5,
  },

  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});
