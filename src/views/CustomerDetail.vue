<template>
    <div class='cumstomerdetails container'>
        <div class="clearfix">
            <h1 class="page-header pull-left">{{customer.name}}</h1>
        <div class="pull-right">
            <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
            <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'cumstomerdetails',
        data() {
            return {
                customer:''
            }
        },
        methods:{
            fetchCustomers(id){
                this.$axios.get('/users/'+id).then(res=>{
                    console.log(res.data)
                    this.customer = res.data
                })
            },
            deleteCustomer(id){
                // console.log(id)
                this.$axios.delete('/users/'+id).then(data=>{
                    console.log(data)
                    this.$router.push({path:'/',query:{alert:'用户信息删除成功'}})
                })
            }
        },
        created(){
            this.fetchCustomers(this.$route.params.id)
        }
    }
</script>
<style scoped>

</style>