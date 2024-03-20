const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
    key_secure:{type: String,}
})


module.exports = mongoose.model('Config', configSchema);