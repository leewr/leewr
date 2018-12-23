import Index from './pages/Index.js'
import Topic from './pages/Topic.js'
import Crawler from './pages/Crawler.js'
import Crawlers from './pages/Crawlers.js'
import Me from './pages/Me.js'
import Login from './pages/Login.js'
import User from './pages/User.js'

export default [
    {
        path: '/',
        component: Index,
        exact: true
    },
    {
        path: '/topics/:id',
        component: Topic,
        exact: true
    },
    {
        path: '/me',
        component: Me,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/login',
        component: User,
        exact: true
    }
]