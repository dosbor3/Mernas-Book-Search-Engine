const { UserInputError } = require("apollo-server-express");
const { User, Book } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find().sort({createdAt: -1});
        }        
    }
}

module.exports = resolvers;