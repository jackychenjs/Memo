import app from '../app'

const home = r => require.ensure([], () => r(require('../views/home/home')), 'home')
const profile = r => require.ensure([], () => r(require('../views/profile/profile')), 'profile')
//const gallary = r => require.ensure([], () => r(require('../views/gallary/gallary')), 'gallary')

export default [{
    path: '/',  // top router -> index.html
    component: app, // second router -> app.vue
    children: [
        // redirect to home
        {
            path: '',
            redirect: '/home'
        },
        // website's home page
        {
            path: '/home',
            component: home
        },
        // my profile page
        {
            path: '/profile',
            component: profile
        }
        // // gallary page
        // {
        //     path: '/gallary',
        //     component: gallary
        // },
        // // demo pages
        // {
        //     path: '/demo',
        //     component: demo,
        //     children: [

        //     ]
        // },
        // // tools page
        // {
        //     path: '/tools',
        //     component: tools
        // }
    ]
}]
