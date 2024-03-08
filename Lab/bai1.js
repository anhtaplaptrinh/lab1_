import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Bai1 = ({ title, child, backgroundColor, imageSource }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        
        <Text>{title}</Text>
        {child}
      </View>
      {imageSource && <Image source={imageSource} style={styles.image} />}
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Bai1
        title="Header"
        backgroundColor="#aaa456"
        imageSource={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-Aehz4MQr3w1MuCrUP3DUSmakBcAH2nCEe7Qauf66jEW3WVkVNkg60T3QJNA7VBHM2Y&usqp=CAU' }}
      >
        <Text>Đây là Header</Text>
      </Bai1>
     <View style={{marginTop:15}}>
     <Bai1 
        title="Content"
        backgroundColor="#bbb456"
        imageSource={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-Aehz4MQr3w1MuCrUP3DUSmakBcAH2nCEe7Qauf66jEW3WVkVNkg60T3QJNA7VBHM2Y&usqp=CAU' }}
      >
        <Text>Đây là Content</Text>
      </Bai1>
     </View>
     <View style={{marginTop:15}}>
     <Bai1
        title="Footer"
        backgroundColor="#ccc456"
        imageSource={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-Aehz4MQr3w1MuCrUP3DUSmakBcAH2nCEe7Qauf66jEW3WVkVNkg60T3QJNA7VBHM2Y&usqp=CAU' }}
      >
        <Text>Đây là Footer</Text>
      </Bai1>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    textAlign:'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'flex-end', // Đẩy sang phải
  },
});

export default App;
