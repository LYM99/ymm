<template>
  <div class="hello">
    <div><h3>产品管理</h3></div>
    <header>
      <el-button type="primary" plain class="insert">新增产品</el-button>
    </header>
    <div class="content">
      <el-table :data="tableData" height="660" border style="width: 100%">
        <el-table-column prop="name" label="产品名称" fixed width="80">
        </el-table-column>
        <el-table-column prop="one" label="所属一级分类" width="110">
        </el-table-column>
        <el-table-column prop="two" label="所属二级分类" width="120">
        </el-table-column>
        <el-table-column prop="brief" label="产品简介" width="234">
        </el-table-column>
        <el-table-column label="产品介绍" width="80">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="link" label="产品链接" width="180">
        </el-table-column>
        <el-table-column label="编辑" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="60">
          <template slot-scope="scope">
            <el-button type="text" size="small">发布</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <footer>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 15, 20]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40">
        </el-pagination>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'lyy',
  data () {
    return {
      tableData: [{
        name: 'A',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      }],
      time1: '',
      time2: '',
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>
<style>
  .timer{
    float:right;
  }
  footer{
    margin:20px 0px;
  }
  .insert{
    float:left;
  }
</style>
