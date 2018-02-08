/**
 * MenuItem.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'menu_item',
  attributes: {

    title : { type: 'string' },

    menu_id : { type: 'integer' },

    parent_id : { type: 'integer' },

    link : { type: 'string' },

    page_id : { type: 'integer' },

    menu: {
      columnName: "menu_id",
      model: "menu"
    },

    page: {
      columnName: 'page_id',
      model: 'page'
    }
  }
};
