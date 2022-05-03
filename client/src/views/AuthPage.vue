<template lang="pug">
div.MainFrame(v-show="regWindow != true")
    div.DisplayStyle.SpanStile 
        div.OtstupStyle
            span Логин
            input(v-model="this.auth.login")
        div.OtstupStyle
            span Пароль
            input(v-model="this.auth.password")
        div.OtstupStyle
            button.ButtonAuthStyle(@click="authUp()" ) Войти
            button.ButtonAuthStyle(@click="regWindow = !regWindow") Зарегестрироваться
div.MainFrame(v-show="regWindow == true")
    div.DisplayStyle.SpanStile 
        div.OtstupStyle
            span Имя пользователя
            input(v-model="this.reg.name")
        div.OtstupStyle
            span Логин
            input(v-model="this.reg.username")
        div.OtstupStyle
            span Пароль
            input(v-model="this.reg.password")
        div.OtstupStyle
            button.ButtonAuthStyle(@click="regWindow = !regWindow") Назад
            button.ButtonAuthStyle(@click="regAccept()") Зарегестрироваться
</template>

<script>
export default {
  data() {
    return {
      regWindow: false,
      auth: {
          login: "",
          password: ""
      },
      reg: {
          name: "",
          username: "",
          password: ""
      }
    };
  },
  methods: {
    async authUp() {
      const response = await fetch("auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.auth.login,
          password: this.auth.password,
        }),
      });
      if (response.status == 400) {
        this.validation.dataErr = true;
      } else {
        const resJson = await response.json();
        const token = resJson.token;
        this.$store.commit("auth/newToken", token);
        this.$store.commit("auth/authExit", true);
        this.$router.push('/')
      }
    },
    async regAccept() {
        const response = await fetch("auth/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.reg.name,
          username: this.reg.username,
          password: this.reg.password,
        }),
      });
      if (response.status == 400) {
        this.validation.dataErr = true;
      } else {
        const resJson = await response.json();
        const token = resJson.token;
        this.$store.commit("auth/newToken", token);
        this.$store.commit("auth/authExit", true);
      }
    },
  },
};
</script>

<style scoped>
.MainFrame {
  height: 20vw;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
}
.DisplayStyle {
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 90%;
  align-items: center;
  margin-top: 4vw;
  background: #737373;
  gap: 1vw;
  justify-content: space-evenly;
}
.SpanStile {
  color: white;
  font-size: 1.5vw;
}
.OtstupStyle {
  display: flex;
  gap: 2vw;
}
.ButtonAuthStyle {
  color: white;
  background: #540c0c;
  padding: 0.7vw;
  margin-bottom: 0vw;
  font-size: 1vw;
}
</style>
