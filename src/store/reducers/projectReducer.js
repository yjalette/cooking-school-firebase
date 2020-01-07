

const initState = {}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            return {
                ...state
            }
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error');
            return {
                ...state
            }
        case 'DELETE_PROJECT_SUCCESS':
            console.log('del project reducer');
            return {
                ...state
            }
        case 'UPDATE_PROJECT_SUCCESS':
            console.log('update project reducer');
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export default projectReducer;