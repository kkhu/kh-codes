import Vue from 'vue';

Vue.component('c-button', () => import('./button'))

Vue.component('c-icon-cross', () => import('./icon-cross'))

Vue.component('c-icon-triangle', () => import('./icon-triangle'))

Vue.component('c-info-item-button', () => import('./info-item-button'))

Vue.component('c-input-number', () => import('./input-number'))

Vue.component('c-pwd-safe-check-status-bar', () => import('./pwd-safe-check-status-bar'))

Vue.component('c-tip-bar', () => import('./tip-bar'))
