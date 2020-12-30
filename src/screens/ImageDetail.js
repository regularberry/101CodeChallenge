import React from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';

const ImageDetail = ({ navigation }) => {
  const item = navigation.getParam('item');
  
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.header}>
          <Text style={styles.textTitle}>User: {item.user}</Text>
          <Text style={styles.textBody}>Tags: {item.tags}</Text>
          <Text style={styles.textBody}>Resolution: {item.imageWidth}x{item.imageHeight}</Text>
        </View>
        <View style={styles.imageContainer}>
        <Image
            source={{ uri: item.largeImageURL }}
            style={{
              width: '100%',
              aspectRatio: item.imageWidth / item.imageHeight,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginLeft: 15,
    padding: 5,
  },
  textTitle: {
    fontSize: 30,
  },
  textBody: {
    fontSize: 20,
  },
  imageContainer: {
    padding: 15
  }
});

export default ImageDetail;
