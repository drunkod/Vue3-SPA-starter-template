<script setup lang="ts">
import PageFooter from "./components/PageFooter.vue";
import NavBar from "./components/NavBar.vue";
import { useUserStore } from "./stores/user";
import { RouterView, useRouter } from "vue-router";
import { ref } from "vue";
import { navIsLoading } from "./router";
import { useTelegram } from "./helpers/tg";
const { onToggleButton, tg } = useTelegram();

// Using the store, attempt to get the current user
const user = useUserStore();

const isReady = ref(false);
const TgReady = ref(tg.ready());

if (!user.attemptedToFetchUser) {
  user.getUser();
}

const router = useRouter();
// if (TgReady.value) {
router.isReady().then(() => {
  isReady.value = true;
});
// }
</script>

<template>
  <Transition>
    <progress
      v-if="!isReady || navIsLoading"
      class="page-progress"
      :indeterminate="true"
    />
  </Transition>
  <NavBar />
  <main>
    <RouterView v-if="isReady" />
    <article v-else :aria-busy="true"></article>
  </main>
  <PageFooter />
</template>
