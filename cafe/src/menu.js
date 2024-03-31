import { defineStore } from 'pinia'

 export const useStore = defineStore('store', {
  state: () => ({
    items: [
      { id: 1, name: 'Coffee' },
      { id: 2, name: 'Tea' },
      { id: 3, name: 'Sandwich' },
      { id: 5, name: 'Pizza' },
      { id: 6, name: 'Burger' },
      { id: 7, name: 'ChikenSandwice' }
    ]
  }),

  getters: {
    filtereditems (){
      return this.items;
    }
  },


})


