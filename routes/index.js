const router = require("koa-router")();
const Sequelize = require("sequelize");
const model = require("../model");

router.get("/qwe", async (ctx, next,id) => {
  let test = model.G_TEST;
  var qwe = await test.findAll({
    where: {
      name6: "0"
    }
  });
  console.dir(qwe[0].id);
  await ctx.render("index", {
    title: ctx.query.id
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  };
});

module.exports = router;
