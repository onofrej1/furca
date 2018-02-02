/**
 * FileController
 *
 * @description :: Server-side logic for managing Files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var parse = require("csv-parse");
//var multer = require("multer");

module.exports = {
  readCsv: function(req, res) {
    var fs = require("fs");
    let fileName = req.param("fileId");
    let folder = "assets/media/vysledky-hamburg/";

    fs.readFile(folder + fileName + ".csv", "utf8", function(err, data) {
      if (err) throw err;
      parse(data, { comment: "#" }, function(err, output) {
        res.send(output);
      });
    });
  },
  files: function(req, res) {
    const path = req.body.path;
    let files = dirTree(path, {});

    res.send(files);
  },
  upload: function(req, res) {
    const path = req.body.path;
    const dirname = "../../" + path.substring(2);
    req.file("uploadedFile").upload({ dirname }, function(err, uploadedFiles) {
      let files = dirTree(path, {});
      res.send(files);
    });
  }
};

function dirTree(filename) {
  var fs = require("fs");
  var path = require("path");

  var stats = fs.lstatSync(filename),
    info = {
      path: filename,
      src: filename.split("assets/")[1],
      name: path.basename(filename)
    };

  if (stats.isDirectory()) {
    info.type = "folder";
    info.children = fs.readdirSync(filename).map(function(child) {
      return dirTree(filename + "/" + child);
    });
  } else {
    info.type = "file";
  }

  return info;
}
