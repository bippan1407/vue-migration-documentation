# Example using vue-migration

File converted by vue-migration from vue 2 syntaxt to vue 3 composition syntax.

Vue 2 code
```vue
<template>
    <div>vue-migration</div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
    name: 'VueMigration',
    props: {
        name: 'vue-migration',
    },
    data() {
        return {
            description: "upgrade from vue 2 to vue 3"
        }
    },
    computed: {
        ...mapGetters('user', {
            isDeveloper: 'isDeveloper'
        }),
        ...mapGetters({
            isManager: 'user/isManager'
        }),
        nameAndDescription() {
            return this.name + "" + this.description
        }
    },
    watch: {
        description(newValue, oldValue) {
            this.onDescriptionChange()
        }
    },
    mounted() {
        const response = this.$axios.$get('/user')
        console.log('component mounted')
        this.$once('hook:beforDestroy', () => {
        });
    },
    destroyed() {
        console.log('component destroyed')
    },
    methods: {
        ...mapActions('developer', ['addDeveloper']),
        ...mapActions({
            createNewUser: "user/addNewUser",
        }),
        onDescriptionChange() {
            const devName = this.$store.getters['user/devName']
            console.log('decription is changed')
            this.$store.dispatch('dev/onDescriptionChangeByDev', { developerName: devName })
        },
        onRedirect() {
            const devName = this.$store.getters['user/devName']
            this.$emit('on-redirect', { devName })
            this.$router.push('https://vuejs.org/')
        }
    },
}
</script>
```

Code from vue 2 to vue 3
```vue
<template>
    <div>vue-migration</div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/store/user'
import { useDeveloperStore } from '~/store/developer'
import { useDevStore } from '~/store/dev'


// #region emits
const emit = defineEmits(["on-redirect"])
// #endregion emits


// #region props
const props = defineProps({
    name: 'vue-migration',
})
// #endregion props


// #region nuxt properties
const router = useRouter();

// #endregion nuxt properties

// #region pinia state, getters and actions
const developerStore = useDeveloperStore()
const userStore = useUserStore()
const devStore = useDevStore()
const { isDeveloper, isManager, devName } = storeToRefs(userStore)
const { addDeveloper } = developerStore
const { addNewUser: createNewUser } = userStore
const { onDescriptionChangeByDev } = devStore

// #endregion pinia state, getters and actions

// #region component data
const description = ref("upgrade from vue 2 to vue 3");

// #endregion component data


// #region computed properties
const nameAndDescription = computed(() => {
    return props.name + "" + description.value;
})

// #endregion computed properties


// #region watch
watch(description, (newValue, oldValue) => {
    onDescriptionChange()
})

// #endregion watch


// #region methods
const onDescriptionChange = () => {
    const devName = devName.value
    console.log('decription is changed')
    onDescriptionChangeByDev({ developerName: devName });
}
const onRedirect = () => {
    const devName = devName.value
    emit('on-redirect', { devName })
    router.push('https://vuejs.org/')
}

// #endregion methods


// #region lifecycle hooks
onMounted(() => {
    const response = // TODO Change axios call
        // this.$axios.$get('/user')
        console.log('component mounted')
    // TODO Need to migrate manually
    // this.$once('hook:beforDestroy', () => {
    // });
})
onDestroyed(() => {
    console.log('component destroyed')
})

// #endregion lifecycle hooks

</script>
```

### Note
There is some syntax in vue files that needs to be changed manually. Added a TODO on such places.

```vue
// #region lifecycle hooks
onMounted(() => {
    const response = // TODO Change axios call
        // this.$axios.$get('/user')
        console.log('component mounted')
    // TODO Need to migrate manually
    // this.$once('hook:beforDestroy', () => {
    // });
})
onDestroyed(() => {
    console.log('component destroyed')
})
```
