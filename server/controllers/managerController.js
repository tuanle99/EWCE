const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Manager.find(req.query)
      // .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Manager.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Manager.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Manager.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  login: function (req, res) {
    db.Manager.findOne({
      username: req.body.username,
      password: req.body.password,
    })
      .select(["-password"])
      .then((data) => {
        if (data) {
          req.session.save((err) => {
            if (err) {
              throw err;
            }
            req.session.user_id = data._id;
            req.session.logged_in = true;
            res.json({
              message: "success",
              user: data,
            });
          });
        } else {
          res.status(401).json({
            message: "invalid username or password",
          });
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  authenticate: function (req, res) {
    if (req.session && req.session.logged_in) {
      res.json({ userId: req.session.user_id, logged_in: true });
    } else {
      res.json({ logged_in: false });
    }
  },
  logout: function (req, res) {
    console.log("Logout");
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
};
