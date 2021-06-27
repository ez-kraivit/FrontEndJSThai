<template>
  <v-row no-gutters>
    <v-container fluid fill-heigth align-center ma-0 pa-0>
      <v-row justify="center" align-center no-gutters>
        <v-col cols="10" sm="6" align="center" >
          <h2>Login</h2>
          <v-text-field
            type="email"
            v-model="email"
            label="Email Input"
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="password"
            label="Password Input"
          ></v-text-field>
          <v-btn rounded block v-on:click="connectEmailPassword"> Login </v-btn>
          <br>
            <v-btn rounded block v-on:click="connectRegister"> Register </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    connectEmailPassword() {
      this.$store.dispatch("signInWithEmailPassword", {
        email: this.email,
        password: this.password,
      });
    },
    connectRegister(){
        this.$store.dispatch("signUpEmailAndPassword", {
        email: this.email,
        password: this.password,
      });
    }
  },
};
</script>
