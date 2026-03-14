<script setup lang="ts">
import PortfolioTabs from '~/components/tabs/PortfolioTabs.vue'
import AboutAccordion from '~/components/profile/AboutAccordion.vue'
import { profile } from '~/data/profile'

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

async function fileExists(url: string) {
  try {
    const head = await fetch(url, { method: 'HEAD' })
    if (head.ok) return true
    const get = await fetch(url, { method: 'GET' })
    return get.ok
  } catch {
    return false
  }
}

async function downloadCV() {
  const url = profile.cv?.url || '/files/cv.pdf'
  const ok = await fileExists(url)

  if (!ok) {
    toast.add({
      title: 'Currículo não encontrado',
      description: 'Coloque o arquivo em public/files/cv.pdf (ou ajuste data/profile.ts).',
      icon: 'i-lucide-file-x'
    })
    return
  }

  toast.add({
    title: 'Abrindo currículo',
    description: 'O arquivo será aberto em uma nova guia.',
    icon: 'i-lucide-download'
  })

  if (profile.cv?.openInNewTab) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    location.href = url
  }
}
</script>

<template>
  <section class="min-h-screen px-2 pt-20 sm:px-4 sm:pt-24">
    <div class="mx-auto w-full max-w-4xl">
      <UCard
        v-reveal
        class="surface-panel text-center"
        :ui="{ body: 'p-3 sm:p-6 md:p-8' }"
      >
        <div class="space-y-4 sm:space-y-6">
          <div class="flex justify-center">
            <div
              class="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-primary shadow-lg sm:h-40 sm:w-40 md:h-52 md:w-52"
            >
              <img
                v-if="avatarOk"
                :src="profile.avatarSrc"
                alt="Foto de perfil"
                class="h-full w-full object-cover"
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

          <div class="space-y-2">
            <h1 class="text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {{ profile.name }}
            </h1>

            <p class="mx-auto max-w-2xl text-sm leading-7 text-muted sm:text-lg">
              {{ profile.headline }}
            </p>

            <div class="flex justify-center pt-1">
              <UTooltip text="Clique para abrir / fechar">
                <UButton
                  v-reveal
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

            <div v-if="isAboutOpen" class="mt-2 flex justify-center">
              <div class="w-full max-w-md">
                <AboutAccordion />
              </div>
            </div>
          </div>

          <div class="flex justify-center gap-3 sm:gap-6">
            <UButton
              v-for="s in profile.socials"
              :key="s.label"
              v-reveal
              variant="ghost"
              size="lg"
              class="h-11 w-11 justify-center sm:h-14 sm:w-14"
              :to="s.url || '#'"
              :aria-label="s.label"
              :ui="{ leadingIcon: s.brandClass }"
              :icon="s.icon"
              @click="(e) => onSocialClick(s, e)"
            />
          </div>

          <div class="pt-1">
            <div class="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <UButton
                v-reveal
                color="primary"
                variant="solid"
                icon="i-lucide-download"
                class="w-full justify-center sm:w-auto"
                loading-auto
                @click="downloadCV"
              >
                Download CV
              </UButton>

              <div class="flex items-center gap-3">
                <UButton
                  v-reveal
                  variant="soft"
                  class="h-12 w-12 justify-center rounded-lg sm:h-14 sm:w-14"
                  aria-label="WhatsApp"
                  :to="profile.contact.whatsappUrl || '#'"
                  icon="i-simple-icons-whatsapp"
                  :ui="{ leadingIcon: 'brand-whatsapp' }"
                  @click="(e) => onContactClick('WhatsApp', profile.contact.whatsappUrl, e)"
                />
                <UButton
                  v-reveal
                  variant="soft"
                  class="h-12 w-12 justify-center rounded-lg sm:h-14 sm:w-14"
                  aria-label="E-mail"
                  :to="profile.contact.emailUrl || '#'"
                  icon="i-lucide-mail"
                  @click="(e) => onContactClick('E-mail', profile.contact.emailUrl, e)"
                />
              </div>
            </div>
          </div>

          <div class="pt-1 sm:pt-2">
            <USeparator class="my-4 sm:my-6" />
            <PortfolioTabs />
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>