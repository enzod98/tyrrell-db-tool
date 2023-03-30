<template>
  <q-card-section :horizontal="!$q.screen.xs" class="text-right flex-center">
    <q-card-section class="">
      <q-list separator>
        <q-item>
          <q-item-section avatar>Name</q-item-section>
          <q-item-section>Enzo Duré</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>Position</q-item-section>
          <q-item-section>12</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>Money</q-item-section>
          <q-item-section>$3,459,427</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>Sponsor Money</q-item-section>
          <q-item-section>$2,661,250</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-separator :vertical="!$q.screen.xs" />
    <q-card-section class="">
      <q-list separator>
        <q-item>
          <q-item-section avatar>Group</q-item-section>
          <q-item-section>Pro - 12</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>Points</q-item-section>
          <q-item-section>5</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>Money</q-item-section>
          <q-item-section>$3,459,427</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>Sponsor Money</q-item-section>
          <q-item-section>$150,000</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card-section>
</template>

<script>
import { useQuasar } from "quasar";

export default {
  name: "ManagerComponent",
  setup() {
    const $q = useQuasar();
  },
};
</script>
