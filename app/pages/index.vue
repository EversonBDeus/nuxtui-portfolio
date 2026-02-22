<template>
  <main class="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center">
    <h1 class="text-4xl font-bold">Crie seu Currículo/Portfólio em minutos</h1>
    <p class="max-w-2xl text-lg text-muted">
      Escolha um template, personalize o tema e publique uma URL pública para compartilhar seu trabalho.
    </p>
    <div class="flex flex-wrap justify-center gap-3">
      <UButton to="/login" color="primary">Entrar</UButton>
      <UButton to="/signup" variant="soft">Criar conta</UButton>
      <UButton to="/u/johndoe" variant="ghost">Ver exemplo público</UButton>
    </div>
  </main>
</template>
