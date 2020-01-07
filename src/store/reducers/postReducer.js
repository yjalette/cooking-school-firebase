const initState = {
    'title': "test post"
};

const postReducer = ( state = initState, action ) => {
    switch(action.type){
        case 'CREATE_POST_SUCCESS':
            console.log("act post ")
            return state;
        case 'POST_ERROR':
            console.log("act post error")
            return state;
        default:
            return state
    }
}

export default postReducer;