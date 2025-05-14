<template>
    <div class="q-pa-md">
        <q-card class="q-pa-lg shadow-2 rounded-borders">
            <div class="text-h6 q-mb-md">Submit Policy Information</div>

            <!-- Form with fields in one row -->
            <q-form @submit.prevent="onSubmit" class="q-gutter-md">

                <!-- Row for Policy ID, Policy Type, Policy Provider -->
                <q-row class="q-gutter-md">
                    <q-col :cols="12" :md="4">
                        <q-input v-model="policyId" label="Policy ID/Number" filled
                            :rules="[val => !!val || 'Policy ID/Number is required']" />
                    </q-col>

                    <q-col :cols="12" :md="4">
                        <q-select v-model="policyType" :options="policyTypes" label="Policy Type" filled
                            :rules="[val => !!val || 'Policy Type is required']" />
                    </q-col>

                    <q-col :cols="12" :md="4">
                        <q-input v-model="policyProvider" label="Policy Provider/Insurer" filled
                            :rules="[val => !!val || 'Policy Provider is required']" />
                    </q-col>
                </q-row>

                <!-- Row for Policy Name, Start Date, and End Date -->
                <q-row class="q-gutter-md">
                    <q-col :cols="12" :md="4">
                        <q-input v-model="policyName" label="Policy Name" filled
                            :rules="[val => !!val || 'Policy Name is required']" />
                    </q-col>

                    <q-col :cols="12" :md="4">
                        <q-input v-model="startDate" label="Policy Start Date" filled type="date" />
                    </q-col>

                    <q-col :cols="12" :md="4">
                        <q-input v-model="endDate" label="Policy End Date" filled type="date" />
                    </q-col>
                </q-row>

                <!-- Row for Policy Duration, Premium Amount, Payment Frequency -->
                <q-row class="q-gutter-md">
                    <q-col :cols="12" :md="4">
                        <q-input v-model="policyDuration" label="Policy Duration (Years)" filled type="number" />
                    </q-col>

                    <q-col :cols="12" :md="4">
                        <q-input v-model="premiumAmount" label="Premium Amount" filled type="number" />
                    </q-col>

                    <q-col :cols="12" :md="4">
                        <q-select v-model="paymentFrequency" :options="paymentFrequencies" label="Premium Payment Frequency"
                            filled />
                    </q-col>
                </q-row>

                <!-- Row for Sum Assured and Policy Status -->
                <q-row class="q-gutter-md">
                    <q-col :cols="12" :md="6">
                        <q-input v-model="sumAssured" label="Sum Assured" filled type="number" />
                    </q-col>

                </q-row>

                <!-- Submit Button -->
                <div class="q-mt-md" style="display: flex; justify-content: flex-end;">
                    <q-btn label="Submit" color="primary" type="submit" icon="check" label-position="right" />
                </div>
            </q-form>

        </q-card>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            policyId: '',
            policyType: '',
            policyProvider: '',
            policyName: '',
            startDate: '',
            endDate: '',
            policyDuration: '',
            premiumAmount: '',
            paymentFrequency: '',
            sumAssured: '',
            policyStatus: '',
            policyTypes: ['Life', 'Health', 'Term', 'Car', 'Home'],
            paymentFrequencies: ['Monthly', 'Quarterly', 'Annually']
        };
    },
    methods: {
        onSubmit() {
            // Handle form submission logic here
            console.log({
                policyId: this.policyId,
                policyType: this.policyType,
                policyProvider: this.policyProvider,
                policyName: this.policyName,
                startDate: this.startDate,
                endDate: this.endDate,
                policyDuration: this.policyDuration,
                premiumAmount: this.premiumAmount,
                paymentFrequency: this.paymentFrequency,
                sumAssured: this.sumAssured
            });
        },
    },
};
</script>
  
<style scoped>
/* Add custom styles here */
</style>
  