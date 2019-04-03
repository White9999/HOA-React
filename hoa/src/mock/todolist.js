import Mock from 'mockjs';

Mock.mock(/\/todoList.mock/,{
    'code':0,
    'data':{
        'list|1-10':[{
            'id|+1':1,
            'title':'Aaaaaaid',
            'status':1
        }]
    },
    'message':'操作成功',
    'systemDate':newDate().getTime()
})