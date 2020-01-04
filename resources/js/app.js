import appLauncher from './utils/appLauncher';
import Home from './components/Home';
import '@babel/polyfill';

require('./bootstrap');

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


/**
 * Bootstraps Vue App
 */
appLauncher({
    components: {
        Home
    }
});

