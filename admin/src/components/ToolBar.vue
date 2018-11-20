<template>
  <div class="toolbar">
    <slot></slot>
  </div>
</template>

<style lang="less">
  .toolbar {
    width: 100%;
    padding: 8px;
    background-color: #ffffff;
    overflow: hidden;
    line-height: 32px;
    border: 1px solid #e6ebf5;
    .el-select,
    .el-date-editor,
    .el-input{
      margin-right: 12px;
    }
  }
</style>
