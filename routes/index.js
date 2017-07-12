const router = require("koa-router")();
const model = require("../model");
 

router.post("/login", async(ctx, next) => {
  let user = model.user;
  var pass = await user.findAll({
    where: {
      name: ctx.request.body.name,
      password: ctx.request.body.password
    }
  })
  if (pass.length > 0) {
    ctx.body = pass[0].id;
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