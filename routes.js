"use strict";

modulule.exports = function (app) {
  var jsonku = require("./contoller");

  app.route("/");
  .get(jsonku.index);
};
