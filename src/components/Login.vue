<template>
  <div class="hello">
    <div><h3>轮博图管理</h3></div>
    <div class="content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="picture" label="图片">
        </el-table-column>
        <el-table-column label="操作" width="250">
          <template slot-scope="scope">
            URL:<el-input v-model="input"></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'lyy',
  data () {
    return {
      tableData: [{
        id: "1",
        link: "www.baidu.com.111"
      },{
        id: "2",
        link: "www.baidu.com.222"
      },{
        id: "3",
        link: "www.baidu.com.333"
      },{
        id: "4",
        link: "www.baidu.com.444"
      },{
        id: "5",
        link: "www.baidu.com.555"
      }],
    }
  },
  methods: {
  },
}
</script>
<style>
</style>
