/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'events',
  attributes: {

    title : { type: 'string' },

    event_date : { type: 'date' },

    edition : { type: 'integer' },

    run_id : { type: 'integer' }
  }
};
