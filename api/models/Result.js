/**
 * Result.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "result",
  attributes: {
    event_id: { type: "integer" },

    place: { type: "integer" },

    finish_time: { type: "time" },

    category: { type: "string" },

    team: { type: "string" },

    startn: { type: "string" },

    runner: {
      columnName: "runner_id",
      model: "runner"
    }
  }
};
