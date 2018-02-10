/**
 * RestController
 *
 * @description :: Server-side logic for managing models
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function customHook(modelName) {
  const Model = sails.models[req.param("model")];
}

module.exports = {
  index: function(req, res) {
    const Model = sails.models[req.param("model")];
    
    var data = Model.find();
    for(let index in Model.associations) {
      data.populate(Model.associations[index].alias);
    }

    data.exec(callback.bind(null, res));
  },
  fields: function(req, res) {
    const Model = sails.models[req.param("model")];
    let fields = Model.attributes;

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
  //console.log(data);
  Article.find(data.id).then(a => {
    //console.log(a);
  })
  //data.tags.add([2, 4]);
  if (err) {
    console.log(err);
    return res.json(err);
  } else {
    console.log(data);
    return res.json(data);
  }
}
