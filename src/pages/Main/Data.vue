<template>
  <q-page class="container">
    <div class="row">
      <div class="q-pa-md col-4">
        <q-card bordered>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="~assets/images/main-page/manager.png" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Manager</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-card-section horizontal>
            <q-card-section>
              <q-table />
            </q-card-section>
            <q-separator vertical />
            <q-card-section class="col-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainDataPage",
});
</script>
