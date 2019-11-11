<template>
    <div id="app">
        <button @click.prevent="toggleHandler"> Toggle Modal </button>
        <!-- <modal-create-element :show="show" message="Hello world"> </modal-create-element> -->
        <modal-jsx :show="show" message="Hello world"></modal-jsx>
    </div>
</template>

<script>
//import ModalCreateElement from './ModalCreateElement.vue'
import ModalJsx from './ModalJsx.vue'
export default {
    name: 'App',
    data() {
        return {
            show: false,
        }
    },
    components: { ModalJsx },
    methods: {
        toggleHandler() {
          this.show = !this.show  
        }
    },
};
</script>