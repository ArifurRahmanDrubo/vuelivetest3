
  <script setup>
  import { ref } from 'vue'
  import { useStore } from '../menu.js'
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia';

const menu = useStore();
const { filtereditems} =storeToRefs(menu);

function showAlert(itemName) {
      alert(`You clicked on ${itemName}`)
    }

  </script>
  
  <template>
    <div class="container mx-auto mt-8">

      <div v-for="item in filtereditems" :key="item.id" class="blog-item bg-white shadow-xl rounded-lg p-6 mb-4 mr-2 ml-2">
        <!-- <div class="font-bold text-lg">{{ item.name }}</div> -->
        <button @click="showAlert(item.name)">{{ item.name }}</button>
      </div>
      <router-link to="/" class="text-blue-500 hover:underline">Back to Home</router-link>
    </div>
  </template>