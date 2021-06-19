import { auth } from '@/services/fireinit.js'

export default (context) =>{
    const { store } = context
    return auth.onAuthStateChanged(user=>{
        if(user){
            store.commit('setUser',user);
            store.commit('setUid',user.uid);
            store.commit('setEmail',user.email);
            store.commit('setToken',user._lat);
        }
    })
}