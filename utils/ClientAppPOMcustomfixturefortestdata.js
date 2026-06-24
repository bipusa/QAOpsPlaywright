const base = require('@playwright/test');

exports.customtest = base.test.extend({
        testDataForOrder : {
            username: "thapa.bipusa@outlook.com",
            password: "Test@practise0",
            productname: "ADIDAS ORIGINAL"
        }
    }
)