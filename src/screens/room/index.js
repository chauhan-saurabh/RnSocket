import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {GiftedChat} from 'react-native-gifted-chat';

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  goBack = () => {
    Actions.pop();
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(38,39,43)'}}>
        <View
          style={{flex: 0.1, justifyContent: 'center', paddingHorizontal: 20}}>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={{color: 'white', fontSize: 20}}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.9}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </View>
    );
  }
}

export default Room;
