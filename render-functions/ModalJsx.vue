<script>
export default {
    name: 'ModalJsx',
    props: {
        show : {
            type: Boolean,
            default: true
        }/* ,
        message : {
            type: String,
            required: true
        } */
    },
    render () {
        return (this.show) ? 
        <div class="modal">
            <div class="content">
                {this.$slots.default}
            </div>
            <button onClick={this.clickOkHandler}>Ok</button>
            <button onClick={this.clickCancelHandler}>Cancelar</button>
        </div> : null

    },
    methods: {
        clickCancelHandler () {
            console.log('Cli en cancelar');
        },
        clickOkHandler () {
            console.log('Cli en OK');
        }
    } 
}
</script>