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

class RoomListing extends React.Component {
  constructor(props) {
    super(props);
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
          <FlatList
            data={[1, 224, 24, 24, 4, 24, 4]}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: 'black',
                    marginVertical: 10,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    padding: 20,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  key={index}
                  onPress={() => Actions.room()}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9jeYytpimjAekhHiRBF0BTabLCyBgFnUzf02GZEwFlN461Qe&s',
                    }}
                  />
                  <Text style={{color: 'white'}}>ROOM {index + 1}</Text>
                  <Text style={{color: 'white'}}>></Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default RoomListing;
