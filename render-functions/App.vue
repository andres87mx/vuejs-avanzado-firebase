<template>
    <div id="app">
        <button @click.prevent="toggleHandler"> Toggle Modal </button>
        <modal-create-element :show="show" message="Hello world"> </modal-create-element>
    </div>
</template>

<script>
import ModalCreateElement from './ModalCreateElement.vue'
export default {
    name: 'App',
    data() {
        return {
            show: false,
        }
    },
    components: { ModalCreateElement },
    methods: {
        toggleHandler() {
          this.show = !this.show  
        }
    },
};
</script>