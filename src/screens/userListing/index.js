import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
class UserListing extends React.Component {
  constructor(props) {
    super(props);
  }

  goToRoom = () => {
    Actions.rooms();
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(38,39,43)'}}>
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
                onPress={this.goToRoom}>
                <Image
                  style={{width: 50, height: 50}}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1NiTF9cf8Kseo07RaKO2NZNTBZColi7J8WOnw12YHbYY0iVi1w&s',
                  }}
                />
                <Text style={{color: 'white'}}>JOHN DOE</Text>
                <Text style={{color: 'white'}}>></Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default UserListing;
