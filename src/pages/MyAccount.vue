<template>
    <q-page class="q-pa-lg profile-form">
        <q-card flat bordered class="q-pa-md">
            <!-- Profile Header -->
            <div class="row q-col-gutter-md items-center">
                <div class="col-auto">
                    <q-avatar size="100px">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" />
                    </q-avatar>
                </div>
                <div class="col">
                    <div class="text-h6">Alexa R Rawles
                        <q-icon name="verified" color="primary" class="q-ml-sm" />
                    </div>
                    <div class="text-subtitle2 text-grey-7">alexarawles@gmail.com</div>
                    <div class="text-subtitle2">
                        +919876543223
                        <q-icon name="verified" color="primary" class="q-ml-sm" />
                    </div>
                </div>
            </div>

            <!-- Form Fields -->
            <div class="q-mt-lg row q-col-gutter-md">
                <!-- Left Column -->
                <div class="col-12 col-md-6">
                    <q-input filled label="Date of Birth" type="date" />
                    <q-input filled label="Permanent Address" class="q-mt-md" />
                    <q-input filled label="Aadhar No" hint="12 Digit Aadhar No" class="q-mt-md" />
                    <q-input filled label="Email ID" type='email' hint="Enter a valid Email ID" class="q-mt-md" />
                </div>

                <!-- Right Column -->
                <div class="col-12 col-md-6">
                    <q-select filled label="Gender" :options="['Male', 'Female', 'Other']" />
                    <q-input filled label="Current Address" class="q-mt-md" />
                    <q-input filled label="PAN No" hint="10 Digit PAN No" class="q-mt-md" />
                    <q-input filled label="OTP received on Mail" hint="Enter 6 Digit OTP valid for 5 min" class="q-mt-md" />
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="row justify-end q-mt-lg">
                <q-btn label="Clear" color="primary" class="q-mr-sm" />
                <q-btn label="Save" color="primary" />
            </div>
        </q-card>
    </q-page>
</template>
  
<script>
export default {
    name: 'UserProfileForm',
};
</script>
  
<style>
.profile-form .q-item__label {
    color: black;
}
</style>