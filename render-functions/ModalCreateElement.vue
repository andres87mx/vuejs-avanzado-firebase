<script>

export default {
    name: 'ModalCreateElement',
    props: {
        show : {
            type: Boolean,
            default: true
        },
        message : {
            type: String,
            required: true
        }
    },
    render(createElement) {
        return (this.show) ? createElement('div', {
            class: 'modal'
        }, [
            createElement('p', {
                class: 'message'
            }, this.message ),
            createElement('button', {
                class: 'btn',
                on: {
                   click: this.clickOkHandler, 
                }
            }, 'Ok'),
            createElement('button', {
                class: 'btn',
                on: {
                   click: this.clickCancelHandler, 
                }
            }, 'Cancel'),
        ]) : null
    },
    methods: {
        clickCancelHandler () {
            console.log('Cli en cancelar');
        },
        clickOkHandler () {
            console.log('Cli en OK');
        }
    } 
};
</script>