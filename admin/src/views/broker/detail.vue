<template>
    <div class="article">
        <div class="articleBox">
            <el-row>
                <el-col :span="24">
                    <h3 class="title">{{info.title}}</h3>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div v-html="info.content"></div>
                </el-col>
            </el-row>
        </div>
    </div>
  </template>
  
  <script>

    export default {
        data() {
            return {            
                info: {
                    title: '',
                    summary: '',
                    name: '',
                    content: ''
                }
            }
        },

        created () {
            this.$axios.get(`api/v1/crawlers/${this.$route.params.id}`).then((res) => {
                this.info = res.data
            })
        },
        methods: {
            
        },
        components: {
        }
    }
  </script>

  <style lang="less">
      .article{
          padding: 12px;
          background: #ffffff;
          .articleBox{
              width: 1000px;
              margin: 0 auto;
              .title{
                  padding: 12px 0;
              }
          }
      }
  </style>