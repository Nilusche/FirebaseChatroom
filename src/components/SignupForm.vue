<template>
  <div class="hero-content flex-col lg:flex-col">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Vue-Firebase Chatroom</h1>
        <p class="py-6"></p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body" @submit.prevent="handleSubmit">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" v-model="name" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" v-model="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" v-model="password"  class="input input-bordered" />
            <label class="label">
              <span @click="change" class="label-text-alt link link-hover">Already registered? Login instead</span>
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
import useSignup from '../composables/UseSignup.js'
export default {

    data(){
        return {
            name: '',
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
            const res = await useSignup(this.email, this.password, this.name);
            if(res.error){
                this.error = res.error;
                return;
            }else{
                this.error = null;
            }

            const user = res.user;
            
        }
    }
}
</script>

<style>

</style>