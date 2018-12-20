<template>
    <div class='Alert'>
        <div class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Warning!</strong>{{message}}
        </div>
    </div>
</template>
<script>
    export default {
        name:'Alert',
        props:['message'],
        data() {
            return {

            }
        },
    }
</script>
<style scoped>

</style>