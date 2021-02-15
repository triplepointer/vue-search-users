<template>
  <div class="home">
    <form action="" class="home__form" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name" class="form-label">Имя пользователя</label>
        <input :value="getName" maxlength="25" @change="updateName($event.target.value)" type="text" id="name" class="form-control">
        <span v-if="IsThereNameError" class="error text-danger">Имя пользователя не должно содержать цифр!</span>
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Номер телефона пользователя</label>
        <input :value="getPhone" maxlength="11" @change="updatePhone($event.target.value)" type="tel" id="phone" class="form-control">
        <span v-if="IsTherePhoneError" class="error text-danger">Телефон не должен содержать букв!</span>
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email пользователя</label>
        <input :value="getEmail" @change="updateEmail($event.target.value)" type="email" id="email" class="form-control">
        <span v-if="IsThereEmailError" class="error text-danger">Почтовый адрес должен состоять из имени, разделителя @ и доменого имени почтового сервера на конце!</span>
      </div>
      <div class="form-group">
        <label for="birth" class="form-label">Дата рождения пользователя</label>
        <input :value="getBirth" @change="updateBirth($event.target.value)" type="date" id="birth" class="form-control">
      </div>
      <button type="submit" class="home__submit btn btn-dark">Поиск</button>
    </form>
    <Table v-if="getIsSubmitClicked && getUsers.length !== 0"/>
    <h3 class="home__nothing" v-else-if="getIsSubmitClicked">
      Ничего не найдено
    </h3>
  </div>
</template>

<script>
import Table from '@/components/Table';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    Table
  },
  computed: {
    ...mapGetters(['getUsers', 'getIsSubmitClicked', 'getName', 'getEmail', 'getPhone', 'getBirth',
    'IsTherePhoneError', 'IsThereNameError', 'IsThereEmailError']),
  },
  methods: {
    ...mapActions(['fetchUsers','updateName','updateEmail','updatePhone', 'updateBirth','updateIsSubmitClicked']),
    onSubmit: async function() {
      const data = {};

      if(this.getName !== '') {
        data.name = this.getName;
      }
      if(this.getEmail !== '') {
        data.email = this.getEmail;
      }
      if (this.getPhone !== '') {
        data.phone = this.getPhone;
      }
      await this.fetchUsers(data);
      this.updateIsSubmitClicked();
    }
  }
};
</script>

<style lang="scss">
  .home {
    padding: 20px;
    &__form {
      display: flex;
      flex-direction: column;
      padding: 20px;
      border: 1px solid black;
      max-width: 860px;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    &__submit {
      align-self: center;
    }
    &__nothing {
      text-align: center;
    }
  }
</style>
