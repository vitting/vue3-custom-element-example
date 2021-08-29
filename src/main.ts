import { defineCustomElement } from 'vue'
import Example from './components/HelloWorld.ce.vue';
import Example2 from './components/HelloWorld2.ce.vue';

// register
customElements.define('my-example', defineCustomElement(Example));
customElements.define('my-example2', defineCustomElement(Example2));