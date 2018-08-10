<template>
  <div class="hello">
    <div><h3>预约信息管理</h3></div>
    <header>
      <div class="out"></div>
      <div class="timer">
        <div class="block">
          <span>预约日期:</span>
          <el-date-picker size="small"
            v-model="time1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
          <span>-</span>
          <el-date-picker size="small"
            v-model="time2"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
    </header>
    <div class="content">
      <el-table :data="tableData" height="660" border style="width: 100%">
        <el-table-column prop="name" label="客户姓名" fixed width="80">
        </el-table-column>
        <el-table-column prop="product" label="预约产品" width="110">
        </el-table-column>
        <el-table-column prop="telphone" label="手机号" width="120">
        </el-table-column>
        <el-table-column prop="certificate" label="证件号" width="180">
        </el-table-column>
        <el-table-column prop="time" label="预约时间" width="160">
        </el-table-column>
        <el-table-column prop="area" label="所在地区" width="125">
        </el-table-column>
        <el-table-column prop="card" label="银行卡号" width="180">
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
      }, {
        name: 'B',
        product:'001',
        certificate:'502414198808249832',
        time:'2018-7-31 11:11:11',
        area:'重庆市梁平区',
        card:'6228375948274665418',
        telphone: 18909456900
      },{
        name: 'C',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'D',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'E',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'F',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'G',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'H',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'I',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'J',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'K',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'L',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'M',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'N',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'O',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'P',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'Q',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'R',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'S',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'T',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'U',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'V',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'W',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'X',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'Y',
        product:'007',
        telphone: 13498025034,
        certificate:'502414923898349832',
        time:'2018-7-30 10:39:56',
        area:'四川省成都市',
        card:'6228375948274665418'
      },{
        name: 'Z',
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
</style>
