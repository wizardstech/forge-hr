<template>
  <LayoutDefault>
    <el-table
      v-loading=isLoading
      empty-text="No data"
      :data="users">
      <el-table-column
        prop="id"
        label="Id">
      </el-table-column>
      <el-table-column
        prop="username"
        label="Username">
      </el-table-column>
    </el-table>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import usersApi from '@/api/users';

export default {
  name: 'Users',
  components: {
    LayoutDefault
  },
  data () {
    return {
      users: null,
      errors: null,
      isLoading: false
    };
  },
  methods: {
    async fetchData () {
      try {
        this.isLoading = true;
        const res = await usersApi.getAll(1);
        this.users = res.data;
        this.isLoading = false;
      } catch (e) {
        this.$message({ showClose: true, message: 'Error fetching users from api', type: 'error' });
        this.errors = e.response.data.code;
      }
    }
  },
  created () {
    this.isLoading = true;
    this.fetchData();
  }
};
</script>
