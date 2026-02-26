export function toPublicPath(src: string) {
  if (!src) return src
  return src.startsWith('/') ? src : `/${src}`
}

export function formatYm(ym: string) {
  // Espera "YYYY-MM"
  if (!ym || !/^\d{4}-\d{2}$/.test(ym)) return ym

  // “-01” para virar uma data válida
  const d = new Date(`${ym}-01T00:00:00`)
  if (Number.isNaN(d.getTime())) return ym

  // ex: "fev. de 2024" -> vamos compactar
  const txt = new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' }).format(d)
  return txt.replace(' de ', '/').replace('.', '').toLowerCase()
}