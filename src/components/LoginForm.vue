<template>
  <div class="hero-content flex-col lg:flex-col">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Vue-Firebase Chatroom</h1>
        <p class="py-6"></p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body"  @submit.prevent="handleSubmit">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" v-model="email"/>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" class="input input-bordered" v-model="password"/>
            <label class="label">
              <span @click="change" class="label-text-alt link link-hover">No account? Register instead</span>
            </label>
            <label class="label">
                <span v-if="error" class="label-text-alt link link-hover text-error font-bold">{{error.message}}</span>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import useLogin from '../composables/useLogin.js'
export default { 
    data(){
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods:{
        change(){
            this.$emit('change-Login');
        },
        async handleSubmit(){
            const res = await useLogin(this.email, this.password);
            if(res.error){
                this.error = res.error;
                return;
            }else{
                this.error = null;
            }
            this.$emit("login");
            
        }
    }
}
</script>

<style>

</style>