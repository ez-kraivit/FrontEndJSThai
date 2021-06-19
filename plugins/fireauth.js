import { auth } from '@/services/fireinit.js'

export default (context) =>{
    const { store } = context

    return auth.onAuthStateChanged(user=>{
        if(user){
            store.commit();
        }
    })
}