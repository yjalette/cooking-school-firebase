export const createMessage = message => {
    return ( dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('messages').add({
            ...message,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'SEND_MESSAGE'})
        }).catch( err => {
            dispatch({ type: 'SEND_MESSAGE_ERROR'}, err)
        })
    }
}

