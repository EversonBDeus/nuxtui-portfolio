<script setup lang="ts">
import PortfolioTabs from '~/components/tabs/PortfolioTabs.vue'
import AboutAccordion from '~/components/profile/AboutAccordion.vue'
import { profile } from '~/data/profile'

const isLoading = ref(false)
const avatarOk = ref(true)
const isAboutOpen = ref(false)

onMounted(() => {
  const img = new Image()
  img.onload = () => (avatarOk.value = true)
  img.onerror = () => (avatarOk.value = false)
  img.src = profile.avatarSrc
})

const toast = useToast()

function notifyMissing(label: string, e?: Event) {
  e?.preventDefault?.()
  toast.add({
    title: 'Link não configurado',
    description: `Adicione o link de ${label} em data/profile.ts`,
    icon: 'i-lucide-link-2-off'
  })
}

function onSocialClick(s: { label: string; url: string }, e: Event) {
  if (!s.url) notifyMissing(s.label, e)
}

function onContactClick(label: string, url: string, e: Event) {
  if (!url) notifyMissing(label, e)
}

const downloadCV = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    toast.add({
      title: 'Download iniciado',
      description: 'Seu currículo está sendo baixado.',
      icon: 'i-lucide-download'
    })
  }, 800)
}
</script>

<template>
  <section class="min-h-screen flex items-center justify-center pt-24 px-4">
    <div class="w-full max-w-3xl">
      <UCard class="text-center surface-panel">
        <div class="space-y-6 py-4">
          <!-- Avatar -->
          <div class="flex justify-center">
            <div
              class="rounded-full border-4 border-primary shadow-lg overflow-hidden
                     w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 flex items-center justify-center"
            >
              <img
                v-if="avatarOk"
                :src="profile.avatarSrc"
                alt="Foto de perfil"
                class="w-full h-full object-cover"
              />
              <UAvatar v-else size="3xl" icon="i-lucide-user" />
            </div>
          </div>

          <UAlert
            v-if="!avatarOk"
            title="Sem foto de perfil"
            description="Verifique o arquivo em public/img/profile/avatar.jpeg"
            icon="i-lucide-image-off"
            variant="soft"
          />

          <!-- Nome, headline e Sobre mim -->
          <div class="space-y-1">
            <h1 class="text-3xl sm:text-4xl font-bold">{{ profile.name }}</h1>

            <p class="text-base sm:text-lg text-muted">
              {{ profile.headline }}
            </p>

            <!-- Gatilho pequeno: “Sobre mim” -->
            <div class="pt-1 flex justify-center">
              <UTooltip text="Clique para abrir / fechar">
                <UButton
                  variant="ghost"
                  color="neutral"
                  size="sm"
                  class="!px-2 !py-1 text-xs text-muted hover:text-toned"
                  :icon="isAboutOpen ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                  @click="isAboutOpen = !isAboutOpen"
                >
                  Sobre mim
                </UButton>
              </UTooltip>
            </div>

            <!-- Accordion oculto e pequeno -->
            <div v-if="isAboutOpen" class="mt-2 flex justify-center">
              <div class="w-full max-w-sm">
                <AboutAccordion />
              </div>
            </div>
          </div>

          <!-- Redes sociais -->
          <div class="flex justify-center gap-4 sm:gap-6">
            <UButton
              v-for="s in profile.socials"
              :key="s.label"
              variant="ghost"
              size="lg"
              :to="s.url || '#'"
              :aria-label="s.label"
              :ui="{ leadingIcon: s.brandClass }"
              :icon="s.icon"
              @click="(e) => onSocialClick(s, e)"
            />
          </div>

          <!-- Ações -->
          <div class="pt-1">
            <div class="flex items-center justify-center gap-4 flex-wrap">
              <UButton
                color="primary"
                variant="solid"
                size="xl"
                icon="i-lucide-download"
                :loading="isLoading"
                loading-icon="i-lucide-loader-circle"
                class="h-14 px-8 min-w-[220px] rounded-lg"
                @click="downloadCV"
              >
                Download CV
              </UButton>

              <div class="flex items-center gap-3">
                <UButton
                  variant="soft"
                  size="xl"
                  class="h-14 w-14 justify-center rounded-lg"
                  aria-label="WhatsApp"
                  :to="profile.contact.whatsappUrl || '#'"
                  icon="i-simple-icons-whatsapp"
                  :ui="{ leadingIcon: 'brand-whatsapp' }"
                  @click="(e) => onContactClick('WhatsApp', profile.contact.whatsappUrl, e)"
                />
                <UButton
                  variant="soft"
                  size="xl"
                  class="h-14 w-14 justify-center rounded-lg"
                  aria-label="Telegram"
                  :to="profile.contact.telegramUrl || '#'"
                  icon="i-simple-icons-telegram"
                  :ui="{ leadingIcon: 'brand-telegram' }"
                  @click="(e) => onContactClick('Telegram', profile.contact.telegramUrl, e)"
                />
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div class="pt-2">
            <USeparator class="my-6" />
            <PortfolioTabs />
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>