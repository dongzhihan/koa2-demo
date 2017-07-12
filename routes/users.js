const router = require('koa-router')()
const model = require("../model");
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/userInfo',async function (ctx, next) {
  let user = model.user;
  var userDto = await user.findById(ctx.query.id)
  ctx.body = userDto;
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router