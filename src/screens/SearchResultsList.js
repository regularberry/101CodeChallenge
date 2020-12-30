import React, { useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { searchRequest, ITEMS_PER_PAGE } from '../api/search';
import { newSearchSucceeded, loadedMoreResults, newSearchStarted, requestFailed } from '../actions';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ResultsList from '../components/ResultsList';
import { ActivityIndicator } from 'react-native';

const SearchResultsList = ({ error, isLoading, navigation, pagesLoaded, results, totalHits, totalPages }) => {
  const dispatch = useDispatch()
  const flatListRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.containerView}>
        <SearchBar 
            autoCapitalize="none"
            onChangeText={setSearchTerm}
            onEndEditing={ () => {
              flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
              dispatch(newSearchStarted());
              searchRequest(searchTerm)
                .then((response) => dispatch(newSearchSucceeded(response.data)))
                .catch((error) => dispatch(requestFailed(error.message)));
            }}
            placeholder="Search for images..."
            returnKeyType="search"
            style={styles.searchBar}
            value={searchTerm}
        />
        { error != null ? <Text>Error: {error}</Text> : null }
        { isLoading ? <ActivityIndicator style={styles.loading} size="large" color="#000000"/> : 
          <ResultsList
            listRef={flatListRef}
            results={results}
            totalHits={totalHits}
            onItemPress={(item) => navigation.navigate('ImageDetail', { item })}
            onEndReached={() => {
              if (pagesLoaded < totalPages) {
                searchRequest(searchTerm, pagesLoaded + 1)
                  .then((response) => dispatch(loadedMoreResults(response.data)))
                  .catch((error) => dispatch(requestFailed(error.message)));
              }
            }}
          />
        }
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.loading,
  pagesLoaded: Math.floor(state.loadedResults.length / ITEMS_PER_PAGE),
  results: state.loadedResults,
  totalHits: state.totalHits,
  totalPages: Math.floor(state.totalHits / ITEMS_PER_PAGE)
});

const styles = StyleSheet.create({
    safeView: { flex: 1 },
    containerView: { flex: 1 },
    searchBar: { flexShrink: 0 },
    loading: { margin: 15 }
});

export default connect(mapStateToProps)(SearchResultsList);
