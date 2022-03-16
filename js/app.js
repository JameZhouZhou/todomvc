(function (Vue) {//表示依赖全局VUe

	const items = [
		{
			id: 1,
			content: 'vue.js',
			completed: false
		},
		{
			id: 2,
			content: 'js',
			completed: false
		},
		{
			id: 3,
			content: 'java',
			completed: false
		},
	]
	var app = new Vue({
		el: '#todoapp',
		data: { 
			items: items,
			currentItem: null
		},
		methods: {

			//完成编辑，保存数据
			finishEdit(event,item,index) {
				//1.获取输入框的值
				const content = event.target.value.trim()
				//2.判断是否为空，如果为空，则删除该条数据
				if(!content){

				}
				//3.如果不为空，则保存数据

				//移除.editing编辑状态

			},

			//取消编辑
			cancelEdit() {
				//将currentItem设置为null恒等式editing: item === currentItem就不成立，就可以取消编辑了
				this.currentItem = null
			},

			//进入编辑状态
			toedit(item){
				//将点击的任务项赋值给currentItem，用于.editing模板中显示
				this.currentItem = item
			},
			//移除已完成
			removeCompleted(){	 //removeCompleted: function() {
				this.items = this.items.filter(item => !item.completed)
			},
		
			//移除任务项
			removeItem(index) {
				//移除index位置的1条数据
				this.items.splice(index, 1)
			},
			//添加任务项
			addItem(event){
				console.log('addItem',event.value)
				//1.获取文本框输入的数据
				const content  = event.target.value.trim()
				//2.判断数据为空，则什么都不做
				if(!content.length){
					return 
				}
				//3.如果不为空，则添加到数组中
				//生成id
				const id = this.items.length + 1
				this.items.push({
					id,
					content,
					completed: false
				})
				event.target.value=""
			}
		},
		computed:{
			//双向绑定所以是冒号
			//复选款状态
			toggle: {
				//任务列表去更新复选框
				//点击单选按钮会调用get方法
				get(){	//get: function() {
				console.log('get',this.remaining)
				return this.remaining === 0 // return  true
				},
				//复选框更新任务列表
				//点击复选框会调用set方法
				// //1. 当点击 checkbox 复选框后状态变化后，就会触发该方法运行,
				// 迭代出数组每个元素,把当前状态值赋给每个元素的 completed
				set(newStatus){	//set: function() {
				console.log('set')
				this.items.forEach(	//function(item){
					(item)=>{
						item.completed = newStatus
					})
				}
			},
			//剩余未完成任务数  数组的filter方法所以返回的是数组
			//单向绑定所以是方法体
			remaining(){ 	//remaining: function(){}
				
				 	const itemsA =  this.items.filter(function (item){	
						 console.log(item.completed)
						 if(item.completed==false){
							return !item.completed
						 }
					})

					console.log(itemsA[0].completed)
				
								      	// 入参     出参
					// return this.items.filter(item =>!item.completed).length
			}
		}
	
})

})(Vue);
