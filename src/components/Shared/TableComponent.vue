<template>
  <q-table
    flat
    bordered
    dense
    :columns="columnas"
    :rows="rowsProp"
    row-key="name"
    hideBottom
    separator="cell"
  >
    <template v-slot:header="props">
      <q-tr :props="props" :class="rowClassProp">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          :class="columnClassProp"
        >
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props" :class="rowClassProp">
        <q-td v-for="(row, index) in props.row" :key="index" :props="props">
          {{ row }}
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import { defineComponent, ref } from "vue";
//import { default } from '../Main/StaffComponent.vue';

export default defineComponent({
  name: "TableComponent",
  props: {
    columnsProp: Array,
    rowsProp: Array,
    columnClassProp: {
      default: "",
    },
    rowClassProp: {
      default: "",
    },
  },
  setup(props) {
    const columnsTable = ref([]);
    const rowsTable = ref([]);

    props.columnsProp.forEach((column) => {
      columnsTable.value.push({
        label: column.label,
        name: column.name,
        required: true,
        sortable: false,
        headerClasses: props.columnClassProp,
        classes: props.columnClassProp,
        align: "center",
        field: (row) => row[column.name],
      });
    });

    return {
      columnas: columnsTable,
    };
  },
});
</script>

