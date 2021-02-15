<template>
  <table class="table">
    <thead>
      <th>Имя пользователя</th>
      <th>Телефон пользователя</th>
      <th>Email пользователя</th>
      <th>Дата рождения пользователя</th>
    </thead>
    <tbody>
      <tr :key="user._id" v-for="user in getUsers">
        <td data-name="Имя пользователя" ><router-link :to="{name: 'User', params:{user: user, id: user._id}}">
          {{user.name}}
        </router-link></td>
        <td data-name="Телефон пользователя">{{user.phone}}</td>
        <td data-name="Email пользователя">{{user.email}}</td>
        <td data-name="Дата рождения пользователя">{{user.birth}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Table",
  computed: {
    ...mapGetters(['getUsers'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media all and (max-width:800px) {
    thead {
      display: none;
    }
        tr {
      border: 1px solid black;
    }
    tbody td {
      display: flex;
      justify-content: space-between;
    }
    tbody td:before {
      content: attr(data-name);
    }
  }
</style>
