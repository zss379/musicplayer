import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Music from '@/components/Music.vue'
import Video from '@/components/Video'
import Radio from '@/components/Radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'Music',
    	component: Music
    },
    {
    	path: '/video',
    	name: 'Video',
    	component: Video
    },
    {
    	path: '/radio',
    	name: 'Radio',
    	component: Radio
    }
  ]
})
