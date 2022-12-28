<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

import { UserIcon } from "@gun-vue/components";

// SEA{"ct":"fO+RQqcOmSaSkGj4lpUjdu5alM4LA28CWEUhnIvbl3HXEEyjO7h+r4Kj7LE+TWdLZqrvFtuGmJlwaxCHrPlj6Coy5eTMe/YdJ8IQ7bGeFgTq0Y/7/RL+sv2cpkf23QdHXOLsCLci/+SWET3XffJpZ5I2Fw9gKuwxDtleY6H0gtxldPfHFLIX/frAtPhQhFXdRtKels9xDUPOX9DNKgIx5chPeDoNCu6fr93g3ge3yGWdWfWJ7MCnS+kJ4GagqqSIhYsiGztXzIWhDxetBhPO0VNKrAUIMouLMgHMk1SeIPYt8fWieK4fCIwFAZrKO+oKcbCAvOfg3pB+zTvMKI+N0LXiHb2u3a+RSe/ZbELwrsaiKG7CrxthiXYRmhGo4jZwhkpsuc17dO1Y3IXu+VwIpyimPv3ZH3Bk+Zz6z4E=","iv":"Mwcfmou6DROo98ILTghC","s":"yS3WLiUTbNFO"}

const user = useUserStore();

const detailsElement = ref();

const appName = import.meta.env.VITE_APP_NAME;

const blur = () => {
  detailsElement.value.removeAttribute("open");
};
</script>
<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" aria-roledescription="logo"
          ><strong>{{ appName }}</strong></router-link
        >
      </li>
    </ul>
    <ul>
      <template v-if="user.isAuthenticated">
        <li>
          <details role="list" dir="rtl" ref="detailsElement">
            <summary
              aria-haspopup="listbox"
              role="link"
              :aria-busy="user.isLoading"
            >
              {{ $t("My Account") }}
            </summary>
            <ul role="listbox" @click="blur()">
              <li>
                <router-link to="/settings">{{ $t("Settings") }}</router-link>
              </li>
              <li>
                <router-link to="/logout">{{ $t("Logout") }}</router-link>
              </li>
            </ul>
          </details>
        </li>
      </template>
      <template v-else>
        <li>
          <router-link to="/">{{ $t("Home") }}</router-link>
        </li>
        <li>
          <router-link to="/login">{{ $t("Login") }}</router-link>
        </li>
        <li>
          <router-link to="/sign-up">{{ $t("Sign up") }}</router-link>
        </li>
        <user-icon
          :size="40"
          @user="$router.push(`/users/${$event}`)"
          @room="$router.push(`/rooms/${$event}`)"
          @post="$router.push(`/posts/${$event}`)"
          @chat="$router.push(`/my/chat/${$event}`)"
        ></user-icon>
      </template>
    </ul>
  </nav>
</template>
