<template>
    <div>
        <ToolBar>
            <div>
                <el-select v-model="lesson" size="small" clearable placeholder="请选择分类" style="width: 140px">
                    <el-option
                            v-for="(v,k) in lessons"
                            :key="k"
                            :label="v"
                            :value="k">
                    </el-option>
                </el-select>
                <el-select v-model="searchParams.status" size="small" clearable placeholder="全部事业部" style="width: 140px">
                    <el-option
                            v-for="(v,k) in $Config.postType"
                            :key="k"
                            :label="v"
                            :value="k">
                    </el-option>
                </el-select>
                <el-select v-model="searchParams.status" size="small" clearable placeholder="全部大区" style="width: 140px">
                    <el-option
                            v-for="(v,k) in $Config.postType"
                            :key="k"
                            :label="v"
                            :value="k">
                    </el-option>
                </el-select>
                <el-select v-model="searchParams.status" size="small" clearable placeholder="全部省份" style="width: 140px">
                    <el-option
                            v-for="(v,k) in $Config.postType"
                            :key="k"
                            :label="v"
                            :value="k">
                    </el-option>
                </el-select>
                <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    size="small"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2">
                </el-date-picker>
            <el-input
                    placeholder="请输入经纪人姓名或者邀请人姓名                  "
                    size="small"
                    style="width: 140px"
                    v-model="searchParams.postTitle"
                    clearable>
            </el-input>
            
            <el-button type="success" icon="el-icon-search" size="small" @click="refresh = !refresh"></el-button>
            </div>
        </ToolBar>
        <div class="fastOperate">
            <el-select v-model="searchParams.status" size="small" clearable placeholder="批量操作" style="width: 140px">
                <el-option
                        v-for="(v,k) in $Config.postType"
                        :key="k"
                        :label="v"
                        :value="k">
                </el-option>
            </el-select>
        </div>
        <el-table :data="broker.list" stripe max-height="600" style="width: 100%">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column prop="name" label="姓名" min-width="80" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="工作单位" min-width="130">
            </el-table-column>
            <el-table-column label="所在城市" min-width="160">
                <template scope="scope">
                </template>
            </el-table-column>
            <el-table-column prop="amount" label="邀请人" min-width="80"></el-table-column>
            <el-table-column prop="directorName" label="当前邀请人服务商" min-width="140" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="city" label="评车门店" min-width="80" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="statusDesc" label="当前状态" min-width="80" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="entryTime" label="加入时间" min-width="165">
                <template scope="scope">
                <span>{{ scope.row.entryTime | formatDateSS }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="260" header-align="center" fixed="right">
                <template scope="scope">
                <el-button size="mini" @click="toDetail(scope.row)">查看</el-button>
                <el-button size="mini" type="primary" @click="toSendSms(scope.row)">审批</el-button>
                <el-button size="mini" type="success" @click="toAppoint(scope.row)">分配门店</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Paginate :total="100"></Paginate>
    </div>
  </template>
  
  <script>
    import ToolBar from '@/components/ToolBar.vue';
    import HelpHint from '@/components/HelpHint.vue';
    import Paginate from '@/components/Paginate.vue'
    export default {
      data() {
        return {
            searchParams:{
                postTitle:'',
                postType:'',
                postStatus:'published',
            },
            lesson: '1',
            lessons: {"1": "12321321", "2": "123213", "3": "1232"},
            pickerOptions2: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近一个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近三个月',
                onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
                }
            }]
            },
            value6: '',
            value7: '',
            broker: {
                list: [{id:1,loginname:'Admin',nickname:'管理员',email:'Admin@.admin.com',entryTime:'151178xxxx',sex:'male',active:1},
                    {id:2,loginname:'SenLin',nickname:'森林',email:'SenLin@.admin.com',entryTime:'151178xxxx',sex:'unknown',active:0},
                    {id:4,loginname:'Admin1',nickname:'赵晓',email:'Admin@.admin.com',entryTime:'151178xxxx',sex:'male',active:1},
                    {id:5,loginname:'Wujun',nickname:'吴军',email:'Admin@.admin.com',entryTime:'151178xxxx',sex:'male',active:1},
                    {id:5,loginname:'Huang',nickname:'黄家',email:'Admin@.admin.com',entryTime:'151178xxxx',sex:'male',active:1}]
            }
        }
      },
      created () {
          this.$axios.get('http://m.leewr.com/api/v1/topics?page=1', (res) => {
              console.log(1)
          })
      },
      methods: {
        handleClick(row) {
          this.$alert(row, '标题名称', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
        },
        tableAction(){
          return this.$createElement('HelpHint',{
            props:{
              content:'查看文章 / 编辑文章'
            }
          },'操作');
        },
      },
      components: {
          ToolBar,
          HelpHint,
          Paginate
      }
    }
  </script>

  <style>
      .fastOperate{
          padding: 12px;
          background: #ffffff;
      }
  </style>