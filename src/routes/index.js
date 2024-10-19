import Home from "~/pages/Home"
import SignIn from "~/pages/SignIn"
import UserPage from "~/pages/User"


const publicRoutes = [
    
    { path: '/', component: Home},
    { path: '/sign-in', component: SignIn},
    { path: '/user', component: UserPage}

]


const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}
