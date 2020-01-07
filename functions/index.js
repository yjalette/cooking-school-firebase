// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);


// const createNotification = (notification => {
//     return admin.firestore().collection('notifications')
//     .add(notification)
//     .then(doc => console.log('notification added', doc))
// })

// exports.projectCreated = functions.firestore
//     .document('classes/{projectId}')
//     .onCreate(doc => {

//         const project = doc.data();
//         const notification = {
//             content: 'Added a new project',

//         }

//         return createNotification(notification);
//     })
