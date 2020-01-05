<template>
    <div class="register p-8 flex text-center mx-auto flex-col w-1/4">
        <h1 class="text-4xl mb-3 text-center text-white">Register</h1>
        <transition name="fade">
            <div
                v-if="errors.length"
                class="text-white text-base"
            >
                <p>Please correct the following error(s):</p>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
        </transition>


        <div v-for="formInput in formInputs">
            <BaseInput
                class="px-1 my-1 w-full"
                :placeholderTxt="formInput.placeholder"
                :type="formInput.name"
            />
        </div>
        <button
            class="my-1 text-white"
            @click="checkForm"
        >Register
        </button>
    </div>
</template>

<script>
import API from '../services/API';
import BaseInput from './BaseInput';

export default {
    name: 'Register',
    components: {
        BaseInput
    },
    data() {
        return {
            errors: [],
            user: {
                email: null,
                name: null,
                password: null,
                password2: null
            },
            formInputs: [
                {
                    name: 'name',
                    placeholder: 'Name eingeben'
                },
                {
                    name: 'email',
                    placeholder: 'E-Mail eingeben'
                },
                {
                    name: 'password',
                    placeholder: 'Passwort eingeben'
                },
                {
                    name: 'password',
                    placeholder: 'Passwort wiederholen'
                }
            ]

        }
    },
    methods: {
        checkForm() {
            this.errors = [];

            if (!this.user.name) {
                this.errors.push('Name required.');
            }
            if (!this.user.email) {
                this.errors.push('Email required.');
            }
            else if (!this.validEmail(this.user.email)) {
                this.errors.push('Valid email required.');
            }
            if (!this.user.password) {
                this.errors.push('Password required.');
            }
            else if (this.user.password !== this.user.password2) {
                this.errors.push('Passwords need to be the same.');
            }

            if (!this.errors.length) {
                console.log('no errors')
                API.put('register', this.user,)
                    .then((response) => {
                        console.log('response', response)
                    });
            }

        },
        validEmail: function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

