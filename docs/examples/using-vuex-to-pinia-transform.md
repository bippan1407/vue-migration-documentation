# Example using vuex-to-pinia-transform

Store file converted by vuex-to-pinia-transform from vuex to pinia

Vuex store
```js
export const state = () => ({
  username: "test123",
  firstname: "test",
  lastname: "123",
  age: "25",
});

export const mutations = {
  changeUsername(state, value) {
    state.username = value;
  },
};

export const actions = {
  generateRandomUsername({ commit, state }) {
    let newUsername = Math.floor(Math.random() * 100);
    newUsername = `${state.firstname}${state.lastname}${newUsername}`;
    commit("changeUsername", newUsername);
  },
  changeUsername({ commit, state }, newUsername) {
    commit("changeUsername", newUsername);
  },
};

export const getters = {
  firstname: (state) => {
    return state.firstname;
  },
  lastname: (state) => {
    return state.lastname;
  },
};

```

Code from vuex to pinia syntax
```js
import { defineStore, storeToRefs } from "pinia";
export const useUserStore = defineStore('userStore', {
  state: function () {
    return {
      username: "test123",
      firstname: "test",
      lastname: "123",
      age: "25"
    };
  },
  actions: {
    changeUsernameMutation(value) {
      this.username = value;
    },
    generateRandomUsername() {
      let newUsername = Math.floor(Math.random() * 100);
      newUsername = `${this.firstname}${this.lastname}${newUsername}`;
      this.changeUsernameMutation(newUsername);
    },
    changeUsername(newUsername) {
      this.changeUsernameMutation(newUsername);
    }
  },
  getters: {
    firstnameGetter: function () {
      return this.firstname;
    },
    lastnameGetter: function () {
      return this.lastname;
    }
  }
});
```