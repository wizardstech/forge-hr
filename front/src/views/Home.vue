<template>
  <LayoutDefault>
  <div> Welcome to <strong>The Forge</strong>, the RH tool for Wizards !</div>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';
import usersApi from '@/api/users';

export default {
  name: 'Home',
  components: {
    LayoutDefault
  },
};
</script>
