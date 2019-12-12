<template>
  <div id="details" class="container">
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">   
        <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link> 
        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>     
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{customer.email}}</span></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-book"> {{customer.education}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-education"> {{customer.graduationSchool}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-wrench"> {{customer.profession}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-user"> {{customer.profile}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'customerDetails',
  data(){
    return{
      customer:""
    }
  },
  methods:{
    fetchCustomers(id){
          this.$http.get("http://localhost:3000/users/"+id)
              .then(res =>{
                  this.customer = res.body;
              })
    },
    deleteCustomer(id){
      this.$http.delete("http://localhost:3000/users/"+id)
                .then(() =>{
                  this.$router.push({name:'customersLink',query:{alert:"用户删除成功！"}})
                })
    }
  },
  created(){
    this.fetchCustomers(this.$route.params.id);
  }
}
</script>

<style>
.pull-right .btn{
  margin: 5px;
}
.list-group-item{
  background: #F6C89F;
  border: 1px solid #ffe7d1;
}
</style>