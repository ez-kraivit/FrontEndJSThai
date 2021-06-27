export default ({redirect,store,route})=>{
    if(store.state.uid == null && NotPathUserRole(route)){
        redirect('/')
    }
    if(store.state.uid != null && PathUserRole(route)){
        redirect('/profile')
    }
}

let NotPathUserRole = (route)=>{
    if(route.matched.some(record => record.path == '/profile')){
        return true
    }
}

let PathUserRole = (route)=> {
    if(route.matched.some(record => record.path == '/login')){
        return true
    }
}