const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    dummy: [],
}

const dummyReducer = function(state=initialState, action){
    switch (action.type) {
        case "DUMMY_PENDING":
            return  {...state, fetching:true};
            break;
        case "DUMMY_FULFILLED":
            return  {...state, fetching:false};
            break;
        case "DUMMY_REJECTED":
            return  {...state, fetching:false, error: action.payload};
            break;
        default:
            break;
    }
    return state;
}


export default dummyReducer