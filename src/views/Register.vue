<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid: $v.email.$dirty && (!$v.email.required || !$v.email.email)
          }"
        />
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid"
        >
          Введите Ваш email
        </small>
        <small
          v-else-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid"
          >Некорректно заполнено данное поле</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
              $v.password.$dirty &&
              (!$v.password.required || !$v.password.minLength)
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Введите Ваш пароль</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Длина пароля минимум {{ $v.password.$params.minLength.min }} символов
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{
            invalid: $v.email.$dirty && !$v.email.required
          }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >
          Введите Ваше имя
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" @change="agree = !agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    email: "",
    name: "",
    password: "",
    agree: false
  }),
  validations: {
    name: { required },
    email: { email, required },
    password: {
      required,
      minLength: minLength(6)
    },
    agree: {
      checked: v => v
    }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        return this.$v.$touch();
      }

      const formData = {
        email: this.email,
        name: this.name,
        password: this.password
      };

      console.log(formData);

      this.$router.push("/");
    }
  }
};
</script>
