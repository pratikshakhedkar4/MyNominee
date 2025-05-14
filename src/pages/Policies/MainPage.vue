<template>
    <q-page-container class="bg-grey-2" style="padding: 20px;margin-left: 10px;">
        <q-page>
            <section>
                <q-toolbar class="text-black">
                    <q-toolbar-title>Policy Details</q-toolbar-title>
                </q-toolbar>
                <q-table class="my-sticky-header-table" flat bordered separator="cell" :rows="rows" :columns="columns"
                    row-key="id">
                    <template v-slot:body-cell-serialNo="props">
                        <q-td :props="props">
                            {{ props.rowIndex + 1 }}
                        </q-td>
                    </template>
                </q-table>
            </section>

        </q-page>
    </q-page-container>
</template>
  
<script setup>
import { ref } from 'vue';
import { $router } from 'boot/router';
const policyNumber = ref('');
const policyType = ref('');

const columns = [
    {
        name: 'serialNo',
        label: 'S.No.',
        align: 'center',
        required: true,
        sortable: true,
    },
    {
        name: 'policyNumber',
        label: 'Policy Number',
        align: 'left',
        field: 'policyNumber',
        sortable: true,
    },
    {
        name: 'policyType',
        label: 'Policy Type',
        align: 'left',
        field: 'policyType',
        sortable: true,
    },
    {
        name: 'policyProvider',
        label: 'Policy Provider',
        align: 'left',
        field: 'policyProvider',
        sortable: true,
    },
    {
        name: 'policyName',
        label: 'Policy Name',
        align: 'left',
        field: 'policyName',
        sortable: true,
    },
    {
        name: 'startDate',
        label: 'Policy Start Date',
        align: 'left',
        field: 'startDate',
        sortable: true,
    },
    {
        name: 'endDate',
        label: 'Policy End Date',
        align: 'left',
        field: 'endDate',
        sortable: true,
    },
    {
        name: 'premium',
        label: 'Premium Amount',
        align: 'left',
        field: 'premium',
        sortable: true,
    },
    {
        name: 'premiumFeq',
        label: 'Premium Frequency',
        align: 'left',
        field: 'premiumFeq',
        sortable: true,
    },
    {
        name: 'sumInsured',
        label: 'Sum Insured',
        align: 'left',
        field: 'sumInsured',
        sortable: true,
    },
]

const rows = [
    { id: 1, policyNumber: 'P123', policyType: 'Health', policyProvider: 'LIC', policyName: 'Term Plan', endDate: '12-10-2030', startDate: '12-10-2021', premium: '2000', sumInsured: '450000', premiumFeq: '3 Months' },
    { id: 2, policyNumber: 'P123', policyType: 'Health', policyProvider: 'LIC', policyName: 'Term Plan', endDate: '12-10-2030', startDate: '12-10-2021', premium: '2000', sumInsured: '450000', premiumFeq: '3 Months' },
    { id: 3, policyNumber: 'P123', policyType: 'Health', policyProvider: 'LIC', policyName: 'Term Plan', endDate: '12-10-2030', startDate: '12-10-2021', premium: '2000', sumInsured: '450000', premiumFeq: '3 Months' },
    { id: 4, policyNumber: 'P123', policyType: 'Health', policyProvider: 'LIC', policyName: 'Term Plan', endDate: '12-10-2030', startDate: '12-10-2021', premium: '2000', sumInsured: '450000', premiumFeq: '3 Months' },
    { id: 5, policyNumber: 'P123', policyType: 'Health', policyProvider: 'LIC', policyName: 'Term Plan', endDate: '12-10-2030', startDate: '12-10-2021', premium: '2000', sumInsured: '450000', premiumFeq: '3 Months' },
    { id: 6, policyNumber: 'P123', policyType: 'Health', policyProvider: 'LIC', policyName: 'Term Plan', endDate: '12-10-2030', startDate: '12-10-2021', premium: '2000', sumInsured: '450000', premiumFeq: '3 Months' },
    { id: 7, policyNumber: 'P123', policyType: 'Health', policyProvider: 'LIC', policyName: 'Term Plan', endDate: '12-10-2030', startDate: '12-10-2021', premium: '2000', sumInsured: '450000', premiumFeq: '3 Months' }]
const policyTypes = [
    { label: 'Health Insurance', value: 'health' },
    { label: 'Life Insurance', value: 'life' },
    { label: 'Car Insurance', value: 'car' },
    { label: 'Home Insurance', value: 'home' }
];

function onSearch() {
    console.log('Searching for:', policyNumber.value, policyType.value);
}

function onReset() {
    policyNumber.value = '';
    policyType.value = '';
    console.log('Form reset');
}

// Function for button click
function onAdd() {
    console.log('Add button clicked');
}
</script>
  
<style scoped>
.rounded-borders {
    border-radius: 12px;
}
</style>
<style lang="sass">
.my-sticky-header-table
  border-radius: 0 !important
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #1A7D9C
    color: white

  .q-virtual-scroll__content
    background-color: #1A7D9C !important

  thead tr th   
    position: sticky
    z-index: 1
    color: white
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px

</style>
<style>
.my-sticky-header-table tbody tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.05);
}
</style>
  