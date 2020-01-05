<template>
    <div class="home">
        <div class="home__content-container">
            <div
                class="flex flex-col w-full text-xl"
                v-for="(btn,index) in buttons"
            >
                <BaseButton
                    class="w-1/4 mx-auto"
                    :key="btn.name"
                    v-if="!btn.isActive"
                    @clicked="btn.isActive = true"
                    :btnClass="btn.class"
                    :btnText="btn.name"
                />

                <component
                    :key="btn.name"
                    :is="btn.name"
                    v-if="btn.isActive"
                ></component>

            </div>

        </div>


    </div>
</template>

<script>

import Register from './Register';
import Login from './Login';
import BaseButton from './BaseButton';

export default {
    name: 'Home',
    components: {
        Register,
        Login,
        BaseButton
    },
    data() {
        return {
            buttons: [
                {
                    name: 'Register',
                    isActive: false,
                    class: 'btn btn-primary-inverse'
                },
                {
                    name: 'Login',
                    isActive: false,
                    class: 'btn btn-link'
                }
            ]
        }
    },
}
</script>
