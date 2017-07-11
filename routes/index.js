const router = require("koa-router")();
const Sequelize = require("sequelize");
const model = require("../model");
router.get("/qwe", async(ctx, next, id) => {
  let test = model.test_g;
  var qwe = await test.findById({
    where: {
      name: 'dzh'
    }
  });

  ctx.body = qwe
});

router.post("/login", async(ctx, next) => {
  let user = model.user;
  var qwe = await user.findAll({
    where: {
      name: ctx.request.body.name,
      password: ctx.request.body.password
    }
  })
  if (qwe.length > 0) {
    ctx.body = true;
  } else {
    ctx.body = false;
  }
});



router.get("/string", async(ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async(ctx, next) => {
  ctx.body = {
    title: "koa2 json"
  };
});

module.exports = router;