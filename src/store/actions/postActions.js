export const createPost = post => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('posts').add({
           ...post,
           author: 'admin'
        }).then(() => {
           dispatch({ type: 'CREATE_POST_SUCCESS' })
        }).catch( err => {
          console.log("err is here")
          dispatch({ type: 'POST_ERROR'})
        })
  }
}