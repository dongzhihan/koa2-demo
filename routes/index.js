const router = require("koa-router")();
const Sequelize = require("sequelize");
 const model = require("../model");
router.get("/qwe", async (ctx, next,id) => {
   let test = model.test_g;
   var qwe = await test.findAll({
    where: {
      name:'dzh' 
    }
  });
 
  ctx.body =qwe
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
