<template>
  <div class="hello">
    <div><h3>用户管理</h3></div>
    <div class="content">
      <el-table :data="tableData" height="750" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="100">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="150">
        </el-table-column>
        <el-table-column prop="telphone" label="手机号" width="310">
        </el-table-column>
        <el-table-column fixed="right" label="访问信息">
          <template slot-scope="scope">
            <el-button type="text" size="small">点击查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [{
        id: '1',
        name: 'A',
        telphone: 13498025034
      }, {
        id: '2',
        name: 'B',
        telphone: 18909456900
      }, {
        id: '3',
        name: 'C',
        telphone: 19434895785
      }, {
        id: '4',
        name: 'D',
        telphone: 15645768768
      }, {
        id: '5',
        name: 'E',
        telphone: 19675576576
      }, {
        id: '6',
        name: 'F',
        telphone: 15647568777
      }, {
        id: '7',
        name: 'G',
        telphone: 1888888888
      }]
    }
  },
  methods: {

  }
}
</script>
<style>
  .hello{
    background-color:#fff;
    width:92%;
    margin-left:4%;
    margin-top:30px;
    margin-bottom:30px;
    border-radius:10px;
    text-align:center;
    display:flex;
    flex-direction: column ;
    justify-content:center;
    align-items:cengter;
  }
  .content{
    width:82%;
    border:1px solid white;
    margin-left:8%;
  }
  .el-form{
    margin-top:20px;
    margin-bottom:20px;
  }
  .cell{
    text-align:center;
  }
</style>
