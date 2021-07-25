const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
// cors 跨域
app.use(cors())
// use res.body
app.use(express.json())


require('./plugins/db')(app)
// admin routers
require('./routes/admin/index')(app)
require('./routes/admin/test')(app)


app.listen(port, (err) => {
    if (err) {
        console.log(`Listen err:`, err)
        return
    }
    console.log(`Example app listening at http://localhost:${port}`)
})