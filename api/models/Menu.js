/**
 * Menu.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'menu',
  attributes: {

    title : { type: 'string' },

    type : { type: 'string' },

    menuitems: {
      collection: 'menuitem',
      via: 'menu'
    }
  }
};
