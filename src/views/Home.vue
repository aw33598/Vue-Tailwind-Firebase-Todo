<template>
  <div>
    <Header headerTitle="Dashboard"></Header>
    <Dashboard></Dashboard>
    <Todos></Todos>
  </div>
</template>

<script>

import Todos from '../components/Todos'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'

export default {
  name: 'Home',
  components: {
    Todos,
    Header,
    Dashboard
  },
}
</script>
