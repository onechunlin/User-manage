<template>
  <div id="add " class="container">
       <Alert v-if="alert" :message="alert"></Alert>
      <h1 class="page-header">编辑用户</h1>
      <form @submit="updateCustomer">
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
              <button type="submit" class="btn">确定</button>
          </div>
      </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'update',
  data(){
      return{
          customer:{},
          alert:""
      }
  },
  methods:{
      updateCustomer(e){
          if(!this.customer.name||!this.customer.phone||!this.customer.email){
              this.alert = "名字、电话和邮箱不能为空！";
          }else{
              let updateCustomer={
                  name:this.customer.name,
                  phone:this.customer.phone,
                  email:this.customer.email,
                  education:this.customer.education,
                  graduationSchool:this.customer.graduationSchool,
                  profession:this.customer.profession,
                  profile:this.customer.profile
              }
              this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer)
                        .then(() =>{
                            this.$router.push({name:'customersLink',query:{alert:"用户信息更新成功"}}) 
                        })
          }
          e.preventDefault();
      },
      fetchCustomer(id){
          this.$http.get("http://localhost:3000/users/"+id)
                    .then(res => {
                        this.customer = res.body;
                    })
      }
  },
  created(){
      this.fetchCustomer(this.$route.params.id);
  },
  components:{
      Alert
  }
}
</script>

<style>
.well{
    background: #f6c89f;
}
.well input,.well textarea{
    background: #ffe7d1;
}
.well .btn{
    background: #4b8e8d;
    color: #fff;
}
</style>