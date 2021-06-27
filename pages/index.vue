<template>
  <v-row no-gutters>
    <v-container fluid fill-heigth align-center ma-0 pa-0>
      <v-row justify="center" align-center no-gutters>
        <v-col cols="10" sm="6" align="center">
            {{email}} 
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
    };
  },
    computed:{
    ...mapState(['token','email'])
  },
  methods: {

  },
};
</script>
