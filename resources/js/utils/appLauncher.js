import Vue from 'vue';

import AppConfig from '../Appconfig';
import { querySelector } from '@helpers/DOMhelpers';

/**
 * Initializes the Vue-APP
 * @param {object} [components] The components to include
 * @param {store} [store]
 * @param {router} [router]
 * @param {function} [mounted]
 * @param {function} [destroyed]
 * @param {object} [data]
 * @param {object} [methods]
 * @param {function} [render]
 * @param {array} [plugins]
 * @param {array} [globalComponents]
 */
export default function appLauncher({
    components = {}, store = null, router = null, mounted = null, destroyed = null, data = {}, methods = {}, render = null, plugins = undefined, globalComponents = undefined
} = {}) {
    if (querySelector(AppConfig.vue.APP_CONTAINER_ID)) {
        // Install Vue Plugins if available
        // Vue.config.devtools = true;

        (!!plugins) && installPlugins(plugins);
        // Install Vue Components globally if available
        (!!globalComponents) && registerComponentsGlobally(globalComponents);

        new Vue({
            name: AppConfig.vue.APP_NAME,
            store,
            router,
            components: {
                ...components,
            },
            data: {
                ...data,
            },
            mounted,
            methods: {
                ...methods,
            },
            render,
        }).$mount(AppConfig.vue.APP_CONTAINER_ID);
    }
}

function installPlugins(pluginArray = isRequired()) {
    pluginArray.forEach((plugin) => Vue.use(plugin))
}

function registerComponentsGlobally(componentsArray = isRequired()) {
    componentsArray.forEach((component) => Vue.component(component.name, component))
}
