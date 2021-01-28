var Mock = require('mockjs')
var Random=Mock.Random

var data={
    storeID:233,
    itemID:555,
    order:[1,3,0,0,2,0,0,0],
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
    consume:function(){
        var _consume=['中低','中等','中高']
        return this.pick(_consume)
    },
    type:function(){
        var _type=['好评','中评','差评']
        return this.pick(_type)
    }
})

//——————————————————————————————————————————————————————————————————————————————————
//——————————————————————————————————————————————————————————————————————————————————
//一、数据生成
//为输入的storeID生成商家信息 (一串itemID)
var makeStore=function(storeID){
    var storeData=Mock.mock({
        "item|5-20":[
            {"itemID|0-100":1}
        ]
    })
    storeData.storeID=storeID
    return storeData
}

//为输入的itemID生成商品信息
var getItem=function(itemID){
    var itemData=Mock.mock({
        "keyWord|5-100":[
            {"comment":"@keyWord",
             "type":"@type",
             "sex":"@sex",
             "age|15-79":9,
             "consume":"@consume"
        }],
        "consultNum|0-1000":0,
        "OrderAfterConsultRate|0.0-9":0,
        "salesNum|12":[
            {"salesPerMonth|0-200":0}
        ],
    })
    itemData.itemID=itemID
    return itemData
}

//商家信息处理，获取itemID数组
var getStore=function(storeID){
    var storeInfo=makeStore(storeID)
    var itemIDList=[]
    storeInfo.item.forEach((_item,index)=>{
        itemIDList.push(_item.itemID)
    })
    return itemIDList
}


//——————————————————————————————————————————————————————————————————————————————————
//——————————————————————————————————————————————————————————————————————————————————
//二
//基础函数
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


//——————————————————————————————————————————————————————————————————————————————————
//——————————————————————————————————————————————————————————————————————————————————
//三
//功能函数

//商品部份
//1.消费者画像  年龄段、性别、消费水平  e.g.[{"10":1,"20":3,"30":8,"40":5,"50":5,"60":5,"70":4},{"female":19,"male":12},{"中高":5,"中等":18,"中低":8}]
var i_getConsumer=function(itemData){
    var age=[]//1.年龄，生成柱状图
    var sex=[]//2.性别，生成饼图
    var consume=[]//3.收入水平,生成饼图
    itemData.keyWord.forEach((item,index) => {
        age.push(Math.floor(item.age/10)*10)
        sex.push(item.sex)
        consume.push(item.consume)
    });
    return [_reduce(age),_reduce(sex),_reduce(consume)]
}


//2.好/中/差评率                       e.g. {好评: '0.27', 中评: '0.49', 差评: '0.24'}
var i_getCommentType=function(itemData){
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
var i_getConsultNum=function(itemData){
    return itemData.consultNum
}

//4.咨询后购买率
var i_getOrderAfterConsultRate=function(itemData){
    return itemData.OrderAfterConsultRate.toFixed(3)
}

//5.销售量
var i_getSalesNum=function(itemData){
    return itemData.salesNum
}

//6.词云
var i_getKeyWord=function(itemData){
    var comment=[]
    itemData.keyWord.forEach((item) => {
        comment.push(item.comment)
    });
    return _reduce(comment)
}



//店铺部分
//1.营业额

var s_getSalesNum=function(itemList){
    var arr=new Array(12).fill(0)
    itemList.forEach((cuVal)=>{
        var itemData=getItem(cuVal)
        itemData.salesNum.forEach((cuVal,index)=>{
            arr[index]+=cuVal.salesPerMonth
        })
    })
    return arr
}

//——————————————————————————————————————————————————————————————————————————————————
//——————————————————————————————————————————————————————————————————————————————————
//四
//入口函数
var getOrder=function(order){
    var obj={}
    obj.idx=[]
    if(data.order[0]==1){//商品
        var itemData=getItem(data.itemID)
        order.forEach((item,index)=>{
            //console.log('顺序',item,'选择',index)
            if(item) {
            switch(index){
                case 0:;
                case 1,2,3:
                   obj.consumer=i_getConsumer(itemData)
                case 4:
                    obj.comment=i_getCommentType(itemData)
                    
                case 5:
                    obj.consult=i_getConsultNum(itemData)
                    
                case 6:
                    obj.saleAfterConsult=i_getOrderAfterConsultRate(itemData)
                    
                case 7:
                    obj.keyWord=i_getKeyWord(itemData)
                    
                case 8://单个商品的销售量
                    obj.sale=i_getSalesNum(itemData)   
                     
            }
        }
        })
        return obj
    }
    else{//全店

    }
}
console.log(JSON.stringify(getOrder(data.order)))
