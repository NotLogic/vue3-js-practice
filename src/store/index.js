import VueStore, {
  createStore
} from 'vuex'
console.log('VueStore:', VueStore)
const store = createStore({
  state () {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
export default store