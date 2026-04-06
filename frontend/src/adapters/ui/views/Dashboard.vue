<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-bold text-physio-dark uppercase tracking-wider text-sm">Visitas de Hoje</h2>
      <button @click="showModal = true" class="bg-physio-dark text-white p-2 rounded-full shadow-lg">
        <PlusIcon class="w-6 h-6" />
      </button>
    </div>

    <div v-if="visits.length === 0" class="bg-white p-8 rounded-3xl border-2 border-dashed border-physio-soft text-center text-physio-medium font-medium">
      Nenhuma visita para hoje.
    </div>

    <div v-for="visit in visits" :key="visit.id" class="bg-white p-4 rounded-2xl shadow-sm border border-physio-soft">
      <div class="flex justify-between items-start mb-2">
        <div>
          <h3 class="font-bold text-lg">{{ visit.patientName }}</h3>
          <p class="text-physio-dark font-medium flex items-center gap-1">
            <ClockIcon class="w-4 h-4" /> {{ visit.time }}
          </p>
        </div>
        <span :class="statusStyle(visit.status)" class="text-[10px] px-2 py-1 rounded-full font-bold uppercase">
          {{ visit.status }}
        </span>
      </div>
      <p class="text-sm text-gray-500 mb-4">{{ visit.address }}</p>
      
      <button 
        v-if="visit.status === 'pendente'"
        @click="startVisit(visit)"
        class="w-full bg-physio-dark text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 active:scale-95 transition"
      >
        <ClipboardCheckIcon class="w-5 h-5" /> Iniciar Atendimento
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { PlusIcon, ClockIcon, ClipboardCheckIcon } from 'lucide-vue-next';
import { service } from '../../../infrastructure/container';

const visits = ref([]);

onMounted(async () => {
  visits.value = await service.getVisits();
});

const statusStyle = (status) => {
  if (status === 'concluído') return 'bg-green-100 text-green-700';
  return 'bg-yellow-100 text-yellow-700';
};
</script>