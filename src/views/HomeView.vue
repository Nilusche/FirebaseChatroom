<template>
<div>
  <div class="hero min-h-screen bg-base-200">
    <SignupForm v-if="register" @change-Login="register = !register"/>
    <LoginForm v-else  @change-Login="register = !register"/>
  </div>
</div>
   
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
  data(){
    return {
      register: true
    }
  }, 
  components: {
    SignupForm,
    LoginForm
},
  
}
</script>

<style>
</style>
