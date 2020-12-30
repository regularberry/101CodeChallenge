import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-elements';

const ResultsList = ({ totalHits, results, onEndReached, onItemPress, listRef }) => {
    return (
    <View style={styles.containerView}>
        { totalHits != null ? <Text style={styles.totalHits}>Total Results: {totalHits}</Text> : null  }
        <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            columnWrapperStyle={{flexWrap: 'wrap'}}
            data={results}
            horizontal={false}
            keyExtractor={(item, index) => `${item.id}` + index}
            numColumns={4}
            onEndReachedThreshold='0.5'
            onEndReached={onEndReached}
            ref={listRef}
            renderItem={({ item }) => 
                <View style={styles.resultsItem}>
                    <TouchableOpacity onPress={() => onItemPress(item)}>
                        <Image
                            source={{ uri: item.previewURL }}
                            style={{
                                aspectRatio: 1,
                                width: 150
                            }}
                            resizeMode='contain'
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </TouchableOpacity>
                </View>
            }
            style={styles.results}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    containerView: { flex: 1 },
    results: { margin: 15 },
    resultsItem: { padding: 10 },
    totalHits: {
        marginLeft: 15,
        marginTop: 15
    }
});

export default ResultsList;