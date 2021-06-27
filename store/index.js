import Vuex from 'vuex';
import firebase , { auth, GoogleProvider } from '@/services/fireinit.js'

const createStore = () =>{
    return new Vuex.Store({
        state: () =>({
            user:null,
            uid:null,
            email:null,
            role:2,
            token:null
        }),
        mutations: {
            setUser(state,payload){
                state.user = payload
            },
            setUid(state,payload){
                state.uid = payload
            },
            setEmail(state,payload){
                state.email = payload
            },
            setToken(state,payload){
                state.token = payload
            },
            setEverything(state,payload){
                state.user = payload
                state.uid = payload
                state.token = payload
                state.email = payload
            }
        },
        actions: {
            signInWithEmailPassword({commit},payload){
                return auth.signInWithEmailAndPassword(payload.email,payload.password)
            },
            signUpEmailAndPassword({commit},payload){
                return auth.createUserWithEmailAndPassword(payload.email,payload.password)
            },
            signOut({commit}){
                auth.signOut().then(()=>{
                    commit('setEverything',null)
                })
            }
        }

    })
}

export default createStore