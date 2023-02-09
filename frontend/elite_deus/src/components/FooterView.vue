<template>
  <v-footer>
      <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class="bg-black text-center"
      >
        <v-card-text>
          <v-btn
            class="mx-4"
            icon="fa-brands fa-instagram"
            variant="plain"
            color="white"
          ></v-btn>
          <v-btn
            class="mx-4"
            icon="fa-brands fa-linkedin"
            variant="plain"
            color="white"
          ></v-btn>
          <v-btn
            class="mx-4"
            icon="fa-brands fa-facebook"
            variant="plain"
            color="white"
          ></v-btn>
          <v-btn
            class="mx-4"
            icon="fa-brands fa-github"
            variant="plain"
            color="white"
          ></v-btn>
        </v-card-text>

        <v-card-text class="text-white">
          @ {{ new Date().getFullYear() }} —
          <strong>Elite Deus @All Rights Reserved</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {

}
</script>

<style>
.v-footer {
  padding: 8px 0 !important;
}
</style>