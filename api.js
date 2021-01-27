var Mock = require('mockjs')
var Random=Mock.Random
Random.extend({
    keyWord: function() {
        var keyWords = ['好','耐用','会回购','喜欢','有点丑','容易脏']
        return this.pick(keyWords)
    },
    sex:function(){
        var sexes=['male','female']
        return this.pick(sexes)
    }
})
var storeData=Mock.mock({
    "item|10-30":[
        {"itemID|0-100":1}
    ]
})
var itemData=Mock.mock({
    "itemID|0-100":1,
    "keyWord|5-10":[
        {"comment":"@keyWord",
         "sex":"@sex"
    }],
    "consultNum|0-1000":0,
    "OrderAfterConsultScale|0.0-9":0,
    "salesNum|0-1000":0,
})

//function
