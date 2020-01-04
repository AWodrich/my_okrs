<template>
    <div class="row">
        Register component
        <p v-if="errors.length">
            Please correct the following error(s):
        </p>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="">
            <p>
                <label for="name">Name</label>
                <input
                    id="name"
                    v-model="user.name"
                    type="text"
                    name="name"
                >
            </p>
            <p>
                <label for="email">E-Mail</label>
                <input
                    id="email"
                    v-model="user.email"
                    type="email"
                    name="email"
                >
            </p>
            <p>
                <label for="password">Re-enter Password</label>
                <input
                    id="password"
                    v-model="user.password"
                    type="password"
                    name="password"
                >
            </p>
            <p>
                <label for="password">Re-enter Password</label>
                <input
                    id="password2"
                    v-model="user.password2"
                    type="password"
                    name="password2"
                >
            </p>
            <p>
                <button @click="checkForm">Register</button>
            </p>
        </div>
    </div>
</template>

<script>
import API from '../services/API';

export default {
    name: 'Register',
    data() {
        return {
            errors: [],
            user: {
                email: null,
                name: null,
                password: null,
                password2: null
            }

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
                API.put('register',
                    this.user,
                )
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

