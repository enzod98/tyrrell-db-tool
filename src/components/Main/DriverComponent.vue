<template>
  <q-card-section :horizontal="!$q.screen.xs" class="text-right flex-center">
    <q-card-section class="full-width">
      <q-list separator>
        <q-item>
          <q-item-section avatar>Name</q-item-section>
          <q-item-section>Enzo Duré</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>CON</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="100" :value="25" :key="1" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>TAL</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="250" :value="114" :key="2" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>AGR</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="100" :value="25" :key="3" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>EXP</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="100" :value="25" :key="4" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>TEL</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="100" :value="75" :key="5" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-separator :vertical="!$q.screen.xs" />
    <q-card-section class="full-width">
      <q-list separator>
        <q-item>
          <q-item-section avatar>STA</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>CHA</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>MOT</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>REP</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>WEI</q-item-section>
          <q-item-section>
            <ProgressComponent :maxValue="150" :value="65" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>AGE</q-item-section>
          <q-item-section>
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
  name: "DriverComponent",
  setup() {},
  components: { ProgressComponent },
};
</script>
