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
			items: items
		},
		methods: {
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
			remaining(){
				/**
				 * 	return this.items.filter(function (item){	
						return !item.completed
					}).length
				 */
													// 入参     出参
				return this.items.filter(item =>!item.completed).length
			}
		}
	})

})(Vue);
