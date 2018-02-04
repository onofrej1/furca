/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'article',
  autoUpdatedAt: false,
  //autoCreatedAt: false,
  attributes: {

    title : { type: 'string' },

    author : { type: 'string' },

    source : { type: 'string' },

    content : { type: 'text' },

    createdAt: {
      type: 'datetime',
      columnName: 'created_at'
    },

    tags: {
      collection: 'tag',
      via: 'articles'
    }
  }
};
