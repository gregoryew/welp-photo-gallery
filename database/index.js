// I used the following code to directly import the data to mongoDB
// mongoimport --jsonArray --db welp --collection photos --drop --file ~/Downloads/photoData.json


// Schema for the dataset can be showed as below.


// Schema({
//     photoId: Number,
//     photoUrl: String,
//     id: Number,
//     date: Date,
//     userId: Number,
//     userName: String,
//     userFollowers: Number,
//     userReviews: Number,
// })

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/welp');

var Schema = mongoose.Schema;

var photoSchema = new Schema({
    photoId: Number,
    photoUrl: String,
    id: Number,
    date: Date,
    userId: Number,
    userName: String,
    userFollowers: Number,
    userReviews: Number,
})

var Photo = mongoose.model('Photo', photoSchema);


module.exports.getById = (businessId, callback) => {
    Photo.find({id:businessId}, (error, results) => {
        if (error) {
            callback(error, null)
        } else {
            callback(null, results)
        }
    })
}

// module.exports.postItem = (params, callback) => {
//     let query = {
//         item: params[0],
//         quantity: params[1]
//     }

//     let individualItem = new Grocery(query);
//     individualItem.save((error, results) => {
//         if (error) {
//             callback(error, null)
//         } else {
//             callback(null, results)
//         }
//     })
// }

// module.exports.getAll(5, (error,results)=> {
//     if (error) {
//         console.log('error')
//     } else {
//         console.log(results)
//     }
// })