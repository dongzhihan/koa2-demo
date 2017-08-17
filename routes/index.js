var router = require("koa-router")();
var xml2js = require("xml2js");
var model = require("../model");
var dbs = require("../db");
var Sequelize = require("sequelize");
require("../public/sql/libs/blockly/blockly_compressed");
require("../public/sql/libs/blockly/blocks_compressed");
require("../public/sql/src/constants");
require("../public/sql/src/generator/sql");
require("../public/sql/src/generator/blocks/commands");
require("../public/sql/src/generator/blocks/fields");
require("../public/sql/src/generator/blocks/functions");
require("../public/sql/src/generator/blocks/operators");
require("../public/sql/src/generator/blocks/values");
require("../public/sql/src/lang/en");
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
  ctx.body = await dbs.query(ctx.query.sql, {
    type: Sequelize.QueryTypes.SELECT
  });

  // await dbs.query(`insert into test values('${i}','${i+1}','${i*2}','${i+2}') `, {

  /*   ctx.body = await dbs.query(`select * from test`, {
    type: Sequelize.QueryTypes.SELECT
  }); */
});
router.get("/code", async (ctx, next) => {
  var codeVar = {};
  await eval(ctx.query.code);
  ctx.body = codeVar;
});
router.get("/orientCode", async (ctx, next) => {
  ctx.body = await db.select().from("Player").all();
});
router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  };
});

//workpase 回传
router.post("/workspace", async (ctx, next) => {
  // var builder = new xml2js.Builder();
  //  xml =  builder.buildObject({xml:ctx.request.body.workspace});
  var workspace = new Blockly.Workspace();

  var xml = Blockly.Xml.textToDom(ctx.request.body.workspace);
  Blockly.Xml.domToWorkspace(xml, workspace);
  var code = SQLBlockly.SQLGen.workspaceToCode(workspace);
  console.log(code)
  ctx.body = {
    title: 1
  };
});
module.exports = router;
