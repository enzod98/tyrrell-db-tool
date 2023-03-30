<template>
  <q-page class="container">
    <div class="row">
      <div class="q-pa-md col-12 col-md-6">
        <card-component title="manager" avatar="main-page/manager.png">
          <template v-slot:content>
            <ManagerComponent />
          </template>
        </card-component>
      </div>
      <div class="q-pa-md col-12 col-md-6">
        <card-component title="driver" avatar="main-page/helmet.png">
          <template v-slot:content>
            <DriverComponent />
          </template>
        </card-component>
      </div>
      <div class="q-pa-md col-12 col-md-6">
        <card-component
          title="tec. director"
          avatar="main-page/tech-director.png"
        >
          <template v-slot:content>
            <TechDirectorComponent />
          </template>
        </card-component>
      </div>

      <div class="q-pa-md col-12 col-md-6">
        <card-component title="staff & facilities" avatar="main-page/staff.png">
          <template v-slot:content>
            <StaffComponent />
          </template>
        </card-component>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CardComponent from "src/components/Shared/CardComponent.vue";
import ManagerComponent from "src/components/Main/ManagerComponent.vue";
import DriverComponent from "src/components/Main/DriverComponent.vue";
import TechDirectorComponent from "src/components/Main/TechDirectorComponent.vue";
import StaffComponent from "src/components/Main/StaffComponent.vue";

export default defineComponent({
  name: "MainDataPage",
  components: {
    CardComponent,
    ManagerComponent,
    DriverComponent,
    TechDirectorComponent,
    StaffComponent,
  },
});
</script>
