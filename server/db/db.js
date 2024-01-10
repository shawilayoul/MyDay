const mongoose = require('mongoose')
const URL = "mongodb+srv://shawil:shawil12@cluster0.evltfnk.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
const DBconnect = () => {
    mongoose.connect(URL).then(() => { console.log("database connected successfully") })
        .catch((error) => console.log(error.message))
}

module.exports = DBconnect