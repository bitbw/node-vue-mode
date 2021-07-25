module.exports = (app) => {

    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')

    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // craete
    router.post('/categories', async (req, res) => {
        let model = await Category.create(req.body)
        res.send(creatRes({ data: model }))
    })
    // update
    router.put('/categories/:id', async (req, res) => {
        let model = await Category.findByIdAndUpdate(req.params.id, req.body)
        res.send(creatRes({ data: model }))
    })
    // findall
    router.get('/categories', async (req, res) => {
        console.log(" Category.find()", Category.find().populate('parent'))
        // 因为 parent 在定义字段时添加了集合关联 所以这里可以使用 populate 进行填充
        let categoryList = await Category.find().populate('parent')
        console.log("Bowen ~ file: index.js ~ line 25 ~ router.get ~ categoryList", categoryList)
        res.send(creatRes({ data: categoryList }))
    })
    // findOne
    router.get('/categories/:id', async (req, res) => {
        let model = await Category.findById(req.params.id)
        res.send(creatRes({ data: model }))
    })
    // delete
    router.delete('/categories/:id', async (req, res) => {
        let model = await Category.findByIdAndDelete(req.params.id)
        res.send(creatRes({ data: model }))
    })

    app.use('/admin/api', router)
}

function creatRes(res = {}) {
    return {
        ...{
            data: {},
            code: "200",
            message: "success"
        },
        ...res
    }
}