// Types
export const FETCH_GIPHY_IMAGES = 'FETCH_GIPHY_IMAGES';
export const FETCH_GIPHY_IMAGES_SUCCESS = 'FETCH_GIPHY_IMAGES_SUCCESS';
export const FETCH_GIPHY_IMAGES_ERROR = 'FETCH_GIPHY_IMAGES_ERROR';

export const RESET_GIPHY_STATUS = 'RESET_GIPHY_STATUS';

export const initialState = {
    data: [],
	error: false,
    errorDetail: null,
    loading: false,
    success: false
};

// Action Creators
export const fetchGiphyImages = (arr) => ({
    type: FETCH_GIPHY_IMAGES,
    searchTerms: arr.map(item => item.value).join(' ')
});

export const resetGiphyStatus = () => ({
    type: RESET_GIPHY_STATUS
});

// Reducers
export const reduceTrigger = state => ({
	...state,
	error: false,
    loading: true,
    success: false
});

export const reduceError = (state, { errorDetail }) => {
    return ({
        ...state,
        loading: false,
        error: true,
        errorDetail
    })
};

export const reduceSuccess = (state, data) => ({
	...state,
    data,
    loading: false,
    success: true
});

export const reduceResetStatus = state => ({
    ...state,
    error: false,
    loading: false,
    success: false
})

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_GIPHY_IMAGES:
			return reduceTrigger(state);
		case FETCH_GIPHY_IMAGES_ERROR:
			return reduceError(state, action);
		case FETCH_GIPHY_IMAGES_SUCCESS:
			return reduceSuccess(state, action.payload);
        case RESET_GIPHY_STATUS:
            return reduceResetStatus(state);
        default:
			return state;
	}
}
