<template>
  <div class="min-h-screen bg-[#F0F7F4] font-sans text-slate-800 pb-20">
    <!-- Header -->
    <nav class="bg-white border-b border-[#B5DBCC] p-4 sticky top-0 z-10 shadow-sm">
      <div class="max-w-md mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold text-[#078853] flex items-center gap-2">
          PhysioFlow
        </h1>
      </div>
    </nav>

    <!-- Conteúdo Dinâmico (onde as páginas aparecem) -->
    <main class="max-w-md mx-auto p-4">
      <router-view></router-view>
    </main>

    <!-- Menu Inferior (Mobile-first) -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-[#B5DBCC] p-2 flex justify-around shadow-lg">
      <router-link to="/" class="flex flex-col items-center p-2 text-gray-500" active-class="text-[#078853]">
        <span class="text-xs font-bold">Agenda</span>
      </router-link>
      <router-link to="/patients" class="flex flex-col items-center p-2 text-gray-500" active-class="text-[#078853]">
        <span class="text-xs font-bold">Pacientes</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
// Sem imports de componentes fixos aqui, o router-view cuida disso!
</script>