import { NEW_SEARCH_START, REQUEST_FAILED, NEW_SEARCH_SUCCESS, LOADED_MORE_RESULTS } from '../actions';

const initialState = {
    totalHits: null,
    loadedResults: [],
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    // action === { type: 'NEW_SEARCH_SUCCESS', payload: { totalHits: number, results: array }}
    // action === { type: 'LOADED_MORE_RESULTS', payload: { results: array } }
    // action === { type: 'NEW_SEARCH_START', payload: {} }
    // action == { type: 'REQUEST_FAILED', payload: { error: string }}

    switch (action.type) {
        case NEW_SEARCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case NEW_SEARCH_SUCCESS:
            return {
                loading: false,
                error: null,
                totalHits: action.payload.totalHits,
                loadedResults: action.payload.results
            };
        case LOADED_MORE_RESULTS:
            return { 
                ...state, 
                loading: false,
                error: null,
                loadedResults: [...state.loadedResults, ...action.payload.results]
            };
        default:
            return state;
    }
};