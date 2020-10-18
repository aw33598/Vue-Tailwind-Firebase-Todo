<template>
  <div>
    <Header headerTitle="About"></Header>
    <AboutDetails></AboutDetails>
  </div>
</template>

<script>
import Header from '../components/Header';
import AboutDetails from '../components/AboutDetails';
export default {
  name: 'About',
  components: {
    Header,
    AboutDetails
  }
}
</script>