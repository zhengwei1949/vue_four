<template>
    <div class='Add container' @submit="addCustomer">
        <h1 class="page-header">添加用户</h1>
        <form>
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label for="">姓名</label>
                    <input type="text" class="form-control"   v-model="customer.name">
                </div>
                <div class="form-group">
                    <label for="">电话</label>
                    <input type="text" class="form-control" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label for="">邮箱</label>
                    <input type="text" class="form-control" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label for="">学历</label>
                    <input type="text" class="form-control"  v-model="customer.education">
                </div>
                <div class="form-group">
                    <label for="">毕业学校</label>
                    <input type="text" class="form-control"  v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label for="">职业</label>
                    <input type="text" class="form-control" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label for="">个人简介</label>
                    <textarea class="form-control" v-model="customer.profile" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">添加</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name:'Add',
        data() {
            return {
                customer:{}
            }
        },
        methods:{
            addCustomer(e){
                e.preventDefault()
                if(!this.customer.name || !this.customer.phone || !this.customer.email){
                    console.log('请添加对应的信息!')
                }else{
                    let newCustomer = {
                        name:this.customer.name,
                        phone:this.customer.phone,
                        email:this.customer.email,
                        education:this.customer.education,
                        graduationschool:this.customer.graduationschool,
                        profession:this.customer.profession,
                        profile:this.customer.profile
                    }

                    this.$axios.post('/users',newCustomer).then(data=>{
                        // console.log(data)
                        this.$router.push({path:'/',query:{alert:'用户信息添加成功'}})
                    })
                }
            }
        }
    }
</script>
<style scoped>

</style>