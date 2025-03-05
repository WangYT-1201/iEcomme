export	default ({
	state:{
		a:1,
		list:[
			{
				name:"张三",
				tel:"1111111",
				city:"杭州市西湖区",
				details:"2号楼",
				isDefault:false
			},
			{
				name:"李四",
				tel:"1111111",
				city:"杭州市西湖区",
				details:"2号楼",
				isDefault:true
			}
		]
	},
	mutations: {
	  createPath(state,obj){
		  state.list.unshift(obj);
	  },
	  updatePath(state,{index,item}){
		  for(let key in item){
			  state.list[index][key]=item[key];
		  }
	  },
	  removePath(state){
		  state.list.forEach(v=>{
			  if(v.isDefault){
				  v.isDefault=false;
			  }
		  })
	  }
	},
	actions: {
	  createPathFn({commit},obj){
		  if(obj.isDefault){
			  commit('removePath');
		  }
		  commit('createPath',obj);
	  },
	  updatePathFn({commit},obj){
		  if(obj.item.isDefault){
			  commit('removePath');
		  }
		  commit('updatePath',obj);
	  }
	},
	getters: {
	  
	}
})