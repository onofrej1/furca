/**
 * RestController
 *
 * @description :: Server-side logic for managing rests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    const Model = sails.models[req.param("model")];
    //res.json(Model.attributes);
    Model.find().exec(callback.bind(null, res));
  },
  fields: function(req, res) {
    const Model = sails.models[req.param("model")];
    let fields = Model.attributes;
    for(let key in fields) {
      if(fields[key].collection) delete fields[key];
    }
    res.json(fields);
  },
  update: function(req, res) {
    const Model = sails.models[req.param("model")];
    console.log(req.body);
    //res.json(req.body);
    Model.update({ id: req.param("id") }, req.body).exec(callback.bind(null, res));
  },
  create: function(req, res) {
    const Model = sails.models[req.param("model")];
    Model.create(req.body).exec(callback.bind(null, res));
  },
};

function callback(res, err, data) {
  if (err) {
    return res.json(err);
  } else {
    return res.json(data);
  }
}
