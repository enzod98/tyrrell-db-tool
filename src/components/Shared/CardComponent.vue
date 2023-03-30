<template>
  <q-card bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar rounded>
          <img :src="img" />
          <!-- <img :src="`~/images/${avatar}`" /> -->
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-capitalize">{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator />
    <slot name="content" />
  </q-card>
</template>
<script>
import { getImage } from "../../composables/getAssets";

export default {
  props: {
    avatar: String,
    title: String,
  },
  setup(props) {
    // const img = (src) => {
    //   return require.context("@/assets/images/main-page/manager.png");
    // };
    return {
      img: getImage(props.avatar),
    };
  },
};
</script>
