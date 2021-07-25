module.exports = async () => {
    const Category = require('../../models/Category')


    let res = await Category.find()
    console.log("Bowen ~ file: test.js ~ line 12 ~ res ~ res", res)
    Category.ensureIndexes((err, res) => {
        console.log("Bowen ~ file: test.js ~ line 9 ~ Category.ensureIndexes ~ res", res)

    });
}