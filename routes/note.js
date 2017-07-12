const router = require('koa-router')()
const model = require("../model");
router.prefix('/note')

router.get('/', function (ctx, next) {

})
//创建文件夹
router.post('/folder', async function (ctx, next) {
    let folder = model.folder;

    var pass = await folder.findAll({
        where: {
            userid: ctx.request.body.userid,
            folderName: ctx.request.body.foldername
        }
    })
    if (pass.length == 0) {
        await folder.create({
            type: ctx.request.body.type,
            userid: ctx.request.body.userid,
            folderName: ctx.request.body.foldername,
            createDate:ctx.request.body.createdate,
        })
        ctx.body=0;
    } else {  
    }
})

//查询所有文件夹
router.post('/folder', async function (ctx, next) {
    let folder = model.folder;

    var pass = await folder.findAll({
        where: {
            userid: ctx.request.body.userid,
            folderName: ctx.request.body.foldername
        }
    })
    if (pass.length == 0) {
        await folder.create({
            type: ctx.request.body.type,
            userid: ctx.request.body.userid,
            folderName: ctx.request.body.foldername,
            createDate:ctx.request.body.createdate,
        })
        ctx.body=0;
    } else {  
    }
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router