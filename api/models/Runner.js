/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'people',
  attributes: {

    fname : { type: 'string' },

    lname : { type: 'string' },

    born : { type: 'integer' },

    results: {
      collection: 'result',
      via: 'runner'
    }
  }
};
