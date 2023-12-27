const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express(); 

mongoose.connect('mongodb+srv://gabriel:gab*012021@cluster0.50dcf.mongodb.net/newpay-db?retryWrites=true&w=majority');
//mongoose.connect('');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});