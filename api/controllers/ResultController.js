/**
 * ResultsController
 *
 * @description :: Server-side logic for managing Results
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getResults: function(req, res) {
    const eventId = req.param("eventId");
    Result.find({ where: { event_id: eventId }, sort: "place" })
      .populate("runner")
      .exec(callback.bind(null, res));
  }
};

function callback(res, err, data) {
  if (err) {
    return res.json(err);
  } else {
    return res.json(data);
  }
}
