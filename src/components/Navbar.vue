<template>
  <div>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <div class="flex flex-col ml-4 text-left">
                <p v-if="user" class="font-bold">Hello {{user.displayName}}, welcome to FirebaseChat</p>
                <p v-if="user" class="text-base-300">Currently logged in as {{user.email}}</p>
            </div>
        </div>
        <div class="navbar-end">
            <span class="btn" @click="logout">Logout</span>
        </div>
        {{error}}
    </div>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout.js'
import getUser from '../composables/getUser.js'
export default {

    data(){
        return {
            error: null,
        }
    },
    methods:{
        async logout(){
            const res = await useLogout();
            if(res.error){
                this.error = res.error;
                return;
            }else{
                this.error = null;
            }
            this.$router.push('/');
        }
    },
    computed:{
        user(){
            return getUser();
        }
    },  
}
</script>

<style>

</style>