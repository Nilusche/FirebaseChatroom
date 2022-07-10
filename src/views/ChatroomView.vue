<template>
  <div>
    <Navbar/>
    <div class="min-h-screen bg-base-200">
        <ChatForm/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ChatForm from '@/components/ChatForm.vue'
export default {
    components: {
        Navbar,
        ChatForm,
    },
}
</script>

<style>

</style>