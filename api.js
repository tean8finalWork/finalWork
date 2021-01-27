var Mock = require('mockjs')
var Random=Mock.Random

var data={
    store:[],
    item:[]
}
Random.extend({
    keyWord: function() {
        var keyWords = ['好','耐用','会回购','喜欢','有点丑','容易脏']
        return this.pick(keyWords)
    },
    sex:function(){
        var sexes=['male','female']
        return this.pick(sexes)
    },
    salary:function(){
        var _salary=['中低','中等','中高']
        return this.pick(_salary)
    },
    type:function(){
        var _type=['好评','中评','差评']
        return this.pick(_type)
    }
})
var storeData=Mock.mock({
    "item|10-30":[
        {"itemID|0-100":1}
    ]
})
var itemData=Mock.mock({
    "itemID|0-100":1,
    "keyWord|5-100":[
        {"comment":"@keyWord",
         "type":"@type",
         "sex":"@sex",
         "age|15-79":9,
         "salary":"@salary"
    }],
    "consultNum|0-1000":0,
    "OrderAfterConsultRate|0.0-9":0,
    "salesNum|0-1000":0,
})

//初始化
var init=function(){    
    data.store=storeData
    data.item=itemData
}
//init()
// console.log(data.store)

//基础功能函数
var _reduce=function(array){
    return array.reduce((total,currentVal)=>{
        if(currentVal in total)
        {
            total[currentVal]++
        }
        else {
            total[currentVal]=1
        }
        return total
    },{})
}
//功能函数
//商品部份
//1.消费者画像
var i_getConsumer=function(){
    // console.log(data.item)
    // console.log(JSON.stringify(itemData.keyWord))

    var age=[]//1.年龄，生成柱状图
    var sex=[]//2.性别，生成饼图
    var salary=[]//3.收入水平,生成饼图
    itemData.keyWord.forEach((item,index) => {
        age.push(Math.floor(item.age/10)*10)
        sex.push(item.sex)
        salary.push(item.salary)
    });
    return [_reduce(age),_reduce(sex),_reduce(salary)]
}

//2.好/中/差评率
var i_getCommentType=function(){
    var comment=[]
    var len=itemData.keyWord.length
    itemData.keyWord.forEach((item) => {
        comment.push(item.type)
    });
    comment=_reduce(comment)
    for (var idx in comment){
        comment[idx]=parseFloat(comment[idx]/len).toFixed(2)
    }
    return comment

}
//3.咨询量
var i_getConsultNum=function(){
    return itemData.consultNum
}

//4.咨询后购买率
var i_getOrderAfterConsultRate=function(){
    return itemData.OrderAfterConsultRate.toFixed(3)
}

//5.词云
var i_getKeyWord=function(){
    var comment=[]
    itemData.keyWord.forEach((item) => {
        comment.push(item.comment)
    });
    return _reduce(comment)
}

