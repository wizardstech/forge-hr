<template>
  <div>
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
      <el-table-column
        label="Actions">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleView(scope.$index, scope.row)">View</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import usersApi from '@/api/users';

export default {
  name: 'Users',
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
    },
    handleEdit (index, row) {
      this.$router.push({ name: 'users.edit', params: { id: row.id } });
    },
    handleView (index, row) {
      this.$router.push({ name: 'users.show', params: { id: row.id } });
    }
  },
  created () {
    this.isLoading = true;
    this.fetchData();
  }
};
</script>
