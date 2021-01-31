/**
 * 仓库    #275812 阿里巴巴练习生计划todo
 * 在线编辑 http://rap2.taobao.org/repository/editor?id=275812
 * 仓库数据 http://127.0.0.1:38080/repository/get?id=275812
 * 请求地址 http://127.0.0.1:38080/app/mock/275812/:method/:url
 *    或者 http://127.0.0.1:38080/app/mock/template/:interfaceId
 *    或者 http://127.0.0.1:38080/app/mock/data/:interfaceId
 */

(function() {
  let repositoryId = 275812
  let interfaces = [{
      id: 1857237,
      name: '示例接口',
      method: 'GET',
      url: '/example/1610963151430',
      request: {
        "foo": "@ctitle"
      },
      response: {
        "string|1-10": "★",
        "number|1-100": 1,
        "boolean|1-2": true,
        "regexp": {},
        "array|1-10": [{
          "foo|+1": 1,
          "bar|1-10": "★"
        }],
        "items": [1, true, "hello", {}],
        "object": {
          "foo|+1": 1,
          "bar|1-10": "★"
        },
        "placeholder": "@title"
      }
    },
    {
      id: 1857243,
      name: '获取todo列表',
      method: 'GET',
      url: '/todo/list',
      request: {},
      response: {
        "isOk": 1,
        "errMsg": "",
        "data|3-8": [{
          "id|+1": 1,
          "name": "todo:@ctitle"
        }]
      }
    },
    {
      id: 1857267,
      name: '删除todo',
      method: 'DELETE',
      url: '/todo',
      request: {
        "id": 1
      },
      response: {
        "isOk": 1,
        "errMsg": ""
      }
    },
    {
      id: 1857270,
      name: '添加新的todo',
      method: 'PUT',
      url: '/todo',
      request: {
        "name": ""
      },
      response: {
        "isOK": 1,
        "errMsg": ""
      }
    },
    {
      id: 1870659,
      name: '示例接口',
      method: 'GET',
      url: '/example/1612024057685',
      request: {
        "foo": "@ctitle"
      },
      response: {
        "string|1-10": "★",
        "number|1-100": 1,
        "boolean|1-2": true,
        "regexp": {},
        "array|1-10": [{
          "foo|+1": 1,
          "bar|1-10": "★"
        }],
        "items": [1, true, "hello", {}],
        "object": {
          "foo|+1": 1,
          "bar|1-10": "★"
        },
        "placeholder": "@title"
      }
    },
    {
      id: 1870660,
      name: '消费者画像',
      method: 'GET',
      url: '/consumer',
      request: {},
      response: {}
    },
    {
      id: 1870661,
      name: '商铺信息',
      method: 'GET',
      url: '/store',
      request: {},
      response: {
        "soldNumber|1-100": 1,
        "sex": {
          "male|1-100": 1,
          "female|1-100": 1
        },
        "age": {
          "old|1-100": 1,
          "young|1-100": 1,
          "middle|1-100": 1
        },
        "comment|3-8": [{
          "content": "@ctitle"
        }],
        "highTop3|3": [{
          "name": "@title",
          "value|1-100": 1
        }],
        "lowTop3|3": [{
          "name": "@title",
          "value|1-100": 1
        }],
        "bestTop3|3": [{
          "name": "@title",
          "value|1-100": 1
        }],
        "worstTop3|3": [{
          "name": "@title",
          "value|1-100": 1
        }]
      }
    },
    {
      id: 1870662,
      name: '商品信息',
      method: 'GET',
      url: '/good',
      request: {},
      response: {
        "age|7": [{
          "type|+10": 10,
          "value|1-100": 1
        }],
        "sex": {
          "male|1-100": 1,
          "female|1-100": 1
        },
        "consume": {
          "高|1-100": 1,
          "中|1-100": 1,
          "低|1-100": 1
        },
        "evaluation": {
          "好评|1-100": 1,
          "中评|1-100": 1,
          "差评|1-100": 1
        },
        "consult|1-100": 1,
        "buyAfterconsult|0-1.2-2": 1,
        "soldNumber|1-100": 1,
        "comment": "@ctitle"
      }
    }
  ]

  let RAP = window.RAP || {
    protocol: 'http',
    host: '127.0.0.1:38080',
    interfaces: {}
  }
  RAP.interfaces[repositoryId] = interfaces
  window.RAP = RAP
})();