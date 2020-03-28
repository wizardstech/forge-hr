<template>
      <div v-loading:pending>
        This absence is typed as <b>{{ absence.type }}</b>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AbsenceShow',
  computed: mapState({
    absence: state => state.absences.absence,
  }),
  methods: {
    ...mapActions('absences', [
      'fetchAbsence'
    ])
  },
  created () {
    this.fetchAbsence(this.$route.params.id);
  }
};
</script>
