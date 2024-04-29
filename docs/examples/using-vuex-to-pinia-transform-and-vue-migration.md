# Example using both transformation on store and vue files 

Store file converted by vuex-to-pinia-transform from vuex to pinia

vue 2 syntax
```vue
<template>
  <div class="container">
    <div>
      <p><strong>vue 2 to 3 migration</strong></p>
      <p>username {{ username }}</p>
      <p>firstname {{ firstname }}</p>
      <p>lastname {{ lastname }}</p>
      <p>fullname {{ getFullName }}</p>
      <button @click="generateRandomUsername">generate random username</button>
      <br />
      <button @click="generateRandomUsernameUsingMutation">
        generate random username using mutation
      </button>
      <br />
      <input v-model="newUsername" placeholder="Enter new username" />
      <button @click="setNewUsername">Set new username</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';
const DummyComponent = () => import('~/components/common/DummyComponent');

export default {
  name: 'test',
  data() {
    return { newUsername: '' };
  },
  computed: {
    ...mapState('user', ['username']),
    ...mapGetters({
      lastname: 'user/lastname',
    }),
    ...mapGetters('user', ['firstname']),
    getFullName() {
      return (
        this.$store.getters['user/firstname'] +
        ' ' +
        this.$store.getters['user/lastname']
      );
    },
  },
  methods: {
    ...mapMutations({
      changeUsernameDummy: 'user/changeUsername',
    }),
    ...mapActions({
      generateRandomUsername: 'user/generateRandomUsername',
    }),
    setNewUsername() {
      console.log(this.newUsername);
      this.$store.dispatch('user/changeUsername', this.newUsername);
    },
    generateRandomUsernameUsingMutation() {
      let name =
        this.firstname + this.lastname + Math.ceil(Math.random() * 100);
      this.$store.commit('user/changeUsername', name);
      this.changeUsernameDummy(name)
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container>div>* {
  margin: 5px 0px;
}
</style>
```

vuex store
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

#### After running both the transformation


```vue
<template>
  <div class="container">
    <div>
      <p><strong>vue 2 to 3 migration</strong></p>
      <p>username {{ username }}</p>
      <p>firstname {{ firstname }}</p>
      <p>lastname {{ lastname }}</p>
      <p>fullname {{ getFullName }}</p>
      <button @click="generateRandomUsername">generate random username</button>
      <br />
      <button @click="generateRandomUsernameUsingMutation">
        generate random username using mutation
      </button>
      <br />
      <input v-model="newUsername" placeholder="Enter new username" />
      <button @click="setNewUsername">Set new username</button>
    </div>
  </div>
</template>

<script setup>
const DummyComponent = () => import('~/components/common/DummyComponent');
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/store/user'


// #region pinia state, getters and actions
const userStore = useUserStore()
const { username, lastnameGetter: lastname, firstnameGetter: firstname } = storeToRefs(userStore)
const { changeUsernameMutation: changeUsernameDummy, generateRandomUsername, changeUsername } = userStore

// #endregion pinia state, getters and actions

// #region component data
const newUsername = ref('');

// #endregion component data


// #region computed properties
const getFullName = computed(() => {
  return (firstname.value + ' ' + lastname.value);
})

// #endregion computed properties


// #region methods
const setNewUsername = () => {
  console.log(newUsername.value);
  changeUsername(newUsername.value);
}
const generateRandomUsernameUsingMutation = () => {
  let name =
    firstname.value + lastname.value + Math.ceil(Math.random() * 100);
  changeUsernameDummy(name);
  changeUsernameDummy(name)
}

// #endregion methods

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container>div>* {
  margin: 5px 0px;
}
</style>
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