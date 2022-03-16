//新数组中的元素是通过检查指定数组中符合条件的所有元素 ；不会改变原始数组；
//return后面根据布尔值判断结果，true的话就添入新的filter数组中，false的话，不会添进filter的数组中。

let arr = [
    {
        age: 10,
        name: "张三"
    },
    {
        age: 20,
        name: "李四"
    }
]

let newArr = arr.filter((item) => {
    if (item.age > 15) {
        item.age = 500
    }
    return true
})
console.log(newArr);
//[ { age: 10, name: '张三' }, { age: 500, name: '李四' } ]