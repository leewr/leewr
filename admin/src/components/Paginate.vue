<template>
  <div class="pagination">
      <el-pagination
        background
        size="small"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="$Config.paginateSize"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'Paginate',
    props: {
      total: 0
    },
    data() {
      return {
        currentPage: 1
      }
    },
    created () {
    },
    methods: {
      change: function (page) {
        this.current = page;
        this.$emit('val-change', page);
      },
      handleSizeChange(size) {
        console.log(`每页 ${size} 条`);
        this.$emit('val-change', size);
      },
      handleCurrentChange(page) {
        console.log(`当前页: ${page}`);
        this.$emit('val-change', page);
      }
    }
  }
</script>
<style lang="less" scoped>
  .pagination {
    padding: 7px;
    border: 1px solid #ebeef5;
    background: #fff;
    text-align: right;
  }
  .total {
    float: left;
    margin-top: 8px;
    margin-left: 10px;
    font-size: 13px;
    color: #606266;
  }
</style>