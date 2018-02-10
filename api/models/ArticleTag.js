/**
 * ArticleTag.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'article_tag',
  attributes: {
    article:{
      model:'article',
      columnName: 'article_id',
    },
    tag: {
      model: 'tag',
      columnName: 'tag_id'
    }
  }
};
