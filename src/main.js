import 'css/style.css';

import Vue from 'vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */

window.addEventListener('hashchange', function () {
	let hashName = location.hash;
	app.hashName = hashName;
})

const app = new Vue({
	el: '#app',
	data:{
		inputVal: '',
		todoList: [],
		editTodo: null,
		oldTodo: null,
		hashName: '#/',
	},
	computed:{
		remain(){//剩余
			return this.todoList.filter(todo => !todo.completed).length; //返回completed为false的所有项
		},

		isAll:{
			get(){
				return this.remain === 0;//当剩余0项待办时，设置checkbox为true
			},
			set(newIsAll){
				this.todoList.forEach( (todo, index) => {
					//将所有todo的completed与isAll保持一致
					todo.completed = newIsAll;
				});
			}
		},

		todoListFiltered(){
			if (this.hashName === '#/') {
				return this.todoList;
			} else if (this.hashName === '#/active') {
				return this.todoList.filter(todo => !todo.completed);
			} else {
				return this.todoList.filter(todo => todo.completed);
			}
		},
	},
	directives:{
		focus(el,binding){
			if (binding.value) {
				el.focus();
			}
		}
	},
	methods:{
		addTodo(){
			if (!this.inputVal) {
				alert('请输入内容！');
			} else {
				this.todoList.push({
					id:Math.random(),
					content:this.inputVal,
					completed:false
				});
				this.inputVal = '';
				}
		},

		deleteTodo(i){
			this.todoList.splice(i,1);
		},

		handleEditTodo(todo){
			this.oldTodo = JSON.parse(JSON.stringify(todo)); //cancleEdit取消编辑时，恢复成oldTodo
			this.editTodo = todo;
		},

		commitEdit(todo,i){
			//离开edit模式
			this.editTodo = null;

			//如果编辑清空，则删除该项
			if(!todo.content){
				this.deleteTodo(i);
			}
		},

		cancleEdit(todo,i){
			//离开edit模式
			this.editTodo = null;

			todo.content = this.oldTodo.content;
		},

		clearCompletedTodo(){
			this.todoList = this.todoList.filter(todo => !todo.completed);
		},
	},
})


//管理另一个vue实例
new Vue({
	el: '#footer',
})