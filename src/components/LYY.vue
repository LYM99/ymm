<template>
  <div id="app">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" class="first"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" @keyup.enter.native="submitForm('form')"></el-input>
        </el-form-item>
        <el-form-item class="row">
          <el-checkbox-group v-model="form.checkList">
            <el-checkbox label="记住密码"></el-checkbox>
          </el-checkbox-group>
          <a class="modify" @click="modifypas()">忘记密码</a>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">立即登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'lyy',
  data () {
    return {
      form:{
        username:"",
        password:"",
        checkList:""
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var that = this
          if( that.form.checkList == true){
            that.setCookie(that.form.username, that.form.password, 7);
          }else{
            that.clearCookie();
          }
          that.$http.post('http://localhost:8081/ly/login', {
            username: that.form.username,
            password: that.form.password
          }).then(function (res) {
            if(res.data.code ==1 ){
              $('.userinfo').removeClass('active')
              $('#name').html(res.data.data.username)
              $('.right').addClass('active')
            } else {
              that.$message({
                message: res.data.message,
                type: 'error'
              });
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          return false;
        }
      });
    },
    modifypas:function(){
      this.$router.push('/new')
    },
  },
}
</script>
<style>
  
</style>
