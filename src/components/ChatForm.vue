<template>
  <div>
        <div class="container mx-auto">
            <div class="pb-24 pt-16 px-28 h-screen">
                <div class="flex border border-base-300 rounded shadow-lg h-full">

                    <!-- Right -->
                    <div class="w-full flex flex-col">

                        <!-- Header -->
                        <div class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                            <div class="flex items-center">
                                <div>
                                    <img class="w-10 h-10 rounded-full" src="https://picsum.photos/50/50"/>
                                </div>
                                <div class="ml-4">
                                    <p class="text-grey-darkest text-left">
                                        FirebaseChat
                                    </p>
                                    <p class="text-grey-darker text-xs mt-1">
                                        <span  v-for="name in ['Baran', 'bigschmalz', 'enni', 'kleiner Nili']" :key="name">&nbsp;{{name}},</span> ...
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Messages -->
                        <div class="flex-1 overflow-auto" style="background-color: #DAD3CC" ref="messages">
                            <div class="py-2 px-3 text-left" v-for="message in formattedDocs" :key="message.id" >

                                <div class="flex mb-2" v-if="message.name!=user.displayName">
                                    <div class="rounded py-2 px-3" style="background-color: #F2F2F2">
                                        <p class="text-sm text-accent">
                                            {{message.name}}
                                        </p>
                                        <p class="text-sm mt-1">
                                            {{message.message}}
                                        </p>
                                        <p class="text-right text-xs text-mygrey mt-1">
                                            {{message.createdAt}}
                                        </p>
                                    </div>
                                </div>



                                <div class="flex justify-end mb-2" v-else>
                                    <div class="rounded py-2 px-3" style="background-color: #E2F7CB">
                                        <p class="text-sm mt-1">
                                            {{message.message}}
                                        </p>
                                        <p class="text-right text-xs text-mygrey mt-1">
                                            {{message.createdAt}}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Input -->
                        <div class="bg-grey-lighter px-4 py-4 flex items-center">
                            <div class="flex-1 mx-4">
                                <input v-model="message" @keypress.enter="sendMessage" class="w-full border border-base-300 rounded px-2 py-2 focus:outline-none focus:ring-1 focus:ring-success" type="text"/>
                            </div>
                            <div @click="sendMessage">
                                <img class="w-10 hover:bg-base-300 rounded-full hover:cursor-pointer" src="@/assets/send-svgrepo-com.svg" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { projectAuth, timestamp} from '@/firebase/config'
import useCollection from '@/composables/useCollection.js'
import getCollection from '@/composables/getCollection.js'
import {formatDistanceToNow} from 'date-fns'
import {ref, onUpdated, computed} from 'vue'
export default {
    setup(){
        
        const {error, docs} = getCollection('messages')
        console.log(docs.value);
        const formattedDocs = computed(() => {
            if(docs.value){
                return docs.value.map(doc => {
                    return {
                        ...doc,
                        createdAt: formatDistanceToNow(new Date(doc.createdAt.seconds*1000))
                    }
                })
            }
            
        })

        return {docs, formattedDocs};
    },
    updated(){
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
    },
    data(){
        return {
            message: '',
        }
    },
    computed:{
        user(){
            return projectAuth.currentUser
        },

    },
    methods:{
        async sendMessage(){
            if(this.message == ''){
                return
            }
            
            const chat = {
                name: this.user.displayName,
                message: this.message,
                createdAt: timestamp()
            }

            await useCollection('messages').addDoc(chat)
            let error = useCollection().error;
            if(!error){
                this.message = '';
            }
            
        },
        formatdate(seconds){
            return formatDistanceToNow(new Date(seconds*1000))
        }
        
    }
}
</script>

<style>

</style>