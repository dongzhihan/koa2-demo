var router = require("koa-router")();
var model = require("../model");
var db = require("../db");
var Sequelize = require("sequelize");
router.post("/login", async (ctx, next) => {
  let user = model.user;
  var pass = await user.findAll({
    where: {
      name: ctx.request.body.name,
      password: ctx.request.body.password
    }
  });
  if (pass.length > 0) {
    ctx.body = pass[0].id;
  } else {
    ctx.body = false;
  }
});

router.get("/query", async (ctx, next) => {
  ctx.body = await db.query(ctx.query.sql, {
    type: Sequelize.QueryTypes.SELECT
  });
});
router.get("/code", async (ctx, next) => {
  var codeVar = {};
  await eval(ctx.query.code);
  ctx.body = codeVar;
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  };
});

module.exports = router;
