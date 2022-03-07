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
	new Vue({
		el: '#todoapp',
		data: { 
			items: items
		}
	})

})(Vue);
