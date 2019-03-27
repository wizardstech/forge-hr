<template>
<el-container >
  <el-aside width="200px">
    <el-menu :router=true class="app-container">
    <div class="sidebar-header">
      <h5> Wizards Technologies </h5>
    </div>
    <el-menu-item route="/"  index="1">
      Home
    </el-menu-item>
    <el-menu-item route="/invoices" index="3">
      Invoices
    </el-menu-item>
    <el-menu-item route="/absences"  index="4">
      Absences
    </el-menu-item>
    <el-menu-item route="/files"  index="5">
      My Files
    </el-menu-item>
    <el-menu-item route="/users"  index="5">
      Users
    </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="1" class="right-menu-el">
          <template slot="title">Username</template>
          <el-menu-item index="1-1">Profile</el-menu-item>
          <el-menu-item index="1-2">Settings</el-menu-item>
          <el-menu-item router="/logout" index="1-3">Logout</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <slot />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: 'LayoutDefault'
};
</script>

<style scoped>
  .right-menu-el{
    float: right !important;
  }
  .sidebar-header{
    margin: 20px;
  }
</style>
