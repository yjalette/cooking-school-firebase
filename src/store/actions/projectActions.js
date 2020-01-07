export const createProject = project => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('classes').add({
            ...project,
            author: 'admin',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS'}, project)
        }).catch(err => {
            dispatch({ type: "CREATE_PROJECT_ ERROR"}, err)
        })  
    }
}

export const updateProject = (projectId, updatedProject) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('classes').doc(projectId).update(updatedProject).then(() => {
            console.log('update success')
        }).catch(err => {
            dispatch({ type: "UPDATE_PROJECT_ ERROR"}, err)
        })  
    }
}

export const deleteProject = project => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('classes').doc(project.id).delete().then(() => {
            console.log('delete success')
        }).catch(err => {
            dispatch({ type: "DELETE_PROJECT_ ERROR"}, err)
        })  
    }
}