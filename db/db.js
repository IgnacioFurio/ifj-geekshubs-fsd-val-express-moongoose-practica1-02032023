const { error } = require('console')
const mongoose = require('mongoose')


const db = () => {
    mongoose.connect(
        process.env.MONGO_URI
    ).then(
        console.log("conection stablished")
    ).catch(
        console.log(error.message)
    )
}

module.exports = db