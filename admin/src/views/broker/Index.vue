<template>
    <div>
        <el-table :data="list" stripe max-height="600" style="width: 100%">
            <el-table-column prop="id" label="Id" min-width="30" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="title" label="标题" min-width="200">
            </el-table-column>
            <el-table-column prop="summary" label="sumarry" min-width="200">
                    <template slot-scope="scope">
                        <span>{{ scope.row.summary | textSubstr}}</span>
                    </template>
            </el-table-column>
            <el-table-column label="作者" prop="name" min-width="80">
            </el-table-column>
            
            <el-table-column prop="view" label="阅读量" min-width="80"></el-table-column>
            <el-table-column prop="likeNum" label="喜欢" min-width="80"></el-table-column>
            <el-table-column prop="comment" label="评论" min-width="80"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" min-width="140" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <span>{{ scope.row.createTime | formatDateSS}}</span>
                </template>
            </el-table-column>
            <el-table-column label="修改时间" min-width="140" :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <span>{{ scope.row.modifyTime | formatDateSS}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="260" header-align="center" fixed="right">
                <template scope="scope">
                <el-button size="mini" @click="toDetail(scope.row)">查看</el-button>
                <el-button size="mini" type="primary" @click="toSendSms(scope.row)">修改</el-button>
                <el-button size="mini" type="success" @click="toAppoint(scope.row)">发布</el-button>
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
            list: []
        }
      },
      created () {
          this.$axios.get('/api/v1/crawlers?page=1').then((res) => {
              this.list = res.data.list
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
        toDetail(row) {
            console.log(row)
            this.$router.push({name: 'crawlerarticle', params: {id: row.id}})
        }
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