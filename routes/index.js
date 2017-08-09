var router = require("koa-router")();
var model = require("../model");
var db = require("../db");
var Sequelize = require("sequelize");

//////////关于orientdb连接配置
var ODatabase = require("orientjs").ODatabase;
var db = new ODatabase({
  host: "10.10.1.10",
  port: 2424,
  username: "root",
  password: "123456",
  name: "TEST"
});
//////////////////
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
router.get("/orientCode", async (ctx, next) => {
  let a =await db.class.create('nodejsV1')
  ctx.body =  a.name;
});
router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  };
});

module.exports = router;
