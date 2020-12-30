export const LOADED_MORE_RESULTS = 'LOADED_MORE_RESULTS';
export const NEW_SEARCH_START = 'REQUEST_START';
export const NEW_SEARCH_SUCCESS= 'NEW_SEARCH';
export const REQUEST_FAILED = 'REQUEST_FAILED'

export const newSearchSucceeded = (data) => {
    return { 
        type: NEW_SEARCH_SUCCESS, 
        payload: {
            'totalHits': data.totalHits,
            'results': data.hits
        }
    };
};

export const newSearchStarted = () => {
    return { type: NEW_SEARCH_START, payload: {} };
};

export const requestFailed = (error) => {
    return { 
        type: REQUEST_FAILED, 
        payload: { 'error': error }
    };
};

export const loadedMoreResults = (data) => {
    return { 
        type: LOADED_MORE_RESULTS, 
        payload: { 'results': data.hits }
    };
};