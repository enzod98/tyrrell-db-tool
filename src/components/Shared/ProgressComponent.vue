<template>
  <q-linear-progress
    size="25px"
    :value="porcent()"
    :color="invertedColor ? 'progress-inverted' : 'progress'"
    reverse
  >
    <div class="absolute-full flex flex-center">
      <q-badge color="white" text-color="dark" :label="value" />
    </div>
  </q-linear-progress>
</template>
<script>
export default {
  name: "ProgressComponent",
  props: {
    invertedColor: {
      default: false,
    },
    value: Number,
    maxValue: Number,
  },
  setup(props) {
    return {
      porcent: function () {
        let porcent = 100 - (props.value * 100) / props.maxValue;
        console.log(porcent);
        return porcent * 0.01;
      },
    };
  },
};
</script>

<style scoped>
.text-progress {
  color: #dbdbdb !important;
  background: rgb(255, 9, 9);
  background: linear-gradient(
    90deg,
    rgba(255, 9, 9, 1) 0%,
    rgba(230, 131, 13, 1) 20%,
    rgba(255, 244, 0, 1) 40%,
    rgba(147, 250, 0, 1) 60%,
    rgba(39, 255, 0, 1) 80%,
    rgba(0, 129, 30, 1) 100%
  );
}
.text-progress-inverted {
  color: #dbdbdb !important;
  background: rgb(255, 9, 9);
  background: linear-gradient(
    90deg,
    rgba(0, 129, 30, 1) 0%,
    rgba(39, 255, 0, 1) 20%,
    rgba(147, 250, 0, 1) 40%,
    rgba(255, 244, 0, 1) 60%,
    rgba(230, 131, 13, 1) 75%,
    rgba(255, 9, 9, 1) 90%
  );
}
</style>
