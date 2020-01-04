<template>
    <div class="container">
        <div class="row justify-content-center">
            <div
                v-if="!registerIsActive && !loginIsActive"
                class="col-md-8 text-xl"
            >
                <button @click="registerIsActive = true" class="bg-blue text-light">
                    Register
                </button>
                <button @click="loginIsActive = true" class="bg-light text-blue">Login</button>
            </div>
            <Register v-if="registerIsActive"></Register>
            <Login v-if="loginIsActive"></Login>
        </div>
    </div>
</template>

<script>

import Register from './Register';
import Login from './Login';
export default {
    name: 'Home',
    components: {
      Register,
      Login
    },
    data() {
        return {
            registerIsActive: false,
            loginIsActive: false,
        }
    },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
