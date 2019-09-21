const state={
    userInfo:'',  //userInfo
    userId:''
};
const getters={
  getUserInfo(state){ //承载变化的collects
    return state.userInfo;
  },
  getUserId(state){ //承载变化的collects
    return state.userId;
  }
};
const mutations={
     setUserInfo(state,playload){ //如何变化collects,插入items
        state.userInfo = playload.userInfo
     },
     setUserId(state,playload){ //如何变化collects,插入items
      state.userInfo = playload.userId
   }
 };
const actions={
    asyncsetUserInfo(context,playload){
        context.commit('setUserInfo',playload)
    },
    asyncsetUserId(context,playload){
      context.commit('setUserId',playload)
  }
};
export default {
     namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
     state,
     getters,
     mutations,
     actions
}