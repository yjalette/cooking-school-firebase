const initState = {
    name: "",
    email: "",
    message: ""
}

const contactReducer = ( state = initState, action) => {
    switch(action.type){
        case 'SEND_MESSAGE':
            console.log("message was sent");
            return state;
        case 'SEND_MESSAGE_ERROR':
            console.log("message sending error");
            return state;
        default:
            return state;
    }
}

export default contactReducer;