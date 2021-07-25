
module.exports = (app) => {

    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })


    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // craete
    router.post('/', async (req, res) => {
        let model = await res.Model.create(req.body)
        res.send(creatRes({ data: model }))
    })
    // update
    router.put('/:id', async (req, res) => {
        let model = await res.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(creatRes({ data: model }))
    })
    // findall
    router.get('/', async (req, res) => {
        let findOption = {}
        if(req.params.resource === "categories"){
            findOption.populate = "parent"
        }
        // 因为 parent 在定义字段时添加了集合关联 所以这里可以使用 populate 进行填充
        let categoryList = await res.Model.find().setOptions(findOption).limit(10)
        res.send(creatRes({ data: categoryList }))
    })
    // findOne
    router.get('/:id', async (req, res) => {
        let model = await res.Model.findById(req.params.id)
        res.send(creatRes({ data: model }))
    })
    // delete
    router.delete('/:id', async (req, res) => {
        let model = await res.Model.findByIdAndDelete(req.params.id)
        res.send(creatRes({ data: model }))
    })

    app.use('/admin/api/rest/:resource', (req,res,next)=>{
        const inflection = require('inflection')
        const Model = require(`../../models/${inflection.classify(req.params.resource)}`)
        res.Model = Model
        next()
    }, router)
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