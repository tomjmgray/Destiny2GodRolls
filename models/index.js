const mongoose = require('mongoose');
const connectionString= process.env.MONGODB_URI || 'mongodb://localhost:27017/d2gr';
const configObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
};

mongoose.connect(connectionString, configObject);

mongoose.connection.on('connected', () => {console.log('Connected to Mongo')});

module.exports = {
    Users: require('./Users')
};
