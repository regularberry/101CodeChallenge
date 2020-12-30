import pixabay from '../api/pixabay';

export const ITEMS_PER_PAGE = 20;

export function searchRequest(searchTerm, page = 1) {
    const response = pixabay.get('/', {
        params: {
            q: searchTerm,
            per_page: ITEMS_PER_PAGE,
            page,
            safesearch: true
        }
    });
    return response
}