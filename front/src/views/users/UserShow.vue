<template>
  <LayoutDefault>
    <div>
      Hello, {{ user.username }}
    </div>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import usersApi from '@/api/users';

export default {
  name: 'UserShow',
  components: {
    LayoutDefault
  },
  data () {
    return {
      user: null,
      errors: null,
      isLoading: false
    };
  },
  methods: {
    async fetchData () {
      try {
        this.isLoading = true;
        const res = await usersApi.get(1);
        this.user = res.data;
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
