<template>
  <div class="user">
    <div class="container">
<div class="row">
<div class="col-lg-3">
<figure>
<img class="avatar" v-bind:src="userData.img" >
</figure>
</div>
<div class="col-lg-9 description">
<p>Имя: {{userData.name}}</p>
<p>Телефон: {{userData.phone}}</p>
<p>Email: {{userData.email}}</p>
<p>Дата рождения: {{userData.birth}}</p>
</div>
</div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'User',
  computed: { 
    ...mapGetters(['getUserById']), 
  },
  data() {
    return {
      userData: {}
    }
  },
  async created(){
    console.log(this.userData);
    this.userData = await this.getUserById(this.$route.params.id);
    console.log(this.userData);
    this.userData = this.userData[0];
  }
}
</script>

<style lang="scss">
  .user {
    padding: 20px;
    & .container {

    }
  }
</style>