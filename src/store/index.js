import Vue from 'vue'

export const store = Vue.observable({
    count: 0,
    name: '李四'
})

export const mutations = {
    setCount(count) {
        store.count = count
    },
    changeName(name) {
        store.name = name
    }
}