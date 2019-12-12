<template>
  <div id="add " class="container">
      <Alert v-if="alert" :message="alert"></Alert>
      <h1 class="page-header">添加用户</h1>
      <form @submit="addCustomer">
          <div class="well">
              <h4>用户信息</h4>
              <div class="form-group">
                  <label for="">姓名</label>
                  <input type="text" class="form-control" placeholder="name" v-model="customer.name">
              </div>
              <div class="form-group">
                  <label for="">电话</label>
                  <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
              </div>
              <div class="form-group">
                  <label for="">邮箱</label>
                  <input type="text" class="form-control" placeholder="email" v-model="customer.email">
              </div>
              <div class="form-group">
                  <label for="">学历</label>
                  <input type="text" class="form-control" placeholder="education" v-model="customer.education">
              </div>
              <div class="form-group">
                  <label for="">毕业学校</label>
                  <input type="text" class="form-control" placeholder="graduationSchool" v-model="customer.graduationSchool">
              </div>
              <div class="form-group">
                  <label for="">职业</label>
                  <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
              </div>
              <div class="form-group">
                  <label for="">个人简介</label>
                  <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">添加</button>
          </div>
      </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data(){
      return{
          customer:{},
          alert:""
      }
  },
  methods:{
      addCustomer(e){
          if(!this.customer.name||!this.customer.phone||!this.customer.email){
              this.alert = "名字、电话和邮箱不能为空！";
          }else{
              let newCustomer={
                  name:this.customer.name,
                  phone:this.customer.phone,
                  email:this.customer.email,
                  education:this.customer.education,
                  graduationSchool:this.customer.graduationSchool,
                  profession:this.customer.profession,
                  profile:this.customer.profile
              }
              this.$http.post("http://localhost:3000/users",newCustomer)
                        .then(() =>{
                            this.$router.push({name:'customersLink',query:{alert:"用户信息添加成功"}}) 
                        })
          }
          e.preventDefault();
      }
  },
  components:{
      Alert
  }
}
</script>

<style>

</style>