<template>
  <q-card-section :horizontal="!$q.screen.xs" class="text-right flex-center">
    <q-card-section class="full-width">
      <q-list separator>
        <q-item class="justify-between">
          <q-item-section avatar>Name</q-item-section>
          <q-item-section class="col-6">Enzo Duré</q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Overall</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="1" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Leadership</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="250" :value="114" :key="2" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>R&D Mec.</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="3" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>R&D Elec.</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="4" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-separator :vertical="!$q.screen.xs" />
    <q-card-section class="full-width">
      <q-list separator>
        <q-item class="justify-between">
          <q-item-section avatar>Salary</q-item-section>
          <q-item-section class="col-6"> $455,666 </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>R&D Aero.</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Pit Coord.</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Motivation</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>AGE</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent
              :maxValue="45"
              :value="37"
              :key="2112"
              :invertedColor="true"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card-section>
</template>

<script>
import ProgressComponent from "../Shared/ProgressComponent.vue";

export default {
  name: "TechDirectorComponent",
  setup() {},
  components: { ProgressComponent },
};
</script>
