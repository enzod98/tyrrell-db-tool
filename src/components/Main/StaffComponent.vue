<template>
  <q-card-section class="text-center">
    <TableComponent
      :columnsProp="columns"
      :rowsProp="rows"
      :columnClassProp="'col-4'"
      :rowClassProp="'row'"
    />
    <q-separator></q-separator>
  </q-card-section>
  <q-card-section :horizontal="!$q.screen.xs" class="text-right">
    <q-card-section class="full-width">
      <q-list separator>
        <q-item class="justify-between">
          <q-item-section class="text-center">Staff</q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Experience</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="1" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Motivation</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="250" :value="114" :key="2" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Technical skill</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="3" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Stress Handling</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="4" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Concentration</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="4" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Efficiency</q-item-section>
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
          <q-item-section class="text-center">Facilities</q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Windtunnel</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Pitstop T.C.</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>R&D Workshop</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent :maxValue="100" :value="25" :key="2112" />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>R&D Design Center</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent
              :maxValue="45"
              :value="37"
              :key="2112"
              :invertedColor="true"
            />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Engineering workshop</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent
              :maxValue="45"
              :value="37"
              :key="2112"
              :invertedColor="true"
            />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>AAC Lab</q-item-section>
          <q-item-section class="col-6">
            <ProgressComponent
              :maxValue="45"
              :value="37"
              :key="2112"
              :invertedColor="true"
            />
          </q-item-section>
        </q-item>
        <q-item class="justify-between">
          <q-item-section avatar>Commercial</q-item-section>
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
import TableComponent from "../Shared/TableComponent.vue";

export default {
  name: "StaffComponent",
  setup() {
    return {
      columns: [
        {
          name: "overall",
          label: "Overall",
        },
        {
          name: "salary",
          label: "Salary",
        },
        {
          name: "maintenanceCost",
          label: "Maintenance Cost",
        },
      ],
      rows: [
        {
          overall: 108,
          salary: "$ 5,445,665",
          maintenanceCost: "$ 445,665",
        },
      ],
    };
  },
  components: { ProgressComponent, TableComponent, TableComponent },
};
</script>
