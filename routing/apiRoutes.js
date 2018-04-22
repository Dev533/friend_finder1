var profiles = require("../app/data/friends.js");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(profiles);
  });

  app.post("/api/friends", function(req, res) {
      profiles.push(req.body);
    });
  
};
