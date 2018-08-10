<template>
  <div id="app">
    <div class="content">
      <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-form">
          <el-form-item label="旧密码:" prop="old">
            <el-input type="password" v-model="form.old" placeholder="请输入旧密码"></el-input>
          </el-form-item>
          <el-form-item label="新密码:" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入新密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码:" prop="checkPass">
            <el-input type="password" v-model="form.checkPass" placeholder="请再次输入新密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('form')">确认更改</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'lyy',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请新输入密码'));
      } else if (value == this.form.old ) {
        callback(new Error('新密码不能和旧密码一样'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次新输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form:{
        old:"",
        password:"",
        checkList:""
      },
      rules:{
        old: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var that = this
          that.$http.post('http://localhost:8081/ly/login', {
            username: that.form.username,
            password: that.form.password
          }).then(function (res) {
            if(res.data.code ==1 ){

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
  },
}
</script>
<style>
  #app{
    background-color:#fff;
    width:92%;
    margin-left:4%;
    margin-top:30px;
    margin-bottom:30px;
    border-radius:10px;
  }
  .content{
    width:82%;
    border:1px solid white;
    
  }
  .el-input{
    width:43%;
  }
  .el-form{
    margin-top:30px;
    margin-bottom:30px;
    margin-left:18%;
  }
</style>
