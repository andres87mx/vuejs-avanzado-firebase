<template>
    <div id="app">
        <button @click.prevent="toggleHandler"> Toggle Modal </button>
        <!-- <modal-create-element :show="show">
            <h1>Titulo </h1>
            <p> Hello World! </p>
        </modal-create-element> -->
        <modal-jsx :show="show">
            <h1>Titulo JSX </h1>
            <p> Hello World JSX! </p>
        </modal-jsx>
    </div>
</template>

<script>
// import ModalCreateElement from './ModalCreateElement.vue'
import ModalJsx from './ModalJsx.vue'
export default {
    name: 'App',
    data() {
        return {
            show: false,
        }
    },
    components: { ModalJsx },
    // components: { ModalCreateElement },
    methods: {
        toggleHandler() {
          this.show = !this.show  
        }
    },
};
</script>