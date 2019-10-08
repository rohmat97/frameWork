import React, { PureComponent } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, Item, Input } from 'native-base';
import { Colors, Sizes } from '../../configs';
import { setUrlModal as setUrlModalProps } from '../../bootstrap/bootstrapActions';

class Url extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      url: props.url,
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
  }

  onChangeText(value) {
    this.setState({
      url: value,
    });
  }

  onChangeUrl() {
    const { url } = this.state;
    const { setUrl, setUrlModal } = this.props;
    setUrl({ url });
    setUrlModal(false);
  }

  render() {
    const { url } = this.state;
    const { changeUrl, backPress, setUrlModal } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={changeUrl}
        onRequestClose={backPress}
      >
        <View style={Styles.fullModal}>
          <View style={Styles.contentModal}>
            <View style={Styles.header}>
              <Text style={Styles.text}>Change URL Server</Text>
            </View>
            <View style={Styles.content}>
              <Item rounded style={Styles.item}>
                <Input
                  type="text"
                  placeholder="Url"
                  style={Styles.input}
                  value={url}
                  onChangeText={this.onChangeText}
                />
              </Item>
            </View>
            <View style={Styles.footer}>
              <Button
                style={Styles.btnContent}
                transparent
                full
                onPress={this.onChangeUrl}
              >
                <Text style={Styles.text}>SET URL</Text>
              </Button>
              <Button
                style={Styles.btnContent}
                transparent
                full
                onPress={() => setUrlModal(false)}
              >
                <Text style={Styles.text}>CLOSE</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  url: state.session.url,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Url);

Url.defaultProps = {
};

Url.propTypes = {
  changeUrl: PropTypes.bool.isRequired,
  backPress: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

const Styles = StyleSheet.create({
  btnContent: {
    flex: 1,
  },
  content: {
    backgroundColor: Colors.main.grey,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  contentModal: {
    backgroundColor: Colors.main.primary,
    borderRadius: 25,
    height: Sizes.screen.width - 200,
    width: Sizes.screen.width - 64,
  },
  footer: {
    bottom: 0,
    flexDirection: 'row',
  },
  fullModal: {
    alignItems: 'center',
    backgroundColor: Colors.main.baseBlack,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    opacity: 0.8,
  },
  header: {
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 16,
    top: 0,
  },
  input: {
    fontFamily: Sizes.fontFamily,
    marginHorizontal: 12,
  },
  item: {
    backgroundColor: Colors.main.baseWhite,
  },
  text: {
    color: Colors.main.secondary,
  },
});
