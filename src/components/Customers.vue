<template>
  <div id="customer" class=" container">
    <Alert :message="alert" v-if="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput" @input="refresh">
    <br>
    <table class="table">
        <thead>
            <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>邮箱</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in filterBy(customers,filterInput)" :key="customer.id">
                <td>{{ customer.name }}</td>
                <td>{{customer.phone}}</td>
                <td>{{customer.email}}</td>
                <td><router-link class="btn btn-default" :to="'/customer/'+customer.id">详情</router-link></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'customer',
  data(){
      return{
          customers:[],
          alert:"",
          filterInput:""
      }
  },
  methods:{
      fetchCustomers(){
          this.$http.get("http://localhost:3000/users")
              .then(res =>{
                  this.customers = res.body;
              })
      },
      filterBy(customers,value){
          return customers.filter(customer =>{
              return customer.name.toLowerCase().match(value.toLowerCase());
          })
      }
  },
  created(){
      this.fetchCustomers();
  },
  updated(){
      if(this.$route.query.alert){
          this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
  },
  components:{
      Alert
  }
}
</script>

<style>
tr th{
    text-align: center;
}
tr td{
    text-align: center;
    vertical-align: middle !important;
}
.table .btn{
    background: #4b8e8d;
    color: #fff;
}
.table .btn:hover{
    background: #fff;
    color: #4b8e8d;
}
.form-control{
    background: #f8eee5;
}
</style>