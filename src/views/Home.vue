<template>
  <div class="home container">
    <Alert v-if="alert" :message="alert"></Alert>
    <div class="page-header">用户管理系统</div>
    <table class="table table-striped">
      <thead>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th>详情</th>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>
            <router-link class="btn btn-default" :to="'customer/'+customer.id">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'
export default {
  name: 'home',
  data(){
    return {
      customers:[],
      alert:''
    }
  },
  methods:{
    fetchCustomers(){
      this.$axios.get('/users').then(res=>{
        // console.log(res.data)
        this.customers = res.data
      })
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers()
  },
  updated(){
    this.fetchCustomers()
  },
  components: {
    Alert
  }
}
</script>
