<template>
  <div class="space-y-6">
    <!-- Header e Busca -->
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-physio-dark uppercase tracking-tight">Pacientes</h2>
        <button 
          @click="isModalOpen = true"
          class="bg-physio-dark text-white px-4 py-2 rounded-xl font-bold shadow-md flex items-center gap-2 active:scale-95 transition"
        >
          <PlusIcon class="w-5 h-5" /> Novo
        </button>
      </div>
      
      <div class="relative">
        <SearchIcon class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-physio-medium" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Buscar paciente por nome..."
          class="w-full pl-10 pr-4 py-3 rounded-2xl border border-physio-soft focus:ring-2 focus:ring-physio-dark outline-none bg-white"
        />
      </div>
    </div>

    <!-- Lista de Pacientes -->
    <div class="grid gap-3">
      <div v-if="filteredPatients.length === 0" class="text-center py-10 text-gray-400">
        Nenhum paciente encontrado.
      </div>
      
      <div 
        v-for="patient in filteredPatients" 
        :key="patient.id"
        class="bg-white p-4 rounded-2xl border border-physio-soft shadow-sm flex justify-between items-center"
      >
        <div>
          <h3 class="font-bold text-lg text-slate-800">{{ patient.name }}</h3>
          <p class="text-sm text-physio-medium font-medium">{{ patient.phone }}</p>
          <p class="text-xs text-gray-400 mt-1 line-clamp-1 italic">{{ patient.complaint }}</p>
        </div>
        <button class="text-physio-dark p-2">
          <ChevronRightIcon />
        </button>
      </div>
    </div>

    <!-- Modal de Cadastro -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
      <div class="bg-white w-full max-w-md rounded-t-[2rem] sm:rounded-[2rem] p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-physio-dark">Novo Paciente</h3>
          <button @click="isModalOpen = false" class="text-gray-400"><XIcon /></button>
        </div>

        <form @submit.prevent="handleSave" class="space-y-4">
          <div>
            <label class="text-xs font-bold text-physio-medium uppercase ml-1">Nome Completo</label>
            <input v-model="form.name" type="text" required class="w-full p-3 rounded-xl border border-physio-soft outline-physio-dark" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-physio-medium uppercase ml-1">Telefone</label>
              <input v-model="form.phone" type="tel" required class="w-full p-3 rounded-xl border border-physio-soft outline-physio-dark" />
            </div>
            <div>
              <label class="text-xs font-bold text-physio-medium uppercase ml-1">Nascimento</label>
              <input v-model="form.birthDate" type="date" class="w-full p-3 rounded-xl border border-physio-soft outline-physio-dark" />
            </div>
          </div>
          <div>
            <label class="text-xs font-bold text-physio-medium uppercase ml-1">Queixa Principal</label>
            <textarea v-model="form.complaint" rows="3" class="w-full p-3 rounded-xl border border-physio-soft outline-physio-dark"></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-physio-dark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition"
          >
            Salvar Paciente
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { PlusIcon, SearchIcon, ChevronRightIcon, XIcon } from 'lucide-vue-next';
import { patientService } from '../../../infrastructure/container';

const patients = ref([]);
const isModalOpen = ref(false);
const searchQuery = ref('');

const form = ref({
  name: '',
  phone: '',
  birthDate: '',
  complaint: ''
});

const loadPatients = async () => {
  patients.value = await patientService.listAll();
};

onMounted(loadPatients);

const filteredPatients = computed(() => {
  return patients.value.filter(p => 
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const handleSave = async () => {
  try {
    await patientService.register({ ...form.value });
    isModalOpen.value = false;
    // Reset form
    form.value = { name: '', phone: '', birthDate: '', complaint: '' };
    await loadPatients();
  } catch (error) {
    alert(error.message);
  }
};
</script>