<template>
  <div>
    <el-table
      empty-text="No data"
      :data="absences">
      <el-table-column
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="type"
        label="Type">
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status">
      </el-table-column>
      <el-table-column
        prop="startAt"
        label="From">
      </el-table-column>
      <el-table-column
        prop="endAt"
        label="To">
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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Absences',
  computed: mapState({
    absences: state => state.absences.absences
  }),
  methods: {
    ...mapActions('absences', [
      'fetchAbsences'
    ]),
    handleEdit (index, row) {
      this.$router.push({ name: 'absences.edit', params: { id: row.id } });
    },
    handleView (index, row) {
      this.$router.push({ name: 'absences.show', params: { id: row.id } });
    }
  },
  created () {
    this.fetchAbsences();
  }
};
</script>
