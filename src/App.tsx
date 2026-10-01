import { useState, useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import './index.css'

// Tipos para la aplicaciÃ³n
type UserRole = 'parent' | 'child'
type LearningTopic = 'coima' | 'recognition' | 'impact' | 'consequences' | 'prevention' | 'ethics' | 'citizen' | 'test'
type BadgeType = 'topics-explorer' | 'game-master' | 'flappy-star' | 'snake-master' | 'catch-master' | 'memory-master' | 'dodge-master' | 'platform-levels' | 'platform-master'
type ProfileType = 'student' | 'family'

interface Badge {
  id: BadgeType
  name: string
  emoji: string
  color: string
  unlocked: boolean
}

interface UserProgress {
  totalActivities: number
  completedActivities: number
  badges: Badge[]
  conversations: number
  topicProgress: Record<LearningTopic, number>
  quizScores: number[]
  lastActiveDate: string
  streakDays: number
  kidsDone: string[]
  guidesDone: string[]
}

interface StudentProfile {
  name: string
  age: string
  district: string
  photo: string
  photoPos: PhotoPos
  progress: UserProgress
  customization: ProfileCustomization
}

interface FamilyProfile {
  name: string
  members: FamilyMember[]
  progress: UserProgress
  familyBadges: FamilyBadge[]
  activityLog: ActivityEntry[]
  familyAvatar: string
  activeMemberId?: string
}

type FamilyRole = 'Padre' | 'Madre' | 'Hijo' | 'Hija' | 'Tutor' | 'Abuelo' | 'Abuela'

interface FamilyMember {
  id: string
  name: string
  role: FamilyRole
  avatar: string
  activities: number
  guidesDone?: string[]
  conversations?: number
  lastActive?: string
}

type FamilyBadgeId = 'first-conversation' | 'first-learning' | 'united-family' | 'great-conversationalists' | 'against-corruption'

interface FamilyBadge {
  id: FamilyBadgeId
  name: string
  emoji: string
  desc: string
  unlocked: boolean
}

interface ActivityEntry {
  id: string
  text: string
  date: string
}

interface ProfileCustomization {
  themeColor: string
  backgroundType: 'gradient' | 'pattern' | 'solid'
  backgroundValue: string
  cardStyle: 'glass' | 'solid' | 'outlined'
  decorations: string[]
}

interface ConversationPrompt {
  id: string
  type: 'closed' | 'open'
  question: string
  kidQuestion: string
  parentQuestion?: string
  kidOptions?: string[]
  parentOptions?: string[]
  asked: boolean
}

interface PhotoPos {
  x: number
  y: number
  zoom: number
}

const defaultPhotoPos: PhotoPos = { x: 50, y: 50, zoom: 1 }

const allBadges: Badge[] = [
  { id: 'topics-explorer', name: 'Explorador de Temas', emoji: 'ðŸ“š', color: '#3B82F6', unlocked: false },
  { id: 'game-master', name: 'Maestro del Juego', emoji: 'ðŸŽ®', color: '#8B5CF6', unlocked: false },
  { id: 'flappy-star', name: 'Estrella Flappy', emoji: 'â­', color: '#F59E0B', unlocked: false },
  { id: 'snake-master', name: 'Maestro Snake', emoji: 'ðŸ', color: '#10B981', unlocked: false },
  { id: 'catch-master', name: 'Atrapa Valores', emoji: 'ðŸ§º', color: '#EC4899', unlocked: false },
  { id: 'memory-master', name: 'Mente Maestra', emoji: 'ðŸ§ ', color: '#14B8B6', unlocked: false },
  { id: 'dodge-master', name: 'CorazÃ³n Valiente', emoji: 'ðŸ’œ', color: '#F43F5E', unlocked: false },
  { id: 'platform-levels', name: 'Explorador', emoji: 'ðŸš©', color: '#22C55E', unlocked: false },
  { id: 'platform-master', name: 'Guerrero de Duoli', emoji: 'ðŸ‰', color: '#E11D48', unlocked: false },
]

// Requisitos reales de cada insignia, extraÃ­dos de la lÃ³gica de desbloqueo
// (checkStudentBadges, awardFlappyStar, awardSnakeMaster, awardCatchMaster,
// awardMemoryWin, awardDodgeMaster).
const BADGE_GUIDE: Record<BadgeType, { area: string; how: string }> = {
  'topics-explorer': { area: 'Temas', how: 'Completa 3 temas hasta el final.' },
  'game-master': { area: 'Examen', how: 'Responde el examen por primera vez.' },
  'flappy-star': { area: 'Flappy', how: 'Suma 500 XP jugando a Flappy.' },
  'snake-master': { area: 'Snake', how: 'Logra 30 puntos en Snake.' },
  'catch-master': { area: 'Atrapa', how: 'Logra 40 puntos en Atrapa la honestidad.' },
  'memory-master': { area: 'Memoria', how: 'Gana el juego Memoria en 20 movimientos o menos.' },
  'dodge-master': { area: 'Arenas', how: 'Supera los 3 niveles de CorazÃ³n Valiente.' },
  'platform-levels': { area: 'Plataformas', how: 'Supera 5 niveles de Tuki y los 10 Niveles.' },
  'platform-master': { area: 'Plataformas', how: 'Vence a Duoli y completa los 10 niveles.' },
}

const defaultFamilyBadges: FamilyBadge[] = [
  { id: 'first-conversation', name: 'Primera conversaciÃ³n', emoji: 'ðŸ…', desc: 'Completa la primera conversaciÃ³n familiar', unlocked: false },
  { id: 'first-learning', name: 'Primer aprendizaje', emoji: 'ðŸ“š', desc: 'Completa la primera actividad educativa', unlocked: false },
  { id: 'united-family', name: 'Familia unida', emoji: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦', desc: 'Todos los integrantes participan en una actividad', unlocked: false },
  { id: 'great-conversationalists', name: 'Grandes conversadores', emoji: 'ðŸ’¬', desc: 'Completa 5 conversaciones familiares', unlocked: false },
  { id: 'against-corruption', name: 'Contra la corrupciÃ³n', emoji: 'ðŸ›¡ï¸', desc: 'Completa 3 actividades sobre coimas y corrupciÃ³n', unlocked: false },
]

const corruptionTopics: LearningTopic[] = ['coima', 'recognition', 'impact', 'consequences', 'prevention']
const mainTopics: LearningTopic[] = ['coima', 'recognition', 'impact', 'consequences', 'prevention', 'ethics', 'citizen']

const topicTitles: Record<LearningTopic, string> = {
  coima: 'Â¿QuÃ© es una coima?',
  recognition: 'Â¿CÃ³mo reconocer una coima?',
  impact: 'Â¿Por quÃ© las coimas hacen daÃ±o?',
  consequences: 'Consecuencias legales y sociales',
  prevention: 'CÃ³mo prevenir la corrupciÃ³n',
  ethics: 'Ã‰tica e integridad personal',
  citizen: 'CiudadanÃ­a activa',
  test: 'Examen final',
}

const memberAvatars = ['ðŸ˜Š', 'ðŸ‘¨', 'ðŸ‘©', 'ðŸ‘¦', 'ðŸ‘§', 'ðŸ‘´', 'ðŸ‘µ', 'ðŸ§‘']
const familyRoles: FamilyRole[] = ['Padre', 'Madre', 'Hijo', 'Hija', 'Tutor', 'Abuelo', 'Abuela']
const familyAvatarOptions = ['ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦', 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', 'ðŸ‘©â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦', 'ðŸ‘¨â€ðŸ‘¨â€ðŸ‘§â€ðŸ‘¦', 'ðŸ‘ª', 'ðŸ ']
const defaultFamilyAvatar = 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦'

const roleAvatar: Record<FamilyRole, string> = {
  Padre: 'ðŸ‘¨',
  Madre: 'ðŸ‘©',
  Hijo: 'ðŸ‘¦',
  Hija: 'ðŸ‘§',
  Tutor: 'ðŸ§‘',
  Abuelo: 'ðŸ‘´',
  Abuela: 'ðŸ‘µ',
}

// Avatar seguro: nunca muestra imagen rota ni espacio vacÃ­o
const avatarOrFallback = (avatar: string | undefined | null): string => {
  if (typeof avatar === 'string' && avatar.trim() !== '') return avatar
  return 'ðŸ˜Š'
}

const reelsMessages: { id: string; author: string; message: string; time: string }[] = []

  const backgrounds: Array<{ name: string; type: 'gradient' | 'pattern' | 'solid'; value: string }> = [
   { name: 'CÃ¡lido', type: 'gradient', value: 'linear-gradient(135deg, #ffd4a8 0%, #ffb780 100%)' },
   { name: 'Enfoque Neutro', type: 'gradient', value: 'linear-gradient(135deg, #374151 0%, #4b5563 50%, #6b7280 100%)' },
   { name: 'Enfoque Suave', type: 'gradient', value: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)' },
   { name: 'Zen Claro', type: 'solid', value: '#f1f5f9' },
   { name: 'Zen Oscuro', type: 'solid', value: '#1e293b' },
   { name: 'Papel', type: 'solid', value: '#fefce8' },
   { name: 'Menta', type: 'solid', value: '#f0fdf4' },
   { name: 'Lavanda', type: 'solid', value: '#faf5ff' },
   { name: 'Amanecer', type: 'gradient', value: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #faf5ff 100%)' },
   { name: 'Ocre', type: 'gradient', value: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fef9e7 100%)' },
   { name: 'Noche', type: 'gradient', value: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%)' },
   { name: 'Tierra', type: 'gradient', value: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #3b1500 100%)' },
   { name: 'Cereza', type: 'gradient', value: 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 50%, #faf5ff 100%)' },
   { name: 'MelocotÃ³n', type: 'gradient', value: 'linear-gradient(135deg, #ffedd5 0%, #fdba74 50%, #fefce8 100%)' },
    { name: 'Hielo', type: 'solid', value: '#f8fafc' },
    { name: 'Loto', type: 'solid', value: '#fdf4ff' },
 ]

// Convierte cualquier color (#rgb, #rrggbb o rgba()) a rgba con la opacidad indicada
const withAlpha = (color: string, alpha: number): string => {
  const c = (color || '').trim()
  if (c.startsWith('#')) {
    const hex = c.slice(1)
    const full = hex.length === 3 ? hex.split('').map(ch => ch + ch).join('') : hex
    if (full.length >= 6) {
      const r = parseInt(full.slice(0, 2), 16)
      const g = parseInt(full.slice(2, 4), 16)
      const b = parseInt(full.slice(4, 6), 16)
      if (!Number.isNaN(r) && !Number.isNaN(g) && !Number.isNaN(b)) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
      }
    }
    return c
  }
  const m = c.match(/rgba?\(([^)]+)\)/)
  if (m) {
    const parts = m[1].split(',').map(s => s.trim())
    if (parts.length >= 3) return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`
  }
  return c
}

// Determina colores de texto segÃºn el fondo del tema (oscuro = blanco, claro = oscuro)
  const getTextColorForTheme = (backgroundValue: string): { primary: string; secondary: string; cardBg: string; label: string; border: string; accent: string } => {
   const isLight = ['#f1f5f9', '#fefce8', '#f0fdf4', '#faf5ff', '#f8fafc', '#e2e8f0', '#cbd5e1', '#fef9e7', '#fef3c7', '#fdf4ff', '#ffd4a8', '#ffb780'].some(c => backgroundValue.includes(c)) ||
     backgroundValue.includes('#f8fafc') || backgroundValue.includes('#f1f5f9') || backgroundValue.includes('#fefce8') ||
     backgroundValue.includes('#f0fdf4') || backgroundValue.includes('#faf5ff') || backgroundValue.includes('white') ||
     backgroundValue.includes('#cbd5e1') || backgroundValue.includes('#e2e8f0') || backgroundValue.includes('#fef9e7') ||
     backgroundValue.includes('#fdf4ff') || backgroundValue.toLowerCase().includes('#ffd4a8') ||
     backgroundValue.toLowerCase().includes('#ffb780')
   if (isLight) {
     return { primary: '#2A1B50', secondary: '#33334D', cardBg: '#ffffff', label: '#666680', border: 'rgba(42,27,80,0.12)', accent: '#6B46C1' }
   }
   return { primary: '#ffffff', secondary: '#e2e8f0', cardBg: 'rgba(255,255,255,0.14)', label: '#ffffff', border: 'rgba(255,255,255,0.30)', accent: '#c4b5fd' }
  }

const translations = {
  es: {
    greeting: 'Â¡Hola! ðŸ‘‹',
    welcomeLine: 'Â¡Empecemos a aprender juntos hoy!',
    welcomeTitle: 'Hablemos Claro',
    welcomeSub: 'Aprender sobre las coimas tambiÃ©n es aprender a tomar buenas decisiones.',
    start: 'ðŸŽ® Empecemos',
    howItWorks: 'â–¶ Â¿CÃ³mo funciona la app?',
    welcomeEyebrow: 'EducaciÃ³n en integridad para familias',
    welcomeStatTopics: '7 temas',
    welcomeStatGames: '7 juegos',
    welcomeStatLanguages: '2 idiomas',
    welcomeStatFamily: 'En familia',
    welcomeFootnote: '100% gratis Â· Sin anuncios Â· Tus datos se guardan en tu dispositivo',
    whyTitle: 'Â¿Por quÃ© Hablemos Claro?',
    whySub: 'Porque la integridad se aprende jugando, no con discursos.',
    why1Title: 'Reconoce a tiempo',
    why1Desc: 'Distingue una coima de un favor justo antes de aceptarla.',
    why2Title: 'Valores que se quedan',
    why2Desc: 'La honestidad se practica con juegos, quizzes y retos cortos.',
    why3Title: 'Juntos en casa',
    why3Desc: 'Adultos y hijos conversan con guÃ­as listas para usar en la mesa.',
    why4Title: 'Gratis y bilingÃ¼e',
    why4Desc: 'Sin costo ni anuncios, disponible en espaÃ±ol y quechua.',
    badges: 'ðŸ… Tus insignias',
    themes: 'Temas',
    themesDesc: 'Aprende sobre las coimas',
    game: 'Juego',
    gameDesc: 'Â¡Pon a prueba todo lo que aprendes!',
    reels: 'Reels',
    reelsDesc: 'Historias sobre valores e integridad',
    profile: 'Perfil',
    profileDesc: 'Tu progreso e insignias',
    familyActivity: 'ðŸ’¬ Actividad familiar',
    familyDesc: 'Conversa en familia sobre lo justo y lo injusto',
    converse: 'Conversar â†’',
    back: 'â† AtrÃ¡s',
    continue: 'Continuar',
    profileTitle: 'Tu perfil',
    profileSub: 'Tu progreso de aprendizaje',
    myBadges: 'ðŸŽ¯ Tus Insignias',
    status: 'Estado',
    champion: 'ðŸ† CampeÃ³n',
    inProgress: 'En progreso',
    activities: 'Actividades',
    conversations: 'Conversaciones',
    generalProgress: 'Progreso General',
    aboutTitle: 'Â¿CÃ³mo funciona?',
    aboutSub: 'Todo lo que necesitas saber antes de empezar.',
    configTitle: 'ConfiguraciÃ³n',
    yourData: 'ðŸ“ Tus datos',
    name: 'Nombre',
    age: 'Edad',
    district: 'Distrito del PerÃº',
    roleQuestion: 'Â¿QuiÃ©n estÃ¡ usando la app?',
    parent: 'Padre / Madre',
    child: 'Hijo / Hija',
    deviceQuestion: 'Â¿QuÃ© dispositivo estÃ¡s usando?',
    deviceSub: 'Elige cÃ³mo quieres ver la app',
    mobileView: 'ðŸ“± Vista mÃ³vil',
    fullView: 'ðŸ’» Vista completa',
    languageTitle: 'ðŸ—£ï¸ Idioma',
    spanish: 'ðŸ‡ªðŸ‡¸ EspaÃ±ol',
    quechua: 'ðŸ¦™ Quechua',
    whichTopic: 'Â¿QuÃ© quieres aprender hoy?',
    goHome: 'Ir a la pantalla principal',
    whatIsCoima: 'Â¿QuÃ© es una coima?',
    recognize: 'Â¿CÃ³mo reconocer una situaciÃ³n de corrupciÃ³n?',
    impact: 'Â¿Por quÃ© las coimas hacen daÃ±o?',
    legal: 'Consecuencias legales',
    prevent: 'CÃ³mo prevenir la corrupciÃ³n',
    wantTest: 'Quiero ponerme a prueba.',
    ageYears: 'aÃ±os',
    // Profile types
    studentProfile: 'ðŸ‘¤ Perfil Estudiante',
    familyProfile: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§ Perfil Familia',
    chooseProfile: 'Â¿QuiÃ©n usa la app?',
    editPhoto: 'Editar foto',
    choosePhoto: 'Elegir foto',
    takePhoto: 'Tomar foto',
    photoLinkTitle: 'ðŸ”— O pega el enlace de una imagen',
    photoLinkPlaceholder: 'https://ejemplo.com/mi-foto.jpg',
    useLink: 'Usar enlace',
    customization: 'ðŸŽ¨ Personalizar mi app',
    themeColors: 'Colores del tema',
    backgrounds: 'Fondos',
    cardStyles: 'Estilo de tarjetas',
    decorations: 'Decoraciones',
    preview: 'Vista previa',
    resetCustomization: 'Restablecer',
    noBadgesTitle: 'AÃºn no has obtenido insignias',
    noBadgesHint: 'Completa temas y actividades para ganar tus primeras recompensas.',
    howToEarn: 'Â¿CÃ³mo conseguir insignias?',
    howToEarnHint: 'Cada insignia es un logro. Completa estos retos para subir de nivel.',
    badgeUnlocked: 'Desbloqueada',
    badgeLocked: 'Bloqueada',
    whoIsEntering: 'Â¿QuiÃ©n entra?',
    whoIsEnteringHint: 'Elige el integrante de la familia que va a hacer esta actividad. Cada uno lleva su propio avance.',
    memberProgress: 'Avance',
    guidesRead: 'guÃ­as leÃ­das',
    conversationsDone: 'conversaciones',
    activeNow: 'Participando ahora',
    enterActivity: 'Entrar',
    activitySummary: 'Resumen de actividad',
    topicsCompleted: 'Temas completados',
    avgQuizScore: 'Promedio en quizzes',
    timeSpent: 'Tiempo invertido',
    streak: 'Racha de dÃ­as',
    topicProgress: 'Progreso por tema',
    familyTagline: 'Aprendiendo juntos, construyendo una sociedad mÃ¡s honesta.',
    editName: 'Editar nombre',
    save: 'Guardar',
    cancel: 'Cancelar',
    quickActivities: 'Actividades',
    quickConvos: 'Conversaciones',
    quickBadges: 'Insignias',
    quickMembers: 'Integrantes',
    recentActivity: 'Actividad reciente',
    noActivity: 'TodavÃ­a no hay actividad.',
    membersTitle: 'Integrantes',
    addMember: '+ Agregar integrante',
    memberNamePh: 'Nombre del integrante',
    memberRole: 'Rol',
    memberAvatar: 'Avatar',
    add: 'Agregar',
    statMembers: 'Integrantes',
    progressHint: 'Completa actividades y conversaciones para avanzar.',
    registerActivity: '+1 actividad',
    lockedBadge: 'Bloqueada',
    unlockedBadge: 'Desbloqueada',
    backHome: 'â† Volver al inicio',
    selectEyebrow: 'ELIGE TU ESPACIO',
    selectTitle: 'Â¿CÃ³mo quieres continuar?',
    selectTagline: 'Aprende, conversa y toma buenas decisiones.',
    studentCardTitle: 'PERFIL ESTUDIANTE',
    studentCardDesc: 'Tu espacio personal para aprender, avanzar y conseguir insignias.',
    familyCardTitle: 'PERFIL FAMILIA',
    familyCardDesc: 'Un espacio para aprender, conversar y participar juntos.',
    enterBtn: 'Continuar â†’',
    bottomQuote: 'Una conversaciÃ³n puede ser el primer paso para generar un cambio.',
    homeNav: 'Inicio',
    homeSubtitle: 'ContinÃºa donde lo dejaste',
    learnSection: 'Aprender',
    practiceSection: 'Practicar',
    myProgressSection: 'Mi perfil',
    continueLearning: 'Continuar aprendiendo',
    viewActivity: 'Ver actividad',
    topicsProgressLabel: 'Progreso en temas',
    completedLabel: 'temas completados',
    continueLesson: 'Continuar lecciÃ³n',
    nextStepLabel: 'Tu siguiente paso',
    allDone: 'Â¡Lo lograste! Completaste todo tu camino de aprendizaje. ðŸŽ‰',
    goalAlmost: 'Â¡Muy cerca! Te falta poco para completar tu nivel.',
    goalKeepGoing: 'Sigue con tus lecciones para completar tu nivel.',
    recommendationTitle: 'RecomendaciÃ³n del dÃ­a',
    goToTopic: 'Ir al tema',
    yourProgress: 'Progreso',
    learningPath: 'Tu ruta de aprendizaje',
    next: 'Siguiente',
    pendingState: 'Pendiente',
    completedState: 'Completado',
    achievements: 'Mis logros',
    nextBadgeLabel: 'PrÃ³xima insignia',
    familyActivityLabel: 'Actividad familiar',
    lessonWord: 'LecciÃ³n',
    playAndPractice: 'Jugar y practicar',
    completedPct: 'completado',
    explore: 'Explorar',
    seeAll: 'Ver todos',
    carouselAria: 'Carrusel del inicio',
    slideDiscoverPill: 'Descubre',
    slideDiscoverTitle: 'Aprende y descubre',
    slideDiscoverDesc: 'Explora los temas y materiales disponibles.',
    slidePlayPill: 'Juega',
    slidePlayTitle: 'Pon a prueba lo que sabes',
    slidePlayDesc: 'Juega y avanza en tu camino hacia la integridad.',
    slidePlayBtn: 'Jugar ahora',
    slideFamilyPill: 'En familia',
    viewMore: 'Ver mÃ¡s',
    slidePrev: 'Anterior',
    slideNext: 'Siguiente',
    heroEyebrow: 'Tu espacio de aprendizaje',
    heroTitle: 'Aprende, conversa y toma decisiones justas',
  },
  qu: {
    greeting: 'Â¡Napaykullayki! ðŸ‘‹',
    welcomeLine: 'Â¡Kunanqa yupaykuna yachaykushwan!',
    welcomeTitle: 'Hablemos Claro',
    welcomeSub: 'Coimamanta yachayqa, allin ruwaykunamanta yachaymi.',
    start: 'ðŸŽ® Qallariy Aventura',
    howItWorks: 'â–¶ Â¿Imaynatam ruwan?',
    welcomeEyebrow: 'Allin ruway yachayniyuqkunapaq',
    welcomeStatTopics: '7 tema',
    welcomeStatGames: '5 juego',
    welcomeStatLanguages: '2 simi',
    welcomeStatFamily: 'Aylluwan',
    welcomeFootnote: 'Kullaki mana Â· Mana anuncachi Â· Kayniykicha kikininpi waqaychan',
    whyTitle: 'Â¿Imayna Hablemos Claro?',
    whySub: 'Chaymanta allin ruwayta pukllaywan, willakuykunawan mana yachaychu.',
    why1Title: 'Pukllaypi riqsimuy',
    why1Desc: 'Coimata allin ayquta sapanka chaymanta riqsichiyki imayna hapinakuykiÃ±amanta Ã±awpaq.',
    why2Title: 'Sumaq ruwaykuna',
    why2Desc: 'Allin ruwata pukllaykuna, willaykuna, yachaykuna, gamay riqraywan rinaspas.',
    why3Title: 'Wasiypi pus tinkis',
    why3Desc: 'Tayta mamaypaq rimariykuna Ã±awpaq wirasqa kikin.',
    why4Title: 'Kullaki, iskay simipi',
    why4Desc: 'Mana kullakichu, mana anuncachchu, kastillianupaqmi quechuapaqmi.',
    badges: 'ðŸ… Insigniykikuna',
    themes: 'Yachaykuna',
    themesDesc: 'Coimakunamanta yachay',
    game: 'Pukllay',
    gameDesc: 'Â¡Imayna yachasqaykita pukllay!',
    reels: 'Reels',
    reelsDesc: 'Kawsay willakuykuna, allin ruway willakuykuna',
    profile: 'Kaynin',
    profileDesc: 'Progresoyki, insigniykikuna',
    familyActivity: 'ðŸ’¬ Ayllu ruway',
    familyDesc: 'Aylluypi rimariy allin kaqta mana allin kaqta',
    converse: 'Rimay â†’',
    back: 'â† Kutiy',
    continue: 'Katichiy',
    profileTitle: 'Kayniykikuna',
    profileSub: 'Yachay Ã±anniyki',
    myBadges: 'ðŸŽ¯ Insigniykikuna',
    status: 'Kaynin',
    champion: 'ðŸ† Atipaq',
    inProgress: 'Kunan ruwakuchkan',
    activities: 'Ruwaykuna',
    conversations: 'Rimaykuna',
    generalProgress: 'WiÃ±ay Progreso',
    aboutTitle: 'Â¿Imaynatam ruwan?',
    aboutSub: 'Qallarinaykipaq tukuynintam riqsi.',
    configTitle: 'Kamachiykuna',
    yourData: 'ðŸ“ Kayniykikuna',
    name: 'Suti',
    age: 'Watakuna',
    district: 'Piruw distrito',
    roleQuestion: 'Â¿Pitaq kayta llamkachkan?',
    parent: 'Tayta / Mama',
    child: 'Wawa',
    deviceQuestion: 'Â¿Imaykanatam llamkachkanki?',
    deviceSub: 'Aqllay imaynatam kayta rikuchiy',
    mobileView: 'ðŸ“± Kuyuq rikchay',
    fullView: 'ðŸ’» Tukuy rikchay',
    languageTitle: 'ðŸ—£ï¸ Simi',
    spanish: 'ðŸ‡ªðŸ‡¸ Castellano',
    quechua: 'ðŸ¦™ Runa Simi',
    whichTopic: 'Â¿Imatam kunan yachayta munanki?',
    goHome: 'Wasiman kutiy',
    whatIsCoima: 'Â¿Imam coima?',
    recognize: 'Â¿Imaynatam riqsin manam allin kaqta?',
    impact: 'Â¿Imaraykum coimakuna daÃ±an?',
    legal: 'Kamachiy harkaykuna',
    prevent: 'Imaynatam harkayman coimata',
    wantTest: 'Kunanmi yachayta munani.',
    ageYears: 'wata',
    // Profile types
    studentProfile: 'ðŸ‘¤ Kayni Wawa',
    familyProfile: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§ Kayni Ayllu',
    chooseProfile: 'Â¿Pitaq kayta llamkachkan?',
    editPhoto: 'Riqchiy rikin',
    choosePhoto: 'Aqllay rikin',
    takePhoto: 'Riqsiy rikin',
    photoLinkTitle: 'ðŸ”— Utaq willay rikinpa linknin',
    photoLinkPlaceholder: 'https://ejemplo.com/riki.jpg',
    useLink: "Linkta llaqtay",
    customization: 'ðŸŽ¨ Kaynin Ã±iqqiy',
    themeColors: 'Llimpi kullkikuna',
    backgrounds: 'Ukukuna',
    cardStyles: 'Tarjeta kullkikuna',
    decorations: 'Willakuykuna',
    preview: 'Rikchiy',
    resetCustomization: 'Kunanta qaykuy',
    noBadgesTitle: 'Manam insigniykikichu kanchik',
    noBadgesHint: 'Yachayta, ruwaytapas completay chaymanta hatun maÃ±akuyta chaskisunki.',
    howToEarn: 'Â¿Imayna unayta chaskisunki honorpaq?',
    howToEarnHint: 'Sapa honor mana yachaymi. Kay retotapas completay chaymanta nivelni qitiy.',
    badgeUnlocked: 'Qullqchasqa',
    badgeLocked: 'Wichq\'asqa',
    whoIsEntering: 'Â¿Pi may pipasqam?',
    whoIsEnteringHint: 'Akllapan llapan ayllumanta pip maypi ruwanamanta, sapankaqmi qichaynin kanantaq.',
    memberProgress: 'Qichaynin',
    guidesRead: 'yachakuqkuna',
    conversationsDone: 'rimaykuna',
    activeNow: 'Rumiyllaq',
    enterActivity: 'Yaykuy',
    activitySummary: 'Ruwaykuna resumen',
    topicsCompleted: 'Yachaykuna yuraykukuna',
    avgQuizScore: 'Quiz promedio',
    timeSpent: 'Hora qawaykuy',
    streak: 'Punchaw qallariy',
    topicProgress: 'Yachay Ã±anni',
    homeNav: 'Wasipi',
    homeSubtitle: 'Saqillasqaykimanta katichiy',
    learnSection: 'Yachay',
    practiceSection: 'Kamachiy',
    myProgressSection: 'Kayniymi',
    continueLearning: 'Yachayta katichiy',
    viewActivity: 'Ruwayta rikuy',
    topicsProgressLabel: 'Yachaykuna progreso',
    completedLabel: 'yachaykuna tukukusqa',
    continueLesson: 'Yachayta katichiy',
    nextStepLabel: 'Qatiq ruwayki',
    allDone: 'Â¡Atiyki! Tukuy yachay Ã±anniykita tukukuykurqanki. ðŸŽ‰',
    goalAlmost: 'Â¡Ã‘akaÃ±a! Pisillamanta puchun nivelniykita tukukuykunaykipaq.',
    goalKeepGoing: 'Yachaykunaykita qatiy nivelniykita tukukuykunaykipaq.',
    recommendationTitle: 'Kunan punchaw willakuq',
    goToTopic: 'Yachayman risun',
    yourProgress: 'Progresoyki',
    learningPath: 'Yachay Ã±anniyki',
    next: 'Qatiq',
    pendingState: 'Manaraq',
    completedState: 'Tukukusqa',
    achievements: 'Atiyniykuna',
    quickBadges: 'Insigniykuna',
    nextBadgeLabel: 'Qatiq insignia',
    familyActivityLabel: 'Ayllu ruway',
    lessonWord: 'Yachay',
    playAndPractice: 'Pukllay',
    completedPct: 'hunt\'asqa',
    explore: 'Qhaway',
    seeAll: 'Tukuyta rikuy',
    carouselAria: 'Qallariy carrusel',
    slideDiscoverPill: 'Riqsiy',
    slideDiscoverTitle: 'Yachay, riqsiy',
    slideDiscoverDesc: 'Yachaykunata qhaway yachayta qatiy.',
    slidePlayPill: 'Pukllay',
    slidePlayTitle: 'Yachasqaykita riqsichiy',
    slidePlayDesc: 'Pukllaspa yachay allin kawsayman.',
    slidePlayBtn: 'Kunan pukllay',
    slideFamilyPill: 'Ayllupawan',
    viewMore: 'Aswanta rikuy',
    slidePrev: 'Ã‘awpaqman',
    slideNext: 'Qatiqman',
    heroEyebrow: 'Yachayninkipa wasin',
    heroTitle: 'Yachay, rimay, allin yuyayta churakuy',
  },
}

  const defaultCustomization: ProfileCustomization = {
    themeColor: '#2563EB',
    backgroundType: 'gradient',
    backgroundValue: 'linear-gradient(135deg, #ffd4a8 0%, #ffb780 100%)',
   cardStyle: 'glass',
   decorations: [],
  }

const defaultStudentProgress: UserProgress = {
  totalActivities: 0,
  completedActivities: 0,
  badges: [...allBadges],
  conversations: 0,
  topicProgress: {
    coima: 0,
    recognition: 0,
    impact: 0,
    consequences: 0,
    prevention: 0,
    ethics: 0,
    citizen: 0,
    test: 0,
  },
  quizScores: [],
  lastActiveDate: '',
  streakDays: 0,
  kidsDone: [],
  guidesDone: [],
}

// Acceso seguro al almacenamiento: en algunos celulares el acceso directo
// lanza excepciÃ³n (modo privado o almacenamiento bloqueado) y dejaba la app en blanco
const safeGet = (key: string): string | null => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
const safeSet = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* almacenamiento no disponible: la app sigue funcionando en memoria */
  }
}
const safeParse = (raw: string | null): any => {
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

const getStoredStudentProfile = (): StudentProfile => {
  const stored = safeGet('hablemos-claro-student-profile')
  const parsed = safeParse(stored)
  if (parsed && typeof parsed === 'object') {
    return {
      name: parsed.name ?? '',
      age: parsed.age ?? '',
      district: parsed.district ?? '',
      photo: parsed.photo ?? '',
      photoPos: { ...defaultPhotoPos, ...(parsed.photoPos ?? {}) },
      progress: {
        ...defaultStudentProgress,
        ...parsed.progress,
        topicProgress: {
          ...defaultStudentProgress.topicProgress,
          ...(parsed.progress?.topicProgress ?? {}),
        },
        badges: normalizeStudentBadges(parsed.progress?.badges),
        quizScores: parsed.progress?.quizScores ?? [],
      },
      customization: {
        ...defaultCustomization,
        ...(parsed.customization ?? {}),
      },
    }
  }
  return {
    name: '',
    age: '',
    district: '',
    photo: '',
    photoPos: defaultPhotoPos,
    progress: defaultStudentProgress,
    customization: defaultCustomization,
  }
}

const defaultFamilyMember = (): FamilyMember => ({
  id: `m-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
  name: 'Familiar 1',
  role: 'Tutor',
  avatar: 'ðŸ˜Š',
  activities: 0,
  guidesDone: [],
  conversations: 0,
})

const normalizeMembers = (raw: unknown): FamilyMember[] => {
  if (!Array.isArray(raw)) return [defaultFamilyMember()]
  const mapped = (raw as Array<string | Partial<FamilyMember>>).map((m, i) => {
    if (typeof m === 'string') {
      return { id: `m-old-${i}`, name: m, role: 'Tutor' as FamilyRole, avatar: memberAvatars[i % memberAvatars.length], activities: 0, guidesDone: [], conversations: 0 }
    }
    return {
      id: typeof m.id === 'string' ? m.id : `m-old-${i}`,
      name: typeof m.name === 'string' && m.name !== '' ? m.name : `Familiar ${i + 1}`,
      role: (['Padre', 'Madre', 'Hijo', 'Hija', 'Tutor', 'Abuelo', 'Abuela'] as FamilyRole[]).includes(m.role as FamilyRole) ? (m.role as FamilyRole) : 'Tutor',
      avatar: typeof m.avatar === 'string' && m.avatar !== '' ? m.avatar : memberAvatars[i % memberAvatars.length],
      activities: typeof m.activities === 'number' ? m.activities : 0,
      guidesDone: Array.isArray(m.guidesDone) ? m.guidesDone.filter((g): g is string => typeof g === 'string') : [],
      conversations: typeof m.conversations === 'number' ? m.conversations : 0,
      lastActive: typeof m.lastActive === 'string' ? m.lastActive : undefined,
    }
  })
  return mapped.length > 0 ? mapped : [defaultFamilyMember()]
}

// Avance propio de cada integrante: guÃ­as revisadas + conversaciones + actividades.
// 60% guÃ­as, 20% conversaciones, 20% actividades (escala 0-100).
const memberProgressPercent = (m: FamilyMember): number => {
  const guides = (m.guidesDone?.length ?? 0)
  const conv = m.conversations ?? 0
  const guidePart = (Math.min(guides / PARENT_GUIDES.length, 1)) * 60
  const convPart = Math.min(conv / 3, 1) * 20
  const actPart = Math.min((m.activities ?? 0) / 5, 1) * 20
  return Math.round(guidePart + convPart + actPart)
}

const normalizeFamilyBadges = (raw: unknown): FamilyBadge[] => {
  const arr = Array.isArray(raw) ? (raw as Array<Partial<FamilyBadge>>) : []
  return defaultFamilyBadges.map(def => {
    const found = arr.find(b => b.id === def.id)
    return found ? { ...def, unlocked: found.unlocked === true } : { ...def }
  })
}

const normalizeStudentBadges = (raw: unknown): Badge[] => {
  const arr = Array.isArray(raw) ? (raw as Array<Partial<Badge>>) : []
  return allBadges.map(def => {
    const found = arr.find(b => b.id === def.id)
    return found ? { ...def, unlocked: found.unlocked === true } : { ...def }
  })
}

const getStoredFamilyProfile = (): FamilyProfile => {
  const stored = safeGet('hablemos-claro-family-profile')
  const parsed = safeParse(stored)
  if (parsed && typeof parsed === 'object') {
    const members = normalizeMembers(parsed.members)
    const activeMemberId = typeof parsed.activeMemberId === 'string' && members.some(m => m.id === parsed.activeMemberId)
      ? parsed.activeMemberId
      : members[0]?.id
    return {
      name: typeof parsed.name === 'string' && parsed.name !== '' ? parsed.name : 'Mi familia',
      members,
      activeMemberId,
      familyAvatar: typeof parsed.familyAvatar === 'string' && parsed.familyAvatar !== '' ? parsed.familyAvatar : defaultFamilyAvatar,
      progress: {
        ...defaultStudentProgress,
        ...parsed.progress,
        topicProgress: {
          ...defaultStudentProgress.topicProgress,
          ...(parsed.progress?.topicProgress ?? {}),
        },
        badges: normalizeStudentBadges(parsed.progress?.badges),
        quizScores: parsed.progress?.quizScores ?? [],
      },
      familyBadges: normalizeFamilyBadges(parsed.familyBadges),
      activityLog: Array.isArray(parsed.activityLog) ? parsed.activityLog.slice(0, 10) : [],
    }
  }
  const first = defaultFamilyMember()
  return {
    name: 'Mi familia',
    members: [first],
    activeMemberId: first.id,
    familyAvatar: defaultFamilyAvatar,
    progress: defaultStudentProgress,
    familyBadges: defaultFamilyBadges.map(b => ({ ...b })),
    activityLog: [],
  }
}

const saveStudentProfile = (profile: StudentProfile) => {
  safeSet('hablemos-claro-student-profile', JSON.stringify(profile))
}

const saveFamilyProfile = (profile: FamilyProfile) => {
  safeSet('hablemos-claro-family-profile', JSON.stringify(profile))
}

// Banco del examen final: cubre todos los temas
interface ExamQuestion {
  topic: string
  icon: string
  question: string
  options: string[]
  correct: number
}

const examQuestions: ExamQuestion[] = [
  { topic: 'Â¿QuÃ© es una coima?', icon: 'ðŸ’°', question: 'Â¿QuÃ© es una coima?', options: ['Respetar las reglas sin ofrecer nada', 'Ofrecer dinero o regalos para obtener un beneficio indebido', 'Pedir ayuda para una tarea'], correct: 1 },
  { topic: 'Â¿QuÃ© es una coima?', icon: 'ðŸ’°', question: 'Â¿CuÃ¡l de estos es un ejemplo de coima?', options: ['Un funcionario pide dinero para acelerar un trÃ¡mite', 'Pagar el precio justo en el mercado', 'Devolver una billetera perdida'], correct: 0 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Â¿CuÃ¡l es una seÃ±al de alerta de corrupciÃ³n?', options: ['Te dan comprobante por todo', 'Te explican el procedimiento con calma', 'Te presionan a decidir rÃ¡pido y en secreto'], correct: 2 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Un inspector dice: â€œdame un regalito y cierro los ojosâ€. Â¿QuÃ© es?', options: ['Un trÃ¡mite normal', 'Una multa legal', 'Una coima'], correct: 2 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Â¿A quiÃ©n daÃ±an las coimas?', options: ['A toda la sociedad, sobre todo a los mÃ¡s vulnerables', 'Solo a quien la ofrece', 'A nadie realmente'], correct: 0 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'El dinero de una coima en una obra podrÃ­a haberse usado enâ€¦', options: ['Fiestas privadas', 'Escuelas y hospitales', 'Nada importante'], correct: 1 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Â¿QuÃ© le puede pasar a quien ofrece o acepta una coima?', options: ['Solo una llamada de atenciÃ³n', 'Nada si nadie se entera', 'PrisiÃ³n, multas e inhabilitaciÃ³n'], correct: 2 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'AdemÃ¡s de lo legal, la corrupciÃ³n destruyeâ€¦', options: ['La confianza entre ciudadanos', 'Los semÃ¡foros', 'Los feriados'], correct: 0 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Â¿CÃ³mo se previene la corrupciÃ³n?', options: ['Exigiendo transparencia y denunciando', 'Ignorando lo que pasa', 'Pagando mÃ¡s rÃ¡pido'], correct: 0 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Si ves algo incorrecto en tu municipalidad, puedesâ€¦', options: ['Quedarte callado', 'Denunciar por canales seguros', 'Participar del reparto'], correct: 1 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'La integridad significaâ€¦', options: ['Seguir a la mayorÃ­a', 'Hacer lo que conviene', 'Hacer lo correcto aunque nadie mire'], correct: 2 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Encuentras una billetera con dinero. Â¿QuÃ© muestra integridad?', options: ['Devolverla con todo su contenido', 'Quedarse con el dinero', 'Gastarlo y devolver el resto'], correct: 0 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Ser un ciudadano activo esâ€¦', options: ['Vigilar, participar y exigir cuentas', 'Votar y olvidar el tema', 'Dejar todo a los polÃ­ticos'], correct: 0 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Un comitÃ© vecinal detecta sobreprecio en una obra. Â¿QuÃ© puede hacer?', options: ['Pedir su parte', 'No meterse', 'Exigir el expediente y denunciar'], correct: 2 },
]

// Banco Flappy: 200 preguntas de corrupciÃ³n en orden aleatorio (no se repiten por partida)
const FLAPPY_QUESTIONS: ExamQuestion[] = [
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿QuÃ© es una coima?', options: ['Una multa de trÃ¡nsito', 'Dinero o favores para lograr algo indebido', 'Un juego', 'Un regalo entre amigos'], correct: 1 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿CuÃ¡l es un ejemplo de coima?', options: ['Ayudar a un amigo', 'Un policÃ­a pide dinero para no multar', 'Devolver una billetera', 'Pagar el precio justo'], correct: 1 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿QuiÃ©nes participan en una coima?', options: ['Nadie en realidad', 'Un saludo', 'Solo un fantasma', 'Quien ofrece y quien acepta'], correct: 3 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Un inspector dice â€œpÃ¡game y cierro los ojosâ€. Â¿QuÃ© es?', options: ['Una coima', 'Una propina', 'Un trÃ¡mite normal', 'Solo los testigos'], correct: 0 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿Una coima puede ser un favor y no dinero?', options: ['Solo los lunes', 'SÃ­, tambiÃ©n favores o regalos', 'Solo en sueÃ±os', 'No, solo es dinero'], correct: 1 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Si te ofrecen una coima, Â¿quÃ© debes hacer?', options: ['Aceptarla rÃ¡pido', 'Esconderlo', 'Pedir mÃ¡s dinero', 'Rechazarla y contarle a un adulto'], correct: 3 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿Por quÃ© la gente ofrece coimas?', options: ['Por amor al arte', 'Para saltarse reglas y ganar rÃ¡pido', 'Por generosidad', 'Para ayudar a todos'], correct: 1 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'â€œTodos pagan para pasarâ€. Â¿QuÃ© respondes?', options: ['Me voy sin decir nada', 'Seguir pagando', 'Pago tambiÃ©n', 'No pago y respeto la fila'], correct: 3 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿QuÃ© siente quien pierde su turno por una coima?', options: ['Tristeza e injusticia', 'Nada en especial', 'AlegrÃ­a', 'Ganas de pagar'], correct: 0 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿Aceptar una coima tambiÃ©n es corrupciÃ³n?', options: ['Solo a veces', 'Solo mirar', 'Solo el que ofrece', 'SÃ­, quien acepta tambiÃ©n rompe reglas'], correct: 3 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Un vendedor regala algo caro al inspector para que no revise. Esâ€¦', options: ['Un soborno', 'Un descuento', 'CortesÃ­a', 'Amabilidad'], correct: 0 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Â¿QuÃ© busca quien soborna?', options: ['Paz mundial', 'Hacer amigos', 'Ayudar a todos', 'Una ventaja indebida'], correct: 3 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Â¿El soborno afecta a otras personas?', options: ['A los Ã¡rboles', 'SÃ­, quita oportunidades a otros', 'No, solo a quien paga', 'Solo al inspector'], correct: 1 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Te ofrecen un premio por callar una trampa. Â¿QuÃ© haces?', options: ['Lo rechazo y lo cuento', 'Pedir tres premios', 'Pido dos premios', 'Lo acepto'], correct: 0 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Â¿CuÃ¡l es la diferencia entre propina y soborno?', options: ['La propina agradece; el soborno compra favores', 'No hay diferencia', 'Son iguales', 'La propina es mÃ¡s cara'], correct: 0 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Â¿CuÃ¡l es una seÃ±al de alerta?', options: ['Un abrazo', 'Te dan comprobante', 'Te explican con calma', 'Te piden decidir rÃ¡pido y en secreto'], correct: 3 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Te piden dinero â€œsin reciboâ€. Â¿QuÃ© sospechas?', options: ['Es un sorteo', 'Un premio', 'Es una coima', 'Es un descuento'], correct: 2 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Â¿QuÃ© frase es tÃ­pica de una coima?', options: ['â€œTodo queda registradoâ€', 'â€œBuenos dÃ­asâ€', 'â€œArreglemos entre nosotrosâ€', 'â€œPasa maÃ±ana con citaâ€'], correct: 2 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Un trÃ¡mite sin fila a cambio de dinero esâ€¦', options: ['Magia', 'Suerte', 'CorrupciÃ³n', 'Eficiencia'], correct: 2 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Â¿QuÃ© debes pedir siempre en un trÃ¡mite?', options: ['Un atajo', 'Un favor', 'Comprobante o recibo', 'Un autÃ³grafo'], correct: 2 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Â¿A quiÃ©n daÃ±an las coimas?', options: ['A toda la sociedad', 'A nadie', 'A los marcianos', 'Solo a quien paga'], correct: 0 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'El dinero de coimas en obras podrÃ­a usarse enâ€¦', options: ['Fiestas privadas', 'En cohetes de juguete', 'Nada importante', 'Escuelas y hospitales'], correct: 3 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Â¿QuÃ© pierde un niÃ±o cuando otro compra su lugar?', options: ['Un juguete', 'Un caramelo', 'Su oportunidad ganada con esfuerzo', 'Nada'], correct: 2 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Las coimas en hospitales provocanâ€¦', options: ['MÃ¡s mÃ©dicos', 'MÃ¡s doctores', 'Menos medicinas para todos', 'Mejor atenciÃ³n'], correct: 2 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Â¿Por quÃ© una coima pequeÃ±a tambiÃ©n daÃ±a?', options: ['Porque es barata', 'No daÃ±a', 'Porque rompe reglas y quita recursos', 'Porque es pequeÃ±a'], correct: 2 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿QuÃ© es â€œmordidaâ€ en otros paÃ­ses?', options: ['Un impuesto', 'Una fruta', 'Un dulce', 'Otro nombre para la coima'], correct: 3 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Un chofer paga para evitar una multa justa. Â¿QuÃ© es?', options: ['Un peaje', 'Ahorro', 'Viveza', 'Coima'], correct: 3 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿La coima existe solo en el gobierno?', options: ['No, en escuelas y barrios tambiÃ©n', 'Solo en la luna', 'SÃ­, solo ahÃ­', 'Solo en otros paÃ­ses'], correct: 0 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Pagar para entrar a un equipo sin prueba esâ€¦', options: ['Entrenamiento', 'Suerte', 'MÃ©rito', 'Trampa corrupta'], correct: 3 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿QuÃ© protege decir que no a una coima?', options: ['El trato justo para todos', 'Nada', 'Al que ofreciÃ³', 'Al inspector corrupto'], correct: 0 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Â¿Sobornar para ganar un concurso es justo?', options: ['Solo si nadie ve', 'SÃ­, si ganas', 'Un atajo vÃ¡lido', 'No, roba el premio al mejor'], correct: 3 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Un juez recibe regalos de una parte. Â¿QuÃ© pasa?', options: ['Nada malo', 'Amistad verdadera', 'Justicia vendida e injusta', 'Mejor juicio'], correct: 2 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Â¿CÃ³mo se llama pagar para obtener algo indebido?', options: ['Soborno', 'Impuesto', 'Sueldo', 'Un prÃ©stamo'], correct: 0 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Si ves un soborno, Â¿quÃ© haces?', options: ['Lo cuentas a un adulto de confianza', 'Unirte a ellos', 'Te unes', 'Lo grabas y lo vendes'], correct: 0 },
  { topic: 'Soborno', icon: 'ðŸ¤', question: 'Â¿El que recibe el soborno es inocente?', options: ['Solo si es mucho', 'No, tambiÃ©n es responsable', 'SÃ­, totalmente', 'Siempre'], correct: 1 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'â€œSin testigos, mejorâ€. Â¿QuÃ© indica?', options: ['Profesionalismo', 'Rapidez', 'Eficiencia', 'Que algo indebido se esconde'], correct: 3 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Â¿DÃ³nde NO hay corrupciÃ³n?', options: ['Donde todo es claro y con reglas', 'Donde se paga en secreto', 'Donde nadie pregunta', 'Donde nadie mira'], correct: 0 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Un precio distinto segÃºn la cara del cliente esâ€¦', options: ['Marketing', 'Abuso e injusticia', 'Suerte', 'Oferta especial'], correct: 1 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Â¿QuÃ© te protege de las coimas?', options: ['Llevar mucho dinero', 'Conocer tus derechos y hablar', 'Tener suerte', 'No salir de casa'], correct: 1 },
  { topic: 'Reconocerla', icon: 'ðŸ”', question: 'Piden â€œcolaboraciÃ³nâ€ para darte tu certificado. Â¿QuÃ© es?', options: ['Un saludo', 'Una coima disfrazada', 'Un impuesto', 'Una donaciÃ³n'], correct: 1 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Sin coimas, las filas serÃ­anâ€¦', options: ['MÃ¡s aburridas', 'Iguales', 'MÃ¡s lentas', 'MÃ¡s justas para todos'], correct: 3 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Â¿QuÃ© se rompe con cada coima?', options: ['El dinero', 'Nada', 'La confianza entre personas', 'Un vidrio'], correct: 2 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Un hospital sin medicinas por desvÃ­os muestraâ€¦', options: ['Un milagro', 'El daÃ±o real de la corrupciÃ³n', 'Falta de mÃ©dicos', 'Mala suerte'], correct: 1 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Â¿QuiÃ©nes sufren mÃ¡s la corrupciÃ³n?', options: ['Los aviones', 'Los mÃ¡s ricos', 'Los mÃ¡s vulnerables', 'Nadie'], correct: 2 },
  { topic: 'El daÃ±o', icon: 'ðŸ’”', question: 'Cada coima aceptada enseÃ±a queâ€¦', options: ['Ser honesto paga', 'La trampa funciona', 'A volar', 'Nada'], correct: 1 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿Rechazar una coima esâ€¦?', options: ['Un problema', 'Mala educaciÃ³n', 'De mala suerte', 'Valiente honestidad'], correct: 3 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Decir â€œno, graciasâ€ ante dinero indebido demuestraâ€¦', options: ['Que eres rico', 'Debilidad', 'Integridad', 'Miedo'], correct: 2 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿QuÃ© gana quien rechaza coimas?', options: ['Nada', 'Enemigos', 'Tranquilidad y respeto', 'Un trofeo'], correct: 2 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Contar sobre una coima a un adulto esâ€¦', options: ['Ser entrometido', 'Chismear', 'Denunciar con valentÃ­a', 'Meterse en lÃ­os'], correct: 2 },
  { topic: 'Coima', icon: 'ðŸ’°', question: 'Â¿La honestidad frente a coimas te protege?', options: ['Solo un rato', 'SÃ­, toda la vida', 'Solo a famosos', 'No sirve'], correct: 1 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'Un funcionario le da un trabajo pÃºblico a su familiar sin concurso. Â¿QuÃ© ocurriÃ³?', options: ['Un abrazo', 'Nada malo', 'Un sorteo', 'Nepotismo, una forma de corrupciÃ³n'], correct: 3 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'Â¿QuÃ© es el nepotismo?', options: ['Dar puestos a familiares sin concurso', 'Un postre', 'Un sorteo', 'Un deporte'], correct: 0 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'Â¿Por quÃ© el nepotismo es injusto?', options: ['No lo es', 'Porque sÃ­', 'Quita oportunidades a los mÃ¡s capaces', 'Es tradiciÃ³n'], correct: 2 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'Si tu familiar es el mejor y gana el concurso, Â¿es nepotismo?', options: ['No, ganÃ³ con mÃ©rito', 'Depende del dÃ­a', 'Un problema', 'SÃ­, siempre'], correct: 0 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Â¿QuiÃ©n debe pagar impuestos?', options: ['Los extraterrestres', 'Solo los ricos', 'Nadie', 'Todos los que la ley indica'], correct: 3 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Â¿Para quÃ© sirven los impuestos?', options: ['Para fiestas privadas', 'Para comprar juguetes', 'Para nada', 'Para escuelas, hospitales y caminos'], correct: 3 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'No pagar impuestos que te tocan esâ€¦', options: ['Una falta contra todos', 'Viveza', 'Ahorro', 'Un deporte'], correct: 0 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Â¿QuÃ© pasa si nadie paga impuestos?', options: ['No habrÃ­a escuelas ni hospitales', 'Nada', 'Todo gratis', 'Todo mejora'], correct: 0 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Pedir comprobante al pagar ayuda aâ€¦', options: ['Que los impuestos lleguen a su destino', 'A decorar', 'Perder tiempo', 'Nada'], correct: 0 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Los impuestos sonâ€¦', options: ['Un juego', 'El aporte de todos para todos', 'Un regalo', 'Un castigo'], correct: 1 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'Â¿QuÃ© es la transparencia?', options: ['Mostrar cÃ³mo se gasta el dinero pÃºblico', 'Hablar mucho', 'Un color', 'Esconder informaciÃ³n'], correct: 0 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'Â¿Por quÃ© importa la transparencia?', options: ['Para aburrir', 'Evita trampas a escondidas', 'No importa', 'Es aburrida'], correct: 1 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'Un alcalde publica todos los gastos en internet. Eso esâ€¦', options: ['PÃ©rdida de tiempo', 'Un chisme', 'Transparencia', 'Presumir'], correct: 2 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'Â¿QuÃ© frase pide transparencia?', options: ['â€œConfÃ­a y no preguntesâ€', 'â€œMuÃ©strame las cuentas, por favorâ€', 'â€œTÃº pÃ¡gameâ€', 'â€œMejor no saberâ€'], correct: 1 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'Sin transparencia, es mÃ¡s fÃ¡cilâ€¦', options: ['Ser felices', 'Ser justo', 'Esconder corrupciÃ³n', 'Ahorrar'], correct: 2 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Â¿QuÃ© es rendir cuentas?', options: ['Esconderse', 'Contar chistes', 'Explicar en quÃ© se usÃ³ lo confiado', 'Dormir siesta'], correct: 2 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Â¿QuiÃ©n debe rendir cuentas?', options: ['Quien administra algo de otros', 'Solo los niÃ±os', 'Nadie', 'Los gatos'], correct: 0 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Un tesorero muestra todos los recibos del grupo. Â¿QuÃ© hace?', options: ['Hace magia', 'Presume', 'Rinde cuentas', 'Pierde tiempo'], correct: 2 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Rendir cuentas generaâ€¦', options: ['Confianza', 'Enemigos', 'Desconfianza', 'Pleitos'], correct: 0 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Si administras dinero del salÃ³n, debesâ€¦', options: ['Anotar y mostrar cada gasto', 'Gastarlo en secreto', 'Regalarlo', 'Comprar dulces'], correct: 0 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'Â¿El nepotismo daÃ±a a otros?', options: ['SÃ­, roba oportunidades', 'Solo un poco', 'A las plantas', 'No'], correct: 0 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'Elegir a un amigo para un cargo sin evaluar a nadie esâ€¦', options: ['Amistad', 'Ser popular', 'Nepotismo', 'Suerte'], correct: 2 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'Â¿CÃ³mo se evita el nepotismo?', options: ['Con secretos', 'Cerrar los ojos', 'Con mÃ¡s amigos', 'Con concursos justos y abiertos'], correct: 3 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'Un concurso abierto con jurado esâ€¦', options: ['Justo y transparente', 'Lento e inÃºtil', 'Una fiesta', 'Injusto'], correct: 0 },
  { topic: 'Nepotismo', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', question: 'El mÃ©rito significaâ€¦', options: ['Ser famoso', 'Que te elijan por capacidad y esfuerzo', 'Tener contactos', 'Tener suerte'], correct: 1 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Â¿De quiÃ©n es el dinero de los impuestos?', options: ['De nadie', 'Del banco', 'De todos los ciudadanos', 'Del alcalde'], correct: 2 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Evadir impuestos esâ€¦', options: ['Normal', 'Un juego', 'Quitarle recursos a todos', 'Inteligente'], correct: 2 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Â¿QuÃ© financian los impuestos?', options: ['Viajes de funcionarios', 'Fiestas', 'Dulces para todos', 'Escuelas, salud y caminos'], correct: 3 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Pagar impuestos esâ€¦', options: ['Un castigo', 'Opcional', 'Un deber ciudadano', 'Divertido'], correct: 2 },
  { topic: 'Impuestos', icon: 'ðŸ›ï¸', question: 'Si una obra cuesta el triple por sobreprecios, eso esâ€¦', options: ['CorrupciÃ³n', 'InflaciÃ³n', 'Un milagro', 'Calidad'], correct: 0 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'El acceso a la informaciÃ³n pÃºblica esâ€¦', options: ['Un favor', 'Un derecho', 'Un secreto', 'Un privilegio'], correct: 1 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'Â¿QuÃ© herramienta frena la corrupciÃ³n?', options: ['El secreto', 'La paciencia sola', 'La transparencia y la denuncia', 'Una varita mÃ¡gica'], correct: 2 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'Ocultar gastos pÃºblicos generaâ€¦', options: ['Confianza', 'AlegrÃ­a', 'Ahorro', 'Desconfianza'], correct: 3 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'Publicar las decisiones ayuda aâ€¦', options: ['Aburrir', 'A confundir mÃ¡s', 'Vigilar que todo sea justo', 'Confundir'], correct: 2 },
  { topic: 'Transparencia', icon: 'ðŸ”', question: 'La luz es enemiga deâ€¦', options: ['De la noche', 'El dÃ­a', 'Las plantas', 'La corrupciÃ³n'], correct: 3 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Â¿QuÃ© muestra quien rinde cuentas?', options: ['Miedo', 'Nada', 'Honestidad', 'Culpa'], correct: 2 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'No rendir cuentas permiteâ€¦', options: ['La confianza', 'El orden', 'Esconder desvÃ­os', 'Ahorra tiempo'], correct: 2 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Tu grupo te eligiÃ³ tesorero. Â¿QuÃ© haces?', options: ['Muestro cada gasto al grupo', 'Esconder la alcancÃ­a', 'Lo presto a amigos', 'Guardo el dinero en secreto'], correct: 0 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Â¿Cada cuÃ¡nto se debe rendir cuentas?', options: ['Cuando hay fiesta', 'Siempre que se maneje algo ajeno', 'Nunca', 'Una vez y ya'], correct: 1 },
  { topic: 'RendiciÃ³n', icon: 'ðŸ§¾', question: 'Rendir cuentas protegeâ€¦', options: ['A nadie', 'Los recursos de todos', 'Al olvido', 'Al tesorero corrupto'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Un dirigente se queda con dinero de la escuela. Â¿QuÃ© es?', options: ['Un error', 'Ahorro', 'PrÃ©stamo', 'CorrupciÃ³n'], correct: 3 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© debe hacer quien administra dinero del grupo?', options: ['Repartirlo entre amigos', 'Rendir cuentas y usarlo para el fin acordado', 'Esconderlo', 'Gastarlo'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Las leyes son iguales paraâ€¦', options: ['Los semÃ¡foros', 'Los ricos', 'Todas las personas por igual', 'Los polÃ­ticos'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© promueve rechazar coimas?', options: ['La viveza', 'El miedo', 'La flojera', 'La integridad'], correct: 3 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Un pueblo que vigila a sus autoridadesâ€¦', options: ['Pierde tiempo', 'Cansancio', 'Frena la corrupciÃ³n', 'Se mete en lÃ­os'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Denunciar por canales seguros esâ€¦', options: ['Chisme', 'ValentÃ­a ciudadana', 'Peligroso siempre', 'Quedarse dormido'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© necesita un paÃ­s contra la corrupciÃ³n?', options: ['MÃ¡s dinero', 'MÃ¡s feriados', 'Ciudadanos honestos e instituciones fuertes', 'MÃ¡s secretos'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'El silencio ante la corrupciÃ³nâ€¦', options: ['No afecta', 'MÃºsica', 'La deja crecer', 'Ayuda'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Hablar y denunciar esâ€¦', options: ['Un susurro', 'InÃºtil', 'El primer paso para detenerla', 'Peligroso'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿CuÃ¡l es el mensaje de este juego?', options: ['Gana como sea', 'La integridad siempre gana', 'Volar alto', 'Paga para ganar'], correct: 1 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Â¿Es honesto decir la verdad aunque cueste?', options: ['Ser callado', 'Depende', 'Nunca', 'SÃ­, la honestidad es un valor'], correct: 3 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Encuentras dinero perdido. Â¿QuÃ© muestra integridad?', options: ['Gastarlo', 'Devolverlo con todo su contenido', 'Comprar dulces', 'Quedarte la mitad'], correct: 1 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Â¿QuÃ© es hacer trampa en un examen?', options: ['Copiar o hacer trampa', 'Estudiar mucho', 'Un recreo', 'Preguntar al profesor'], correct: 0 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Copiar la tarea y firmarla esâ€¦', options: ['Plagio deshonesto', 'Ayuda', 'Un dibujo', 'Trabajo en equipo'], correct: 0 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'La honestidad se demuestra cuandoâ€¦', options: ['Cuando todos miran', 'Cuando hay dulces', 'Cuando hay premio', 'Cuando nadie mira'], correct: 3 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Â¿Por quÃ© cuesta ser honesto a veces?', options: ['Porque llueve', 'Porque no conviene', 'Porque exige valentÃ­a', 'Porque es aburrido'], correct: 2 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Un amigo te pide copiar. Â¿QuÃ© propones?', options: ['Copiar tambiÃ©n', 'Nada', 'Copiar', 'Estudiar juntos'], correct: 3 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Decir la verdad aunque traiga problemas esâ€¦', options: ['InÃºtil', 'De valientes', 'Tonto', 'Ser gruÃ±Ã³n'], correct: 1 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Â¿La honestidad se entrena?', options: ['Comiendo', 'SÃ­, con actos pequeÃ±os diarios', 'Solo de mayor', 'No se puede'], correct: 1 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Â¿QuÃ© gana una persona honesta?', options: ['Enemigos', 'Un helado', 'Nada', 'Confianza y respeto'], correct: 3 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Â¿QuÃ© le puede pasar a quien ofrece coimas?', options: ['Nada malo', 'Nada', 'PrisiÃ³n, multas e inhabilitaciÃ³n', 'Un premio'], correct: 2 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'AdemÃ¡s de lo legal, la corrupciÃ³n destruyeâ€¦', options: ['Los semÃ¡foros', 'Las nubes', 'Los feriados', 'La confianza entre ciudadanos'], correct: 3 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Â¿La corrupciÃ³n tiene castigo?', options: ['Solo retos', 'No', 'SÃ­, la ley la sanciona', 'Solo multas de juguete'], correct: 2 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Quien roba dinero pÃºblico deberÃ¡â€¦', options: ['QuedÃ¡rselo', 'Esconderlo mejor', 'Ser famoso', 'Devolverlo y responder ante la ley'], correct: 3 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Â¿Por quÃ© existen castigos contra la corrupciÃ³n?', options: ['Por tradiciÃ³n', 'Para asustar', 'Para proteger a todos y desanimar trampas', 'Por venganza'], correct: 2 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Una mala fama por corrupto duraâ€¦', options: ['Nada', 'Mucho tiempo', 'Un dÃ­a', 'Un recreo'], correct: 1 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Â¿QuÃ© pierde un corrupto descubierto?', options: ['Sus llaves', 'Confianza y reputaciÃ³n', 'Nada', 'Dinero y premios'], correct: 1 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Las consecuencias lleganâ€¦', options: ['Tarde o temprano', 'En bicicleta', 'Nunca', 'Solo a otros'], correct: 0 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Â¿A quiÃ©n castiga la ley anticorrupciÃ³n?', options: ['A los pÃ¡jaros', 'A quien ofrece y a quien acepta', 'A los testigos', 'A los honestos'], correct: 1 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Evitar la corrupciÃ³n te evitaâ€¦', options: ['La tarea', 'Dinero', 'Problemas legales y culpa', 'Amigos'], correct: 2 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Â¿CÃ³mo se previene la corrupciÃ³n?', options: ['Pagando mÃ¡s rÃ¡pido', 'Exigiendo transparencia y denunciando', 'Con magia', 'Ignorando todo'], correct: 3 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Si ves algo incorrecto en tu municipio, puedesâ€¦', options: ['Callar', 'Pedir un deseo', 'Denunciar por canales seguros', 'Participar'], correct: 2 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Prevenir es mejor porqueâ€¦', options: ['Es mÃ¡s caro', 'Evita el daÃ±o antes de que ocurra', 'Es aburrido', 'Porque sÃ­'], correct: 1 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Â¿QuÃ© frena las coimas en un trÃ¡mite?', options: ['TrÃ¡mites claros y comprobantes', 'Con prisa', 'Pagar mÃ¡s', 'Ir de noche'], correct: 0 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'En tu escuela, Â¿cÃ³mo previenes trampas?', options: ['Reglas claras y honestidad', 'No mirando', 'Copiando', 'Con silencio'], correct: 0 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Â¿A quiÃ©n avisas si ofrecen coimas en tu barrio?', options: ['A un amigo cÃ³mplice', 'Al perro', 'A un adulto de confianza o autoridad', 'A nadie'], correct: 2 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Educar en valores desde niÃ±osâ€¦', options: ['Ver tele', 'No sirve', 'Forma adultos Ã­ntegros', 'Es aburrido'], correct: 2 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Â¿QuÃ© hace fuerte a una comunidad?', options: ['Con muros', 'La honestidad de todos', 'El silencio', 'El dinero'], correct: 1 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Vigilar y participar esâ€¦', options: ['CiudadanÃ­a activa', 'PÃ©rdida de tiempo', 'Meterse en lÃ­os', 'Dormir'], correct: 0 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Â¿CuÃ¡l es tu papel contra la corrupciÃ³n?', options: ['Aplaudir', 'Esperar a crecer', 'No hacer trampa y denunciar', 'Ninguno'], correct: 2 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Devolver el vuelto de mÃ¡s esâ€¦', options: ['Tonto', 'Innecesario', 'Honestidad', 'Guardar silencio'], correct: 2 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Â¿La integridad se muestra cuandoâ€¦?', options: ['Cuando hay recompensa', 'Cuando hay cÃ¡maras', 'En fotos', 'Cuando nadie mira'], correct: 3 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Un error admitido a tiempoâ€¦', options: ['Empeora todo', 'Esconderlo', 'No importa', 'Se puede corregir y enseÃ±a'], correct: 3 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Â¿QuÃ© admiras en una persona Ã­ntegra?', options: ['Su coherencia', 'Su ropa', 'Su bicicleta', 'Su dinero'], correct: 0 },
  { topic: 'Honestidad', icon: 'ðŸ’Ž', question: 'Ser coherente esâ€¦', options: ['Decir y hacer lo mismo', 'Cambiar segÃºn convenga', 'Cambiar de equipo', 'Callar siempre'], correct: 0 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'El dinero robado deja sinâ€¦', options: ['Fiestas', 'Nada', 'Escuelas y hospitales', 'Recreos'], correct: 0 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Â¿QuÃ© deja la corrupciÃ³n a los jÃ³venes?', options: ['Riqueza', 'Oportunidades', 'Menos futuro', 'Juguetes'], correct: 2 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Un paÃ­s corruptoâ€¦', options: ['Vuela', 'Avanza mÃ¡s', 'Crece menos y con desconfianza', 'Progresa igual'], correct: 2 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'Â¿Por quÃ© castigar la corrupciÃ³n?', options: ['Para que no se repita y reparar el daÃ±o', 'Para reÃ­r', 'Por costumbre', 'Por odio'], correct: 0 },
  { topic: 'Consecuencias', icon: 'âš–ï¸', question: 'La culpa de participar en trampasâ€¦', options: ['Un globo', 'No existe', 'Pasa rÃ¡pido', 'Persigue mucho tiempo'], correct: 3 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Pedir comprobantes siempreâ€¦', options: ['Deja huella contra trampas', 'Es grosero', 'Para empapelar', 'Es lento'], correct: 0 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Â¿QuÃ© le pides a un candidato?', options: ['Su foto', 'Propuestas claras y cuentas claras', 'Favores', 'Regalos'], correct: 1 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Observar y anotar irregularidades sirve paraâ€¦', options: ['Nada', 'Chismear', 'Para dormir', 'Denunciar con pruebas'], correct: 3 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'La mejor vacuna contra la corrupciÃ³n esâ€¦', options: ['La educaciÃ³n en valores', 'JabÃ³n', 'El miedo', 'El castigo solo'], correct: 0 },
  { topic: 'PrevenciÃ³n', icon: 'ðŸ›¡ï¸', question: 'Â¿CuÃ¡ndo empezar a ser Ã­ntegro?', options: ['Desde hoy mismo', 'MaÃ±ana siempre', 'De mayor', 'Nunca'], correct: 3 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© es el bien comÃºn?', options: ['Lo de nadie', 'Lo mÃ­o', 'Lo que beneficia a todos', 'Mi mochila'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Cuidar lo pÃºblico es tarea deâ€¦', options: ['El vecino', 'Todos los ciudadanos', 'Solo autoridades', 'Nadie'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Un parque limpio gracias a vecinos muestraâ€¦', options: ['La lluvia', 'Suerte', 'CiudadanÃ­a activa', 'Dinero'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© rompe el bien comÃºn?', options: ['Cuidarlo', 'Ignorarlo', 'Usarlo para beneficio propio', 'Regarlo'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Pensar en los demÃ¡s al decidir esâ€¦', options: ['Justicia', 'TonterÃ­a', 'Debilidad', 'Doler la cabeza'], correct: 0 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Ser un ciudadano activo esâ€¦', options: ['Votar y olvidar', 'Dormir siesta', 'Dejar todo a otros', 'Vigilar, participar y exigir cuentas'], correct: 3 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Un comitÃ© detecta sobreprecio en una obra. Â¿QuÃ© hace?', options: ['Festejar', 'Pide su parte', 'Exige el expediente y denuncia', 'No se mete'], correct: 2 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Votar con informaciÃ³n esâ€¦', options: ['Un deber ciudadano', 'InÃºtil', 'Un juego', 'Aburrido'], correct: 0 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Â¿Para quÃ© sirve participar en tu barrio?', options: ['Para pelear', 'Para mejorar juntos', 'Jugar solo', 'Para nada'], correct: 1 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Ignorar los problemas del barrioâ€¦', options: ['Descansar', 'Los deja crecer', 'Ayuda', 'Es cÃ³modo'], correct: 1 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Un buen vecinoâ€¦', options: ['Solo mira lo suyo', 'Se muda', 'Quejarse', 'Cuida lo comÃºn y avisa'], correct: 3 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'La integridad significaâ€¦', options: ['Hacer lo correcto aunque nadie mire', 'Seguir a la mayorÃ­a', 'Hacer lo que conviene', 'Ser famoso'], correct: 0 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Â¿Ã‰tica y ley se parecen enâ€¦?', options: ['Buscar lo justo', 'Nada', 'Letras', 'Enemigos'], correct: 0 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Actuar bien cuando nadie mira se llamaâ€¦', options: ['Ã‰tica', 'Miedo', 'Suerte', 'Un truco'], correct: 0 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Â¿QuÃ© guÃ­a tus decisiones diarias?', options: ['Los dados', 'La tele', 'La moda', 'Tus valores'], correct: 3 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Copiar fama ajena como propia esâ€¦', options: ['Falta de Ã©tica', 'Un cumplido', 'Necesario', 'Homenaje'], correct: 0 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Â¿QuÃ© valor te hace devolver lo ajeno?', options: ['La honestidad', 'El olvido', 'El miedo', 'La viveza'], correct: 0 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'El respeto significaâ€¦', options: ['Tratar bien a todos', 'ReÃ­rse', 'Obedecer siempre', 'Burlarse'], correct: 0 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Â¿QuÃ© valor falta al hacer trampa?', options: ['Honestidad', 'EnergÃ­a', 'Fuerza', 'AlegrÃ­a'], correct: 0 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Ser solidario esâ€¦', options: ['Ayudar sin esperar ventaja', 'Dar lo que sobra sin amor', 'Prestar con intereses', 'Guardar todo'], correct: 0 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Â¿QuÃ© une a una familia honesta?', options: ['El dinero', 'La confianza', 'El silencio', 'La tele'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Un lÃ­der justoâ€¦', options: ['Escucha y decide parejo', 'Se esconde', 'Favorece amigos', 'Gritar'], correct: 0 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© hace grande a una escuela?', options: ['Su dinero', 'Sus valores y su gente', 'Su edificio', 'El patio'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'El ejemplo de los mayoresâ€¦', options: ['No importa', 'EnseÃ±a mÃ¡s que mil palabras', 'Sus canas', 'Aburre'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© dejas a otros con honestidad?', options: ['Nada', 'Buen ejemplo', 'Cuentas', 'Deudas'], correct: 1 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Cuidar el parque del barrio esâ€¦', options: ['Mirarlo', 'Tarea de otros', 'PÃ©rdida de tiempo', 'CiudadanÃ­a'], correct: 3 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Â¿Por quÃ© importan las elecciones limpias?', options: ['No importan', 'Son fiesta', 'Un desfile', 'Deciden el futuro de todos'], correct: 3 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Comprar votos esâ€¦', options: ['Ayuda', 'Democracia', 'Un regalo', 'CorrupciÃ³n electoral'], correct: 3 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Informarte antes de opinar esâ€¦', options: ['Perder tiempo', 'Innecesario', 'Responsabilidad', 'Aburrido'], correct: 2 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Â¿QuÃ© hace un observador electoral?', options: ['Vigila que todo sea limpio', 'Vota dos veces', 'Duerme', 'Vender dulces'], correct: 0 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Â¿Miente quien calla una verdad importante?', options: ['Solo escribe', 'Ser tÃ­mido', 'No', 'A veces sÃ­, por omisiÃ³n'], correct: 0 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Prometer y no cumplir esâ€¦', options: ['Falta de palabra', 'Inteligente', 'Normal', 'Ser optimista'], correct: 0 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Â¿QuÃ© vale mÃ¡s que el dinero?', options: ['La fama', 'La integridad', 'Nada', 'Un videojuego'], correct: 0 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Elegir lo correcto aunque pierdas esâ€¦', options: ['CarÃ¡cter', 'TonterÃ­a', 'Debilidad', 'Tener suerte'], correct: 0 },
  { topic: 'Ã‰tica', icon: 'ðŸ§­', question: 'Â¿QuiÃ©n te evalÃºa cuando nadie mira?', options: ['Tus amigos', 'Tu conciencia', 'Nadie', 'La luna'], correct: 1 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Compartir lo que sabesâ€¦', options: ['Te empobrece', 'Quedarse sin nada', 'Multiplica el bien', 'Es tonto'], correct: 2 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Agradecer un favorâ€¦', options: ['Debilita', 'Humilla', 'Fortalece vÃ­nculos', 'Quedar mal'], correct: 2 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Pedir perdÃ³n sincero demuestraâ€¦', options: ['Miedo', 'Debilidad', 'ValentÃ­a', 'Llorar'], correct: 2 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Â¿QuÃ© construye la confianza?', options: ['Regalos caros', 'Promesas vacÃ­as', 'Actos justos repetidos', 'Hablar bajito'], correct: 2 },
  { topic: 'Valores', icon: 'ðŸŒ±', question: 'Perdonar sin olvidar la lecciÃ³n esâ€¦', options: ['Tonto', 'Sabio', 'Injusto', 'Guardar rencor'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Ver corrupciÃ³n y actuar esâ€¦', options: ['Imposible', 'Deber ciudadano', 'Correr', 'Peligroso siempre'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© frena mÃ¡s la corrupciÃ³n?', options: ['MÃ¡s dinero', 'MÃ¡s estadios', 'Gente honesta mÃ¡s leyes justas', 'MÃ¡s leyes solas'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Un paÃ­s honestoâ€¦', options: ['MÃ¡s pequeÃ±o', 'Es aburrido', 'Avanza unido', 'Es pobre'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Tu granito de arena importa porqueâ€¦', options: ['Molesta', 'Suma con el de todos', 'No hacer nada', 'No importa'], correct: 1 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿El final de este juego quÃ© enseÃ±a?', options: ['A saltar', 'A esquivar', 'Que la integridad siempre gana', 'A volar'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿QuÃ© aprendiste hoy?', options: ['A cocinar', 'Trampas', 'Nada', 'A reconocer y frenar corrupciÃ³n'], correct: 3 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿A quiÃ©n contarÃ¡s lo aprendido?', options: ['A tu familia y amigos', 'En secreto', 'A nadie', 'Al espejo'], correct: 0 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Practicar honestidad cada dÃ­aâ€¦', options: ['Cansa', 'Los fines de semana', 'Te hace Ã­ntegro', 'Aburre'], correct: 2 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'Â¿VolverÃ­as a jugar para repasar?', options: ['SÃ­, aprender es divertido', 'Solo si gano', 'Tal vez', 'No'], correct: 0 },
  { topic: 'Mixto', icon: 'ðŸŒ±', question: 'La mejor victoria del juego esâ€¦', options: ['El rÃ©cord', 'MÃ¡s vidas', 'El puntaje', 'Ser Ã­ntegro de verdad'], correct: 3 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Â¿QuÃ© es rendir cuentas?', options: ['Explicar en quÃ© se usÃ³ lo confiado', 'Cantar', 'Callar', 'Esconderse'], correct: 0 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Â¿QuiÃ©n vigila al gobierno?', options: ['Solo Ã©l', 'El pueblo y sus instituciones', 'Los perros', 'Nadie'], correct: 1 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'La prensa libre ayuda porqueâ€¦', options: ['Entretiene', 'Contar chistes', 'Vende', 'Investiga y revela'], correct: 3 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Â¿QuÃ© es un derecho ciudadano?', options: ['Un premio', 'Un dulce', 'Un regalo', 'Algo que nadie te puede quitar sin razÃ³n'], correct: 3 },
  { topic: 'CiudadanÃ­a', icon: 'ðŸ—³ï¸', question: 'Cuidar lo de todosâ€¦', options: ['No sirve', 'Romperlo', 'Es de todos', 'Es de tontos'], correct: 2 },
];

// Biblioteca de temas para hijos y adolescentes
interface KidTopic {
  id: string
  title: string
  desc: string
  icon: string
  art: 'scale' | 'paths' | 'hands' | 'shield' | 'chat'
  category: string
  core: LearningTopic
  summary: string
  deepen?: string
  shortTerm?: string
  longTerm?: string
  affectsPeople?: string
  affectsCommunity?: string
  affectsCountry?: string
  identify?: { text: string; isCorruption: boolean; why: string }[]
  reflectMore?: string[]
  trueFalse?: { text: string; answer: boolean; why: string }[]
  blanks?: { before: string; answer: string; after: string }[]
  wordBank?: string[]
  beyond?: string[]
  problems: string[]
  compareA?: string
  compareB?: string
  compareNote?: string
  body: string[]
  example: string
  observe: string
  reflectQ: string
  finalTask: string
  scenarioQ: string
  scenarioOpts: string[]
  scenarioCorrect: number
  scenarioFeedback: string[]
  familyPrompt: string
  familyQuestion: string
  relatedGuide: string
  joint?: boolean
}

// Pasos de cada tema: fuente Ãºnica de verdad para etiquetas, contador y navegaciÃ³n.
const KID_STEPS = ['Aprende', 'Observa', 'Reflexiona', 'Elige', 'Conversa', 'Completa'] as const
// Estilos compartidos para igualar espaciado y alineaciÃ³n en PC y mÃ³vil.
const KID_CARD = 'bg-white rounded-[20px] p-5 md:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(30,41,82,0.05)]'
const KID_CHIP = 'inline-flex items-center gap-1.5 w-max max-w-full px-3 py-[5px] rounded-full bg-primary-50 text-primary text-[11px] font-bold uppercase tracking-wider mb-3'
const KID_CHIP_WARN = 'inline-flex items-center gap-1.5 w-max max-w-full px-3 py-[5px] rounded-full bg-warning-50 text-warning text-[11px] font-bold uppercase tracking-wider mb-3'
const KID_BODY = 'text-slate-700 text-base md:text-lg leading-relaxed'
const KID_LIST = 'text-slate-700 text-base md:text-lg leading-relaxed'

const KIDS_TOPICS: KidTopic[] = [
  {
    id: 'k1', title: 'Â¿QuÃ© es la corrupciÃ³n?', desc: 'Descubre quÃ© significa con ejemplos de todos los dÃ­as.', icon: 'ðŸ›ï¸', category: 'CorrupciÃ³n', core: 'coima',
    body: ['La corrupciÃ³n es cuando alguien usa su poder o su puesto para conseguir algo injusto, en vez de hacer lo correcto.', 'No es solo cosa de polÃ­ticos: puede aparecer en la escuela, en el barrio o en cualquier lugar donde alguien haga trampa para ganar.'],
    example: 'Pagar para evitar una multa que sÃ­ cometiste es corrupciÃ³n: rompe las reglas que son para todos.',
    art: 'scale',
    summary: 'La corrupciÃ³n es usar un poder o una posiciÃ³n para conseguir algo injusto.',
    problems: ['Rompe reglas que son para todos: cuando alguien hace trampa, las normas dejan de proteger a quienes sÃ­ las cumplen.', 'Da ventajas injustas a algunos: quien hace trampa consigue lugares, premios o servicios que le tocaban a otra persona.', 'Debilita la confianza: si la gente cree que todo estÃ¡ arreglado, deja de participar y de creer en su escuela, su barrio y su paÃ­s.'],
    observe: 'En el recreo, un grupo paga a otro para usar primero la cancha, aunque no era su turno.',
    reflectQ: 'Â¿A quiÃ©nes afecta que unos pocos se salten las reglas?',
    finalTask: 'CuÃ©ntale a alguien de tu familia un ejemplo de corrupciÃ³n que hayas visto o imaginado.',
    scenarioQ: 'Un compaÃ±ero te ofrece dinero para que ignores una regla del juego. Â¿QuÃ© haces?',
    scenarioOpts: ['Acepto el dinero', 'Digo que no y sigo las reglas', 'Acepto pero no digo nada'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Aceptar te hace parte de la trampa y otros salen perdiendo.',
      'Bien: decir que no mantiene el juego justo para todos.',
      'Quedarte callado deja que la trampa siga.'
    ],
    familyPrompt: 'Hoy aprendÃ­ quÃ© es la corrupciÃ³n.',
    familyQuestion: 'Â¿En quÃ© lugares crees que puede aparecer la corrupciÃ³n?',
    deepen: 'Ocurre cuando alguien pone su interÃ©s personal por encima de lo justo. Muchas veces empieza con algo pequeÃ±o, como colarse en una fila, y crece si nadie dice nada.',
    shortTerm: 'A corto plazo, alguien pierde su turno, su premio o su oportunidad, y se siente triste o enojado por la injusticia.',
    longTerm: 'A largo plazo, si nadie la frena, la corrupciÃ³n se vuelve costumbre: los servicios empeoran y la gente deja de confiar.',
    affectsPeople: 'A ti y a tu familia: pueden quitarte un cupo, un premio o un servicio que te correspondÃ­a.',
    affectsCommunity: 'A tu escuela y tu barrio: las reglas dejan de cumplirse y el ambiente se vuelve injusto para todos.',
    affectsCountry: 'Al paÃ­s: se pierden recursos para hospitales, escuelas y caminos, y todos vivimos peor.',
    identify: [
      { text: 'Un funcionario pide dinero para agilizar un trÃ¡mite â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Pedir dinero para hacer su trabajo es usar su puesto para beneficio propio.' },
      { text: 'Una niÃ±a ayuda a su amiga con la tarea sin pedir nada a cambio â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Ayudar sin pedir nada a cambio es solidaridad, no corrupciÃ³n.' },
      { text: 'Un Ã¡rbitro cobra para favorecer a un equipo en la final â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Rompe las reglas del juego para beneficiar a unos y perjudicar a otros.' },
      { text: 'Un mÃ©dico atiende a los pacientes en orden de llegada â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Atender por orden es justo: nadie recibe ventajas indebidas.' },
    ],
    reflectMore: ['Â¿Por quÃ© la corrupciÃ³n rompe la confianza entre las personas?', 'Â¿QuÃ© sentirÃ­as si te quitaran algo que te ganaste con esfuerzo?', 'Â¿QuÃ© puedes hacer tÃº cuando veas algo injusto?'],
    trueFalse: [
      { text: 'La corrupciÃ³n solo la hacen los polÃ­ticos.', answer: false, why: 'Puede aparecer en la escuela, el barrio o cualquier lugar.' },
      { text: 'Usar un puesto para conseguir ventajas injustas es corrupciÃ³n.', answer: true, why: 'Esa es justamente su definiciÃ³n.' },
      { text: 'Si nadie se entera, no hay daÃ±o.', answer: false, why: 'El daÃ±o existe aunque nadie lo vea: alguien pierde algo.' },
      { text: 'Decir la verdad ayuda a frenar la corrupciÃ³n.', answer: true, why: 'Hablar y reportar es el primer paso para detenerla.' },
      { text: 'Las reglas estÃ¡n para proteger a todos por igual.', answer: true, why: 'Por eso romperlas para ganar ventaja es injusto.' },
    ],
    blanks: [
      { before: 'La corrupciÃ³n es usar el', answer: 'poder', after: 'para conseguir algo injusto.' },
      { before: 'Cuando alguien hace trampa, rompe las', answer: 'reglas', after: 'que son para todos.' },
      { before: 'La corrupciÃ³n debilita la', answer: 'confianza', after: 'entre las personas.' },
    ],
    wordBank: ['poder', 'reglas', 'confianza', 'dinero'],
    beyond: ['La transparencia es mostrar con claridad cÃ³mo se usan los recursos y se toman las decisiones; asÃ­ nadie puede hacer trampa a escondidas.', 'La rendiciÃ³n de cuentas significa explicar quÃ© hiciste con lo que te confiaron, como el dinero de un grupo o una tarea encargada.', 'La Ã©tica es hacer lo correcto aunque nadie mire; la ley lo exige por escrito. Cuando se juntan, la sociedad funciona mejor.', 'AcciÃ³n justa: esperar tu turno en la fila. AcciÃ³n injusta: pagar para pasar primero. La diferencia estÃ¡ en respetar a los demÃ¡s.'],
    relatedGuide: 'p1',
  },
  {
    id: 'k2', title: 'Â¿QuÃ© es una coima?', desc: 'Aprende quÃ© es y por quÃ© afecta a otras personas.', icon: 'ðŸ’°', category: 'Coimas', core: 'coima',
    body: ['Una coima es dinero, regalos o favores que se ofrecen para conseguir algo que no corresponde.', 'El problema es que ese beneficio injusto le quita algo a otra persona: un cupo, un servicio, una oportunidad.'],
    example: 'Ofrecer dinero para que te atiendan primero, saltÃ¡ndose a todos los que esperaban.',
    art: 'hands',
    summary: 'Una coima es ofrecer o entregar dinero, un regalo o un favor para obtener una ventaja que no corresponde. Aunque parezca una soluciÃ³n rÃ¡pida, puede ser injusta y afectar a otras personas.',
    problems: ['Rompe las reglas: la coima salta las normas que ordenan quiÃ©n va primero o quiÃ©n merece algo.', 'Da una ventaja injusta: quien paga pasa adelante aunque no le corresponda.', 'Puede perjudicar a otras personas: cada ventaja indebida le quita algo a alguien que esperaba su turno.', 'Debilita la confianza: cuando pagar se vuelve normal, nadie cree en las reglas.'],
    compareA: 'CorrupciÃ³n: uso indebido del poder o de una posiciÃ³n para obtener un beneficio personal.',
    compareB: 'Coima: dinero, regalo o favor que se ofrece o entrega para conseguir una ventaja indebida.',
    compareNote: 'La coima es una forma de corrupciÃ³n, pero no toda corrupciÃ³n ocurre mediante una coima.',
    observe: 'Una persona ofrece dinero para evitar una multa que sÃ­ debe pagar.',
    reflectQ: 'Si aceptas algo injusto una vez, Â¿serÃ¡ mÃ¡s fÃ¡cil aceptar la prÃ³xima?',
    finalTask: 'Escribe con tus palabras quÃ© es una coima y por quÃ© hace daÃ±o.',
    scenarioQ: 'Tu amigo te dice que puede pagar para evitar una multa. Â¿QuÃ© opciÃ³n elegirÃ­as?',
    scenarioOpts: ['Aceptar porque todos lo hacen', 'Decir que no y respetar las reglas', 'No decir nada', 'Preguntar a un adulto de confianza'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Si todos lo hacen, el daÃ±o se reparte entre todos: menos recursos y menos confianza.',
      'Buena decisiÃ³n. Respetar las reglas ayuda a que todas las personas reciban un trato justo.',
      'Guardar silencio deja que lo injusto siga pasando y puede volverse costumbre.',
      'Muy bien: pedir ayuda a un adulto de confianza es una forma valiente y segura de actuar.'
    ],
    familyPrompt: 'Hoy aprendÃ­ quÃ© es una coima.',
    familyQuestion: 'Â¿Por quÃ© crees que una coima puede afectar a otras personas?',
    deepen: 'Ocurre porque alguien quiere algo rÃ¡pido sin ganÃ¡rselo, y otra persona acepta a cambio de dinero o favores. Las dos partes rompen las reglas, aunque solo una haya ofrecido.',
    shortTerm: 'A corto plazo, quienes esperaban su turno pierden tiempo y oportunidades, y se sienten tratados injustamente.',
    longTerm: 'A largo plazo, si las coimas se vuelven normales, los servicios se reparten por dinero y no por necesidad o mÃ©rito.',
    affectsPeople: 'A ti y a tu familia: pueden atenderte despuÃ©s o negarte algo que te tocaba, solo porque otro pagÃ³.',
    affectsCommunity: 'A tu comunidad: los trÃ¡mites y servicios se vuelven lentos e injustos para quienes no pagan.',
    affectsCountry: 'Al paÃ­s: el dinero de las coimas se pierde en bolsillos privados en vez de usarse en obras y servicios.',
    identify: [
      { text: 'Un conductor ofrece dinero al policÃ­a para que no le ponga la multa â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Es una coima: dinero a cambio de evitar una sanciÃ³n justa.' },
      { text: 'Una abuela le regala frutas al vecino por ayudarla â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Es agradecimiento sincero, no busca una ventaja indebida.' },
      { text: 'Un padre paga para que su hijo entre a un equipo sin hacer la prueba â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Compra un lugar que otro niÃ±o se habrÃ­a ganado con esfuerzo.' },
      { text: 'Un estudiante felicita a su compaÃ±ero por ganar limpiamente â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Reconocer el mÃ©rito ajeno es justo y honesto.' },
    ],
    reflectMore: ['Â¿Por quÃ© una soluciÃ³n rÃ¡pida e injusta termina daÃ±ando a mÃ¡s personas?', 'Â¿QuÃ© diferencia hay entre un regalo sincero y una coima?', 'Â¿QuÃ© harÃ­as si alguien te ofrece algo a cambio de romper una regla?'],
    trueFalse: [
      { text: 'Una coima siempre es dinero en efectivo.', answer: false, why: 'TambiÃ©n puede ser un regalo, un favor o una promesa.' },
      { text: 'Aceptar una coima tambiÃ©n es corrupciÃ³n.', answer: true, why: 'Quien ofrece y quien acepta rompen las reglas.' },
      { text: 'Si la coima es pequeÃ±a, no afecta a nadie.', answer: false, why: 'Toda ventaja indebida le quita algo a otra persona.' },
      { text: 'Decir que no a una coima protege a los demÃ¡s.', answer: true, why: 'Tu negativa mantiene el trato justo para todos.' },
      { text: 'Pedir ayuda a un adulto ante una coima es de valientes.', answer: true, why: 'Buscar apoyo es la forma segura de actuar bien.' },
    ],
    blanks: [
      { before: 'Una coima es dinero, un regalo o un', answer: 'favor', after: 'para lograr algo indebido.' },
      { before: 'Quien ofrece y quien', answer: 'acepta', after: 'una coima rompen las reglas.' },
      { before: 'Decir que no a una coima mantiene el trato', answer: 'justo', after: 'para todos.' },
    ],
    wordBank: ['favor', 'acepta', 'justo', 'regalo'],
    beyond: ['La transparencia importa porque cuando todo se hace a la vista, es mucho mÃ¡s difÃ­cil pedir o aceptar coimas.', 'Rendir cuentas es explicar en quÃ© se usÃ³ cada recurso: asÃ­ se nota si algo se desviÃ³ por una coima.', 'La Ã©tica te dice que no aceptes ventajas indebidas; la ley lo castiga. Las dos te protegen.', 'AcciÃ³n justa: ganar un puesto con tu esfuerzo. AcciÃ³n injusta: comprarlo con una coima.'],
    relatedGuide: 'p2',
  },
  {
    id: 'k3', title: 'Â¿Por quÃ© alguien ofrece una coima?', desc: 'Entiende las razones sin justificar la conducta.', icon: 'ðŸ¤”', category: 'Coimas', core: 'recognition',
    body: ['Algunas personas ofrecen coimas por impaciencia, por querer ganar sin esfuerzo o porque creen que â€œtodos lo hacenâ€.', 'Ninguna razÃ³n lo justifica: entender por quÃ© ocurre nos ayuda a no caer en lo mismo.'],
    example: 'Alguien ofrece dinero para no hacer la fila del trÃ¡mite porque no quiere esperar.',
    art: 'paths',
    summary: 'Algunas personas ofrecen coimas por impaciencia o por querer ganar sin esfuerzo. Ninguna razÃ³n lo justifica.',
    problems: ['Normaliza la trampa como un â€œatajoâ€: si todos pagan, los niÃ±os aprenden que hacer trampa es lo normal.', 'Presiona a otros a hacer lo mismo: quien no quiere pagar queda fuera o es criticado.', 'Esconde lo que cada uno realmente puede lograr: el mÃ©rito deja de importar y solo cuenta el dinero.'],
    observe: 'â€œAquÃ­ todos pagan para pasar rÃ¡pidoâ€, dice un seÃ±or en la fila del trÃ¡mite.',
    reflectQ: 'Â¿Por quÃ© crees que algunas personas prefieren pagar en vez de esperar?',
    finalTask: 'Piensa una respuesta firme para decir que no y compÃ¡rtela en familia.',
    scenarioQ: 'Un amigo dice: â€œtodos pagan para pasar, hay que hacerloâ€. Â¿QuÃ© haces?',
    scenarioOpts: ['Acepto para no quedar mal', 'Le digo que eso no estÃ¡ bien', 'Me alejo y lo comento con un adulto'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Quedar bien un momento puede costar tu tranquilidad despuÃ©s.',
      'Exacto: que algo sea comÃºn no lo vuelve correcto.',
      'Bien: alejarte y pedir ayuda tambiÃ©n es una gran respuesta.'
    ],
    familyPrompt: 'Hoy pensÃ© por quÃ© la gente ofrece coimas.',
    familyQuestion: 'Â¿QuÃ© responderÃ­as si alguien te dice que â€œtodos lo hacenâ€?',
    deepen: 'Ocurre por impaciencia, por flojera o por miedo a perder. Algunos creen que â€œasÃ­ funciona el mundoâ€, pero eso solo es una excusa: entender la causa sirve para no repetirla, no para justificarla.',
    shortTerm: 'A corto plazo, quien paga consigue lo que quiere rÃ¡pido, pero enseÃ±a a otros que la trampa funciona.',
    longTerm: 'A largo plazo, esa idea se contagia: cada vez mÃ¡s gente paga y las reglas dejan de valer para todos.',
    affectsPeople: 'A ti: te presiona a pagar o a quedarte atrÃ¡s aunque hagas las cosas bien.',
    affectsCommunity: 'A tu comunidad: se crea la idea de que sin dinero no se avanza, y eso desanima a todos.',
    affectsCountry: 'Al paÃ­s: cuando el â€œtodos lo hacenâ€ se vuelve normal, la corrupciÃ³n crece y frena el desarrollo.',
    identify: [
      { text: 'â€œPaga para pasar rÃ¡pido, aquÃ­ todos lo hacenâ€ â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Que sea comÃºn no lo vuelve correcto: sigue siendo una ventaja indebida.' },
      { text: 'Esperar tu turno aunque la fila sea larga â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Respetar la fila es actuar con justicia y paciencia.' },
      { text: 'Un amigo te presiona para pagar y no quedar mal â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Presionar a otros para romper reglas tambiÃ©n es parte del problema.' },
      { text: 'Decir â€œno, graciasâ€ y esperar como los demÃ¡s â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Es la respuesta honesta: ni pagas ni aceptas la trampa.' },
    ],
    reflectMore: ['Â¿Por quÃ© â€œtodos lo hacenâ€ nunca es una buena razÃ³n?', 'Â¿QuÃ© pesa mÃ¡s: la impaciencia de hoy o tu tranquilidad de maÃ±ana?', 'Â¿CÃ³mo puedes responder con firmeza sin pelear?'],
    trueFalse: [
      { text: 'Si todos pagan coimas, entonces estÃ¡ bien hacerlo.', answer: false, why: 'Que algo sea comÃºn no lo vuelve correcto ni justo.' },
      { text: 'La impaciencia es una causa frecuente de las coimas.', answer: true, why: 'Muchos pagan por no querer esperar su turno.' },
      { text: 'Entender por quÃ© ocurre sirve para no caer en lo mismo.', answer: true, why: 'Conocer la causa te ayuda a reconocerla y frenarla.' },
      { text: 'Decir que no cuando te presionan es de dÃ©biles.', answer: false, why: 'Al contrario: decir que no es una muestra de fuerza.' },
      { text: 'Una excusa nunca convierte una trampa en algo justo.', answer: true, why: 'Las razones no justifican romper las reglas.' },
    ],
    blanks: [
      { before: 'Muchos ofrecen coimas por impaciencia o por no querer', answer: 'esperar', after: 'su turno.' },
      { before: 'Que â€œtodos lo haganâ€ no lo vuelve', answer: 'correcto', after: 'ni justo.' },
      { before: 'Decir que no ante la presiÃ³n es una muestra de', answer: 'fuerza', after: 'y valentÃ­a.' },
    ],
    wordBank: ['esperar', 'correcto', 'fuerza', 'dinero'],
    beyond: ['La transparencia ayuda porque cuando los trÃ¡mites son claros y pÃºblicos, hay menos espacio para â€œpagos rÃ¡pidosâ€.', 'Rendir cuentas es contar quÃ© se hizo y por quÃ©: quien actÃºa bien no teme explicarlo.', 'La Ã©tica te pide paciencia y respeto; la ley castiga el soborno. Ambas van en la misma direcciÃ³n.', 'AcciÃ³n justa: proponer que la fila avance por orden. AcciÃ³n injusta: pagar para colarte.'],
    relatedGuide: 'p7',
  },
  {
    id: 'k4', title: 'Â¿QuÃ© harÃ­as tÃº?', desc: 'Decide cÃ³mo actuar en distintos escenarios.', icon: 'ðŸ§­', category: 'Decisiones', core: 'impact',
    body: ['En la vida te vas a cruzar con situaciones injustas. Lo importante es detenerte, pensar en las consecuencias y elegir bien.', 'Puedes practicar aquÃ­ con casos de mentira para estar listo cuando pase de verdad.'],
    example: 'Te ofrecen un premio por quedarte callado ante algo injusto.',
    art: 'paths',
    summary: 'Cuando veas algo injusto, detente, piensa en las consecuencias y elige lo correcto.',
    problems: ['Quedarte callado deja que lo injusto continÃºe: el silencio es como darle permiso a la trampa.', 'Seguir a otros te hace parte del problema: copiar una mala acciÃ³n tambiÃ©n es una mala acciÃ³n.', 'Actuar bien protege a los demÃ¡s y a ti: una sola persona valiente puede frenar una injusticia.'],
    observe: 'Ves que a un compaÃ±ero lo favorecen por dinero en un concurso escolar.',
    reflectQ: 'Â¿QuÃ© sentirÃ­as si fueras quien merecÃ­a ganar?',
    finalTask: 'Dibuja o escribe cÃ³mo actuarÃ­as tÃº en esa situaciÃ³n.',
    scenarioQ: 'Ves que favorecen injustamente a alguien por dinero. Â¿QuÃ© haces?',
    scenarioOpts: ['Me quedo callado, no es mi problema', 'Lo comento con un adulto de confianza', 'Pido que tambiÃ©n me favorezcan'], scenarioCorrect: 1,
    scenarioFeedback: [
      'El silencio ayuda a que lo injusto se repita.',
      'Muy bien: contarle a un adulto de confianza es el primer paso para frenar lo injusto.',
      'Pedir lo mismo te convierte en parte del problema.'
    ],
    familyPrompt: 'Hoy practiquÃ© cÃ³mo actuar ante situaciones injustas.',
    familyQuestion: 'Si vieras algo injusto, Â¿a quiÃ©n se lo contarÃ­as primero?',
    deepen: 'Ocurre porque a veces es mÃ¡s fÃ¡cil mirar a otro lado que actuar. Pero cada vez que alguien se queda callado, lo injusto gana fuerza; y cada vez que alguien habla, lo justo gana terreno.',
    shortTerm: 'A corto plazo, hablar puede dar nervios, pero callar deja una culpa que dura mÃ¡s.',
    longTerm: 'A largo plazo, las personas que actÃºan con valentÃ­a construyen comunidades donde se puede confiar.',
    affectsPeople: 'A ti: tus decisiones muestran quiÃ©n eres y te dan tranquilidad o culpa.',
    affectsCommunity: 'A tu escuela o barrio: una voz valiente anima a otros a hablar tambiÃ©n.',
    affectsCountry: 'Al paÃ­s: los ciudadanos que no se callan son el mejor freno contra la corrupciÃ³n.',
    identify: [
      { text: 'Ves que le regalan puntos a un equipo y no dices nada â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Callar ante una trampa que beneficia injustamente tambiÃ©n sostiene la corrupciÃ³n.' },
      { text: 'Le cuentas a tu profesora que viste copiar en el examen â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Avisar a un adulto de confianza es actuar con honestidad.' },
      { text: 'Te ofrecen un premio por guardar silencio ante algo injusto â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Comprar tu silencio es una forma de corrupciÃ³n.' },
      { text: 'Defiendes a un compaÃ±ero al que culpan injustamente â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Defender lo justo es lo contrario de la corrupciÃ³n.' },
    ],
    reflectMore: ['Â¿Por quÃ© cuesta mÃ¡s hablar que quedarse callado?', 'Â¿QuÃ© sentirÃ­as si nadie hablara por ti cuando lo necesitas?', 'Â¿A quiÃ©n admiras por haber actuado con valentÃ­a?'],
    trueFalse: [
      { text: 'Quedarse callado ante una injusticia ayuda a que se repita.', answer: true, why: 'El silencio deja que lo injusto continÃºe sin freno.' },
      { text: 'Si no participas en la trampa, no es tu problema.', answer: false, why: 'Mirar a otro lado tambiÃ©n deja que el daÃ±o siga.' },
      { text: 'Contarle a un adulto de confianza es un buen primer paso.', answer: true, why: 'Pedir ayuda es actuar con responsabilidad.' },
      { text: 'Una sola persona no puede cambiar nada.', answer: false, why: 'Una voz valiente anima a muchas mÃ¡s.' },
      { text: 'Pensar antes de actuar lleva a mejores decisiones.', answer: true, why: 'Detenerte y pensar evita arrepentimientos.' },
    ],
    blanks: [
      { before: 'Ante algo injusto, primero me detengo y', answer: 'pienso', after: 'en las consecuencias.' },
      { before: 'Quedarse callado deja que lo injusto', answer: 'continÃºe', after: 'y se repita.' },
      { before: 'Contar lo que vi a un adulto de', answer: 'confianza', after: 'es actuar con valentÃ­a.' },
    ],
    wordBank: ['pienso', 'continÃºe', 'confianza', 'silencio'],
    beyond: ['La transparencia empieza contigo: contar lo que viste con claridad ayuda a que todo se aclare.', 'Rendir cuentas tambiÃ©n es personal: explicar por quÃ© actuaste como actuaste.', 'La Ã©tica te invita a defender lo justo; la ley protege a quien denuncia de buena fe.', 'AcciÃ³n justa: avisar cuando ves trampa. AcciÃ³n injusta: aprovecharte de la trampa ajena.'],
    relatedGuide: 'p6',
  },
  {
    id: 'k5', title: 'PresiÃ³n de grupo', desc: 'Aprende a decir que no cuando te presionan.', icon: 'ðŸ«‚', category: 'Decisiones', core: 'prevention',
    body: ['A veces otras personas intentan convencerte de hacer algo incorrecto para â€œencajarâ€. Eso se llama presiÃ³n de grupo.', 'Decir que no es difÃ­cil, pero es una muestra de fuerza: puedes proponer otra cosa, alejarte o pedir ayuda.'],
    example: 'Tus amigos te presionan para copiar en un examen y te dicen que si no lo haces eres un traidor.',
    art: 'shield',
    summary: 'Decir que no cuando te presionan es una muestra de fuerza, no de debilidad.',
    problems: ['Ceder una vez facilita ceder la prÃ³xima: cada â€œsÃ­â€ hace mÃ¡s difÃ­cil el siguiente â€œnoâ€.', 'Puedes meterte en problemas serios: lo que empieza como juego puede terminar en castigo o daÃ±o real.', 'Pierdes la confianza de quienes te quieren: tu familia y tus verdaderos amigos valoran tu honestidad.'],
    observe: 'Tus amigos insisten en copiar y te dicen traidor si no aceptas.',
    reflectQ: 'Â¿QuÃ© pesa mÃ¡s: quedar bien un momento o tu tranquilidad?',
    finalTask: 'Practica en voz alta una frase para decir que no.',
    scenarioQ: 'Â¿QuÃ© haces si te presionan para hacer algo incorrecto?',
    scenarioOpts: ['Acepto para no quedar mal', 'Digo que no y me alejo o pido ayuda', 'Lo hago solo una vez'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Quedar bien con el grupo no vale un problema mayor.',
      'Exacto: decir que no y buscar apoyo es la respuesta valiente.',
      'â€œSolo una vezâ€ suele ser el inicio de muchas veces.'
    ],
    familyPrompt: 'Hoy aprendÃ­ a enfrentar la presiÃ³n de grupo.',
    familyQuestion: 'Â¿QuÃ© podrÃ­as decir si alguien te presiona a hacer algo malo?',
    deepen: 'Ocurre porque queremos encajar y tememos que se burlen de nosotros. Los grupos que te exigen hacer algo malo no son buenos amigos: un verdadero amigo respeta tu â€œnoâ€.',
    shortTerm: 'A corto plazo, ceder te evita una burla, pero te deja intranquilo y con miedo a que se repita.',
    longTerm: 'A largo plazo, aprender a decir que no te protege de presiones cada vez mÃ¡s peligrosas.',
    affectsPeople: 'A ti: ceder te mete en problemas y te aleja de lo que realmente quieres ser.',
    affectsCommunity: 'A tu grupo: si todos ceden, el grupo entero entra en conductas de riesgo.',
    affectsCountry: 'Al paÃ­s: los jÃ³venes que resisten la presiÃ³n de hoy serÃ¡n los adultos Ã­ntegros de maÃ±ana.',
    identify: [
      { text: 'Tus amigos te dicen traidor si no copias en el examen â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Presionarte para hacer trampa es obligarte a ser deshonesto.' },
      { text: 'Tus amigos respetan que no quieras copiar â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Respetar tu decisiÃ³n es amistad de verdad.' },
      { text: 'Te piden dinero para comprar las respuestas del examen â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Comprar respuestas es trampa y rompe las reglas para todos.' },
      { text: 'Propones estudiar juntos en vez de copiar â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Proponer algo bueno es liderar con el ejemplo.' },
    ],
    reflectMore: ['Â¿QuÃ© pesa mÃ¡s: quedar bien un momento o tu tranquilidad?', 'Â¿CÃ³mo sabes si un grupo de amigos es bueno para ti?', 'Â¿QuÃ© frase firme puedes usar para decir que no?'],
    trueFalse: [
      { text: 'Decir que no cuando te presionan es de valientes.', answer: true, why: 'Resistir la presiÃ³n es una muestra de fuerza.' },
      { text: 'â€œSolo una vezâ€ nunca trae consecuencias.', answer: false, why: 'Una vez suele ser el inicio de muchas veces.' },
      { text: 'Un buen amigo respeta tu decisiÃ³n de no hacer trampa.', answer: true, why: 'La amistad de verdad no exige hacer lo incorrecto.' },
      { text: 'Alejarse y pedir ayuda tambiÃ©n es una buena respuesta.', answer: true, why: 'No tienes que enfrentar la presiÃ³n a solas.' },
      { text: 'Si todo el grupo lo hace, no hay nada malo.', answer: false, why: 'Que muchos lo hagan no lo vuelve correcto.' },
    ],
    blanks: [
      { before: 'Decir que no ante la presiÃ³n es una muestra de', answer: 'fuerza', after: 'y valentÃ­a.' },
      { before: 'â€œSolo una vezâ€ suele ser el inicio de', answer: 'muchas', after: 'veces.' },
      { before: 'Un verdadero amigo respeta tu', answer: 'decisiÃ³n', after: 'de actuar bien.' },
    ],
    wordBank: ['fuerza', 'muchas', 'decisiÃ³n', 'miedo'],
    beyond: ['La transparencia con tus amigos es decir lo que piensas sin miedo: â€œyo no copioâ€.', 'Rendir cuentas es contarle a tu familia cuando te presionan, para que te apoyen.', 'La Ã©tica te dice que tu conciencia vale mÃ¡s que encajar; la ley protege tu derecho a decidir.', 'AcciÃ³n justa: proponer estudiar juntos. AcciÃ³n injusta: copiar para que te acepten.'],
    relatedGuide: 'p7',
  },
  {
    id: 'k6', title: 'Decisiones y consecuencias', desc: 'Tus decisiones pueden afectar a otras personas.', icon: 'âš–ï¸', category: 'Decisiones', core: 'consequences',
    body: ['Cada decisiÃ³n deja una huella: puede ayudar o puede daÃ±ar a quienes te rodean.', 'Antes de decidir, pregÃºntate: Â¿a quiÃ©n afecta esto? Â¿me sentirÃ­a orgulloso si todos lo supieran?'],
    example: 'Aceptar un beneficio injusto puede dejar sin oportunidad a alguien que sÃ­ se lo merecÃ­a.',
    art: 'scale',
    summary: 'Cada decisiÃ³n deja huella: piensa a quiÃ©n afecta antes de elegir.',
    problems: ['Una mala decisiÃ³n puede quitarle algo a otro: un cupo, un premio o una oportunidad que no vuelve.', 'Los efectos duran mÃ¡s de lo que crees: una trampa de hoy puede cerrar puertas maÃ±ana.', 'Tus decisiones hablan de quiÃ©n eres: la gente confÃ­a en ti segÃºn cÃ³mo actÃºas.'],
    observe: 'Alguien acepta un beneficio injusto y otro se queda sin su oportunidad.',
    reflectQ: 'Â¿QuÃ© consecuencias puede tener una decisiÃ³n asÃ­ para los demÃ¡s?',
    finalTask: 'Recuerda una decisiÃ³n tuya y escribe a quiÃ©n afectÃ³.',
    scenarioQ: 'Â¿QuÃ© pregunta te ayuda a decidir bien?',
    scenarioOpts: ['Â¿Me conviene solo a mÃ­?', 'Â¿A quiÃ©n afecta y serÃ­a justo para todos?', 'Â¿Nadie se darÃ¡ cuenta?'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Pensar solo en ti deja fuera a los demÃ¡s.',
      'Exacto: pensar en los demÃ¡s y en lo justo lleva a mejores decisiones.',
      'Que nadie lo vea no lo vuelve correcto.'
    ],
    familyPrompt: 'Hoy aprendÃ­ que mis decisiones afectan a otros.',
    familyQuestion: 'Â¿Recuerdas una decisiÃ³n tuya que haya afectado a alguien?',
    deepen: 'Ocurre porque solemos pensar solo en lo que ganamos nosotros, sin ver a quiÃ©n afecta. Hacerte dos preguntas â€”â€œÂ¿a quiÃ©n afecta?â€ y â€œÂ¿serÃ­a justo para todos?â€â€” cambia por completo tu decisiÃ³n.',
    shortTerm: 'A corto plazo, una mala decisiÃ³n puede darte algo rÃ¡pido, pero deja a alguien triste o enojado.',
    longTerm: 'A largo plazo, tus decisiones forman tu reputaciÃ³n: la gente recuerda si fuiste justo o no.',
    affectsPeople: 'A ti y a otros: cada elecciÃ³n tuya toca la vida de alguien, para bien o para mal.',
    affectsCommunity: 'A tu comunidad: muchas decisiones injustas juntas crean un ambiente de desconfianza.',
    affectsCountry: 'Al paÃ­s: las decisiones de hoy (votar, pagar impuestos, respetar reglas) construyen el paÃ­s de maÃ±ana.',
    identify: [
      { text: 'Aceptas un premio que sabes que ganÃ³ otro compaÃ±ero â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Quedarte con lo ajeno es injusto aunque nadie reclame.' },
      { text: 'Devuelves el premio explicando que no era tuyo â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Reconocer el mÃ©rito ajeno es honestidad.' },
      { text: 'Eliges no copiar aunque eso signifique menor nota â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Elegir lo correcto aunque cueste es integridad.' },
      { text: 'Votas por tu amigo en un concurso aunque otro lo hizo mejor â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Favorecer injustamente quita el premio a quien lo merecÃ­a.' },
    ],
    reflectMore: ['Â¿QuÃ© consecuencias puede tener una decisiÃ³n asÃ­ para los demÃ¡s?', 'Â¿Te sentirÃ­as orgulloso si todos supieran lo que decidiste?', 'Â¿QuÃ© pregunta te ayuda a decidir bien antes de actuar?'],
    trueFalse: [
      { text: 'Cada decisiÃ³n deja una huella en los demÃ¡s.', answer: true, why: 'Lo que eliges toca la vida de otras personas.' },
      { text: 'Si solo me beneficia a mÃ­, igual es buena decisiÃ³n.', answer: false, why: 'Hay que pensar tambiÃ©n en si es justo para todos.' },
      { text: 'Los efectos de una mala decisiÃ³n se olvidan rÃ¡pido.', answer: false, why: 'Pueden durar mucho mÃ¡s de lo que crees.' },
      { text: 'Preguntarte â€œÂ¿a quiÃ©n afecta?â€ ayuda a decidir bien.', answer: true, why: 'Esa pregunta te pone en los zapatos de los demÃ¡s.' },
      { text: 'Tus decisiones muestran quiÃ©n eres.', answer: true, why: 'La confianza se gana con actos justos.' },
    ],
    blanks: [
      { before: 'Antes de decidir, pregÃºntate a quiÃ©n', answer: 'afecta', after: 'tu elecciÃ³n.' },
      { before: 'Una decisiÃ³n injusta puede quitarle algo a', answer: 'otro', after: 'que sÃ­ lo merecÃ­a.' },
      { before: 'Tus decisiones hablan de', answer: 'quiÃ©n', after: 'eres realmente.' },
    ],
    wordBank: ['afecta', 'otro', 'quiÃ©n', 'siempre'],
    beyond: ['La transparencia en tus decisiones es poder explicar por quÃ© elegiste algo sin esconder nada.', 'Rendir cuentas es asumir las consecuencias de lo que decidiste, bueno o malo.', 'La Ã©tica guÃ­a tus decisiones diarias; la ley marca los lÃ­mites que nadie debe cruzar.', 'AcciÃ³n justa: elegir por mÃ©rito. AcciÃ³n injusta: elegir por favoritismo.'],
    relatedGuide: 'p5',
  },
  {
    id: 'k7', title: 'CorrupciÃ³n en la vida cotidiana', desc: 'Ejemplos cercanos y fÃ¡ciles de identificar.', icon: 'ðŸª', category: 'CiudadanÃ­a', core: 'impact',
    body: ['La corrupciÃ³n no solo sale en las noticias: estÃ¡ en favorecer a alguien injustamente o usar una posiciÃ³n para obtener ventajas.', 'Aprender a verla en lo cotidiano te protege: la reconoces antes de que te atrape.'],
    example: 'Un comerciante cobra de mÃ¡s a quien no conoce y le hace â€œprecio especialâ€ solo a sus amigos en un servicio pÃºblico.',
    art: 'hands',
    summary: 'La corrupciÃ³n tambiÃ©n aparece en lo cotidiano: reconocerla te protege.',
    problems: ['Se esconde en favores y â€œprecios especialesâ€: lo cotidiano la disfraza de algo normal.', 'Afecta servicios que usas a diario: el mercado, el transporte, la escuela.', 'Si la ignoras, crece: lo pequeÃ±o de hoy es lo grande de maÃ±ana.'],
    observe: 'En el mercado, a unos les cobran de mÃ¡s por no conocer los precios.',
    reflectQ: 'Â¿QuÃ© situaciones injustas has visto en tu escuela o barrio?',
    finalTask: 'Anota una situaciÃ³n injusta que veas esta semana.',
    scenarioQ: 'Â¿CuÃ¡l de estos es un ejemplo cotidiano de corrupciÃ³n?',
    scenarioOpts: ['Hacer fila y esperar tu turno', 'Usar un cargo para favorecer injustamente a alguien', 'Pedir ayuda con la tarea'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Bien: respetar tu turno es actuar con justicia.',
      'Exacto: usar una posiciÃ³n para dar ventajas injustas es corrupciÃ³n cotidiana.',
      'Pedir ayuda para aprender no es trampa.'
    ],
    familyPrompt: 'Hoy descubrÃ­ la corrupciÃ³n en la vida diaria.',
    familyQuestion: 'Â¿Has visto alguna situaciÃ³n injusta en tu escuela o barrio?',
    deepen: 'Ocurre porque estamos acostumbrados a verla y dejamos de notarla: el â€œprecio especialâ€, el favorcito, la fila que se salta. Nombrarla es el primer paso para frenarla.',
    shortTerm: 'A corto plazo, alguien paga de mÃ¡s o espera mÃ¡s por culpa de un trato injusto.',
    longTerm: 'A largo plazo, lo cotidiano injusto se vuelve sistema: todos pierden un poco cada dÃ­a.',
    affectsPeople: 'A ti: pagas de mÃ¡s, esperas mÃ¡s o recibes peor servicio sin merecerlo.',
    affectsCommunity: 'A tu barrio: los comercios y servicios injustos empobrecen la convivencia.',
    affectsCountry: 'Al paÃ­s: millones de pequeÃ±as injusticias suman un gran daÃ±o nacional.',
    identify: [
      { text: 'En el mercado cobran de mÃ¡s a quien no conoce los precios â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Aprovecharse del desconocimiento para cobrar mÃ¡s es injusto.' },
      { text: 'El vendedor muestra los precios claros para todos â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'La claridad y el trato igual son honestidad.' },
      { text: 'Un chofer cobra lo justo aunque podrÃ­a cobrar mÃ¡s â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Cobrar lo correcto es actuar con justicia.' },
      { text: 'Te cuelan en la fila a cambio de guardarles el puesto despuÃ©s â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Es un intercambio de favores que rompe el orden justo de la fila.' },
    ],
    reflectMore: ['Â¿QuÃ© situaciones injustas has visto en tu escuela o barrio?', 'Â¿Por quÃ© lo cotidiano injusto cuesta mÃ¡s reconocer?', 'Â¿QuÃ© detalle pequeÃ±o podrÃ­as cambiar desde hoy?'],
    trueFalse: [
      { text: 'La corrupciÃ³n solo pasa en las noticias.', answer: false, why: 'TambiÃ©n aparece en el mercado, la escuela y el barrio.' },
      { text: 'Cobrar de mÃ¡s a quien no sabe es una injusticia.', answer: true, why: 'Aprovecharse del otro rompe el trato justo.' },
      { text: 'Si es algo pequeÃ±o, no vale la pena decir nada.', answer: false, why: 'Lo pequeÃ±o de hoy es lo grande de maÃ±ana.' },
      { text: 'Reconocer la corrupciÃ³n cotidiana te protege.', answer: true, why: 'Verla es el primer paso para no caer en ella.' },
      { text: 'Pedir precios claros es un acto de honestidad.', answer: true, why: 'La claridad protege a todos por igual.' },
    ],
    blanks: [
      { before: 'La corrupciÃ³n tambiÃ©n aparece en lo', answer: 'cotidiano', after: 'y hay que saber verla.' },
      { before: 'Cobrar de mÃ¡s a quien no conoce es una', answer: 'injusticia', after: 'que daÃ±a a todos.' },
      { before: 'Si ignoramos lo injusto, con el tiempo', answer: 'crece', after: 'y se vuelve costumbre.' },
    ],
    wordBank: ['cotidiano', 'injusticia', 'crece', 'escuela'],
    beyond: ['La transparencia en lo cotidiano es pedir y dar precios claros, turnos visibles y reglas parejas.', 'Rendir cuentas en casa es explicar en quÃ© se gastÃ³ el dinero del hogar.', 'La Ã©tica diaria estÃ¡ en los detalles: la fila, el vuelto, el trato. La ley castiga cuando esos detalles se vuelven delito.', 'AcciÃ³n justa: cobrar lo mismo a todos. AcciÃ³n injusta: cobrar segÃºn la cara.'],
    relatedGuide: 'p4',
  },
  {
    id: 'k8', title: 'Â¿CÃ³mo puedo actuar correctamente?', desc: 'Acciones concretas de honestidad y ciudadanÃ­a.', icon: 'ðŸŒŸ', category: 'CiudadanÃ­a', core: 'ethics',
    body: ['Actuar bien es un hÃ¡bito: respetar turnos, decir la verdad, devolver lo perdido y tratar a todos con justicia.', 'Cada pequeÃ±a acciÃ³n honesta construye tu reputaciÃ³n y mejora tu comunidad.'],
    example: 'Devuelves el vuelto de mÃ¡s aunque nadie se haya dado cuenta.',
    art: 'shield',
    summary: 'Actuar bien es un hÃ¡bito: pequeÃ±os actos honestos todos los dÃ­as.',
    problems: ['La honestidad se nota aunque nadie mire: tu conciencia siempre sabe lo que hiciste.', 'Tu ejemplo inspira a otros: cuando actÃºas bien, animas a tus amigos a hacerlo.', 'Lo correcto casi siempre es lo mÃ¡s simple: no necesitas excusas ni mentiras.'],
    observe: 'Alguien devuelve el vuelto de mÃ¡s sin que nadie se dÃ© cuenta.',
    reflectQ: 'Â¿Por quÃ© cuesta hacer lo correcto cuando nadie mira?',
    finalTask: 'Haz una acciÃ³n honesta hoy y cuÃ©ntala en familia.',
    scenarioQ: 'Â¿CuÃ¡l es una acciÃ³n correcta?',
    scenarioOpts: ['Quedarme con el vuelto de mÃ¡s', 'Devolver lo que no es mÃ­o y ser justo', 'Aprovechar si nadie mira'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Quedarte con lo ajeno rompe la confianza, aunque nadie lo note.',
      'Exacto: la honestidad se demuestra cuando nadie estÃ¡ mirando.',
      'Que nadie mire no lo vuelve correcto.'
    ],
    familyPrompt: 'Hoy aprendÃ­ acciones para actuar correctamente.',
    familyQuestion: 'Â¿QuÃ© acciÃ³n honesta hiciste esta semana?',
    deepen: 'Ocurre porque la honestidad es como un mÃºsculo: cada vez que la usas se fortalece. Empezar con actos pequeÃ±os â€”devolver el vuelto, decir la verdadâ€” te prepara para decisiones grandes.',
    shortTerm: 'A corto plazo, actuar bien te da tranquilidad inmediata y la confianza de tu familia.',
    longTerm: 'A largo plazo, los hÃ¡bitos honestos construyen tu reputaciÃ³n y te abren puertas toda la vida.',
    affectsPeople: 'A ti: cada acto honesto te hace mÃ¡s fuerte y mÃ¡s libre.',
    affectsCommunity: 'A tu comunidad: un barrio con gente honesta es un lugar donde se puede confiar.',
    affectsCountry: 'Al paÃ­s: millones de actos honestos diarios sostienen la convivencia de todos.',
    identify: [
      { text: 'Devuelves el vuelto de mÃ¡s aunque nadie lo notÃ³ â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Es honestidad: devuelves lo que no es tuyo.' },
      { text: 'Te quedas con el vuelto de mÃ¡s porque nadie mira â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Quedarte con lo ajeno rompe la confianza.' },
      { text: 'Dices la verdad aunque te cueste un castigo â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'La verdad aunque duela es integridad.' },
      { text: 'Encuentras dinero perdido y lo gastas sin buscar al dueÃ±o â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Usar lo ajeno sin intentar devolverlo es injusto.' },
    ],
    reflectMore: ['Â¿Por quÃ© cuesta hacer lo correcto cuando nadie mira?', 'Â¿QuÃ© acto honesto pequeÃ±o puedes hacer hoy?', 'Â¿A quiÃ©n admiras por su honestidad y por quÃ©?'],
    trueFalse: [
      { text: 'Devolver lo que no es tuyo es honestidad.', answer: true, why: 'Lo ajeno se devuelve, se mire o no.' },
      { text: 'Si nadie se da cuenta, quedarse con algo ajeno estÃ¡ bien.', answer: false, why: 'Tu conciencia sÃ­ se da cuenta siempre.' },
      { text: 'Los actos honestos pequeÃ±os tambiÃ©n cuentan.', answer: true, why: 'La honestidad se entrena todos los dÃ­as.' },
      { text: 'Ser honesto te hace perder siempre.', answer: false, why: 'Te da confianza, reputaciÃ³n y tranquilidad.' },
      { text: 'Tu ejemplo puede inspirar a otros a actuar bien.', answer: true, why: 'Lo bueno tambiÃ©n se contagia.' },
    ],
    blanks: [
      { before: 'Actuar bien es un', answer: 'hÃ¡bito', after: 'que se entrena cada dÃ­a.' },
      { before: 'La honestidad se demuestra cuando nadie estÃ¡', answer: 'mirando', after: 'y aun asÃ­ eliges bien.' },
      { before: 'Devolver lo que no es', answer: 'mÃ­o', after: 'es actuar con justicia.' },
    ],
    wordBank: ['hÃ¡bito', 'mirando', 'mÃ­o', 'siempre'],
    beyond: ['La transparencia personal es no tener nada que esconder: tus actos resisten cualquier mirada.', 'Rendir cuentas es reconocer tus errores y corregirlos sin que te obliguen.', 'La Ã©tica diaria y la ley apuntan al mismo lugar: respetar lo ajeno y decir la verdad.', 'AcciÃ³n justa: devolver el vuelto de mÃ¡s. AcciÃ³n injusta: gastarlo en silencio.'],
    relatedGuide: 'p5',
  },
  {
    id: 'k9', title: 'Mitos sobre las coimas', desc: 'Descubre si estas afirmaciones son verdaderas o falsas.', icon: 'â“', category: 'Actividades', core: 'prevention',
    body: ['Mito 1: â€œuna coima pequeÃ±a no hace daÃ±oâ€ â†’ Falso: toda coima rompe reglas y quita recursos a todos.', 'Mito 2: â€œsi nadie se entera no pasa nadaâ€ â†’ Falso: el daÃ±o existe aunque nadie lo vea.', 'Mito 3: â€œasÃ­ funcionan las cosasâ€ â†’ Falso: las cosas funcionan mejor con honestidad.'],
    example: 'Decir â€œes solo un poquitoâ€ no lo vuelve correcto.',
    art: 'chat',
    summary: 'Muchas frases sobre coimas son mitos: aquÃ­ descubres la verdad.',
    problems: ['â€œEs solo un poquitoâ€ no lo vuelve correcto: el tamaÃ±o no cambia que sea trampa.', 'â€œNadie se enteraâ€ no evita el daÃ±o: alguien pierde aunque nadie lo vea.', 'â€œAsÃ­ son las cosasâ€ se puede cambiar: cada persona honesta rompe esa idea.'],
    observe: 'Escuchas decir: â€œes solo un poquito, no hace daÃ±oâ€.',
    reflectQ: 'Â¿Un daÃ±o pequeÃ±o deja de ser daÃ±o?',
    finalTask: 'Explica a alguien por quÃ© â€œun poquitoâ€ tambiÃ©n cuenta.',
    scenarioQ: 'â€œPagar una coima pequeÃ±a no hace daÃ±o a nadie.â€ Â¿Verdadero o falso?',
    scenarioOpts: ['Verdadero', 'Falso'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Aunque sea pequeÃ±a, rompe reglas y quita recursos a todos.',
      'Exacto: toda coima hace daÃ±o y rompe la confianza.'
    ],
    familyPrompt: 'Hoy descubrÃ­ los mitos de las coimas.',
    familyQuestion: 'Â¿QuÃ© frase has escuchado que normalice las coimas?',
    deepen: 'Ocurren porque las frases hechas suenan a verdad cuando se repiten mucho. Pero cada mito se cae con una pregunta simple: â€œÂ¿serÃ­a justo si me lo hicieran a mÃ­?â€.',
    shortTerm: 'A corto plazo, creer un mito te hace justificar trampas pequeÃ±as sin culpa.',
    longTerm: 'A largo plazo, vivir de mitos normaliza la corrupciÃ³n en todo un paÃ­s.',
    affectsPeople: 'A ti: los mitos te engaÃ±an para aceptar lo inaceptable.',
    affectsCommunity: 'A tu comunidad: cuando todos repiten el mito, nadie frena la trampa.',
    affectsCountry: 'Al paÃ­s: los mitos son el escudo favorito de la corrupciÃ³n.',
    identify: [
      { text: 'â€œEs solo un poquito, no hace daÃ±oâ€ â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Es el mito mÃ¡s comÃºn: lo pequeÃ±o tambiÃ©n rompe reglas.' },
      { text: 'â€œLa honestidad siempre es lo mejorâ€ â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Es verdad: actuar bien protege a todos.' },
      { text: 'â€œSi nadie se entera no pasa nadaâ€ â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Otro mito: el daÃ±o existe aunque nadie lo vea.' },
      { text: 'â€œPagar coimas es la Ãºnica forma de avanzarâ€ â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'Mito peligroso: se avanza mejor con mÃ©rito y honestidad.' },
    ],
    reflectMore: ['Â¿Un daÃ±o pequeÃ±o deja de ser daÃ±o?', 'Â¿QuÃ© frases has escuchado que normalicen las coimas?', 'Â¿CÃ³mo responderÃ­as a alguien que dice â€œasÃ­ son las cosasâ€?'],
    trueFalse: [
      { text: 'â€œUna coima pequeÃ±a no hace daÃ±oâ€ es un mito.', answer: true, why: 'Toda coima rompe reglas y quita recursos.' },
      { text: 'â€œSi nadie se entera no pasa nadaâ€ es verdad.', answer: false, why: 'El daÃ±o existe aunque nadie lo vea.' },
      { text: 'â€œAsÃ­ funcionan las cosasâ€ se puede cambiar.', answer: true, why: 'Cada persona honesta rompe esa idea.' },
      { text: 'Preguntarte â€œÂ¿serÃ­a justo si me lo hicieran a mÃ­?â€ desenmascara mitos.', answer: true, why: 'Ponerte en el lugar del otro revela la injusticia.' },
      { text: 'Repetir una frase muchas veces la vuelve verdad.', answer: false, why: 'La repeticiÃ³n no convierte lo falso en verdadero.' },
    ],
    blanks: [
      { before: 'â€œEs solo un poquitoâ€ es un', answer: 'mito', after: 'que esconde una trampa.' },
      { before: 'Aunque nadie se entere, el', answer: 'daÃ±o', after: 'sÃ­ existe.' },
      { before: 'Cada persona honesta ayuda a', answer: 'cambiar', after: 'las cosas.' },
    ],
    wordBank: ['mito', 'daÃ±o', 'cambiar', 'verdad'],
    beyond: ['La transparencia desarma mitos: cuando todo se ve claro, las excusas se caen.', 'Rendir cuentas es demostrar con hechos que no necesitas trampas ni mitos.', 'La Ã©tica piensa por sÃ­ misma; la ley castiga aunque â€œtodos lo haganâ€.', 'AcciÃ³n justa: cuestionar las frases hechas. AcciÃ³n injusta: repetirlas para justificar trampas.'],
    relatedGuide: 'p8',
  },
  {
    id: 'k10', title: 'Reto familiar', desc: 'Actividad para hacer junto a tu familia.', icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', category: 'Familia', core: 'citizen', joint: true,
    body: ['Este reto se hace en equipo: elige a tu padre, madre o tutor y conversen juntos.', 'Lean la situaciÃ³n, den su opiniÃ³n cada uno y escriban su compromiso familiar contra las coimas.'],
    example: 'Compromiso: â€œEn nuestra familia hablamos con la verdad y no aceptamos atajos injustosâ€.',
    art: 'chat',
    summary: 'Un reto para hacer en equipo con tu familia y conversar de verdad.',
    problems: ['Conversar une a la familia: hablar de lo difÃ­cil acerca a las personas.', 'Un compromiso escrito se cumple mejor: lo que se firma se recuerda y se respeta.', 'Aprender juntos es mÃ¡s divertido: en equipo todo se entiende mejor.'],
    observe: 'Tu familia conversa sobre un problema del barrio.',
    reflectQ: 'Â¿QuÃ© compromiso puede asumir tu familia?',
    finalTask: 'Escriban juntos su compromiso familiar y pÃ©guenlo en un lugar visible.',
    scenarioQ: 'Â¿Ya conversaron y escribieron su compromiso familiar?',
    scenarioOpts: ['TodavÃ­a no', 'Â¡SÃ­, lo hicimos juntos!'], scenarioCorrect: 1,
    scenarioFeedback: [
      'Cuando estÃ©n listos, conversen y escrÃ­banlo juntos.',
      'Â¡Felicidades! Conversar en familia ya es un gran paso.'
    ],
    familyPrompt: 'Hoy hicimos el reto familiar juntos.',
    familyQuestion: 'Â¿CuÃ¡l es el compromiso de nuestra familia?',
    deepen: 'Ocurre porque en familia se aprenden los valores mÃ¡s importantes: lo que conversan y acuerdan juntos se vuelve regla del hogar. Un compromiso familiar es como una pequeÃ±a ley hecha con amor.',
    shortTerm: 'A corto plazo, conversar une y deja acuerdos claros para la semana.',
    longTerm: 'A largo plazo, las familias que conversan forman personas Ã­ntegras toda la vida.',
    affectsPeople: 'A ti: sentir el apoyo de tu familia te da fuerza para decir que no.',
    affectsCommunity: 'A tu comunidad: familias unidas crean barrios mÃ¡s justos.',
    affectsCountry: 'Al paÃ­s: los valores se aprenden en casa antes que en la escuela.',
    identify: [
      { text: 'En casa acuerdan decir siempre la verdad â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Es un compromiso de honestidad familiar.' },
      { text: 'La familia paga para evitar una multa justa â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'En familia tampoco se justifican las trampas.' },
      { text: 'Padres e hijos conversan sobre un problema del barrio â†’ Â¿es corrupciÃ³n?', isCorruption: false, why: 'Conversar y buscar soluciones justas es ciudadanÃ­a.' },
      { text: 'Toda la familia guarda silencio ante una injusticia del vecino â†’ Â¿es corrupciÃ³n?', isCorruption: true, why: 'El silencio familiar tambiÃ©n deja que lo injusto siga.' },
    ],
    reflectMore: ['Â¿QuÃ© compromiso puede asumir tu familia?', 'Â¿Por quÃ© un compromiso escrito se cumple mejor?', 'Â¿CÃ³mo puede tu familia ayudar al barrio a ser mÃ¡s justo?'],
    trueFalse: [
      { text: 'Conversar en familia une y protege contra las trampas.', answer: true, why: 'Hablar de lo difÃ­cil acerca y fortalece.' },
      { text: 'Un compromiso escrito se recuerda y se respeta mÃ¡s.', answer: true, why: 'Lo firmado queda como acuerdo visible.' },
      { text: 'Los valores se aprenden primero en casa.', answer: true, why: 'La familia es la primera escuela.' },
      { text: 'En familia sÃ­ se justifican las trampas pequeÃ±as.', answer: false, why: 'La honestidad empieza en casa, sin excepciones.' },
      { text: 'Aprender juntos es mÃ¡s divertido y efectivo.', answer: true, why: 'En equipo todo se entiende mejor.' },
    ],
    blanks: [
      { before: 'En nuestra familia hablamos con la', answer: 'verdad', after: 'y no aceptamos atajos injustos.' },
      { before: 'Un compromiso escrito se cumple', answer: 'mejor', after: 'porque se recuerda.' },
      { before: 'Conversar en familia nos hace mÃ¡s', answer: 'fuertes', after: 'ante las trampas.' },
    ],
    wordBank: ['verdad', 'mejor', 'fuertes', 'unidos'],
    beyond: ['La transparencia en casa es hablar claro del dinero y las decisiones familiares.', 'Rendir cuentas en familia es cumplir lo que se promete a los demÃ¡s miembros.', 'La Ã©tica del hogar y las leyes del paÃ­s apuntan a lo mismo: respeto y justicia.', 'AcciÃ³n justa: firmar juntos un compromiso. AcciÃ³n injusta: pactar guardar silencio.'],
    relatedGuide: 'p10',
  },
]

// Biblioteca de guÃ­as para padres y tutores
interface ParentGuide {
  id: string
  title: string
  desc: string
  icon: string
  category: string
  body: string[]
  questions: string[]
  tip: string
  relatedKid: string
  joint?: boolean
}

const PARENT_GUIDES: ParentGuide[] = [
  {
    id: 'p1', title: 'Comprender la corrupciÃ³n', desc: 'Conceptos bÃ¡sicos para conversar con adolescentes.', icon: 'ðŸ›ï¸', category: 'CorrupciÃ³n',
    body: ['La corrupciÃ³n es el uso indebido del poder para obtener beneficios injustos.', 'Para conversarlo con tu hijo, usa ejemplos cercanos: la escuela, el barrio, los servicios que usan a diario.', 'Evita definiciones frÃ­as: lo que queda son las historias y los ejemplos.'],
    questions: ['Â¿QuÃ© entiendes tÃº por corrupciÃ³n?', 'Â¿DÃ³nde crees que puede aparecer?', 'Â¿Por quÃ© nos afecta a todos?'],
    tip: 'Empieza con una pregunta, no con un sermÃ³n: la curiosidad abre la conversaciÃ³n.',
    relatedKid: 'k1',
  },
  {
    id: 'p2', title: 'CÃ³mo explicar quÃ© es una coima', desc: 'GuÃ­a sencilla sin generar confusiÃ³n.', icon: 'ðŸ’°', category: 'Coimas',
    body: ['Una coima es ofrecer o aceptar algo de valor para conseguir un beneficio indebido.', 'ExplÃ­calo con un ejemplo concreto: saltarse una fila pagando, o ganar algo sin merecerlo.', 'Aclara que no importa el monto: pequeÃ±a o grande, sigue siendo coima.'],
    questions: ['Â¿Por quÃ© crees que una coima afecta a otras personas?', 'Â¿QuÃ© diferencia hay entre un regalo y una coima?', 'Â¿QuÃ© harÃ­as si te la ofrecen?'],
    tip: 'Usa el ejemplo de la fila: todos entienden lo injusto de saltÃ¡rsela pagando.',
    relatedKid: 'k2',
  },
  {
    id: 'p3', title: 'CÃ³mo conversar sobre corrupciÃ³n', desc: 'Preguntas y estrategias para iniciar el diÃ¡logo.', icon: 'ðŸ’¬', category: 'Familia',
    body: ['Elige un momento tranquilo, sin pantallas de por medio.', 'Haz preguntas abiertas: las que empiezan con â€œquÃ©â€, â€œcÃ³moâ€ o â€œpor quÃ©â€.', 'Valida sus opiniones antes de corregir: â€œquÃ© interesante, cuÃ©ntame mÃ¡sâ€.'],
    questions: ['Â¿QuÃ© harÃ­as tÃº en esa situaciÃ³n?', 'Â¿CÃ³mo te sentirÃ­as si fueras la persona afectada?', 'Â¿QuÃ© valores estÃ¡n en juego aquÃ­?'],
    tip: 'Escucha el 80% del tiempo y habla el 20%: tu hijo debe ser el protagonista.',
    relatedKid: 'k4',
  },
  {
    id: 'p4', title: 'EnseÃ±ar con situaciones cotidianas', desc: 'Usa la vida diaria para generar reflexiÃ³n.', icon: 'ðŸª', category: 'CiudadanÃ­a',
    body: ['Las noticias, la escuela y el barrio estÃ¡n llenos de ejemplos para conversar.', 'Cuando vean algo injusto juntos, pregÃºntale quÃ© ve y quÃ© harÃ­a.', 'Conecta cada ejemplo con un valor: justicia, respeto, honestidad.'],
    questions: ['Â¿QuÃ© viste y por quÃ© te pareciÃ³ injusto?', 'Â¿QuiÃ©n sale afectado?', 'Â¿CÃ³mo se podrÃ­a haber hecho bien?'],
    tip: 'Lleva un â€œdiario de situacionesâ€: anoten juntos un ejemplo por semana.',
    relatedKid: 'k7',
  },
  {
    id: 'p5', title: 'Valores y toma de decisiones', desc: 'Responsabilidad, honestidad, respeto y justicia.', icon: 'ðŸŒŸ', category: 'Decisiones',
    body: ['Los valores se enseÃ±an con el ejemplo mÃ¡s que con palabras.', 'Narra tus propias decisiones honestas del dÃ­a en voz alta.', 'Celebra cuando tu hijo elija bien, sobre todo si le costÃ³.'],
    questions: ['Â¿QuÃ© valor usaste hoy?', 'Â¿QuÃ© fue lo mÃ¡s difÃ­cil de decidir bien?', 'Â¿De quÃ© decisiÃ³n te sientes orgulloso?'],
    tip: 'Refuerza el esfuerzo, no solo el resultado: â€œme gusta cÃ³mo lo pensasteâ€.',
    relatedKid: 'k6',
  },
  {
    id: 'p6', title: 'Â¿QuÃ© harÃ­as en esta situaciÃ³n?', desc: 'Casos familiares para analizar juntos.', icon: 'ðŸ§­', category: 'Decisiones',
    body: ['Presenta un caso corto y pidan su opiniÃ³n antes de dar la tuya.', 'Analicen juntos: quÃ© pasa, dÃ³nde estÃ¡ el problema y quÃ© decisiÃ³n serÃ­a responsable.', 'Cierren con un compromiso concreto para situaciones parecidas.'],
    questions: ['Â¿QuÃ© estÃ¡ pasando aquÃ­?', 'Â¿DÃ³nde estÃ¡ el problema?', 'Â¿QuÃ© decisiÃ³n tomarÃ­amos como familia?'],
    tip: 'No hay una sola respuesta: lo valioso es el razonamiento que construyen juntos.',
    relatedKid: 'k4',
  },
  {
    id: 'p7', title: 'CÃ³mo responder preguntas difÃ­ciles', desc: 'OrientaciÃ³n ante dudas sobre corrupciÃ³n.', icon: 'â“', category: 'Coimas',
    body: ['Si no sabes la respuesta, dilo: â€œaverigÃ¼Ã©moslo juntosâ€ tambiÃ©n enseÃ±a.', 'Responde con otra pregunta para conocer quÃ© piensa primero.', 'Si el tema es delicado, valida su emociÃ³n antes de explicar.'],
    questions: ['Â¿QuÃ© te preocupa de eso que preguntas?', 'Â¿QuÃ© crees tÃº que deberÃ­amos hacer?', 'Â¿A quiÃ©n mÃ¡s le podrÃ­amos preguntar?'],
    tip: 'Nunca te burles de una pregunta: cada duda es una puerta para conversar.',
    relatedKid: 'k3',
  },
  {
    id: 'p8', title: 'Evitar normalizar las coimas', desc: 'Por quÃ© â€œasÃ­ funcionan las cosasâ€ hace daÃ±o.', icon: 'ðŸš«', category: 'CorrupciÃ³n',
    body: ['Frases como â€œasÃ­ funcionan las cosasâ€ enseÃ±an a rendirse ante lo injusto.', 'Cuando escuches esa frase, pregÃºntale si le gustarÃ­a vivir en un lugar donde todo funcione asÃ­.', 'MuÃ©strale ejemplos donde la honestidad sÃ­ funcionÃ³.'],
    questions: ['Â¿QuÃ© pasa si todos pensamos â€œasÃ­ son las cosasâ€?', 'Â¿Conoces a alguien que haya actuado bien aunque costara?', 'Â¿CÃ³mo serÃ­a nuestro barrio si nadie hiciera trampa?'],
    tip: 'Cambia el â€œasÃ­ son las cosasâ€ por â€œÂ¿y si lo hacemos bien?â€.',
    relatedKid: 'k9',
  },
  {
    id: 'p9', title: 'AcompaÃ±amiento familiar', desc: 'Convierte el aprendizaje en conversaciÃ³n.', icon: 'ðŸ¤', category: 'Familia',
    body: ['AcompaÃ±ar es estar presente: pregunta quÃ© aprendiÃ³ y pide que te enseÃ±e.', 'Convierte cada tema en un ritual corto: 10 minutos de conversaciÃ³n despuÃ©s de aprender.', 'Registra los avances juntos revisando las insignias.'],
    questions: ['Â¿QuÃ© fue lo que mÃ¡s te sorprendiÃ³?', 'Â¿Me enseÃ±as lo que aprendiste?', 'Â¿QuÃ© conversamos la prÃ³xima vez?'],
    tip: 'Que tu hijo te enseÃ±e a ti: enseÃ±ar es la mejor forma de aprender.',
    relatedKid: 'k10',
    joint: true,
  },
  {
    id: 'p10', title: 'Actividades para realizar en familia', desc: 'DinÃ¡micas cortas para padres e hijos.', icon: 'ðŸŽ²', category: 'Actividades',
    body: ['Elijan una situaciÃ³n injusta y represÃ©ntenla: cada uno defiende un rol distinto.', 'Escriban su compromiso familiar y pÃ©guenlo en un lugar visible.', 'Cierren con algo positivo: Â¿quÃ© hicieron bien hoy como familia?'],
    questions: ['Â¿QuÃ© rol te tocÃ³ y cÃ³mo te sentiste?', 'Â¿CuÃ¡l es nuestro compromiso familiar?', 'Â¿QuÃ© repetimos la prÃ³xima semana?'],
    tip: '15 minutos bastan: la constancia vale mÃ¡s que la duraciÃ³n.',
    relatedKid: 'k10',
    joint: true,
  },
]

// Ilustraciones vectoriales para los temas (mismo estilo plano en toda la app)
const KID_ART: Record<string, ReactNode> = {
  scale: (
    <svg role="img" aria-label="IlustraciÃ³n de una balanza de justicia" viewBox="0 0 200 150" className="w-full max-w-[260px] h-auto">
      <ellipse cx="100" cy="132" rx="62" ry="10" fill="#DBEAFE" />
      <rect x="96" y="30" width="8" height="96" rx="4" fill="#166534" />
      <rect x="88" y="122" width="24" height="8" rx="4" fill="#166534" />
      <rect x="30" y="44" width="140" height="8" rx="4" fill="#166534" />
      <path d="M100 22l8-12 8 12-8 5-8-5Z" fill="#166534" />
      <line x1="45" y1="52" x2="32" y2="88" stroke="#166534" strokeWidth="3" />
      <line x1="45" y1="52" x2="58" y2="88" stroke="#166534" strokeWidth="3" />
      <path d="M22 88a18 12 0 0 0 36 0Z" fill="#F59E0B" />
      <line x1="155" y1="52" x2="142" y2="88" stroke="#166534" strokeWidth="3" />
      <line x1="155" y1="52" x2="168" y2="88" stroke="#166534" strokeWidth="3" />
      <path d="M132 88a18 12 0 0 0 36 0Z" fill="#F59E0B" />
      <circle cx="168" cy="30" r="4" fill="#10B981" />
      <circle cx="30" cy="110" r="4" fill="#7C3AED" />
    </svg>
  ),
  paths: (
    <svg role="img" aria-label="IlustraciÃ³n de una persona frente a dos caminos" viewBox="0 0 200 150" className="w-full max-w-[260px] h-auto">
      <ellipse cx="100" cy="132" rx="70" ry="10" fill="#DBEAFE" />
      <path d="M100 128C80 110 50 104 30 108" stroke="#93C5FD" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M100 128c20-18 50-24 70-20" stroke="#166534" strokeWidth="10" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="72" r="16" fill="#FCD9B8" />
      <path d="M84 70a16 16 0 0 1 32 0Z" fill="#1F2937" />
      <rect x="86" y="90" width="28" height="34" rx="10" fill="#2563EB" />
      <path d="M168 46l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="#F59E0B" />
      <circle cx="38" cy="52" r="4" fill="#7C3AED" />
    </svg>
  ),
  hands: (
    <svg role="img" aria-label="IlustraciÃ³n de una mano rechazando un sobre de dinero" viewBox="0 0 200 150" className="w-full max-w-[260px] h-auto">
      <ellipse cx="100" cy="130" rx="66" ry="10" fill="#DBEAFE" />
      <rect x="62" y="52" width="76" height="52" rx="8" fill="#FFFFFF" stroke="#166534" strokeWidth="4" />
      <path d="M62 60l38 24 38-24" fill="none" stroke="#166534" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="86" y="70" width="28" height="16" rx="3" fill="#F59E0B" />
      <circle cx="100" cy="78" r="34" fill="none" stroke="#EF4444" strokeWidth="7" />
      <path d="M76 54l48 48" stroke="#EF4444" strokeWidth="7" strokeLinecap="round" />
      <path d="M162 40l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="#10B981" />
    </svg>
  ),
  shield: (
    <svg role="img" aria-label="IlustraciÃ³n de un escudo de protecciÃ³n" viewBox="0 0 200 150" className="w-full max-w-[260px] h-auto">
      <ellipse cx="100" cy="130" rx="60" ry="10" fill="#DBEAFE" />
      <path d="M100 22l44 16v34c0 30-19 50-44 60-25-10-44-30-44-60V38l44-16Z" fill="#10B981" />
      <path d="M100 34l33 12v26c0 22-14 37-33 45-19-8-33-23-33-45V46l33-12Z" fill="#FFFFFF" />
      <path d="M88 76l9 9 17-18" fill="none" stroke="#166534" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="44" r="4" fill="#F59E0B" />
      <circle cx="40" cy="60" r="4" fill="#7C3AED" />
    </svg>
  ),
  chat: (
    <svg role="img" aria-label="IlustraciÃ³n de dos personas conversando" viewBox="0 0 200 150" className="w-full max-w-[260px] h-auto">
      <ellipse cx="100" cy="132" rx="70" ry="10" fill="#DBEAFE" />
      <circle cx="72" cy="70" r="18" fill="#FCD9B8" />
      <rect x="52" y="90" width="40" height="38" rx="13" fill="#2563EB" />
      <circle cx="130" cy="66" r="18" fill="#F1C27D" />
      <rect x="110" y="86" width="40" height="42" rx="13" fill="#7C3AED" />
      <rect x="86" y="18" width="52" height="30" rx="10" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="3" />
      <circle cx="104" cy="33" r="3" fill="#2563EB" />
      <circle cx="114" cy="33" r="3" fill="#7C3AED" />
      <circle cx="124" cy="33" r="3" fill="#10B981" />
      <path d="M162 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="#F59E0B" />
    </svg>
  ),
}

// Datos de preguntas para la secciÃ³n Conversemos
const conversationPrompts: ConversationPrompt[] = [
  { id: '1', type: 'closed', question: 'Â¿QuÃ© es una coima?', kidQuestion: 'Â¿QuÃ© es una coima segÃºn tÃº?', parentQuestion: 'Â¿QuÃ© es una coima para un adulto?', kidOptions: ['Es dinero que se da por trabajo', 'Es dinero o favor injusto por un beneficio', 'Es un regalo bonito', 'Es un salario mÃ¡s alto'], parentOptions: ['Es un pago por servicio', 'Es un soborno por ventaja injusta', 'Es una propina normal', 'Es una tarifa oficial'], asked: false },
  { id: '2', type: 'closed', question: 'Â¿CÃ³mo reconoces una coima?', kidQuestion: 'Â¿QuÃ© seÃ±al te dice que estÃ¡n pidiendo una coima?', parentQuestion: 'Â¿QuÃ© te dice un adulto que estÃ¡n pidiendo una coima?', kidOptions: ['Te piden dinero para trabajar', 'Te ofrecen ayuda sin pedir nada', 'Te dan un regalo sorpresa', 'Te invitan a comer'], parentOptions: ['Te exigen pago para agilizar un trÃ¡mite', 'Te piden un favor sin condiciones', 'Te regalan algo genuinamente', 'Te invitan a una comida social'], asked: false },
  { id: '3', type: 'open', question: 'Â¿QuÃ© harÃ­as si alguien te pide una coima?', kidQuestion: 'Si un adulto te pide dinero para resolver algo rÃ¡pido, Â¿quÃ© harÃ­as?', parentQuestion: 'Si un funcionario te pide un "extra" para agilizar un trÃ¡mite, Â¿quÃ© harÃ­as?', asked: false },
  { id: '4', type: 'closed', question: 'Â¿QuÃ© le pasa a la familia cuando hay coimas?', kidQuestion: 'Â¿QuÃ© sentirÃ­a tu familia si alguien les pide una coima?', parentQuestion: 'Â¿QuÃ© sentirÃ­a la familia de un adulto ante una coima?', kidOptions: ['Triste y enojada', 'Feliz porque se resuelve', 'Indiferente', 'Contenta porque ahorra dinero'], parentOptions: ['Frustrada e injusta', 'Agradecida porque se resolviÃ³', 'Sin opiniÃ³n', 'Contenta porque ahorrÃ³ tiempo'], asked: false },
  { id: '5', type: 'open', question: 'Â¿CÃ³mo podemos prevenir las coimas en nuestra familia?', kidQuestion: 'Â¿QuÃ© regla podemos poner en casa para evitar coimas?', parentQuestion: 'Â¿QuÃ© acuerdo familiar pueden hacer todos sobre las coimas?', asked: false },
]

// Preguntas para la actividad familiar - pool de â‰¥20 preguntas organizadas por tipo
const familyActivityQuestions = [
  // COMPRENDEMOS - usando familyQuestion de los kid topics
  { id: 'f1', text: 'Â¿QuÃ© aprendiste en esta actividad?', type: 'comprendemos', category: 'kids', asked: false, answered: false },
  { id: 'f2', text: 'Â¿QuÃ© significa actuar con integridad?', type: 'comprendemos', category: 'kids', asked: false, answered: false },
  { id: 'f3', text: 'Â¿QuÃ© aprendiste hoy y cÃ³mo puedes aplicarlo en casa?', type: 'comprendemos', category: 'kids', asked: false, answered: false },
  // RELACIONAMOS - usando familyQuestion de kids topics
  { id: 'f4', text: 'Â¿Te ha ocurrido algo parecido?', type: 'relaciona', category: 'kids', asked: false, answered: false },
  { id: 'f5', text: 'Â¿CÃ³mo te sentirÃ­as en esa situaciÃ³n?', type: 'relaciona', category: 'kids', asked: false, answered: false },
  { id: 'f6', text: 'Â¿Has vivido una situaciÃ³n como esta en la escuela?', type: 'relaciona', category: 'kids', asked: false, answered: false },
  // ACTUAMOS - usando questions de parent guides
  { id: 'f7', text: 'Â¿QuÃ© podrÃ­amos hacer como familia?', type: 'actuamos', category: 'parents', asked: false, answered: false },
  { id: 'f8', text: 'Â¿QuÃ© regla nos ayuda a convivir mejor?', type: 'actuamos', category: 'parents', asked: false, answered: false },
  { id: 'f9', text: 'Â¿QuÃ© acciÃ³n harÃ­amos para corregir esto?', type: 'actuamos', category: 'parents', asked: false, answered: false },
  // Additional questions from conversation prompts
  { id: 'f10', text: 'Â¿Por quÃ© es importante respetar las reglas?', type: 'comprendemos', category: 'conversation', asked: false, answered: false },
  { id: 'f11', text: 'Â¿QuÃ© harÃ­as si alguien te pidiera participar en algo que sabes que estÃ¡ mal?', type: 'comprendemos', category: 'conversation', asked: false, answered: false },
  { id: 'f12', text: 'Â¿QuiÃ©nes pueden verse afectados por una coima?', type: 'relaciona', category: 'conversation', asked: false, answered: false },
  { id: 'f13', text: 'Â¿Por quÃ© crees que algunas personas ofrecen coimas?', type: 'relaciona', category: 'conversation', asked: false, answered: false },
  { id: 'f14', text: 'Â¿QuÃ© entiendes por coima?', type: 'comprendemos', category: 'conversation', asked: false, answered: false },
  // More questions from parent guides (using their questions array)
  { id: 'f15', text: 'Â¿CÃ³mo iniciarÃ­amos esta conversaciÃ³n en casa?', type: 'actuamos', category: 'parents', asked: false, answered: false },
  { id: 'f16', text: 'Â¿QuÃ© escucharÃ­amos mÃ¡s importante en la respuesta de nuestros hijos?', type: 'actuamos', category: 'parents', asked: false, answered: false },
  { id: 'f17', text: 'Â¿QuÃ© valor familiar se reforzarÃ­a con esta actividad?', type: 'actuamos', category: 'parents', asked: false, answered: false },
  { id: 'f18', text: 'Â¿CÃ³mo celebrarÃ­amos haber completado la actividad?', type: 'comprendemos', category: 'parents', asked: false, answered: false },
  { id: 'f19', text: 'Â¿A quÃ© hora del dÃ­a serÃ­a mejor para conversar en familia?', type: 'relaciona', category: 'familia', asked: false, answered: false },
  { id: 'f20', text: 'Â¿QuÃ© aprendimos juntos y cÃ³mo lo recordaremos?', type: 'comprendemos', category: 'familia', asked: false, answered: false },
]

const initialStudentProfile = getStoredStudentProfile()
const initialFamilyProfile = getStoredFamilyProfile()

// Mascota Duli â€” bÃºho guÃ­a de la Academia de Integridad
function DuliMascot({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 210" className={`${className} duli-float`} role="img" aria-label="Duli, el bÃºho de la academia" xmlns="http://www.w3.org/2000/svg">
      <g className="duli-breathe">
      {/* patas */}
      <ellipse cx="76" cy="199" rx="18" ry="8" fill="#FF9600" />
      <ellipse cx="124" cy="199" rx="18" ry="8" fill="#FF9600" />
      <path d="M68 201 v5 M76 203 v5 M84 201 v5 M116 201 v5 M124 203 v5 M132 201 v5" stroke="#E58500" strokeWidth="3" strokeLinecap="round" />
      {/* penachos */}
      <path d="M62 52 L50 14 L88 38 Z" fill="#46A302" />
      <path d="M138 52 L150 14 L112 38 Z" fill="#46A302" />
      {/* cuerpo */}
      <path d="M100 26 C150 26 178 70 178 118 C178 166 144 200 100 200 C56 200 22 166 22 118 C22 70 50 26 100 26 Z" fill="#58CC02" />
      {/* panza */}
      <ellipse cx="100" cy="150" rx="44" ry="38" fill="#F0FCD9" />
      {/* alas */}
      <path d="M34 112 Q16 152 40 186 Q58 172 56 136 Q54 116 44 108 Q38 104 34 112 Z" fill="#46A302" />
      <path className="duli-wing" d="M166 112 Q184 152 160 186 Q142 172 144 136 Q146 116 156 108 Q162 104 166 112 Z" fill="#46A302" />
      {/* mejillas */}
      <circle cx="46" cy="130" r="9" fill="#FF8F85" opacity="0.5" />
      <circle cx="154" cy="130" r="9" fill="#FF8F85" opacity="0.5" />
      {/* ojos */}
      <g className="duli-eyes">
        <circle cx="72" cy="96" r="30" fill="#FFFFFF" />
        <circle cx="128" cy="96" r="30" fill="#FFFFFF" />
        <circle cx="72" cy="99" r="14" fill="#1F2937" />
        <circle cx="128" cy="99" r="14" fill="#1F2937" />
        <circle cx="77" cy="94" r="5" fill="#FFFFFF" />
        <circle cx="133" cy="94" r="5" fill="#FFFFFF" />
      </g>
      {/* cejas */}
      <path d="M50 64 Q72 52 94 64" stroke="#3F6D12" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M106 64 Q128 52 150 64" stroke="#3F6D12" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* pico */}
      <path d="M78 120 L122 120 L100 154 Z" fill="#FF9600" stroke="#E58500" strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

function RoadmapReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) { setVisible(true); return }
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { setVisible(true); obs.unobserve(e.target) }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Enlace profundo: si la URL trae #temas... abrimos directo la pestaÃ±a de Temas
const BOOT_HASH = (() => {
  const h = window.location.hash.replace('#', '').trim()
  if (!h.startsWith('temas')) return null
  const parts = h.split('-')
  return { view: parts[1] ?? 'hub', id: parts.slice(2).join('-') || null }
})()

// Abrir Temas en una pestaÃ±a nueva del navegador (Pantalla queda en su pestaÃ±a)
const openTemasTab = (deep = '') => {
  const url = `${window.location.origin}${window.location.pathname}${window.location.search}#temas${deep}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

// Juego Snake clÃ¡sico en canvas (teclado + tÃ¡ctil, puntaje y rÃ©cord)
type SnakePoint = { x: number; y: number }
const SNAKE_COLS = 20
const SNAKE_ROWS = 20
const SNAKE_SIZE = 400
const SNAKE_SPEEDS = { slow: 210, normal: 150, fast: 100 } as const
type SnakeSpeed = keyof typeof SNAKE_SPEEDS
const SNAKE_SPEED_LABELS: Record<SnakeSpeed, string> = { slow: 'ðŸ¢ Lenta', normal: 'ðŸš¶ Normal', fast: 'ðŸš€ RÃ¡pida' }

function SnakeGame({ onSnakeBest }: { onSnakeBest?: (best: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState<number>(() => {
    const n = parseInt(safeGet('hablemos-claro-snake-best') ?? '0', 10)
    return Number.isFinite(n) && n > 0 ? n : 0
  })
  const [running, setRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [started, setStarted] = useState(false)
  const [speedMode, setSpeedMode] = useState<SnakeSpeed>('normal')
  const speedModeRef = useRef<SnakeSpeed>('normal')
  const snakeRef = useRef<SnakePoint[]>([{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }])
  const dirRef = useRef<SnakePoint>({ x: 1, y: 0 })
  const queueRef = useRef<SnakePoint[]>([])
  const foodRef = useRef<SnakePoint>({ x: 14, y: 10 })
  const scoreRef = useRef(0)
  const speedRef = useRef(150)
  const bestRef = useRef(0)
  const runningRef = useRef(false)
  const touchRef = useRef<{ x: number; y: number } | null>(null)
  const gameWrapRef = useRef<HTMLDivElement | null>(null)
  const [isFs, setIsFs] = useState(false)
  const [quiz, setQuiz] = useState<ExamQuestion | null>(null)
  const [quizPick, setQuizPick] = useState<number | null>(null)
  const quizCountRef = useRef(0)
  const quizOpenRef = useRef(false)

  const randomFood = (snake: SnakePoint[]): SnakePoint => {
    const free: SnakePoint[] = []
    for (let y = 0; y < SNAKE_ROWS; y++) {
      for (let x = 0; x < SNAKE_COLS; x++) {
        if (!snake.some(s => s.x === x && s.y === y)) free.push({ x, y })
      }
    }
    if (free.length === 0) return { x: 0, y: 0 }
    return free[Math.floor(Math.random() * free.length)] ?? { x: 0, y: 0 }
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const cell = SNAKE_SIZE / SNAKE_COLS
    const bg = ctx.createLinearGradient(0, 0, 0, SNAKE_SIZE)
    bg.addColorStop(0, '#0f2a1a')
    bg.addColorStop(1, '#0a1f12')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, SNAKE_SIZE, SNAKE_SIZE)
    ctx.strokeStyle = 'rgba(255,255,255,0.05)'
    ctx.lineWidth = 1
    for (let i = 1; i < SNAKE_COLS; i++) {
      ctx.beginPath(); ctx.moveTo(i * cell, 0); ctx.lineTo(i * cell, SNAKE_SIZE); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(0, i * cell); ctx.lineTo(SNAKE_SIZE, i * cell); ctx.stroke()
    }
    const f = foodRef.current
    ctx.fillStyle = '#ef4444'
    ctx.beginPath()
    ctx.arc(f.x * cell + cell / 2, f.y * cell + cell / 2, cell * 0.38, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,0.55)'
    ctx.beginPath()
    ctx.arc(f.x * cell + cell * 0.36, f.y * cell + cell * 0.34, cell * 0.1, 0, Math.PI * 2)
    ctx.fill()
    const snake = snakeRef.current
    const d = dirRef.current
    snake.forEach((s, i) => {
      const isHead = i === 0
      ctx.fillStyle = isHead ? '#4ade80' : '#22c55e'
      const pad = isHead ? 1 : 2
      const x = s.x * cell + pad
      const y = s.y * cell + pad
      const w = cell - pad * 2
      ctx.beginPath()
      if (typeof ctx.roundRect === 'function') ctx.roundRect(x, y, w, w, isHead ? 5 : 4)
      else ctx.rect(x, y, w, w)
      ctx.fill()
      if (isHead) {
        ctx.fillStyle = '#052e16'
        const ex = x + w / 2
        const ey = y + w / 2
        const off = w * 0.18
        const px = -d.y
        const py = d.x
        ctx.beginPath()
        ctx.arc(ex + d.x * off * 0.6 + px * off, ey + d.y * off * 0.6 + py * off, 2.2, 0, Math.PI * 2)
        ctx.arc(ex + d.x * off * 0.6 - px * off, ey + d.y * off * 0.6 - py * off, 2.2, 0, Math.PI * 2)
        ctx.fill()
      }
    })
  }

  const startGame = () => {
    const init = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }]
    snakeRef.current = init
    dirRef.current = { x: 1, y: 0 }
    queueRef.current = []
    foodRef.current = randomFood(init)
    scoreRef.current = 0
    speedRef.current = SNAKE_SPEEDS[speedModeRef.current]
    setScore(0)
    setGameOver(false)
    setStarted(true)
    setRunning(true)
  }

  const endGame = () => {
    setRunning(false)
    setGameOver(true)
    if (scoreRef.current > bestRef.current) {
      bestRef.current = scoreRef.current
      safeSet('hablemos-claro-snake-best', String(scoreRef.current))
      setBest(scoreRef.current)
      onSnakeBest?.(scoreRef.current)
    }
  }

  const setDir = (x: number, y: number) => {    const q = queueRef.current
    const last = q.length > 0 ? q[q.length - 1] : dirRef.current
    if (!last) return
    if ((x !== -last.x || y !== -last.y) && (x !== last.x || y !== last.y)) {
      if (q.length < 3) q.push({ x, y })
    }
  }

  const toggleFs = () => {
    const el = gameWrapRef.current
    if (typeof document !== 'undefined' && document.fullscreenElement) {
      try {
        const p = document.exitFullscreen() as unknown as Promise<void> | undefined
        if (p && typeof p.catch === 'function') p.catch(() => undefined)
      } catch { /* noop */ }
      setIsFs(false)
    } else if (el) {
      try {
        const req = el.requestFullscreen ? el.requestFullscreen() : (el as unknown as { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen?.call(el)
        if (req && typeof (req as unknown as { catch?: unknown }).catch === 'function') {
          (req as unknown as Promise<void>).catch(() => undefined)
        }
      } catch { /* respaldo visual abajo */ }
      setIsFs(true)
    }
  }

  useEffect(() => {
    const onFs = () => {
      if (typeof document !== 'undefined') setIsFs(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFs)
    document.addEventListener('webkitfullscreenchange', onFs as EventListener)
    return () => {
      document.removeEventListener('fullscreenchange', onFs)
      document.removeEventListener('webkitfullscreenchange', onFs as EventListener)
    }
  }, [])

  useEffect(() => {
    runningRef.current = running
    quizOpenRef.current = quiz !== null
    speedModeRef.current = speedMode
    if (best > bestRef.current) bestRef.current = best
  })

  useEffect(() => {
    snakeRef.current = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }]
    foodRef.current = randomFood(snakeRef.current)
    draw()
  }, [])

  useEffect(() => {
    if (!running) return
    const id = window.setInterval(() => {
      const q = queueRef.current
      const next = q.shift()
      if (next) dirRef.current = next
      const d = dirRef.current
      const snake = snakeRef.current
      const head0 = snake[0]
      if (!head0) {
        endGame()
        return
      }
      const head = { x: head0.x + d.x, y: head0.y + d.y }
      if (head.x < 0 || head.y < 0 || head.x >= SNAKE_COLS || head.y >= SNAKE_ROWS || snake.some(s => s.x === head.x && s.y === head.y)) {
        endGame()
        return
      }
      snake.unshift(head)
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        scoreRef.current += 1
        setScore(scoreRef.current)
        foodRef.current = randomFood(snake)
        if (scoreRef.current % 15 === 0) {
          const q = examQuestions[quizCountRef.current % examQuestions.length]
          if (q) {
            quizCountRef.current += 1
            setQuizPick(null)
            setQuiz(q)
            setRunning(false)
          }
        }
      } else {
        snake.pop()
      }
      draw()
    }, speedRef.current)
    return () => window.clearInterval(id)
  })

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === 'arrowup' || k === 'arrowdown' || k === 'arrowleft' || k === 'arrowright' || k === ' ') e.preventDefault()
      if (k === 'arrowup' || k === 'w') setDir(0, -1)
      else if (k === 'arrowdown' || k === 's') setDir(0, 1)
      else if (k === 'arrowleft' || k === 'a') setDir(-1, 0)
      else if (k === 'arrowright' || k === 'd') setDir(1, 0)
      else if (k === ' ' || k === 'enter') {
        if (!runningRef.current && !quizOpenRef.current) startGame()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div ref={gameWrapRef} className={`w-full max-w-[440px] mx-auto${isFs ? ' snake-fs' : ''}`}>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">ðŸŽ {score}</div>
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">ðŸ† {best}</div>
        <button onClick={toggleFs} aria-label="Pantalla completa" className="md:hidden px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800 hover:bg-white active:scale-95 transition-all">
          {isFs ? 'ðŸ—— Salir' : 'â›¶ Completa'}
        </button>
      </div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={SNAKE_SIZE}
          height={SNAKE_SIZE}
          className="w-full h-auto rounded-[20px] border-4 border-white shadow-xl shadow-indigo-500/10 touch-none select-none"
          onClick={() => { if (!running && quiz === null) startGame() }}
          onTouchStart={e => {
            const t = e.touches[0]
            touchRef.current = t ? { x: t.clientX, y: t.clientY } : null
          }}
          onTouchEnd={e => {
            const s = touchRef.current
            const t = e.changedTouches[0]
            touchRef.current = null
            if (!s || !t) return
            const dx = t.clientX - s.x
            const dy = t.clientY - s.y
            if (Math.abs(dx) < 24 && Math.abs(dy) < 24) return
            if (Math.abs(dx) > Math.abs(dy)) setDir(dx > 0 ? 1 : -1, 0)
            else setDir(0, dy > 0 ? 1 : -1)
          }}
        />
        {(!started || gameOver) && (
          <div className="absolute inset-0 rounded-[20px] bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="text-5xl">{gameOver ? 'ðŸ’€' : 'ðŸ'}</div>
            <p className="text-white text-2xl font-black">{gameOver ? 'Â¡Fin del juego!' : 'Snake'}</p>
            {gameOver && (
              <>
              <p className="text-white/90 font-bold">Puntaje: {score} Â· RÃ©cord: {Math.max(best, score)}</p>
              <p className="text-white/80 text-sm font-bold">{Math.max(best, score) >= 30 ? 'ðŸ… Â¡Insignia Maestro Snake desbloqueada!' : `ðŸ… Insignia Maestro Snake: ${Math.max(best, score)}/30`}</p>
              </>
            )}
            {gameOver && (
              <div className="w-full">
                <p className="text-white/70 text-xs font-black uppercase tracking-wider mb-2">Velocidad</p>
                <div className="flex gap-2 justify-center">
                  {(['slow', 'normal', 'fast'] as SnakeSpeed[]).map(m => (
                    <button
                      key={m}
                      onClick={() => setSpeedMode(m)}
                      className={`flex-1 py-2 rounded-full text-sm font-black transition-all ${speedMode === m ? 'bg-white text-slate-800 shadow' : 'bg-white/15 text-white/80 hover:bg-white/25'}`}
                    >
                      {SNAKE_SPEED_LABELS[m]}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {!gameOver && (
              <p className="text-white/80 text-sm font-bold">Come las manzanas ðŸŽ Â· No choques ðŸ§±</p>
            )}
            <div className="w-full">
              <p className="text-white/70 text-xs font-black uppercase tracking-wider mb-2">Velocidad</p>
              <div className="flex gap-2 justify-center">
                {(['slow', 'normal', 'fast'] as SnakeSpeed[]).map(m => (
                  <button
                    key={m}
                    onClick={() => setSpeedMode(m)}
                    className={`flex-1 py-2 rounded-full text-sm font-black transition-all ${speedMode === m ? 'bg-white text-slate-800 shadow' : 'bg-white/15 text-white/80 hover:bg-white/25'}`}
                  >
                    {SNAKE_SPEED_LABELS[m]}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={startGame}
              className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              {gameOver ? 'â†» Jugar de nuevo' : 'â–¶ Jugar'}
            </button>
            {!gameOver && (
              <p className="text-white/60 text-xs font-bold">Flechas o WASD Â· Espacio para empezar Â· Desliza en celular</p>
            )}
          </div>
        )}
      </div>
      {quiz && (
        <div className="absolute inset-0 rounded-[20px] bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 md:p-6 w-full max-w-[360px] text-center max-h-full overflow-y-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-wider">ðŸ§  Pausa de integridad</span>
            <p className="text-slate-800 text-lg font-bold leading-snug mt-3">{quiz.question}</p>
            <div className="space-y-2 mt-4 text-left">
              {quiz.options.map((op, oi) => {
                const picked = quizPick === oi
                const showRight = quizPick !== null && oi === quiz.correct
                const showWrong = picked && oi !== quiz.correct
                return (
                  <button
                    key={oi}
                    disabled={quizPick !== null}
                    onClick={() => {
                      setQuizPick(oi)
                      if (oi === quiz.correct) {
                        scoreRef.current += 3
                        setScore(scoreRef.current)
                      }
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-left font-bold border-2 transition-all ${
                      showRight
                        ? 'bg-success/15 border-success text-success'
                        : showWrong
                          ? 'bg-warning/10 border-warning text-slate-800'
                          : picked
                            ? 'bg-primary/10 border-primary text-slate-800'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-primary/60'
                    } ${quizPick !== null ? 'cursor-default' : ''}`}
                  >
                    {op}
                  </button>
                )
              })}
            </div>
            {quizPick !== null && (
              <div className="mt-4">
                <p className={`font-black mb-3 ${quizPick === quiz.correct ? 'text-success' : 'text-warning'}`}>{quizPick === quiz.correct ? 'âœ… Â¡Correcto! +3 puntos' : `âŒ La correcta era: ${quiz.options[quiz.correct]}`}</p>
                <button
                  onClick={() => { setQuiz(null); setQuizPick(null); queueRef.current = []; setRunning(true) }}
                  className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg w-full"
                >
                  Continuar â–¶
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="grid grid-cols-3 gap-2 mt-4 max-w-[240px] mx-auto snake-dpad">
        <span />
        <button onClick={() => setDir(0, -1)} aria-label="Arriba" className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10">â–²</button>
        <span />
        <button onClick={() => setDir(-1, 0)} aria-label="Izquierda" className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10">â—€</button>
        <button onClick={() => setDir(0, 1)} aria-label="Abajo" className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10">â–¼</button>
        <button onClick={() => setDir(1, 0)} aria-label="Derecha" className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10">â–¶</button>
      </div>
      <p className="text-center text-xs font-bold text-slate-400 mt-3">Flechas / WASD Â· Espacio Â· Botones o deslizar en celular</p>
    </div>
  )
}

// Flappy Bird: fÃ­sica suave, vidas, XP y preguntas
const FLAPPY_W = 480
const FLAPPY_H = 600
const FLAPPY_GRAV = 2100
const FLAPPY_JUMP = -620
const FLAPPY_MAXFALL = 950
const FLAPPY_MAXRISE = -680
const FLAPPY_BIRD_X = 130
const FLAPPY_BIRD_R = 15
const FLAPPY_TOWER_W = 76
const FLAPPY_GAP = 175
const FLAPPY_GROUND = 26

type FlappyPhase = 'idle' | 'playing' | 'question' | 'over'
type FlappyTower = { x: number; gapY: number; counted: boolean }
type FlappyCloud = { x: number; y: number; s: number; v: number }

function flappyBeep(freq: number, dur = 0.09) {
  try {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    const ctx = new AC()
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = 'sine'
    o.frequency.value = freq
    g.gain.setValueAtTime(0.12, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur)
    o.connect(g)
    g.connect(ctx.destination)
    o.start()
    o.stop(ctx.currentTime + dur)
    o.onended = () => { try { ctx.close() } catch { /* noop */ } }
  } catch { /* noop */ }
}

function shuffledFlappyOrder() {
  const a: number[] = []
  for (let i = 0; i < FLAPPY_QUESTIONS.length; i++) a.push(i)
  for (let k = a.length - 1; k > 0; k--) {
    const j = Math.floor(Math.random() * (k + 1))
    const t = a[k] as number
    a[k] = a[j] as number
    a[j] = t
  }
  return a
}

function FlappyGame({ onFlappyXpTotal }: { onFlappyXpTotal?: (total: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState<number>(() => {
    const n = parseInt(safeGet('hablemos-claro-flappy-best') ?? '0', 10)
    return Number.isFinite(n) && n > 0 ? n : 0
  })
  const [lives, setLives] = useState(3)
  const [xp, setXp] = useState(0)
  const [totalXp, setTotalXp] = useState<number>(() => {
    const n = parseInt(safeGet('hablemos-claro-flappy-total-xp') ?? '0', 10)
    return Number.isFinite(n) && n > 0 ? n : 0
  })
  const [phase, setPhase] = useState<FlappyPhase>('idle')
  const [quiz, setQuiz] = useState<ExamQuestion | null>(null)
  const [quizPick, setQuizPick] = useState<number | null>(null)
  const birdYRef = useRef(300)
  const vyRef = useRef(0)
  const towersRef = useRef<FlappyTower[]>([])
  const cloudsRef = useRef<FlappyCloud[]>([
    { x: 60, y: 110, s: 1, v: 14 },
    { x: 300, y: 200, s: 1.4, v: 10 },
    { x: 200, y: 70, s: 0.8, v: 18 },
  ])
  const spawnRef = useRef(1.2)
  const invulnRef = useRef(0)
  const askedRef = useRef(-1)
  const quizErrorsRef = useRef(0)
  const orderRef = useRef<number[]>([])
  const orderPosRef = useRef(0)
  const totalXpRef = useRef(0)
  const scoreRef = useRef(0)
  const livesRef = useRef(3)
  const xpRef = useRef(0)
  const phaseRef = useRef<FlappyPhase>('idle')

  useEffect(() => {
    phaseRef.current = phase
  })

  const resetRun = (toPlaying: boolean) => {
    birdYRef.current = 300
    vyRef.current = 0
    towersRef.current = []
    spawnRef.current = 1.2
    invulnRef.current = 0
    askedRef.current = -1
    quizErrorsRef.current = 0
    orderRef.current = shuffledFlappyOrder()
    orderPosRef.current = 0
    scoreRef.current = 0
    livesRef.current = 3
    xpRef.current = 0
    setScore(0)
    setLives(3)
    setXp(0)
    setQuiz(null)
    setQuizPick(null)
    setPhase(toPlaying ? 'playing' : 'idle')
  }

  const endGame = () => {
    setPhase('over')
    setBest(prev => {
      if (scoreRef.current > prev) {
        safeSet('hablemos-claro-flappy-best', String(scoreRef.current))
        return scoreRef.current
      }
      return prev
    })
  }

  const loseLife = () => {
    livesRef.current -= 1
    setLives(livesRef.current)
    flappyBeep(160, 0.25)
    if (livesRef.current <= 0) {
      endGame()
      return
    }
    birdYRef.current = 300
    vyRef.current = 0
    invulnRef.current = 1.4
  }

  const triggerQuestion = () => {
    if (orderPosRef.current >= orderRef.current.length) {
      orderRef.current = shuffledFlappyOrder()
      orderPosRef.current = 0
    }
    const qi = orderRef.current[orderPosRef.current] ?? 0
    const q = FLAPPY_QUESTIONS[qi] ?? FLAPPY_QUESTIONS[0]
    if (!q) return
    orderPosRef.current += 1
    quizErrorsRef.current = 0
    setQuizPick(null)
    setQuiz(q)
    setPhase('question')
  }

  const answerQuiz = (oi: number) => {
    const q = quiz
    if (!q || phaseRef.current !== 'question') return
    if (quizPick !== null && quizPick === q.correct) return
    setQuizPick(oi)
    if (oi === quiz.correct) {
      xpRef.current += 10
      setXp(xpRef.current)
      totalXpRef.current += 10
      setTotalXp(totalXpRef.current)
      safeSet('hablemos-claro-flappy-total-xp', String(totalXpRef.current))
      onFlappyXpTotal?.(totalXpRef.current)
      quizErrorsRef.current = 0
      flappyBeep(660, 0.12)
    } else {
      quizErrorsRef.current += 1
      flappyBeep(200, 0.15)
      if (quizErrorsRef.current >= 2) {
        resetRun(true)
      }
    }
  }

  const flap = () => {
    if (phaseRef.current !== 'playing') return
    vyRef.current = FLAPPY_JUMP
    flappyBeep(520, 0.08)
  }

  const circleHitsRect = (cx: number, cy: number, r: number, rx: number, ry: number, rw: number, rh: number) => {
    const nx = Math.max(rx, Math.min(cx, rx + rw))
    const ny = Math.max(ry, Math.min(cy, ry + rh))
    const dx = cx - nx
    const dy = cy - ny
    return dx * dx + dy * dy < r * r
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const sky = ctx.createLinearGradient(0, 0, 0, FLAPPY_H)
    sky.addColorStop(0, '#BFE8FF')
    sky.addColorStop(1, '#9FD4F5')
    ctx.fillStyle = sky
    ctx.fillRect(0, 0, FLAPPY_W, FLAPPY_H)
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    cloudsRef.current.forEach(c => {
      ctx.beginPath()
      ctx.ellipse(c.x, c.y, 34 * c.s, 13 * c.s, 0, 0, Math.PI * 2)
      ctx.ellipse(c.x - 22 * c.s, c.y + 5 * c.s, 20 * c.s, 9 * c.s, 0, 0, Math.PI * 2)
      ctx.ellipse(c.x + 22 * c.s, c.y + 5 * c.s, 20 * c.s, 9 * c.s, 0, 0, Math.PI * 2)
      ctx.fill()
    })
    towersRef.current.forEach(t => {
      const topH = t.gapY - FLAPPY_GAP / 2
      const botY = t.gapY + FLAPPY_GAP / 2
      ctx.fillStyle = '#4a4038'
      ctx.strokeStyle = '#14100d'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.rect(t.x, 0, FLAPPY_TOWER_W, Math.max(0, topH))
      ctx.rect(t.x, botY, FLAPPY_TOWER_W, FLAPPY_H - botY)
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = 'rgba(255,255,255,0.12)'
      ctx.fillRect(t.x + 6, 4, 8, Math.max(0, topH - 8))
      ctx.fillRect(t.x + 6, botY + 4, 8, Math.max(0, FLAPPY_H - botY - 8))
    })
    ctx.fillStyle = '#69c24a'
    ctx.fillRect(0, 0, FLAPPY_W, FLAPPY_GROUND)
    ctx.fillRect(0, FLAPPY_H - FLAPPY_GROUND, FLAPPY_W, FLAPPY_GROUND)
    ctx.fillStyle = '#2f6b2f'
    ctx.fillRect(0, FLAPPY_GROUND - 5, FLAPPY_W, 5)
    ctx.fillRect(0, FLAPPY_H - FLAPPY_GROUND, FLAPPY_W, 5)
    const bx = FLAPPY_BIRD_X
    const by = birdYRef.current
    const vy = vyRef.current
    const ang = Math.max(-25, Math.min(35, vy / 40)) * (Math.PI / 180)
    ctx.save()
    if (invulnRef.current > 0 && Math.floor(performance.now() / 120) % 2 === 0) ctx.globalAlpha = 0.4
    ctx.translate(bx, by)
    ctx.rotate(ang)
    ctx.shadowColor = 'rgba(255,140,0,0.7)'
    ctx.shadowBlur = 18
    ctx.fillStyle = '#FF8A00'
    ctx.beginPath()
    if (typeof ctx.roundRect === 'function') ctx.roundRect(-16, -14, 32, 28, 8)
    else ctx.rect(-16, -14, 32, 28)
    ctx.fill()
    ctx.shadowBlur = 0
    ctx.fillStyle = 'rgba(255,255,255,0.5)'
    ctx.beginPath()
    ctx.ellipse(-5, -7, 9, 5, -0.4, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(7, -4, 5.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = '#1f2937'
    ctx.beginPath()
    ctx.arc(8.5, -4, 2.6, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  useEffect(() => {
    totalXpRef.current = totalXp
    draw()
  }, [])

  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const loop = (t: number) => {
      const dt = Math.min(0.033, Math.max(0.001, (t - last) / 1000))
      last = t
      cloudsRef.current.forEach(c => {
        c.x -= c.v * dt
        if (c.x < -70) c.x = FLAPPY_W + 70
      })
      if (phaseRef.current === 'playing') {
        let vy = vyRef.current + FLAPPY_GRAV * dt
        if (vy > FLAPPY_MAXFALL) vy = FLAPPY_MAXFALL
        if (vy < FLAPPY_MAXRISE) vy = FLAPPY_MAXRISE
        vyRef.current = vy
        let y = birdYRef.current + vy * dt
        if (y < 44) {
          y = 44
          if (vyRef.current < 0) vyRef.current = 0
        }
        birdYRef.current = y
        const speed = Math.min(190 + scoreRef.current * 5, 340)
        spawnRef.current -= dt
        if (spawnRef.current <= 0) {
          spawnRef.current = 1.55
          const gapY = 130 + Math.random() * (FLAPPY_H - 260)
          towersRef.current.push({ x: FLAPPY_W + 40, gapY, counted: false })
        }
        towersRef.current.forEach(t => { t.x -= speed * dt })
        towersRef.current = towersRef.current.filter(t => t.x > -120)
        towersRef.current.forEach(t => {
          if (!t.counted && t.x + FLAPPY_TOWER_W < FLAPPY_BIRD_X) {
            t.counted = true
            scoreRef.current += 1
            setScore(scoreRef.current)
            flappyBeep(880, 0.07)
            if (scoreRef.current % 5 === 0 && scoreRef.current !== askedRef.current) {
              askedRef.current = scoreRef.current
              triggerQuestion()
            }
          }
        })
        if (invulnRef.current > 0) {
          invulnRef.current -= dt
        } else {
          const by = birdYRef.current
          const r = FLAPPY_BIRD_R
          let hit = by + r > FLAPPY_H - FLAPPY_GROUND || by - r < FLAPPY_GROUND
          if (!hit) {
            for (const t of towersRef.current) {
              const topH = t.gapY - FLAPPY_GAP / 2
              const botY = t.gapY + FLAPPY_GAP / 2
              if (
                circleHitsRect(FLAPPY_BIRD_X, by, r, t.x, 0, FLAPPY_TOWER_W, Math.max(0, topH)) ||
                circleHitsRect(FLAPPY_BIRD_X, by, r, t.x, botY, FLAPPY_TOWER_W, Math.max(0, FLAPPY_H - botY))
              ) {
                hit = true
                break
              }
            }
          }
          if (hit) loseLife()
        }
      }
      draw()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === 'arrowup' || k === 'arrowdown' || k === ' ' ) e.preventDefault()
      if (k === 'arrowup' || k === 'w' || k === ' ') flap()
      else if (k === 'enter') {
        if (phaseRef.current === 'idle') resetRun(true)
        else if (phaseRef.current === 'over') resetRun(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const quizDone = quiz !== null && quizPick !== null && quizPick === quiz.correct

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 flex-wrap">
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">â¤ï¸ {lives}</div>
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">â­ {score}</div>
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">âœ¨ {xp} XP</div>
      </div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={FLAPPY_W}
          height={FLAPPY_H}
          className="w-full h-auto rounded-[20px] border-4 border-white shadow-xl shadow-indigo-500/10 touch-none select-none"
          onPointerDown={() => {
            if (phaseRef.current === 'idle') resetRun(true)
            else flap()
          }}
        />
        {phase === 'idle' && (
          <div className="absolute inset-0 rounded-[20px] bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="text-5xl">ðŸ¦</div>
            <p className="text-white text-2xl font-black">Flappy</p>
            <p className="text-white/80 text-sm font-bold">Esquiva las torres Â· Responde y gana XP</p>
            <button
              onClick={() => resetRun(true)}
              className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              COMENZAR
            </button>
            <p className="text-white/60 text-xs font-bold">Espacio / clic / toque para volar</p>
          </div>
        )}
        {phase === 'question' && quiz && (
          <div className="absolute inset-0 rounded-[20px] bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-5 md:p-6 w-full max-w-[380px] text-center max-h-full overflow-y-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-wider">ðŸ§  Pregunta de integridad</span>
              <p className="text-slate-800 text-lg font-bold leading-snug mt-3">{quiz.question}</p>
              <div className="space-y-2 mt-4 text-left">
                {quiz.options.map((op, oi) => {
                  const picked = quizPick === oi
                  const showRight = quizDone && oi === quiz.correct
                  const showWrong = picked && oi !== quiz.correct
                  return (
                    <button
                      key={oi}
                      disabled={quizDone}
                      onClick={() => answerQuiz(oi)}
                      className={`w-full py-3 px-4 rounded-xl text-left font-bold border-2 transition-all ${
                        showRight
                          ? 'bg-success/15 border-success text-success'
                          : showWrong
                            ? 'bg-warning/10 border-warning text-slate-800'
                            : picked
                              ? 'bg-primary/10 border-primary text-slate-800'
                              : 'bg-white border-slate-200 text-slate-800 hover:border-primary/60'
                      } ${quizDone ? 'cursor-default' : ''}`}
                    >
                      {op}
                    </button>
                  )
                })}
              </div>
              {quizPick !== null && quizPick !== quiz.correct && (
                <p className="font-black text-warning mt-3">âŒ Incorrecto. Â¡Te queda 1 intento!</p>
              )}
              {quizDone && (
                <div className="mt-4">
                  <p className="font-black text-success mb-3">âœ… Â¡Correcto! +10 XP</p>
                  <button
                    onClick={() => { setQuiz(null); setQuizPick(null); setPhase('playing') }}
                    className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg w-full"
                  >
                    Continuar â–¶
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {phase === 'over' && (
          <div className="absolute inset-0 rounded-[20px] bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="text-5xl">ðŸ’€</div>
            <p className="text-white text-2xl font-black">Â¡Fin del juego!</p>
            <p className="text-white/90 font-bold">Puntaje: {score} Â· XP: {xp} Â· RÃ©cord: {Math.max(best, score)}</p>
            <p className="text-white/80 text-sm font-bold">â­ Total: {totalXp} / 500</p>
            <button
              onClick={() => resetRun(true)}
              className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              â†» Jugar de nuevo
            </button>
            <p className="text-white/60 text-xs font-bold">Espacio / Enter para reintentar</p>
          </div>
        )}
      </div>
      <p className="text-center text-xs font-bold text-slate-400 mt-3">Espacio / W / clic / toque para volar</p>
    </div>
  )
}

// Atrapa la honestidad: mueve la canasta, atrapa valores y esquiva trampas
const CATCH_W = 480
const CATCH_H = 600
const CATCH_GOOD = ['â­', 'â¤ï¸', 'ðŸ¤', 'ðŸ“š', 'âš–ï¸', 'ðŸ›¡ï¸']
const CATCH_BAD = ['ðŸ’°', 'ðŸƒ', 'ðŸ’¸']

type CatchPhase = 'idle' | 'playing' | 'over'
type CatchItem = { x: number; y: number; emoji: string; bad: boolean }

function CatchGame({ onCatchBest }: { onCatchBest?: (best: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState<number>(() => {
    const n = parseInt(safeGet('hablemos-claro-catch-best') ?? '0', 10)
    return Number.isFinite(n) && n > 0 ? n : 0
  })
  const [lives, setLives] = useState(3)
  const [phase, setPhase] = useState<CatchPhase>('idle')
  const basketXRef = useRef(CATCH_W / 2)
  const itemsRef = useRef<CatchItem[]>([])
  const spawnRef = useRef(0.6)
  const invulnRef = useRef(0)
  const keysRef = useRef<{ left: boolean; right: boolean }>({ left: false, right: false })
  const holdRef = useRef<{ left: boolean; right: boolean }>({ left: false, right: false })
  const draggingRef = useRef(false)
  const scoreRef = useRef(0)
  const livesRef = useRef(3)
  const phaseRef = useRef<CatchPhase>('idle')
  const bestRef = useRef(0)

  useEffect(() => {
    phaseRef.current = phase
    if (best > bestRef.current) bestRef.current = best
  })

  const resetRun = (toPlaying: boolean) => {
    basketXRef.current = CATCH_W / 2
    itemsRef.current = []
    spawnRef.current = 0.6
    invulnRef.current = 0
    scoreRef.current = 0
    livesRef.current = 3
    setScore(0)
    setLives(3)
    setPhase(toPlaying ? 'playing' : 'idle')
  }

  const endGame = () => {
    setPhase('over')
    if (scoreRef.current > bestRef.current) {
      bestRef.current = scoreRef.current
      safeSet('hablemos-claro-catch-best', String(scoreRef.current))
      setBest(scoreRef.current)
      onCatchBest?.(scoreRef.current)
    }
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const sky = ctx.createLinearGradient(0, 0, 0, CATCH_H)
    sky.addColorStop(0, '#BFE8FF')
    sky.addColorStop(1, '#9FD4F5')
    ctx.fillStyle = sky
    ctx.fillRect(0, 0, CATCH_W, CATCH_H)
    ctx.fillStyle = '#69c24a'
    ctx.fillRect(0, CATCH_H - 24, CATCH_W, 24)
    ctx.fillStyle = '#2f6b2f'
    ctx.fillRect(0, CATCH_H - 24, CATCH_W, 5)
    ctx.font = '30px serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    itemsRef.current.forEach(it => {
      ctx.fillText(it.emoji, it.x, it.y)
    })
    const bx = basketXRef.current
    const by = CATCH_H - 56
    if (invulnRef.current <= 0 || Math.floor(performance.now() / 150) % 2 === 0) {
      ctx.fillStyle = '#8B5A2B'
      ctx.beginPath()
      if (typeof ctx.roundRect === 'function') ctx.roundRect(bx - 48, by - 14, 96, 30, 8)
      else ctx.rect(bx - 48, by - 14, 96, 30)
      ctx.fill()
      ctx.fillStyle = '#5d3a17'
      ctx.fillRect(bx - 48, by - 14, 96, 7)
    }
  }

  const canvasX = (clientX: number) => {
    const canvas = canvasRef.current
    if (!canvas) return CATCH_W / 2
    const r = canvas.getBoundingClientRect()
    return ((clientX - r.left) / Math.max(1, r.width)) * CATCH_W
  }

  useEffect(() => {
    draw()
  }, [])

  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const loop = (t: number) => {
      const dt = Math.min(0.033, Math.max(0.001, (t - last) / 1000))
      last = t
      if (phaseRef.current === 'playing') {
        const sc = scoreRef.current
        const speed = 380
        if (keysRef.current.left || holdRef.current.left) basketXRef.current -= speed * dt
        if (keysRef.current.right || holdRef.current.right) basketXRef.current += speed * dt
        basketXRef.current = Math.max(52, Math.min(CATCH_W - 52, basketXRef.current))
        spawnRef.current -= dt
        if (spawnRef.current <= 0) {
          spawnRef.current = Math.max(0.35, 0.9 - sc * 0.008)
          const bad = Math.random() < 0.28
          const pool = bad ? CATCH_BAD : CATCH_GOOD
          const emoji = pool[Math.floor(Math.random() * pool.length)] ?? (bad ? 'ðŸ’°' : 'â­')
          itemsRef.current.push({ x: 30 + Math.random() * (CATCH_W - 60), y: -20, emoji, bad })
        }
        const fall = Math.min(420, 180 + sc * 4)
        const by = CATCH_H - 56
        if (invulnRef.current > 0) invulnRef.current -= dt
        const kept: CatchItem[] = []
        for (const it of itemsRef.current) {
          it.y += fall * dt
          const caught = it.y >= by - 16 && it.y <= by + 18 && Math.abs(it.x - basketXRef.current) < 52
          if (caught) {
            if (it.bad) {
              if (invulnRef.current <= 0) {
                livesRef.current -= 1
                setLives(livesRef.current)
                invulnRef.current = 1
                if (livesRef.current <= 0) {
                  endGame()
                  break
                }
              }
            } else {
              scoreRef.current += 1
              setScore(scoreRef.current)
            }
            continue
          }
          if (it.y < CATCH_H + 30) kept.push(it)
        }
        itemsRef.current = kept
      }
      draw()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === 'arrowleft' || k === 'arrowright' || k === ' ') e.preventDefault()
      if (k === 'arrowleft' || k === 'a') keysRef.current.left = true
      else if (k === 'arrowright' || k === 'd') keysRef.current.right = true
      else if (k === ' ' || k === 'enter') {
        if (phaseRef.current === 'idle' || phaseRef.current === 'over') resetRun(true)
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === 'arrowleft' || k === 'a') keysRef.current.left = false
      else if (k === 'arrowright' || k === 'd') keysRef.current.right = false
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 flex-wrap">
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">â¤ï¸ {lives}</div>
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">â­ {score}</div>
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">ðŸ† {best}</div>
      </div>
      <p className="text-center text-xs font-bold text-slate-500 mb-2">Atrapa â­â¤ï¸ðŸ¤ Â· Evita ðŸ’°ðŸƒðŸ’¸</p>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={CATCH_W}
          height={CATCH_H}
          className="w-full h-auto rounded-[20px] border-4 border-white shadow-xl shadow-indigo-500/10 touch-none select-none"
          onPointerDown={e => {
            if (phaseRef.current === 'playing') {
              draggingRef.current = true
              basketXRef.current = Math.max(52, Math.min(CATCH_W - 52, canvasX(e.clientX)))
            }
          }}
          onPointerMove={e => {
            if (draggingRef.current && phaseRef.current === 'playing') {
              basketXRef.current = Math.max(52, Math.min(CATCH_W - 52, canvasX(e.clientX)))
            }
          }}
          onPointerUp={() => { draggingRef.current = false }}
          onPointerCancel={() => { draggingRef.current = false }}
          onPointerLeave={() => { draggingRef.current = false }}
        />
        {phase !== 'playing' && (
          <div className="absolute inset-0 rounded-[20px] bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="text-5xl">{phase === 'over' ? 'ðŸ’€' : 'ðŸ§º'}</div>
            <p className="text-white text-2xl font-black">{phase === 'over' ? 'Â¡Fin del juego!' : 'Atrapa la honestidad'}</p>
            {phase === 'over' && (
              <>
              <p className="text-white/90 font-bold">Puntaje: {score} Â· RÃ©cord: {Math.max(best, score)}</p>
              <p className="text-white/80 text-sm font-bold">{Math.max(best, score) >= 40 ? 'ðŸ… Â¡Insignia Atrapa Valores desbloqueada!' : `ðŸ… Insignia Atrapa Valores: ${Math.max(best, score)}/40`}</p>
              </>
            )}
            {phase === 'idle' && (
              <p className="text-white/80 text-sm font-bold">Mueve la canasta y atrapa valores Â· Esquiva coimas y trampas</p>
            )}
            <button
              onClick={() => resetRun(true)}
              className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              {phase === 'over' ? 'â†» Jugar de nuevo' : 'â–¶ Jugar'}
            </button>
            {phase === 'idle' && (
              <p className="text-white/60 text-xs font-bold">Flechas / AD Â· Arrastra en celular Â· Espacio para empezar</p>
            )}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          aria-label="Izquierda"
          className="px-8 py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10 select-none touch-none"
          onPointerDown={() => { holdRef.current.left = true }}
          onPointerUp={() => { holdRef.current.left = false }}
          onPointerLeave={() => { holdRef.current.left = false }}
          onPointerCancel={() => { holdRef.current.left = false }}
        >
          â—€
        </button>
        <button
          aria-label="Derecha"
          className="px-8 py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10 select-none touch-none"
          onPointerDown={() => { holdRef.current.right = true }}
          onPointerUp={() => { holdRef.current.right = false }}
          onPointerLeave={() => { holdRef.current.right = false }}
          onPointerCancel={() => { holdRef.current.right = false }}
        >
          â–¶
        </button>
      </div>
      <p className="text-center text-xs font-bold text-slate-400 mt-3">Flechas / AD Â· Arrastra o usa los botones en celular</p>
    </div>
  )
}

// Juego de Memoria: encuentra las parejas de valores con menos movimientos
const MEMORY_EMOJIS = ['â­', 'â¤ï¸', 'ðŸ¤', 'ðŸ“š', 'âš–ï¸', 'ðŸ›¡ï¸', 'ðŸŒ±', 'ðŸ•Šï¸']
const MEMORY_MEANINGS: Record<string, { name: string; desc: string }> = {
  'â­': { name: 'Integridad', desc: 'Hacer lo correcto aunque nadie mire. AsÃ­ nace la confianza.' },
  'â¤ï¸': { name: 'Respeto', desc: 'Tratar bien a todos, sin burlas ni daÃ±o.' },
  'ðŸ¤': { name: 'Ayuda', desc: 'Apoyar a quien lo necesita sin pedir nada a cambio.' },
  'ðŸ“š': { name: 'EducaciÃ³n', desc: 'Aprender cada dÃ­a te hace mÃ¡s fuerte y libre.' },
  'âš–ï¸': { name: 'Justicia', desc: 'Dar a cada uno lo que le corresponde, sin favores injustos.' },
  'ðŸ›¡ï¸': { name: 'Honestidad', desc: 'Decir la verdad y no quedarte con lo ajeno.' },
  'ðŸŒ±': { name: 'Valores', desc: 'Como una planta: si los cuidas cada dÃ­a, crecen contigo.' },
  'ðŸ•Šï¸': { name: 'Paz', desc: 'Vivir tranquilos resolviendo los problemas hablando.' },
}
type MemoryCard = { uid: number; emoji: string }

function MemoryGame({ onMemoryWin }: { onMemoryWin?: (moves: number) => void }) {
  const [deck, setDeck] = useState<MemoryCard[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [best, setBest] = useState<number>(() => {
    const n = parseInt(safeGet('hablemos-claro-memory-best') ?? '0', 10)
    return Number.isFinite(n) && n > 0 ? n : 0
  })
  const [started, setStarted] = useState(false)
  const [won, setWon] = useState(false)
  const [lastMatch, setLastMatch] = useState<string | null>(null)
  const lockRef = useRef(false)
  const timeoutRef = useRef<number | null>(null)
  const matchTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    setDeck(buildDeck())
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
      if (matchTimeoutRef.current !== null) window.clearTimeout(matchTimeoutRef.current)
    }
  }, [])

  const buildDeck = (): MemoryCard[] => {
    const cards: MemoryCard[] = []
    MEMORY_EMOJIS.forEach(emoji => {
      cards.push({ uid: cards.length, emoji })
      cards.push({ uid: cards.length, emoji })
    })
    for (let k = cards.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1))
      const a = cards[k]
      const b = cards[j]
      if (a && b) {
        cards[k] = b
        cards[j] = a
      }
    }
    return cards
  }

  const startGame = () => {
    setDeck(buildDeck())
    setFlipped([])
    setMatched([])
    setMoves(0)
    setWon(false)
    setLastMatch(null)
    lockRef.current = false
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (matchTimeoutRef.current !== null) {
      window.clearTimeout(matchTimeoutRef.current)
      matchTimeoutRef.current = null
    }
    setStarted(true)
  }

  const flipCard = (idx: number) => {
    if (!started || won || lockRef.current) return
    if (flipped.includes(idx) || matched.includes(idx)) return
    const next = [...flipped, idx]
    setFlipped(next)
    if (next.length === 2) {
      const [a, b] = next
      const ca = deck[a]
      const cb = deck[b]
      const newMoves = moves + 1
      setMoves(newMoves)
      if (ca && cb && ca.emoji === cb.emoji) {
        const nm = [...matched, a, b]
        setMatched(nm)
        setFlipped([])
        setLastMatch(ca.emoji)
        if (matchTimeoutRef.current !== null) window.clearTimeout(matchTimeoutRef.current)
        matchTimeoutRef.current = window.setTimeout(() => {
          setLastMatch(null)
          matchTimeoutRef.current = null
        }, 6000)
        if (nm.length === deck.length && deck.length > 0) {
          setWon(true)
          setBest(prev => {
            if (prev === 0 || newMoves < prev) {
              safeSet('hablemos-claro-memory-best', String(newMoves))
              return newMoves
            }
            return prev
          })
          onMemoryWin?.(newMoves)
        }
      } else {
        lockRef.current = true
        timeoutRef.current = window.setTimeout(() => {
          setFlipped([])
          lockRef.current = false
          timeoutRef.current = null
        }, 700)
      }
    }
  }

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div className="flex items-center justify-center gap-2.5 md:gap-3 mb-5 flex-wrap">
        <div className="px-5 py-2.5 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">ðŸ‘£ {moves}</div>
        <div className="px-5 py-2.5 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">âœ… {matched.length / 2}/{MEMORY_EMOJIS.length}</div>
        <div className="px-5 py-2.5 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">ðŸ† {best > 0 ? best : 'â€“'}</div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-4 gap-2.5 md:gap-3">
          {deck.map((card, idx) => {
            const faceUp = flipped.includes(idx) || matched.includes(idx)
            const done = matched.includes(idx)
            return (
              <button
                key={card.uid}
                onClick={() => flipCard(idx)}
                aria-label={faceUp ? card.emoji : 'Carta tapada'}
                className={`aspect-square rounded-2xl text-4xl md:text-5xl flex items-center justify-center transition-all duration-300 border-2 relative ${
                  faceUp
                    ? done
                      ? 'bg-success/15 border-success shadow-md scale-[1.02]'
                      : 'bg-white border-primary/40 shadow-md'
                    : 'bg-gradient-to-br from-primary to-secondary border-white/40 shadow hover:scale-105 active:scale-95'
                }`}
              >
                <span className={`transition-transform duration-300 ${faceUp ? 'scale-100' : 'scale-0'}`}>{card.emoji}</span>
                {!faceUp && <span className="absolute text-white/80 text-3xl font-black">?</span>}
              </button>
            )
          })}
        </div>
        {(!started || won) && (
          <div className="absolute inset-0 rounded-[20px] bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 text-center overflow-y-auto">
            <div className="text-4xl md:text-5xl shrink-0">{won ? 'ðŸŽ‰' : 'ðŸ§ '}</div>
            <p className="text-white text-xl md:text-2xl font-black leading-snug shrink-0">{won ? 'Â¡Completado!' : 'Memoria'}</p>
            {won ? (
              <p className="text-white/90 font-bold leading-relaxed">Movimientos: {moves} Â· RÃ©cord: {best > 0 ? best : moves}</p>
            ) : (
              <p className="text-white/80 text-sm font-bold leading-relaxed">Encuentra las 8 parejas con los menos movimientos</p>
            )}
            {won && (
              <p className="text-white/80 text-sm font-bold leading-relaxed">{moves <= 20 ? 'ðŸ… Â¡Insignia Mente Maestra desbloqueada!' : `ðŸ… Insignia Mente Maestra: gana con 20 o menos (hiciste ${moves})`}</p>
            )}
            <button
              onClick={startGame}
              className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              {won ? 'â†» Jugar de nuevo' : 'â–¶ Jugar'}
            </button>
          </div>
        )}
      </div>
      {lastMatch !== null && started && !won && (
        <div className="mt-4 bg-white rounded-2xl border-2 border-primary/20 p-5 shadow-md animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="text-4xl shrink-0">{lastMatch}</div>
            <div className="flex-1 text-left">
              <p className="font-black text-slate-800 text-lg leading-snug">{MEMORY_MEANINGS[lastMatch]?.name ?? lastMatch}</p>
              <p className="text-[15px] text-slate-600 leading-relaxed mt-1">{MEMORY_MEANINGS[lastMatch]?.desc ?? ''}</p>
            </div>
            <button onClick={() => setLastMatch(null)} aria-label="Cerrar" className="text-slate-400 hover:text-slate-600 font-black px-1 shrink-0">âœ•</button>
          </div>
        </div>
      )}
      <p className="text-center text-sm font-bold text-slate-400 mt-4 leading-relaxed">Toca dos cartas para voltearlas Â· Memoriza las parejas</p>
    </div>
  )
}

// CorazÃ³n Valiente: esquiva ataques en la arena con 3 niveles de dificultad
const DODGE_W = 480
const DODGE_H = 600
const DODGE_LEVELS = [
  { id: 'normal', label: 'ðŸŒ± Normal', time: 30, spawn: 0.7, bspd: 150 },
  { id: 'dificil', label: 'ðŸ”¥ DifÃ­cil', time: 40, spawn: 0.5, bspd: 210 },
  { id: 'imposible', label: 'ðŸ’€ Imposible', time: 50, spawn: 0.32, bspd: 280 },
] as const
type DodgeLevelId = typeof DODGE_LEVELS[number]['id']
type DodgePhase = 'menu' | 'playing' | 'clear' | 'over'
type DodgeBullet = { x: number; y: number; vx: number; vy: number; emoji: string }

function DodgeGame({ onDodgeAllComplete }: { onDodgeAllComplete?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [level, setLevel] = useState<DodgeLevelId>('normal')
  const [phase, setPhase] = useState<DodgePhase>('menu')
  const [lives, setLives] = useState(3)
  const [timeLeft, setTimeLeft] = useState(30)
  const [completed, setCompleted] = useState<string[]>(() => {
    const v = safeParse(safeGet('hablemos-claro-dodge-levels'))
    return Array.isArray(v) ? v.filter(x => typeof x === 'string') : []
  })
  const pxRef = useRef(DODGE_W / 2)
  const pyRef = useRef(360)
  const bulletsRef = useRef<DodgeBullet[]>([])
  const spawnRef = useRef(0)
  const timeRef = useRef(0)
  const invulnRef = useRef(0)
  const livesRef = useRef(3)
  const phaseRef = useRef<DodgePhase>('menu')
  const levelRef = useRef<DodgeLevelId>('normal')
  const keysRef = useRef<{ up: boolean; down: boolean; left: boolean; right: boolean }>({ up: false, down: false, left: false, right: false })
  const holdRef = useRef<{ up: boolean; down: boolean; left: boolean; right: boolean }>({ up: false, down: false, left: false, right: false })
  const dragRef = useRef(false)

  useEffect(() => {
    phaseRef.current = phase
    levelRef.current = level
  })

  const levelCfg = (id: DodgeLevelId) => DODGE_LEVELS.find(l => l.id === id) ?? DODGE_LEVELS[0]
  const arena = { x0: 70, y0: 110, x1: DODGE_W - 70, y1: DODGE_H - 90 }

  const startLevel = (id: DodgeLevelId) => {
    const cfg = levelCfg(id)
    pxRef.current = DODGE_W / 2
    pyRef.current = 360
    bulletsRef.current = []
    spawnRef.current = 0.5
    timeRef.current = cfg.time
    invulnRef.current = 0
    livesRef.current = 3
    setLives(3)
    setTimeLeft(cfg.time)
    setLevel(id)
    setPhase('playing')
  }

  const endGame = () => {
    setPhase('over')
  }

  const clearLevel = () => {
    setPhase('clear')
    setCompleted(prev => {
      const id = levelRef.current
      const next = prev.includes(id) ? prev : [...prev, id]
      safeSet('hablemos-claro-dodge-levels', JSON.stringify(next))
      if (next.length >= 3) onDodgeAllComplete?.()
      return next
    })
  }

  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const bg = ctx.createLinearGradient(0, 0, 0, DODGE_H)
    bg.addColorStop(0, '#141126')
    bg.addColorStop(1, '#0b1020')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, DODGE_W, DODGE_H)
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'
    ctx.lineWidth = 3
    ctx.strokeRect(arena.x0, arena.y0, arena.x1 - arena.x0, arena.y1 - arena.y0)
    ctx.font = '22px serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    bulletsRef.current.forEach(b => {
      ctx.fillText(b.emoji, b.x, b.y)
    })
    if (phaseRef.current !== 'menu') {
      const blink = invulnRef.current > 0 && Math.floor(performance.now() / 150) % 2 === 0
      ctx.globalAlpha = blink ? 0.4 : 1
      ctx.font = '30px serif'
      ctx.fillText('â¤ï¸', pxRef.current, pyRef.current)
      ctx.globalAlpha = 1
    }
  }

  const canvasPos = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const r = canvas.getBoundingClientRect()
    return {
      x: ((clientX - r.left) / Math.max(1, r.width)) * DODGE_W,
      y: ((clientY - r.top) / Math.max(1, r.height)) * DODGE_H,
    }
  }

  useEffect(() => {
    draw()
  }, [])

  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const loop = (t: number) => {
      const dt = Math.min(0.033, Math.max(0.001, (t - last) / 1000))
      last = t
      if (phaseRef.current === 'playing') {
        const cfg = levelCfg(levelRef.current)
        const sp = 270
        const k = keysRef.current
        const h = holdRef.current
        let mx = 0
        let my = 0
        if (k.left || h.left) mx -= 1
        if (k.right || h.right) mx += 1
        if (k.up || h.up) my -= 1
        if (k.down || h.down) my += 1
        if (mx !== 0 || my !== 0) {
          const len = Math.hypot(mx, my)
          pxRef.current += (mx / len) * sp * dt
          pyRef.current += (my / len) * sp * dt
        }
        pxRef.current = Math.max(arena.x0 + 14, Math.min(arena.x1 - 14, pxRef.current))
        pyRef.current = Math.max(arena.y0 + 14, Math.min(arena.y1 - 14, pyRef.current))
        spawnRef.current -= dt
        if (spawnRef.current <= 0) {
          spawnRef.current = cfg.spawn
          const side = Math.floor(Math.random() * 4)
          const bx = side === 0 ? arena.x0 + Math.random() * (arena.x1 - arena.x0) : side === 1 ? arena.x0 + Math.random() * (arena.x1 - arena.x0) : side === 2 ? arena.x0 : arena.x1
          const by = side === 0 ? arena.y0 : side === 1 ? arena.y1 : arena.y0 + Math.random() * (arena.y1 - arena.y0)
          const ang = Math.atan2(pyRef.current - by, pxRef.current - bx) + (Math.random() - 0.5) * 0.5
          const spd = cfg.bspd * (0.85 + Math.random() * 0.3)
          const pool = ['ðŸ’°', 'ðŸƒ', 'ðŸ’¸']
          const emoji = pool[Math.floor(Math.random() * pool.length)] ?? 'ðŸ’°'
          bulletsRef.current.push({ x: bx, y: by, vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd, emoji })
        }
        const kept: DodgeBullet[] = []
        for (const b of bulletsRef.current) {
          b.x += b.vx * dt
          b.y += b.vy * dt
          if (b.x > -30 && b.x < DODGE_W + 30 && b.y > -30 && b.y < DODGE_H + 30) kept.push(b)
        }
        bulletsRef.current = kept
        if (invulnRef.current > 0) invulnRef.current -= dt
        else {
          for (const b of bulletsRef.current) {
            const dx = b.x - pxRef.current
            const dy = b.y - pyRef.current
            if (dx * dx + dy * dy < 24 * 24) {
              livesRef.current -= 1
              setLives(livesRef.current)
              invulnRef.current = 1
              bulletsRef.current = []
              if (livesRef.current <= 0) {
                endGame()
              }
              break
            }
          }
        }
        timeRef.current -= dt
        setTimeLeft(Math.max(0, Math.ceil(timeRef.current)))
        if (timeRef.current <= 0) {
          clearLevel()
        }
      }
      draw()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k.startsWith('arrow')) e.preventDefault()
      if (k === 'arrowup' || k === 'w') keysRef.current.up = true
      else if (k === 'arrowdown' || k === 's') keysRef.current.down = true
      else if (k === 'arrowleft' || k === 'a') keysRef.current.left = true
      else if (k === 'arrowright' || k === 'd') keysRef.current.right = true
    }
    const onKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === 'arrowup' || k === 'w') keysRef.current.up = false
      else if (k === 'arrowdown' || k === 's') keysRef.current.down = false
      else if (k === 'arrowleft' || k === 'a') keysRef.current.left = false
      else if (k === 'arrowright' || k === 'd') keysRef.current.right = false
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 flex-wrap">
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">â¤ï¸ {lives}</div>
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">â±ï¸ {timeLeft}s</div>
        <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">ðŸ… {completed.length}/3</div>
      </div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={DODGE_W}
          height={DODGE_H}
          className="w-full h-auto rounded-[20px] border-4 border-white shadow-xl shadow-indigo-500/10 touch-none select-none"
          onPointerDown={e => {
            if (phaseRef.current !== 'playing') return
            const p = canvasPos(e.clientX, e.clientY)
            if (!p) return
            dragRef.current = true
            pxRef.current = Math.max(arena.x0 + 14, Math.min(arena.x1 - 14, p.x))
            pyRef.current = Math.max(arena.y0 + 14, Math.min(arena.y1 - 14, p.y))
          }}
          onPointerMove={e => {
            if (!dragRef.current || phaseRef.current !== 'playing') return
            const p = canvasPos(e.clientX, e.clientY)
            if (!p) return
            pxRef.current = Math.max(arena.x0 + 14, Math.min(arena.x1 - 14, p.x))
            pyRef.current = Math.max(arena.y0 + 14, Math.min(arena.y1 - 14, p.y))
          }}
          onPointerUp={() => { dragRef.current = false }}
          onPointerCancel={() => { dragRef.current = false }}
          onPointerLeave={() => { dragRef.current = false }}
        />
        {phase !== 'playing' && (
          <div className="absolute inset-0 rounded-[20px] bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 text-center overflow-y-auto">
            {phase === 'menu' && (
              <>
                <div className="text-5xl">ðŸ’œ</div>
                <p className="text-white text-2xl font-black leading-snug">CorazÃ³n Valiente</p>
                <p className="text-white/80 text-sm font-bold leading-relaxed">Esquiva los ataques sin salir de la arena Â· Completa los 3 niveles</p>
                <div className="flex flex-col gap-2 w-full max-w-[280px]">
                  {DODGE_LEVELS.map(lv => (
                    <button
                      key={lv.id}
                      onClick={() => startLevel(lv.id)}
                      className="w-full py-3 px-4 rounded-2xl font-black text-white bg-white/15 border border-white/25 hover:bg-white/25 active:scale-95 transition-all flex items-center justify-between"
                    >
                      <span>{lv.label}</span>
                      <span className="text-sm">{completed.includes(lv.id) ? 'âœ…' : `${lv.time}s`}</span>
                    </button>
                  ))}
                </div>
                <p className="text-white/60 text-xs font-bold leading-relaxed">Flechas / WASD Â· Arrastra en celular</p>
              </>
            )}
            {phase === 'clear' && (
              <>
                <div className="text-5xl">ðŸŽ‰</div>
                <p className="text-white text-2xl font-black leading-snug">Â¡Nivel superado!</p>
                <p className="text-white/90 font-bold leading-relaxed">Completados: {completed.length}/3 niveles</p>
                <p className="text-white/80 text-sm font-bold leading-relaxed">{completed.length >= 3 ? 'ðŸ… Â¡Insignia CorazÃ³n Valiente desbloqueada!' : 'Sigue con el siguiente nivel'}</p>
                <div className="flex flex-col gap-2 w-full max-w-[280px]">
                  <button
                    onClick={() => setPhase('menu')}
                    className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg w-full"
                  >
                    Niveles â–¶
                  </button>
                  <button
                    onClick={() => startLevel(level)}
                    className="bg-white/15 border border-white/25 text-white font-bold py-3 px-8 rounded-full w-full hover:bg-white/25"
                  >
                    â†» Repetir nivel
                  </button>
                </div>
              </>
            )}
            {phase === 'over' && (
              <>
                <div className="text-5xl">ðŸ’”</div>
                <p className="text-white text-2xl font-black leading-snug">Â¡Te alcanzaron!</p>
                <p className="text-white/80 text-sm font-bold leading-relaxed">IntÃ©ntalo de nuevo, valiente</p>
                <button
                  onClick={() => startLevel(level)}
                  className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full text-lg w-full max-w-[280px]"
                >
                  â†» Reintentar
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 max-w-[240px] mx-auto snake-dpad">
        <span />
        <button aria-label="Arriba" className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10 select-none touch-none" onPointerDown={() => { holdRef.current.up = true }} onPointerUp={() => { holdRef.current.up = false }} onPointerLeave={() => { holdRef.current.up = false }} onPointerCancel={() => { holdRef.current.up = false }}>â–²</button>
        <span />
        <button aria-label="Izquierda" className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10 select-none touch-none" onPointerDown={() => { holdRef.current.left = true }} onPointerUp={() => { holdRef.current.left = false }} onPointerLeave={() => { holdRef.current.left = false }} onPointerCancel={() => { holdRef.current.left = false }}>â—€</button>
        <button aria-label="Abajo" className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10 select-none touch-none" onPointerDown={() => { holdRef.current.down = true }} onPointerUp={() => { holdRef.current.down = false }} onPointerLeave={() => { holdRef.current.down = false }} onPointerCancel={() => { holdRef.current.down = false }}>â–¼</button>
        <button aria-label="Derecha" className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-primary/10 select-none touch-none" onPointerDown={() => { holdRef.current.right = true }} onPointerUp={() => { holdRef.current.right = false }} onPointerLeave={() => { holdRef.current.right = false }} onPointerCancel={() => { holdRef.current.right = false }}>â–¶</button>
      </div>
      <p className="text-center text-xs font-bold text-slate-400 mt-3">Flechas / WASD Â· Arrastra o usa los botones en celular</p>
    </div>
  )
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// PLATAFORMAS Â· "Tuki y los 10 Niveles"
// Juego de plataformas: 10 niveles con castillo y bandera, y el gran jefe
// Duoli esperando dentro del castillo en el nivel 10.
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PT_TILE = 32
const PT_ROWS = 15
const PT_VIEW_W = 960
const PT_VIEW_H = PT_ROWS * PT_TILE
const PT_TOTAL = 10
const PT_GRAVITY = 0.86
const PT_JUMP_V = -15.4
const PT_FALL_MAX = 17
const PT_RUN = 4.5
const PT_ACCEL = 0.55
const PT_FRICTION = 0.32
const PT_STOMP_V = -12.4
const PT_PW = 24
const PT_PH = 30
const PT_LIVES = 3
const PT_TIME = 320
const PT_FLAG_BONUS = 2200
const PT_BOSS_MAX_HP = 3

type PtTheme = 'dia' | 'tarde' | 'noche' | 'castillo'

type PtBlock = { x: number; y: number; kind: 'ladrillo' | 'pregunta'; give: 'valor' | 'corazon' | 'estrella'; used: boolean; bump: number }
type PtPipe = { x: number; h: number }
type PtPlat = { x: number; y: number; w: number }
type PtEnemy = { x: number; y: number; vy: number; dir: number; kind: 'caminante' | 'espinoso'; alive: boolean; t: number; patrol: number }
type PtItem = { x: number; y: number; vy: number; kind: 'valor' | 'corazon' | 'estrella'; alive: boolean; t: number }
type PtFire = { x: number; y: number; vx: number; vy: number; alive: boolean }
type PtBoss = { x: number; y: number; vy: number; dir: number; hp: number; hurt: number; alive: boolean; t: number }

type PtLevel = {
  n: number
  w: number
  theme: PtTheme
  solid: boolean[][]
  deco: boolean[][]
  enemyV: number
  groundTop: number
  blocks: PtBlock[]
  pipes: PtPipe[]
  plats: PtPlat[]
  enemies: PtEnemy[]
  items: PtItem[]
  fire: PtFire[]
  flagX: number
  castleX: number
  boss: PtBoss | null
}

type PtPlayer = { x: number; y: number; vx: number; vy: number; onGround: boolean; face: number; coyote: number; jumpBuf: number; inv: number; star: number; anim: number }

function ptRng(seed: number) {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13
    s >>>= 0
    s ^= s >>> 17
    s ^= s << 5
    s >>>= 0
    return s / 4294967296
  }
}

function buildPtLevel(n: number): PtLevel {
  const rnd = ptRng((0x5f3a1c + n * 2654435761) >>> 0)
  const isBoss = n === PT_TOTAL
  // Los enemigos aceleran con el nivel: son mas rapidos cuanto mas se avanza.
  const enemyV = 1.5 + n * 0.08
  const rows = PT_ROWS
  const w = isBoss ? 88 : 126 + n * 12
  const theme: PtTheme = isBoss ? 'castillo' : n <= 3 ? 'dia' : n <= 6 ? 'tarde' : 'noche'
  const solid: boolean[][] = Array.from({ length: rows }, () => new Array(w).fill(false))
  const groundTop = rows - 2
  // Zona de meta: a partir de la bandera no hay enemigos ni items, para que
  // cruzar la meta sea limpio y no aparezca nada sorpresa tras la bandera.
  const playableW = w - 26

  for (let x = 0; x < w; x++) {
    for (let y = groundTop; y < rows; y++) solid[y][x] = true
  }

  const gaps: Array<[number, number]> = []
  if (!isBoss) {
    let x = 20
    const limit = playableW
    // mas huecos en niveles altos: sube la probabilidad deuno
    const gapChance = 0.42 + n * 0.022
    while (x < limit) {
      if (rnd() < gapChance) {
        const gw = 1 + Math.floor(rnd() * 3)
        for (let g = x; g < x + gw; g++) for (let y = groundTop; y < rows; y++) solid[y][g] = false
        gaps.push([x, x + gw])
        x += gw + 5 + Math.floor(rnd() * 7)
      } else {
        x += 4 + Math.floor(rnd() * 8)
      }
    }
  }
  const onGap = (x: number, span = 1) => gaps.some(([a, b]) => x + span > a && x < b)
  const onSolidGround = (x: number) => x >= 0 && x < w && solid[groundTop][x]

  const blocks: PtBlock[] = []
  const blockClusters = isBoss ? 0 : 3 + n
  for (let c = 0; c < blockClusters; c++) {
    const bx = 14 + Math.floor(rnd() * (w - 46))
    const by = groundTop - 4 - Math.floor(rnd() * 3)
    const run = 2 + Math.floor(rnd() * 4)
    for (let k = 0; k < run; k++) {
      const col = bx + k
      if (col < 4 || col > w - 30) continue
      if (onGap(col)) continue
      const isQ = rnd() < 0.34
      const give: PtBlock['give'] = isQ ? (rnd() < 0.72 ? 'valor' : rnd() < 0.55 ? 'corazon' : 'estrella') : 'valor'
      if (solid[by][col]) continue
      solid[by][col] = true
      blocks.push({ x: col, y: by, kind: isQ ? 'pregunta' : 'ladrillo', give, used: false, bump: 0 })
    }
  }

  const pipes: PtPipe[] = []
  const pipeCount = isBoss ? 0 : Math.min(2 + Math.floor(n / 3), 6)
  for (let c = 0; c < pipeCount; c++) {
    const px = 9 + Math.floor(rnd() * (w - 34))
    if (onGap(px, 2)) continue
    const ph = 2 + Math.floor(rnd() * 3)
    let blocked = false
    for (let k = 0; k < 2; k++) for (let y = groundTop - ph; y < groundTop; y++) if (solid[y][px + k]) blocked = true
    if (blocked) continue
    for (let k = 0; k < 2; k++) for (let y = groundTop - ph; y < groundTop; y++) solid[y][px + k] = true
    pipes.push({ x: px, h: ph })
  }

  const plats: PtPlat[] = []
  const platCount = isBoss ? 3 : 2 + Math.floor(n / 2)
  for (let c = 0; c < platCount; c++) {
    const px = 10 + Math.floor(rnd() * (w - 32))
    const py = groundTop - 5 - Math.floor(rnd() * 4)
    const pw = 3 + Math.floor(rnd() * 4)
    if (onGap(px, pw)) continue
    let blocked = false
    for (let k = 0; k < pw; k++) if (solid[py][px + k]) blocked = true
    if (blocked) continue
    for (let k = 0; k < pw; k++) solid[py][px + k] = true
    plats.push({ x: px, y: py, w: pw })
  }

  // Los espinosos no se pueden pisotear: tocarlos es muerte. Se limitan a un
  // maximo por nivel y nunca junto a un hueco, para que siempre se puedan esquivar.
  const maxSpiky = Math.min(1 + Math.floor(n / 3), 4)
  let spiky = 0
  const enemies: PtEnemy[] = []
  const enemyCount = isBoss ? 0 : 5 + n * 2
  for (let c = 0; c < enemyCount * 2 && enemies.length < enemyCount; c++) {
    const ex = 16 + Math.floor(rnd() * (playableW - 40))
    if (!onSolidGround(ex) || onGap(ex, 2)) continue
    // espacio minimo entre enemigos: 5 columnas para que el nivel sea legible
    if (enemies.some(e => Math.abs(e.x / PT_TILE - ex) < 5)) continue
    // un espinoso pegado a un hueco deja poco margen para reactionar
    let nearGap = false
    for (let k = ex - 3; k <= ex + 3; k++) if (onGap(k)) nearGap = true
    // ni encima de un relieve: el jugador debe poder aterrizar tras saltar
    let onRelief = false
    for (let k = ex - 1; k <= ex + 1; k++) {
      for (let r = groundTop - 1; r >= groundTop - 3; r--) if (solid[r][k]) onRelief = true
    }
    const wantSpiky = n >= 3 && spiky < maxSpiky && !nearGap && !onRelief && rnd() < 0.42
    const kind: PtEnemy['kind'] = wantSpiky ? 'espinoso' : 'caminante'
    if (wantSpiky) spiky++
    enemies.push({ x: ex * PT_TILE, y: (groundTop - 1) * PT_TILE + 4, vy: 0, dir: rnd() < 0.5 ? -1 : 1, kind, alive: true, t: Math.floor(rnd() * 90), patrol: ex })
  }

  const items: PtItem[] = []
  const itemCount = isBoss ? 4 : 3 + n
  for (let c = 0; c < itemCount; c++) {
    const ix = 12 + Math.floor(rnd() * (playableW - 32))
    if (onGap(ix)) continue
    const kind: PtItem['kind'] = rnd() < 0.7 ? 'valor' : rnd() < 0.5 ? 'corazon' : 'estrella'
    items.push({ x: ix * PT_TILE + 4, y: (groundTop - 4) * PT_TILE, vy: 0, kind, alive: true, t: 0 })
  }

  const flagX = w - 24
  const castleX = w - 13

  // Altura maxima de salto = PT_JUMP_V^2 / (2 * PT_GRAVITY) ~= 4.3 tiles.
  // Todo lo que se acumule sobre el suelo debe quedar en 3 tiles o menos
  // para que el nivel siempre sea franqueable, sin saltos imposibles.
  for (let c = 0; c < w; c++) {
    let stack = 0
    for (let r = groundTop - 1; r >= 0; r--) {
      if (!solid[r][c]) break
      stack++
    }
    if (stack <= 3) continue
    for (let k = 3; k < stack; k++) solid[groundTop - 1 - k][c] = false
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (!solid[blocks[i].y][blocks[i].x]) blocks.splice(i, 1)
  }
  for (let i = pipes.length - 1; i >= 0; i--) {
    const p = pipes[i]
    if (!solid[groundTop - 1][p.x] || !solid[groundTop - 1][p.x + 1]) pipes.splice(i, 1)
  }
  for (let i = plats.length - 1; i >= 0; i--) {
    const pl = plats[i]
    let intact = true
    for (let k = 0; k < pl.w; k++) if (!solid[pl.y][pl.x + k]) intact = false
    if (!intact) plats.splice(i, 1)
  }
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i]
    if (!solid[groundTop][Math.floor((e.x + 13) / PT_TILE)]) enemies.splice(i, 1)
  }
  // un enemigo no puede quedar incrustado dentro de una tuberia, plataforma o bloque
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i]
    const c0 = Math.floor(e.x / PT_TILE)
    const c1 = Math.floor((e.x + 25) / PT_TILE)
    const r0 = Math.floor(e.y / PT_TILE)
    const r1 = Math.floor((e.y + 27) / PT_TILE)
    let stuck = false
    for (let c = c0; c <= c1 && !stuck; c++) for (let r = r0; r <= r1; r++) if (solid[r][c]) { stuck = true; break }
    if (stuck) enemies.splice(i, 1)
  }
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i]
    if (!solid[groundTop][Math.floor((it.x + 12) / PT_TILE)]) items.splice(i, 1)
  }
  const boss: PtBoss | null = isBoss
    ? { x: 52 * PT_TILE, y: (groundTop - 3) * PT_TILE, vy: 0, dir: -1, hp: PT_BOSS_MAX_HP, hurt: 0, alive: true, t: 60 }
    : null

  // Mascara de decoracion: celdas que dibujan bloques, tuberias y plataformas.
  // El suelo se pinta en el bucle general de tiles, estas tienen su propio dibujo.
  const deco: boolean[][] = Array.from({ length: rows }, () => new Array(w).fill(false))
  for (const b of blocks) deco[b.y][b.x] = true
  for (const pi of pipes) {
    for (let k = 0; k < 2; k++) for (let y = groundTop - pi.h; y < groundTop; y++) deco[y][pi.x + k] = true
  }
  for (const pl of plats) for (let k = 0; k < pl.w; k++) deco[pl.y][pl.x + k] = true

  return { n, w, theme, solid, deco, enemyV, groundTop, blocks, pipes, plats, enemies, items, fire: [], flagX, castleX, boss }
}

const PT_PALETTES: Record<PtTheme, {
  sky: [string, string]
  far: string
  ground: string
  dirt: string
  brick: string
  block: string
  castle: string
  text: string
}> = {
  dia: { sky: ['#5cc6f5', '#bfeaff'], far: '#7ec850', ground: '#5fbf3f', dirt: '#a86a3d', brick: '#c2703c', block: '#ffb02e', castle: '#b0705a', text: '#0b3a52' },
  tarde: { sky: ['#f79c42', '#ffd9a0'], far: '#8a5f3a', ground: '#4f9a35', dirt: '#8a5432', brick: '#b5622f', block: '#ff9f2e', castle: '#9a5f4c', text: '#4a2410' },
  noche: { sky: ['#152a56', '#3b5a8f'], far: '#26355c', ground: '#2f7a3d', dirt: '#4a3f52', brick: '#7a4a34', block: '#e0a53a', castle: '#6d5568', text: '#dbe7ff' },
  castillo: { sky: ['#1a1526', '#2e2338'], far: '#241c30', ground: '#5a5468', dirt: '#2a2434', brick: '#6a5f76', block: '#c08a3a', castle: '#8a7f96', text: '#f0e6ff' },
}

function PlatformGame({ onLevelCleared, onAllCleared, onBest }: {
  onLevelCleared?: (n: number) => void
  onAllCleared?: () => void
  onBest?: (score: number) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<'select' | 'play' | 'dead' | 'clear'>('select')
  const [level, setLevel] = useState(1)
  const [lives, setLives] = useState(PT_LIVES)
  const [values, setValues] = useState(0)
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(PT_TIME)
  const [cleared, setCleared] = useState<number[]>(() => {
    const v = safeParse(safeGet('hablemos-claro-plat-niveles'))
    return Array.isArray(v) ? v.filter(x => typeof x === 'number') as number[] : []
  })
  const [best, setBest] = useState(() => parseInt(safeGet('hablemos-claro-plat-best') ?? '0', 10) || 0)
  const [isFs, setIsFs] = useState(false)
  const [hint, setHint] = useState('')
  const holdRef = useRef({ left: false, right: false, jump: false })
  const phaseRef = useRef(phase)
  const levelRef = useRef(level)

  const gRef = useRef<{
    lv: PtLevel
    p: PtPlayer
    cam: number
    values: number
    score: number
    time: number
    lives: number
    flagPhase: 'jugando' | 'bajada' | 'caminando'
    bump: { x: number; y: number; t: number } | null
    deaths: number
  } | null>(null)

  const clearedRef = useRef<number[]>([])

  useEffect(() => {
    phaseRef.current = phase
    levelRef.current = level
    clearedRef.current = cleared
  }, [phase, level, cleared])

  const solidAt = (lv: PtLevel, col: number, row: number) => {
    if (row < 0) return false
    if (row >= PT_ROWS) return true
    if (col < 0 || col >= lv.w) return true
    return lv.solid[row][col]
  }

  const buildRun = (n: number) => {
    const lv = buildPtLevel(n)
    gRef.current = {
      lv,
      p: { x: 3 * PT_TILE, y: (lv.groundTop - 2) * PT_TILE, vx: 0, vy: 0, onGround: false, face: 1, coyote: 0, jumpBuf: 0, inv: 0, star: 0, anim: 0 },
      cam: 0,
      values: 0,
      score: 0,
      time: PT_TIME,
      lives: PT_LIVES,
      flagPhase: 'jugando',
      bump: null,
      deaths: 0,
    }
    setValues(0)
    setScore(0)
    setTime(PT_TIME)
    setLives(PT_LIVES)
    setLevel(n)
    setPhase('play')
    setHint('Nivel ' + n + (n === PT_TOTAL ? ' Â· Â¡Duoli te espera!' : ''))
  }

  const openLevel = (n: number) => {
    if (n === PT_TOTAL && !cleared.includes(PT_TOTAL - 1)) {
      setHint('Completa el nivel 9 para enfrentar a Duoli');
      window.setTimeout(() => setHint(''), 2200)
      return
    }
    buildRun(n)
  }

  const die = () => {
    const g = gRef.current
    if (!g) return
    g.lives -= 1
    g.deaths += 1
    setLives(g.lives)
    if (g.lives <= 0) {
      setPhase('dead')
      return
    }
    const lv = g.lv
    g.p = { x: 3 * PT_TILE, y: (lv.groundTop - 2) * PT_TILE, vx: 0, vy: 0, onGround: false, face: 1, coyote: 0, jumpBuf: 0, inv: 90, star: 0, anim: 0 }
    g.cam = 0
    g.flagPhase = 'jugando'
    g.values = 0
    g.time = PT_TIME
    setValues(0)
    setTime(PT_TIME)
  }

  const finishLevel = () => {
    const g = gRef.current
    if (!g) return
    const bonus = Math.floor(g.time) * 12 + g.lives * 400
    const total = g.score + bonus
    g.score = total
    setScore(total)
    if (total > best) {
      setBest(total)
      safeSet('hablemos-claro-plat-best', String(total))
      onBest?.(total)
    }
    const n = g.lv.n
    let next: number[] = []
    setCleared(prev => {
      next = prev.includes(n) ? prev : [...prev, n].sort((a, b) => a - b)
      safeSet('hablemos-claro-plat-niveles', JSON.stringify(next))
      return next
    })
    // Se pasa el conteo ya calculado: leer localStorage aqui podria dar el valor viejo
    // porque el actualizador de setState todavia no se ha ejecutado.
    const known = new Set(clearedRef.current)
    known.add(n)
    onLevelCleared?.(known.size)
    setPhase('clear')
  }

  const toggleFs = () => {
    const el = wrapRef.current
    if (!el) return
    if (typeof document !== 'undefined' && document.fullscreenElement) {
      const p = document.exitFullscreen() as unknown as Promise<void> | undefined
      if (p && typeof p.catch === 'function') p.catch(() => undefined)
      setIsFs(false)
    } else {
      try {
        const req = el.requestFullscreen ? el.requestFullscreen() : (el as unknown as { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen?.call(el)
        if (req && typeof (req as unknown as { catch?: unknown }).catch === 'function') (req as unknown as Promise<void>).catch(() => undefined)
      } catch { /* respaldo visual */ }
      setIsFs(true)
    }
  }

  useEffect(() => {
    const onFs = () => setIsFs(!!(typeof document !== 'undefined' && document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFs)
    document.addEventListener('webkitfullscreenchange', onFs as EventListener)
    return () => {
      document.removeEventListener('fullscreenchange', onFs)
      document.removeEventListener('webkitfullscreenchange', onFs as EventListener)
    }
  }, [])

  const draw = () => {
    const cvs = canvasRef.current
    const g = gRef.current
    if (!cvs) return
    const ctx = cvs.getContext('2d')
    if (!ctx || !g) return
    const lv = g.lv
    const pal = PT_PALETTES[lv.theme]
    const p = g.p

    const sky = ctx.createLinearGradient(0, 0, 0, PT_VIEW_H)
    sky.addColorStop(0, pal.sky[0])
    sky.addColorStop(1, pal.sky[1])
    ctx.fillStyle = sky
    ctx.fillRect(0, 0, PT_VIEW_W, PT_VIEW_H)

    ctx.fillStyle = pal.far
    ctx.globalAlpha = lv.theme === 'castillo' ? 0.5 : 0.85
    for (let i = 0; i < 14; i++) {
      const bx = i * 90 - (g.cam * 0.35) % 90 - 90
      const bh = 60 + ((i * 37) % 70)
      ctx.beginPath()
      ctx.moveTo(bx, PT_VIEW_H)
      ctx.quadraticCurveTo(bx + 45, PT_VIEW_H - bh, bx + 90, PT_VIEW_H)
      ctx.fill()
    }
    ctx.globalAlpha = 1

    if (lv.theme === 'noche') {
      ctx.fillStyle = 'rgba(255,255,255,0.75)'
      for (let i = 0; i < 40; i++) {
        const sx = (i * 137 - g.cam * 0.2) % PT_VIEW_W
        const sy = (i * 61) % 200 + 10
        if (sx < 0) continue
        ctx.fillRect(sx, sy, 2, 2)
      }
      ctx.beginPath()
      ctx.arc(150 - (g.cam * 0.2) % 400, 78, 26, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      ctx.fill()
    } else if (lv.theme === 'dia' || lv.theme === 'tarde') {
      ctx.fillStyle = lv.theme === 'dia' ? 'rgba(255,240,180,0.95)' : 'rgba(255,170,80,0.95)'
      ctx.beginPath()
      ctx.arc(820 - (g.cam * 0.2) % 500, lv.theme === 'dia' ? 62 : 150, 30, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      for (let i = 0; i < 6; i++) {
        const cx2 = i * 200 - (g.cam * 0.4) % 200 - 100
        const cy2 = 50 + ((i * 53) % 70)
        if (cx2 < -80) continue
        ctx.beginPath()
        ctx.arc(cx2, cy2, 22, 0, Math.PI * 2)
        ctx.arc(cx2 + 24, cy2 + 6, 18, 0, Math.PI * 2)
        ctx.arc(cx2 - 24, cy2 + 6, 18, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    if (lv.theme === 'castillo') {
      ctx.fillStyle = 'rgba(255,170,60,0.22)'
      for (let i = 0; i < 6; i++) {
        const tx = 60 + i * 170 - (g.cam * 0.6) % 170
        if (tx < -40) continue
        ctx.fillRect(tx, 96, 14, 22)
        ctx.beginPath()
        ctx.arc(tx + 7, 96, 9, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const cam = g.cam
    const ts = PT_TILE

    for (let col = Math.floor(cam / ts); col < Math.min(lv.w, Math.ceil((cam + PT_VIEW_W) / ts) + 1); col++) {
      for (let row = 0; row < PT_ROWS; row++) {
        if (!lv.solid[row][col]) continue
        if (lv.deco[row][col]) continue
        const x = col * ts - cam
        const y = row * ts
        if (row >= lv.groundTop) {
          ctx.fillStyle = pal.dirt
          ctx.fillRect(x, y, ts, ts)
          ctx.fillStyle = pal.ground
          if (row === lv.groundTop) ctx.fillRect(x, y, ts, 7)
        } else if (row === lv.groundTop - 1) {
          ctx.fillStyle = pal.dirt
          ctx.fillRect(x, y, ts, ts)
        } else {
          ctx.fillStyle = pal.brick
          ctx.fillRect(x, y, ts, ts)
          ctx.strokeStyle = 'rgba(0,0,0,0.16)'
          ctx.lineWidth = 2
          ctx.strokeRect(x + 1, y + 1, ts - 2, ts - 2)
        }
      }
    }

    for (const pl of lv.plats) {
      const x = pl.x * ts - cam
      ctx.fillStyle = pal.brick
      ctx.fillRect(x, pl.y * ts, pl.w * ts, 12)
      ctx.fillStyle = 'rgba(255,255,255,0.16)'
      ctx.fillRect(x, pl.y * ts, pl.w * ts, 4)
    }

    for (const pi of lv.pipes) {
      const x = pi.x * ts - cam
      const h = pi.h * ts
      const y = lv.groundTop * ts - h
      ctx.fillStyle = '#2f9e44'
      ctx.fillRect(x, y, ts * 2, h)
      ctx.fillStyle = '#37b24d'
      ctx.fillRect(x, y, 14, h)
      ctx.fillStyle = '#1e7a32'
      ctx.fillRect(x + ts * 2 - 10, y, 10, h)
      ctx.fillStyle = '#2f9e44'
      ctx.fillRect(x - 5, y, ts * 2 + 10, 16)
      ctx.fillStyle = '#48c95e'
      ctx.fillRect(x - 5, y, 9, 16)
    }

    for (const b of lv.blocks) {
      const by = b.y * ts - (b.bump > 0 ? Math.sin((b.bump / 8) * Math.PI) * 7 : 0)
      const x = b.x * ts - cam
      const y = by
      if (b.kind === 'ladrillo') {
        ctx.fillStyle = pal.brick
        ctx.fillRect(x, y, ts, ts)
        ctx.strokeStyle = 'rgba(0,0,0,0.22)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x, y + ts / 2)
        ctx.lineTo(x + ts, y + ts / 2)
        ctx.moveTo(x + ts / 2, y)
        ctx.lineTo(x + ts / 2, y + ts / 2)
        ctx.moveTo(x + ts / 4, y + ts / 2)
        ctx.lineTo(x + ts / 4, y + ts)
        ctx.stroke()
      } else {
        ctx.fillStyle = b.used ? '#8a8a8a' : pal.block
        ctx.fillRect(x, y, ts, ts)
        ctx.strokeStyle = 'rgba(0,0,0,0.25)'
        ctx.lineWidth = 2
        ctx.strokeRect(x + 1, y + 1, ts - 2, ts - 2)
        if (!b.used) {
          ctx.fillStyle = 'rgba(255,255,255,0.9)'
          ctx.font = 'bold 20px Fredoka, sans-serif'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('?', x + ts / 2, y + ts / 2 + 1)
        }
      }
    }

    const castleX = lv.castleX * ts - cam
    ctx.fillStyle = pal.castle
    ctx.fillRect(castleX, lv.groundTop * ts - 96, 160, 96)
    for (let i = 0; i < 5; i++) ctx.fillRect(castleX + i * 36, lv.groundTop * ts - 112, 22, 18)
    ctx.fillStyle = 'rgba(0,0,0,0.45)'
    ctx.beginPath()
    ctx.arc(castleX + 80, lv.groundTop * ts - 34, 22, Math.PI, 0)
    ctx.lineTo(castleX + 102, lv.groundTop * ts)
    ctx.lineTo(castleX + 58, lv.groundTop * ts)
    ctx.fill()
    ctx.fillStyle = pal.castle
    ctx.fillRect(castleX + 74, lv.groundTop * ts - 76, 12, 22)

    const bossDown = lv.boss ? !lv.boss.alive : false
    const flagTop = lv.groundTop * ts - 168
    const fx = lv.flagX * ts - cam
    ctx.fillStyle = '#d8d8e0'
    ctx.fillRect(fx + 14, flagTop, 5, 168)
    ctx.fillStyle = '#a0a0b0'
    ctx.fillRect(fx + 14, flagTop, 2, 168)
    ctx.fillStyle = bossDown ? '#f5f5f5' : '#22c55e'
    const flagY = g.flagPhase === 'jugando' && !bossDown ? flagTop + 8 : lv.groundTop * ts - 40
    ctx.beginPath()
    ctx.moveTo(fx + 19, flagY)
    ctx.lineTo(fx + 60, flagY + 16)
    ctx.lineTo(fx + 19, flagY + 32)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(fx + 16, flagTop - 4, 7, 0, Math.PI * 2)
    ctx.fill()

    for (const it of lv.items) {
      if (!it.alive) continue
      const x = it.x - cam
      const y = it.y + Math.sin(it.t / 12) * 3
      if (it.kind === 'valor') {
        ctx.fillStyle = '#ffd23f'
        ctx.beginPath()
        ctx.arc(x + 10, y + 10, 10, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#f0a500'
        ctx.beginPath()
        ctx.arc(x + 10, y + 10, 6, 0, Math.PI * 2)
        ctx.fill()
      } else if (it.kind === 'corazon') {
        ctx.fillStyle = '#ef4444'
        ctx.beginPath()
        ctx.arc(x + 6, y + 8, 7, 0, Math.PI * 2)
        ctx.arc(x + 16, y + 8, 7, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillRect(x + 4, y + 8, 14, 10)
      } else {
        ctx.fillStyle = '#fbbf24'
        ctx.beginPath()
        for (let k = 0; k < 10; k++) {
          const r = k % 2 === 0 ? 12 : 5
          const a = (Math.PI / 5) * k - Math.PI / 2
          const px3 = x + 11 + Math.cos(a) * r
          const py3 = y + 11 + Math.sin(a) * r
          if (k === 0) ctx.moveTo(px3, py3)
          else ctx.lineTo(px3, py3)
        }
        ctx.closePath()
        ctx.fill()
      }
    }

    for (const en of lv.enemies) {
      if (!en.alive) continue
      const x = en.x - cam
      const y = en.y
      const sq = en.t % 20 < 10
      if (en.kind === 'espinoso') {
        ctx.fillStyle = '#7c2d12'
        ctx.beginPath()
        ctx.moveTo(x, y + 8)
        ctx.lineTo(x + 13, y)
        ctx.lineTo(x + 26, y + 8)
        ctx.lineTo(x + 26, y + 26)
        ctx.lineTo(x, y + 26)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = '#fbbf24'
        ctx.beginPath()
        ctx.arc(x + 9, y + 16, 2.6, 0, Math.PI * 2)
        ctx.arc(x + 17, y + 16, 2.6, 0, Math.PI * 2)
        ctx.fill()
      } else {
        ctx.fillStyle = sq ? '#38bdf8' : '#0ea5e9'
        ctx.beginPath()
        ctx.ellipse(x + 13, y + 17, 14, 15, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#f8fafc'
        ctx.beginPath()
        ctx.ellipse(x + 9, y + 9, 8, 7, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#0f172a'
        ctx.beginPath()
        ctx.arc(x + (en.dir > 0 ? 15 : 11), y + 15, 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#0284c7'
        ctx.fillRect(x + (sq ? 2 : 20), y + 24, 5, 8)
        ctx.fillRect(x + (sq ? 20 : 2), y + 24, 5, 8)
      }
    }

    for (const f of lv.fire) {
      if (!f.alive) continue
      ctx.fillStyle = '#f97316'
      ctx.beginPath()
      ctx.arc(f.x - cam, f.y, 7, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#fde047'
      ctx.beginPath()
      ctx.arc(f.x - cam, f.y, 3, 0, Math.PI * 2)
      ctx.fill()
    }

    const b = lv.boss
    if (b && b.alive) {
      const x = b.x - cam
      const y = b.y
      const wob = b.hurt > 0 ? 2 : 0
      ctx.fillStyle = b.hurt > 0 ? '#ffffff' : '#4ade80'
      ctx.beginPath()
      ctx.ellipse(x + 34 + wob, y + 52, 34, 32, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = b.hurt > 0 ? '#ffffff' : '#166534'
      ctx.beginPath()
      ctx.ellipse(x + 34 - wob, y + 58, 22, 22, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#fde047'
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.moveTo(x + 16 + i * 9, y + 40)
        ctx.lineTo(x + 20 + i * 9, y + 24)
        ctx.lineTo(x + 24 + i * 9, y + 40)
        ctx.closePath()
        ctx.fill()
      }
      ctx.fillStyle = b.hurt > 0 ? '#ffffff' : '#22c55e'
      ctx.beginPath()
      ctx.ellipse(x + 34, y + 30, 30, 24, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#b91c1c'
      ctx.fillRect(x + 16, y + 46, 36, 7)
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(x + 24, y + 26, 7, 0, Math.PI * 2)
      ctx.arc(x + 46, y + 26, 7, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#111827'
      ctx.beginPath()
      ctx.arc(x + 25, y + 27, 3, 0, Math.PI * 2)
      ctx.arc(x + 47, y + 27, 3, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#b45309'
      ctx.beginPath()
      ctx.moveTo(x + 6, y + 44)
      ctx.lineTo(x + 22, y + 38)
      ctx.lineTo(x + 22, y + 58)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = '#a16207'
      ctx.fillRect(x + 20, y + 66, 10, 20)
      ctx.fillRect(x + 40, y + 66, 10, 20)

      ctx.fillStyle = 'rgba(0,0,0,0.55)'
      ctx.fillRect(x - 6, y - 18, 84, 9)
      ctx.fillStyle = b.hp > 1 ? '#ef4444' : '#f97316'
      ctx.fillRect(x - 6, y - 18, (84 * b.hp) / PT_BOSS_MAX_HP, 9)
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 13px Fredoka, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'alphabetic'
      ctx.fillText('DUOLI', x + 36, y - 24)
    }

    if (g.flagPhase !== 'jugando' || p.inv <= 0 || Math.floor(g.deaths * 4 + performance.now() / 90) % 2 === 0) {
      const px = p.x - cam
      const py = p.y
      const run = p.onGround && Math.abs(p.vx) > 0.6
      const stepLeg = run ? (Math.floor(p.anim / 7) % 2 === 0 ? 3 : -3) : 0
      ctx.fillStyle = '#0f766e'
      ctx.fillRect(px + 5, py + 20, 5, 10 - stepLeg)
      ctx.fillRect(px + 14, py + 20, 5, 10 + stepLeg)
      ctx.fillStyle = '#7c2d12'
      ctx.beginPath()
      if (typeof ctx.roundRect === 'function') ctx.roundRect(px + 3, py + 12, 18, 12, 4)
      else ctx.rect(px + 3, py + 12, 18, 12)
      ctx.fill()
      ctx.fillStyle = '#06b6d4'
      ctx.beginPath()
      if (typeof ctx.roundRect === 'function') ctx.roundRect(px + 3, py + 6, 18, 9, 3)
      else ctx.rect(px + 3, py + 6, 18, 9)
      ctx.fill()
      ctx.fillStyle = '#fcd34d'
      ctx.fillRect(px + 1, py + 20, 22, 4)
      ctx.fillStyle = '#fde68a'
      ctx.beginPath()
      ctx.arc(px + 12, py + 2, 10, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#7c3aed'
      ctx.beginPath()
      ctx.arc(px + 12, py - 1, 11, Math.PI, 0)
      ctx.fill()
      ctx.fillRect(px + 1, py + 0, 22, 4)
      ctx.fillStyle = '#1f2937'
      ctx.beginPath()
      ctx.arc(px + 8 + p.face * 1.5, py + 3, 1.8, 0, Math.PI * 2)
      ctx.arc(px + 16 + p.face * 1.5, py + 3, 1.8, 0, Math.PI * 2)
      ctx.fill()
    }

    if (p.star > 0) {
      ctx.fillStyle = `rgba(251,191,36,${0.16 + 0.1 * Math.sin(performance.now() / 90)})`
      ctx.fillRect(0, 0, PT_VIEW_W, PT_VIEW_H)
    }

    ctx.fillStyle = 'rgba(0,0,0,0.42)'
    ctx.fillRect(0, 0, PT_VIEW_W, 30)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 15px Fredoka, sans-serif'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText('Nivel ' + lv.n + '/' + PT_TOTAL, 12, 15)
    ctx.textAlign = 'center'
    ctx.fillText('â˜… ' + g.values, PT_VIEW_W / 2, 15)
    ctx.textAlign = 'right'
    ctx.fillText('â± ' + Math.max(0, Math.floor(g.time)), PT_VIEW_W - 12, 15)
  }

  const step = () => {
    const g = gRef.current
    if (!g) return
    const lv = g.lv
    const p = g.p
    const keys = holdRef.current

    if (p.star > 0) p.star -= 1
    if (p.inv > 0) p.inv -= 1
    if (g.bump && g.bump.t > 0) g.bump.t -= 1
    for (const b of lv.blocks) if (b.bump > 0) b.bump -= 1

    if (g.flagPhase === 'jugando') {
      g.time -= 1 / 60
      if (g.time <= 0) {
        g.time = 0
        die()
        return
      }
      setTime(Math.max(0, Math.floor(g.time)))
    }

    if (p.jumpBuf > 0) p.jumpBuf -= 1

    if (g.flagPhase === 'jugando') {
      if (keys.left) {
        p.vx -= PT_ACCEL
        p.face = -1
      } else if (keys.right) {
        p.vx += PT_ACCEL
        p.face = 1
      } else if (p.vx > 0) p.vx = Math.max(0, p.vx - PT_FRICTION)
      else if (p.vx < 0) p.vx = Math.min(0, p.vx + PT_FRICTION)
      p.vx = Math.max(-PT_RUN, Math.min(PT_RUN, p.vx))

      if (p.jumpBuf > 0 && p.coyote > 0) {
        p.vy = PT_JUMP_V
        p.coyote = 0
        p.jumpBuf = 0
        p.onGround = false
      }
      if (!keys.jump && p.vy < -5.5) p.vy = -5.5
    } else {
      p.vx = 0
    }

    p.vy = Math.min(PT_FALL_MAX, p.vy + PT_GRAVITY)
    p.anim += Math.abs(p.vx)

    p.x += p.vx
    let c0 = Math.floor(p.x / PT_TILE)
    let c1 = Math.floor((p.x + PT_PW - 1) / PT_TILE)
    const rTop = Math.floor(p.y / PT_TILE)
    const rBot = Math.floor((p.y + PT_PH - 1) / PT_TILE)
    if (p.vx > 0) {
      for (let r = rTop; r <= rBot; r++) {
        if (solidAt(lv, c1, r)) {
          p.x = c1 * PT_TILE - PT_PW
          p.vx = 0
          break
        }
      }
    } else if (p.vx < 0) {
      for (let r = rTop; r <= rBot; r++) {
        if (solidAt(lv, c0, r)) {
          p.x = (c0 + 1) * PT_TILE
          p.vx = 0
          break
        }
      }
    }

    p.y += p.vy
    const wasGround = p.onGround
    p.onGround = false
    c0 = Math.floor(p.x / PT_TILE)
    c1 = Math.floor((p.x + PT_PW - 1) / PT_TILE)
    if (p.vy > 0) {
      const r = Math.floor((p.y + PT_PH - 1) / PT_TILE)
      for (let c = c0; c <= c1; c++) {
        if (solidAt(lv, c, r)) {
          p.y = r * PT_TILE - PT_PH
          p.vy = 0
          p.onGround = true
          break
        }
      }
    } else if (p.vy < 0) {
      const r = Math.floor(p.y / PT_TILE)
      for (let c = c0; c <= c1; c++) {
        if (solidAt(lv, c, r)) {
          p.y = (r + 1) * PT_TILE
          p.vy = 0
          const bl = lv.blocks.find(bb => bb.x === c && bb.y === r)
          if (bl) {
            bl.bump = 8
            g.bump = { x: bl.x * PT_TILE, y: bl.y * PT_TILE, t: 8 }
            if (bl.kind === 'pregunta' && !bl.used) {
              bl.used = true
              lv.items.push({ x: bl.x * PT_TILE + 4, y: bl.y * PT_TILE - 30, vy: -7, kind: bl.give, alive: true, t: 0 })
              bl.bump = 0
            }
          }
          break
        }
      }
    }
    if (p.onGround) p.coyote = 6
    else if (p.coyote > 0) p.coyote -= 1
    if (wasGround && !p.onGround) p.coyote = 6

    if (p.y > PT_VIEW_H + 80) {
      die()
      return
    }

    // Tras cruzar la bandera el nivel ya esta superado: se congelan items,
    // enemigos y proyectiles para que el paseo al castillo no pueda matar.
    if (g.flagPhase !== 'jugando') {
      for (const en of lv.enemies) en.alive = false
      for (const f of lv.fire) f.alive = false
      for (const it of lv.items) it.alive = false
    }

    for (const it of lv.items) {
      if (!it.alive) continue
      it.t += 1
      if (it.vy !== 0 || !solidAt(lv, Math.floor((it.x + 8) / PT_TILE), Math.floor((it.y + 22) / PT_TILE))) {
        it.vy += 0.5
        it.y += it.vy
        if (it.vy > 0 && solidAt(lv, Math.floor((it.x + 8) / PT_TILE), Math.floor((it.y + 20) / PT_TILE))) {
          it.vy = 0
          it.y = Math.floor((it.y + 20) / PT_TILE) * PT_TILE - 20
        }
      } else {
        it.y += 0.6
      }
      if (Math.abs(it.x - p.x) < 26 && Math.abs(it.y - p.y) < 34) {
        it.alive = false
        if (it.kind === 'valor') {
          g.values += 1
          g.score += 200
          setValues(g.values)
          setScore(g.score)
        } else if (it.kind === 'corazon') {
          g.lives += 1
          setLives(g.lives)
        } else {
          p.star = 600
        }
      }
      if (it.y > PT_VIEW_H + 60) it.alive = false
    }

    for (const en of lv.enemies) {
      if (!en.alive) continue
      en.t += 1
      en.vy = Math.min(PT_FALL_MAX, en.vy + PT_GRAVITY)
      en.x += en.dir * lv.enemyV
      en.y += en.vy
      const ec0 = Math.floor(en.x / PT_TILE)
      const ec1 = Math.floor((en.x + 26 - 1) / PT_TILE)
      let landed = false
      if (en.vy >= 0) {
        const r = Math.floor((en.y + 28 - 1) / PT_TILE)
        for (let c = ec0; c <= ec1; c++) {
          if (solidAt(lv, c, r)) {
            en.y = r * PT_TILE - 28
            en.vy = 0
            landed = true
            break
          }
        }
      }
      const wallL = solidAt(lv, Math.floor((en.x - 2) / PT_TILE), Math.floor((en.y + 20) / PT_TILE))
      const wallR = solidAt(lv, Math.floor((en.x + 28) / PT_TILE), Math.floor((en.y + 20) / PT_TILE))
      const aheadL = solidAt(lv, Math.floor((en.x - 6) / PT_TILE), Math.floor((en.y + 30) / PT_TILE))
      const aheadR = solidAt(lv, Math.floor((en.x + 30) / PT_TILE), Math.floor((en.y + 30) / PT_TILE))
      if (wallL || wallR || (landed && ((en.dir < 0 && !aheadL) || (en.dir > 0 && !aheadR)))) en.dir = -en.dir as 1 | -1
      if (en.x < 0) {
        en.x = 0
        en.dir = 1
      }
      if (en.y > PT_VIEW_H + 80) {
        en.alive = false
        continue
      }

      if (p.star > 0) {
        en.alive = false
        g.score += 250
        setScore(g.score)
        continue
      }
      if (Math.abs(en.x - p.x) < 30 && Math.abs(en.y - p.y) < 30) {
        const stomping = p.vy > 0.8 && p.y + PT_PH - en.y < 30
        if (stomping && en.kind === 'caminante') {
          en.alive = false
          p.vy = PT_STOMP_V
          if (p.inv <= 0) p.inv = 18
          p.jumpBuf = 0
          g.score += 350
          setScore(g.score)
        } else if (p.inv <= 0) {
          die()
          return
        }
      }
    }

    for (const f of lv.fire) {
      if (!f.alive) continue
      f.vy += 0.36
      f.x += f.vx
      f.y += f.vy
      if (solidAt(lv, Math.floor(f.x / PT_TILE), Math.floor((f.y + 7) / PT_TILE)) && f.vy > 0) {
        f.alive = false
        continue
      }
      if (f.x < 0 || f.x > lv.w * PT_TILE) {
        f.alive = false
        continue
      }
      if (p.star > 0) {
        f.alive = false
        g.score += 150
        setScore(g.score)
        continue
      }
      if (Math.abs(f.x - (p.x + PT_PW / 2)) < 16 && Math.abs(f.y - (p.y + PT_PH / 2)) < 20 && p.inv <= 0) {
        die()
        return
      }
    }

    const bs = lv.boss
    if (bs && bs.alive) {
      bs.t += 1
      if (bs.hurt > 0) bs.hurt -= 1
      bs.vy = Math.min(PT_FALL_MAX, bs.vy + PT_GRAVITY)
      bs.x += bs.dir * 1.7
      bs.y += bs.vy
      const br = Math.floor((bs.y + 86 - 1) / PT_TILE)
      for (let c = Math.floor(bs.x / PT_TILE); c <= Math.floor((bs.x + 68) / PT_TILE); c++) {
        if (solidAt(lv, c, br)) {
          bs.y = br * PT_TILE - 86
          bs.vy = 0
          break
        }
      }
      if (bs.x < 8 * PT_TILE) {
        bs.x = 8 * PT_TILE
        bs.dir = 1
      }
      if (bs.x > (lv.castleX - 4) * PT_TILE) {
        bs.x = (lv.castleX - 4) * PT_TILE
        bs.dir = -1
      }
      if (bs.t % 96 === 0) {
        bs.vy = -13
        bs.dir = p.x < bs.x ? -1 : 1
      }
      if (bs.t % 74 === 0 && bs.vy === 0) {
        lv.fire.push({ x: bs.x + (bs.dir > 0 ? 68 : -10), y: bs.y + 52, vx: bs.dir * 3.4, vy: -3, alive: true })
      }
      if (p.star > 0) {
        bs.hp -= 1
        bs.hurt = 14
        p.vy = PT_STOMP_V
        g.score += 1200
        setScore(g.score)
        if (bs.hp <= 0) {
          bs.alive = false
          g.score += 5000
          setScore(g.score)
          setHint('Â¡Duoli ha caÃ­do! Corre a la bandera')
          window.setTimeout(() => setHint(''), 2600)
        }
      } else if (Math.abs(bs.x - p.x) < 58 && Math.abs(bs.y - p.y) < 70) {
        const stomping = p.vy > 0.8 && p.y + PT_PH - bs.y < 48
        if (stomping && p.inv <= 0) {
          bs.hp -= 1
          bs.hurt = 14
          p.vy = PT_STOMP_V
          p.inv = 24
          p.jumpBuf = 0
          g.score += 1200
          setScore(g.score)
          if (bs.hp <= 0) {
            bs.alive = false
            g.score += 5000
            setScore(g.score)
            setHint('Â¡Duoli ha caÃ­do! Corre a la bandera')
            window.setTimeout(() => setHint(''), 2600)
          }
        } else if (p.inv <= 0) {
          die()
          return
        }
      }
    }

    const bossCleared = !lv.boss || !lv.boss.alive
    const flagWorldX = lv.flagX * PT_TILE

    if (g.flagPhase === 'jugando') {
      if (bossCleared && p.x + PT_PW >= flagWorldX - 4 && p.x <= flagWorldX + 30) {
        g.flagPhase = 'bajada'
        g.score += PT_FLAG_BONUS
        setScore(g.score)
      }
    } else if (g.flagPhase === 'bajada') {
      p.x = flagWorldX - PT_PW
      p.y += 4
      p.vy = 0
      if (p.y + PT_PH >= lv.groundTop * PT_TILE) {
        p.y = lv.groundTop * PT_TILE - PT_PH
        g.flagPhase = 'caminando'
      }
    } else if (g.flagPhase === 'caminando') {
      p.face = 1
      p.vx = 1.9
      p.x += p.vx
      if (p.x + PT_PW >= lv.castleX * PT_TILE + 60) {
        p.x = lv.castleX * PT_TILE + 60 - PT_PW
        p.vx = 0
        if (g.lv.n >= PT_TOTAL) {
          setCleared(prev => {
            const next = prev.includes(PT_TOTAL) ? prev : [...prev, PT_TOTAL].sort((a, b) => a - b)
            safeSet('hablemos-claro-plat-niveles', JSON.stringify(next))
            return next
          })
          onAllCleared?.()
        }
        finishLevel()
        return
      }
    }

    const targetCam = Math.max(0, Math.min(lv.w * PT_TILE - PT_VIEW_W, p.x - PT_VIEW_W * 0.42))
    g.cam += (targetCam - g.cam) * 0.14
  }

  useEffect(() => {
    if (phase !== 'play') return
    let raf = 0
    let last = performance.now()
    let acc = 0
    const STEP_MS = 1000 / 60
    const frame = (now: number) => {
      raf = window.requestAnimationFrame(frame)
      acc += now - last
      last = now
      if (acc > 200) acc = STEP_MS
      while (acc >= STEP_MS) {
        acc -= STEP_MS
        step()
        if (phaseRef.current !== 'play') return
      }
      draw()
    }
    raf = window.requestAnimationFrame(frame)
    return () => window.cancelAnimationFrame(raf)
  }, [phase])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'w', 'a', 's', 'd'].includes(k)) e.preventDefault()
      if (k === 'arrowleft' || k === 'a') holdRef.current.left = true
      else if (k === 'arrowright' || k === 'd') holdRef.current.right = true
      else if (k === 'arrowup' || k === 'w' || k === ' ' || k === 'enter') {
        if (!holdRef.current.jump) holdRef.current.jump = true
        if (gRef.current) gRef.current.p.jumpBuf = 8
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase()
      if (k === 'arrowleft' || k === 'a') holdRef.current.left = false
      else if (k === 'arrowright' || k === 'd') holdRef.current.right = false
      else if (k === 'arrowup' || k === 'w' || k === ' ' || k === 'enter') holdRef.current.jump = false
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  useEffect(() => {
    if (phase === 'play') draw()
  }, [phase, level])

  const maxUnlocked = cleared.length === 0 ? 1 : Math.min(PT_TOTAL, Math.max(...cleared) + 1)

  if (phase === 'select') {
    return (
      <div ref={wrapRef} className={`w-full${isFs ? ' plat-fs' : ''}`}>
        <div className="flex items-center justify-center gap-3 mb-5 flex-wrap">
          <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">ðŸ† {best}</div>
          <div className="px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800">ðŸš© {cleared.length}/{PT_TOTAL}</div>
        </div>
        {hint && <p className="text-center text-sm font-black text-amber-600 mb-4">{hint}</p>}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {Array.from({ length: PT_TOTAL }, (_, i) => {
            const n = i + 1
            if (n <= PT_TOTAL) return null
            const done = cleared.includes(n)
            const open = n <= maxUnlocked
            const isBoss = n === PT_TOTAL
            return (
              <button
                key={n}
                onClick={() => open && openLevel(n)}
                disabled={!open}
                className={`relative rounded-2xl p-4 text-center transition-all ${
                  open
                    ? isBoss
                      ? 'bg-gradient-to-br from-rose-500 to-red-700 text-white shadow-lg shadow-rose-500/25 hover:-translate-y-1'
                      : 'bg-white border-2 border-emerald-200 text-slate-800 shadow-sm hover:-translate-y-1 hover:border-emerald-400'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {isBoss && <span className="absolute -top-2 -right-1 text-xl">ðŸ‰</span>}
                <div className="text-2xl font-black">{open ? (isBoss ? 'ðŸ‰' : 'ðŸš©') : 'ðŸ”’'}</div>
                <div className="text-sm font-black mt-0.5">Nivel {n}</div>
                <div className="text-[11px] font-bold mt-0.5">{done ? 'âœ“ Superado' : open ? (isBoss ? 'Duoli' : 'Jugar') : 'Bloqueado'}</div>
              </button>
            )
          })}
        </div>
        <div className="mt-6 text-center text-slate-500 text-sm font-bold leading-relaxed px-4">
          Salta con <span className="font-black text-slate-700">â†‘ / W / espacio</span> Â· MuÃ©vete con <span className="font-black text-slate-700">â† â†’</span> o los botones.<br />
          Pisa a los enemigos, junta â˜… valores, cruza la bandera y vence a Duoli en el nivel 10.
        </div>
        {best > 0 && <p className="text-center text-xs font-black text-slate-400 mt-3">Tu mejor puntaje: {best}</p>}
      </div>
    )
  }

  return (
    <div ref={wrapRef} className={`w-full${isFs ? ' plat-fs' : ''}`}>
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 flex-wrap">
        <div className="px-3 md:px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800 text-sm">ðŸš© Nivel {level}/{PT_TOTAL}</div>
        <div className="px-3 md:px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800 text-sm">â˜… {values}</div>
        <div className="px-3 md:px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800 text-sm">ðŸ’› {lives}</div>
        <div className="px-3 md:px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800 text-sm">â± {time}</div>
        <div className="px-3 md:px-4 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800 text-sm">ðŸ† {score}</div>
        <button onClick={toggleFs} aria-label="Pantalla completa" className="md:hidden px-3 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-800 text-sm active:scale-95 transition-all">
          {isFs ? 'ðŸ——' : 'â›¶'}
        </button>
        <button onClick={() => setPhase('select')} className="px-3 py-2 rounded-2xl bg-white/80 border border-slate-200 font-black text-slate-600 text-sm hover:bg-white transition-all">
          â˜° Niveles
        </button>
      </div>

      {hint && <p className="text-center text-sm font-black text-amber-600 mb-3">{hint}</p>}

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={PT_VIEW_W}
          height={PT_VIEW_H}
          className="w-full h-auto rounded-[20px] border-4 border-white shadow-xl shadow-emerald-500/10 touch-none select-none"
        />

        {phase === 'dead' && (
          <div className="absolute inset-0 rounded-[20px] bg-black/70 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="text-5xl">ðŸ’€</div>
            <p className="text-white text-2xl font-black">Â¡Sin vidas!</p>
            <p className="text-white/90 font-bold">Puntaje: {score} Â· Niveles superados: {cleared.length}</p>
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-[300px]">
              <button onClick={() => openLevel(level)} className="flex-1 bg-white text-emerald-700 font-black py-3 px-5 rounded-2xl">â†» Reintentar</button>
              <button onClick={() => setPhase('select')} className="flex-1 bg-emerald-600 text-white font-black py-3 px-5 rounded-2xl">â˜° Niveles</button>
            </div>
          </div>
        )}

        {phase === 'clear' && (
          <div className="absolute inset-0 rounded-[20px] bg-black/70 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="text-5xl">ðŸ</div>
            <p className="text-white text-2xl font-black">Â¡Nivel {level} superado!</p>
            <p className="text-white/90 font-bold">Puntaje: {score}</p>
            {level === PT_TOTAL
              ? <p className="text-amber-300 font-black">ðŸ… Â¡Venciste a Duoli y completaste los 10 niveles!</p>
              : <p className="text-white/80 text-sm font-bold">Niveles superados: {cleared.length}/{PT_TOTAL}</p>}
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-[340px]">
              {level < PT_TOTAL && (
                <button onClick={() => openLevel(level + 1)} className="flex-1 bg-emerald-500 text-white font-black py-3 px-5 rounded-2xl">Siguiente â†’</button>
              )}
              <button onClick={() => setPhase('select')} className="flex-1 bg-white text-emerald-700 font-black py-3 px-5 rounded-2xl">â˜° Niveles</button>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4 max-w-[280px] mx-auto plat-dpad">
        <span />
        <button
          aria-label="Saltar"
          className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-emerald-100 select-none touch-none"
          onPointerDown={() => { holdRef.current.jump = true; if (gRef.current) gRef.current.p.jumpBuf = 8 }}
          onPointerUp={() => { holdRef.current.jump = false }}
          onPointerLeave={() => { holdRef.current.jump = false }}
          onPointerCancel={() => { holdRef.current.jump = false }}
        >â–²</button>
        <span />
        <button
          aria-label="Izquierda"
          className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-emerald-100 select-none touch-none"
          onPointerDown={() => { holdRef.current.left = true }}
          onPointerUp={() => { holdRef.current.left = false }}
          onPointerLeave={() => { holdRef.current.left = false }}
          onPointerCancel={() => { holdRef.current.left = false }}
        >â—€</button>
        <span />
        <button
          aria-label="Derecha"
          className="py-3 rounded-2xl bg-white border-2 border-slate-200 text-xl font-black text-slate-700 active:bg-emerald-100 select-none touch-none"
          onPointerDown={() => { holdRef.current.right = true }}
          onPointerUp={() => { holdRef.current.right = false }}
          onPointerLeave={() => { holdRef.current.left = false; holdRef.current.right = false }}
          onPointerCancel={() => { holdRef.current.left = false; holdRef.current.right = false }}
        >â–¶</button>
      </div>
      <p className="text-center text-xs font-bold text-slate-400 mt-3">Flechas / WASD / Espacio Â· Botones en celular</p>
    </div>
  )
}

export default function App() {
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(initialStudentProfile)
  const [familyProfile, setFamilyProfile] = useState<FamilyProfile>(initialFamilyProfile)
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'about' | 'avatar' | 'config' | 'home' | 'reels' | 'learn' | 'quiz' | 'result' | 'games' | 'snake' | 'flappy' | 'catch' | 'memory' | 'dodge' | 'platformer' | 'converse' | 'activity' | 'cases' | 'profile' | 'content-for-parents' | 'profile-type'>(BOOT_HASH ? 'learn' : 'welcome')
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [learnView, setLearnView] = useState<'hub' | 'kid' | 'guide' | 'exam'>(BOOT_HASH ? (BOOT_HASH.view === 'tema' ? 'kid' : BOOT_HASH.view === 'guia' ? 'guide' : BOOT_HASH.view === 'examen' ? 'exam' : 'hub') : 'hub')
  const [activeKidId, setActiveKidId] = useState<string | null>(BOOT_HASH && BOOT_HASH.view === 'tema' ? BOOT_HASH.id : null)
  const [activeGuideId, setActiveGuideId] = useState<string | null>(BOOT_HASH && BOOT_HASH.view === 'guia' ? BOOT_HASH.id : null)
  const [topicStep, setTopicStep] = useState(0)
  const [answeredOpt, setAnsweredOpt] = useState<number | null>(null)
  const [revealedCases, setRevealedCases] = useState<number[]>([])
  const [reflectNote, setReflectNote] = useState('')
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean>>({})
  const [tfRevealed, setTfRevealed] = useState(false)
  const [blankInputs, setBlankInputs] = useState<Record<number, string>>({})
  const [blanksChecked, setBlanksChecked] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [familyActivityIndex, setFamilyActivityIndex] = useState(0)
  const [familyDoneList, setFamilyDoneList] = useState<number[]>([])
  const [familyWeeklyAction, setFamilyWeeklyAction] = useState<number | null>(null)
  const [activityNeedMore, setActivityNeedMore] = useState(false)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState<string>('')
  const [showCoimaONo, setShowCoimaONo] = useState(false)
  const [currentCoimaCase, setCurrentCoimaCase] = useState(0)
  const [examAnswers, setExamAnswers] = useState<Record<number, number>>({})
  const [showBadgeCelebration, setShowBadgeCelebration] = useState(false)
  const [earnedBadge, setEarnedBadge] = useState<Badge | null>(null)
  const [userName, setUserName] = useState<string>(() => safeGet('hablemos-claro-name') || '')
  const [userAge, setUserAge] = useState<string>(() => safeGet('hablemos-claro-age') || '')
  const [userDistrict, setUserDistrict] = useState<string>(() => safeGet('hablemos-claro-district') || '')
  const [language, setLanguage] = useState<'es' | 'qu'>(() => (safeGet('hablemos-claro-lang') as 'es' | 'qu') || 'es')
  const [viewMode, setViewMode] = useState<'mobile' | 'pc'>(() => (safeGet('hablemos-claro-view') as 'mobile' | 'pc') || 'pc')
  const [profileType, setProfileType] = useState<ProfileType>('student')
  const [editPhotoModal, setEditPhotoModal] = useState(false)
  const [photoUrl, setPhotoUrl] = useState('')
  const [posDraft, setPosDraft] = useState<PhotoPos>(defaultPhotoPos)
  const dragStart = useRef<{ sx: number; sy: number; x: number; y: number } | null>(null)
  const [editingFamName, setEditingFamName] = useState(false)
  const [famNameDraft, setFamNameDraft] = useState('')
  const [editingFamAvatar, setEditingFamAvatar] = useState(false)
  const [newMemberName, setNewMemberName] = useState('')
  const [newMemberRole, setNewMemberRole] = useState<FamilyRole>('Hijo')
  const [newMemberAvatar, setNewMemberAvatar] = useState('ðŸ‘¦')
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null)
  const [memberNameDraft, setMemberNameDraft] = useState('')
  const badgesRef = useRef<HTMLDivElement | null>(null)
  const membersRef = useRef<HTMLDivElement | null>(null)
  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const [_tempPhoto, setTempPhoto] = useState<string>('')
const [conversationTurn, setConversationTurn] = useState<'kid' | 'parent'>('kid')
  const [kidAnswer, setKidAnswer] = useState<string>('')
  const [parentAnswer, setParentAnswer] = useState<string>('')
  // Selector de integrante: se pide QUIÃ‰N entra antes de conversar o de abrir una guÃ­a de padres
  const [memberPickerFor, setMemberPickerFor] = useState<'converse' | 'guide' | null>(null)
  const [pendingGuideId, setPendingGuideId] = useState<string | null>(null)

  // Sincronizar userName/userAge/userDistrict con studentProfile
  useEffect(() => {
    setUserName(studentProfile.name)
    setUserAge(studentProfile.age)
    setUserDistrict(studentProfile.district)
  }, [studentProfile])

  useEffect(() => {
    safeSet('hablemos-claro-name', studentProfile.name)
    safeSet('hablemos-claro-age', studentProfile.age)
    safeSet('hablemos-claro-district', studentProfile.district)
  }, [studentProfile.name, studentProfile.age, studentProfile.district])

  // Al cambiar de perfil: volver al inicio de Temas y limpiar respuestas (no mezclar datos)
  // (solo al CAMBIAR profileType: evita pisar deep-links y el doble-mount de StrictMode)
  const prevProfileTypeRef = useRef(profileType)
  useEffect(() => {
    if (prevProfileTypeRef.current === profileType) return
    prevProfileTypeRef.current = profileType
    setLearnView('hub')
    setActiveKidId(null)
    setActiveGuideId(null)
    setExamAnswers({})
    setShowFeedback(false)
    setShowCoimaONo(false)
  }, [profileType])

  // TraducciÃ³n segÃºn idioma
  const t = (key: keyof typeof translations['es']) => (translations[language] as Record<string, string>)[key] ?? translations['es'][key]

  // Helper to get current profile's progress
  const getProgress = () => profileType === 'student' ? studentProfile.progress : familyProfile.progress
  const getBadges = () => profileType === 'student' ? studentProfile.progress.badges : familyProfile.progress.badges
  const getCustomization = () => studentProfile.customization

  // Guardar datos personales
  const saveUserData = () => {
    const updatedStudent = { ...studentProfile, name: userName, age: userAge, district: userDistrict }
    setStudentProfile(updatedStudent)
    saveStudentProfile(updatedStudent)
  }

  // Cambiar idioma
  const changeLanguage = (value: 'es' | 'qu') => {
    setLanguage(value)
    safeSet('hablemos-claro-lang', value)
  }

  // Cambiar vista mÃ³vil / completa
  const changeView = (value: 'mobile' | 'pc') => {
    setViewMode(value)
    safeSet('hablemos-claro-view', value)
  }

  // Ir al inicio marcando la app como configurada
  const goHome = () => {
    safeSet('hablemos-claro-configured', 'true')
    setCurrentScreen('home')
  }

  // Navegar a siguiente pantalla
  const navigateTo = (screen: typeof currentScreen) => {
    setCurrentScreen(screen)
  }

  // Actualizar progreso (las insignias SOLO se consiguen completando el test final)
  const updateProgress = (activitiesIncrement: number = 1) => {
    const currentProfile = profileType === 'student' ? studentProfile : familyProfile
    const newProgress = { ...currentProfile.progress }
    newProgress.completedActivities += activitiesIncrement
    newProgress.totalActivities = Math.max(newProgress.totalActivities, newProgress.completedActivities)

    if (profileType === 'student') {
      const checked = checkStudentBadges({ ...studentProfile, progress: newProgress })
      setStudentProfile({ ...studentProfile, progress: checked.profile.progress })
      saveStudentProfile({ ...studentProfile, progress: checked.profile.progress })
      if (checked.unlocked.length > 0) {
        setEarnedBadge({ ...checked.unlocked[0] })
        setShowBadgeCelebration(true)
      }
    } else {
      let updated: FamilyProfile = { ...familyProfile, progress: newProgress }
      updated = pushFamilyLog(updated, 'ðŸ“– Actividad completada.')
      const checked = checkFamilyBadges(updated)
      setFamilyProfile(checked.profile)
      saveFamilyProfile(checked.profile)
      celebrateFamilyBadges(checked.unlocked)
    }
  }

  // Completar un tema (solo cuenta la primera vez) - un solo guardado para no sobrescribir el desbloqueo
  const completeTopic = (topic: LearningTopic, extraPatch?: Partial<UserProgress>, opts?: { forceCount?: boolean; convInc?: number; extraLog?: string }) => {
    const currentProfile = profileType === 'student' ? studentProfile : familyProfile
    const alreadyDone = (currentProfile.progress.topicProgress[topic] ?? 0) >= 100
    const convInc = opts?.convInc ?? 0
    const countNow = (alreadyDone && !(opts?.forceCount ?? false) && convInc === 0) ? 0 : 1
    const completedActivities = currentProfile.progress.completedActivities + countNow
    const newProgress = {
      ...currentProfile.progress,
      ...(extraPatch ?? {}),
      completedActivities,
      totalActivities: Math.max(currentProfile.progress.totalActivities, completedActivities),
      conversations: currentProfile.progress.conversations + convInc,
      topicProgress: {
        ...currentProfile.progress.topicProgress,
        [topic]: 100,
      },
    }
    if (profileType === 'student') {
      const checked = checkStudentBadges({ ...studentProfile, progress: newProgress })
      setStudentProfile({ ...studentProfile, progress: checked.profile.progress })
      saveStudentProfile({ ...studentProfile, progress: checked.profile.progress })
      if (checked.unlocked.length > 0) {
        setEarnedBadge({ ...checked.unlocked[0] })
        setShowBadgeCelebration(true)
      }
    } else {
      let updated: FamilyProfile = { ...familyProfile, progress: newProgress }
      updated = pushFamilyLog(updated, `ðŸ“š Tema completado: ${topicTitles[topic]}.`)
      if (opts?.extraLog) updated = pushFamilyLog(updated, opts.extraLog)
      const checked = checkFamilyBadges(updated)
      setFamilyProfile(checked.profile)
      saveFamilyProfile(checked.profile)
      celebrateFamilyBadges(checked.unlocked)
    }
  }

  // Completar un tema de la biblioteca de hijos (suma actividad + conversaciÃ³n si es reto familiar)
  const completeKidTopic = (id: string) => {
    const kt = KIDS_TOPICS.find(k => k.id === id)
    if (!kt) return
    const cur = profileType === 'student' ? studentProfile : familyProfile
    const prevKids = cur.progress.kidsDone ?? []
    if (prevKids.includes(id)) return
    const kidsDone = [...prevKids, id]
    completeTopic(kt.core, { kidsDone }, kt.joint ? { forceCount: true, convInc: 1, extraLog: 'ðŸ’¬ Actividad familiar completada juntos.' } : { forceCount: true })
  }

  // Marcar una guÃ­a de padres como revisada
  const reviewGuide = (id: string) => {
    const g = PARENT_GUIDES.find(x => x.id === id)
    if (!g) return
    const cur = profileType === 'student' ? studentProfile : familyProfile
    const prev = cur.progress.guidesDone ?? []
    if (prev.includes(id)) return
    const guidesDone = [...prev, id]
    const completedActivities = cur.progress.completedActivities + 1
    const newProgress = {
      ...cur.progress,
      guidesDone,
      completedActivities,
      totalActivities: Math.max(cur.progress.totalActivities, completedActivities),
    }
    if (profileType === 'student') {
      const checked = checkStudentBadges({ ...studentProfile, progress: newProgress })
      setStudentProfile({ ...studentProfile, progress: checked.profile.progress })
      saveStudentProfile({ ...studentProfile, progress: checked.profile.progress })
      if (checked.unlocked.length > 0) {
        setEarnedBadge({ ...checked.unlocked[0] })
        setShowBadgeCelebration(true)
      }
    } else {
      // La guÃ­a queda registrada en el avance del integrante que la estÃ¡ leyendo
      const memberId = familyProfile.activeMemberId
      const member = familyProfile.members.find(m => m.id === memberId) ?? familyProfile.members[0]
      const members = member && !member.guidesDone?.includes(id)
        ? familyProfile.members.map(m => (m.id === member.id
          ? { ...m, guidesDone: [...(m.guidesDone ?? []), id], lastActive: new Date().toISOString() }
          : m))
        : familyProfile.members
      let updated: FamilyProfile = { ...familyProfile, members, progress: newProgress }
      updated = pushFamilyLog(updated, `ðŸ“– ${member ? member.name : 'La familia'} revisÃ³ la guÃ­a: ${g.title}.`)
      const checked = checkFamilyBadges(updated)
      setFamilyProfile(checked.profile)
      saveFamilyProfile(checked.profile)
      celebrateFamilyBadges(checked.unlocked)
    }
  }

  // Completar el test final: desbloqueo condicional de insignias
  const completeTest = () => {
    const currentProfile = profileType === 'student' ? studentProfile : familyProfile
    const alreadyDone = (currentProfile.progress.topicProgress['test'] ?? 0) >= 100

    if (profileType === 'student') {
      const checked = checkStudentBadges({ ...studentProfile, progress: { ...studentProfile.progress, topicProgress: { ...studentProfile.progress.topicProgress, test: 100 } } })
      const completedActivities = studentProfile.progress.completedActivities + (alreadyDone ? 0 : 1)
      const newProgress = {
        ...studentProfile.progress,
        completedActivities,
        totalActivities: Math.max(studentProfile.progress.totalActivities, completedActivities),
        topicProgress: { ...studentProfile.progress.topicProgress, test: 100 },
        badges: checked.profile.progress.badges,
      }
      setStudentProfile({ ...studentProfile, progress: newProgress })
      saveStudentProfile({ ...studentProfile, progress: newProgress })
      if (checked.unlocked.length > 0) {
        setEarnedBadge({ ...checked.unlocked[0] })
        setShowBadgeCelebration(true)
      }
    } else {
      const completedActivities = familyProfile.progress.completedActivities + (alreadyDone ? 0 : 1)
      const newProgress = {
        ...familyProfile.progress,
        completedActivities,
        totalActivities: Math.max(familyProfile.progress.totalActivities, completedActivities),
        topicProgress: { ...familyProfile.progress.topicProgress, test: 100 },
        badges: familyProfile.progress.badges,
      }
      let updated: FamilyProfile = { ...familyProfile, progress: newProgress }
      updated = pushFamilyLog(updated, 'ðŸ… Â¡Examen final completado!')
      const checked = checkFamilyBadges(updated)
      setFamilyProfile(checked.profile)
      saveFamilyProfile(checked.profile)
      celebrateFamilyBadges(checked.unlocked)
    }
  }

  // --- Acciones de integrantes y nombre de familia ---
  const saveFamilyName = () => {
    const name = famNameDraft.trim() === '' ? 'Mi familia' : famNameDraft.trim()
    const updated = { ...familyProfile, name }
    setFamilyProfile(updated)
    saveFamilyProfile(updated)
    setEditingFamName(false)
  }

  const addFamilyMember = () => {
    const name = newMemberName.trim()
    if (name === '') return
    const member: FamilyMember = {
      id: `m-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      name,
      role: newMemberRole,
      avatar: newMemberAvatar,
      activities: 0,
      guidesDone: [],
      conversations: 0,
    }
    let updated: FamilyProfile = { ...familyProfile, members: [...familyProfile.members, member] }
    updated = pushFamilyLog(updated, `ðŸ‘¤ ${name} se uniÃ³ a la familia.`)
    const checked = checkFamilyBadges(updated)
    setFamilyProfile(checked.profile)
    saveFamilyProfile(checked.profile)
    celebrateFamilyBadges(checked.unlocked)
    setNewMemberName('')
    setNewMemberRole('Hijo')
    setNewMemberAvatar('ðŸ‘¦')
  }

  // Guardar el avance de un integrante concreto (guÃ­as, conversaciones, actividades)
  const updateMember = (id: string, patch: Partial<FamilyMember>): FamilyProfile => ({
    ...familyProfile,
    members: familyProfile.members.map(m => (m.id === id ? { ...m, ...patch } : m)),
  })

  const setActiveMember = (id: string) => {
    const updated = { ...updateMember(id, { lastActive: new Date().toISOString() }), activeMemberId: id }
    setFamilyProfile(updated)
    saveFamilyProfile(updated)
  }

  const activeFamilyMember = familyProfile.members.find(m => m.id === familyProfile.activeMemberId) ?? familyProfile.members[0] ?? null

  // Entrar a un ejercicio de familia pasando siempre por "Â¿quiÃ©n entra?"
  const requestConverse = () => {
    if (profileType === 'family' && familyProfile.members.length > 0) {
      setMemberPickerFor('converse')
      return
    }
    setCurrentScreen('converse')
  }

  const requestGuide = (guideId: string) => {
    if (profileType === 'family' && familyProfile.members.length > 0) {
      setPendingGuideId(guideId)
      setMemberPickerFor('guide')
      return
    }
    setActiveGuideId(guideId)
    setLearnView('guide')
    setShowFeedback(false)
  }

  // Confirmar el integrante elegido y abrir el ejercicio correspondiente
  const confirmMemberEntry = (id: string) => {
    setActiveMember(id)
    const target = memberPickerFor
    setMemberPickerFor(null)
    if (target === 'converse') {
      setCurrentScreen('converse')
      return
    }
    if (target === 'guide' && pendingGuideId) {
      setActiveGuideId(pendingGuideId)
      setPendingGuideId(null)
      setLearnView('guide')
      setShowFeedback(false)
    }
  }

  const registerMemberActivity = (id: string) => {
    const member = familyProfile.members.find(m => m.id === id)
    if (!member) return
    const members = familyProfile.members.map(m => (m.id === id ? { ...m, activities: m.activities + 1, lastActive: new Date().toISOString() } : m))
    const completedActivities = familyProfile.progress.completedActivities + 1
    const newProgress = {
      ...familyProfile.progress,
      completedActivities,
      totalActivities: Math.max(familyProfile.progress.totalActivities, completedActivities),
    }
    let updated: FamilyProfile = { ...familyProfile, members, progress: newProgress, activeMemberId: id }
    updated = pushFamilyLog(updated, `âœ… ${member.name} completÃ³ una actividad.`)
    const checked = checkFamilyBadges(updated)
    setFamilyProfile(checked.profile)
    saveFamilyProfile(checked.profile)
    celebrateFamilyBadges(checked.unlocked)
  }

  const saveMemberName = (id: string) => {
    const name = memberNameDraft.trim()
    if (name === '') {
      setEditingMemberId(null)
      return
    }
    const members = familyProfile.members.map(m => (m.id === id ? { ...m, name } : m))
    const updated = { ...familyProfile, members }
    setFamilyProfile(updated)
    saveFamilyProfile(updated)
    setEditingMemberId(null)
  }

  // --- Perfil familiar: actividad reciente e insignias reales ---
  const pushFamilyLog = (profile: FamilyProfile, text: string): FamilyProfile => {
    const entry: ActivityEntry = { id: `log-${Date.now()}-${Math.floor(Math.random() * 10000)}`, text, date: new Date().toLocaleString() }
    return { ...profile, activityLog: [entry, ...profile.activityLog].slice(0, 10) }
  }

  const checkFamilyBadges = (profile: FamilyProfile): { profile: FamilyProfile; unlocked: FamilyBadge[] } => {
    const tp = profile.progress.topicProgress
    const conv = profile.progress.conversations
    const acts = profile.progress.completedActivities
    const shouldUnlock = (id: FamilyBadgeId): boolean => {
      switch (id) {
        case 'first-conversation': return conv >= 1
        case 'first-learning': return acts >= 1
        case 'united-family': return profile.members.length > 0 && profile.members.every(m => m.activities >= 1)
        case 'great-conversationalists': return conv >= 5
        case 'against-corruption': return corruptionTopics.filter(t => (tp[t] ?? 0) >= 100).length >= 3
      }
    }
    let updated = profile
    const unlocked: FamilyBadge[] = []
    defaultFamilyBadges.forEach(def => {
      const current = updated.familyBadges.find(b => b.id === def.id)!
      if (!current.unlocked && shouldUnlock(def.id)) {
        const nb = { ...current, unlocked: true }
        updated = { ...updated, familyBadges: updated.familyBadges.map(b => (b.id === def.id ? nb : b)) }
        unlocked.push(nb)
        updated = pushFamilyLog(updated, `ðŸ… Se desbloqueÃ³ la insignia ${nb.name}.`)
      }
    })
     return { profile: updated, unlocked }
   }

   const checkStudentBadges = (profile: StudentProfile): { profile: StudentProfile; unlocked: Badge[] } => {
     const tp = profile.progress.topicProgress
     const quizPlayed = profile.progress.quizScores.length > 0
     const topicsCompleted = mainTopics.filter(t => (tp[t] ?? 0) >= 100).length
     const shouldUnlock = (id: string): boolean => {
       switch (id) {
         case 'topics-explorer': return topicsCompleted >= 3
         case 'game-master': return quizPlayed
       }
       return false
     }
     let updated = profile
     const unlocked: Badge[] = []
     allBadges.forEach(def => {
       const current = updated.progress.badges.find(b => b.id === def.id)!
       if (!current.unlocked && shouldUnlock(def.id)) {
         const nb = { ...current, unlocked: true }
         updated = { ...updated, progress: { ...updated.progress, badges: updated.progress.badges.map(b => (b.id === def.id ? nb : b)) } }
         unlocked.push(nb)
       }
     })
      return { profile: updated, unlocked }
    }

    // Insignia Estrella Flappy: 500 XP acumuladas respondiendo en Flappy
    const awardFlappyStar = (totalXp: number) => {
      if (profileType !== 'student') return
      if (totalXp < 500) return
      const current = studentProfile.progress.badges
      const withStar = current.some(b => b.id === 'flappy-star')
        ? current
        : [...current, { id: 'flappy-star', name: 'Estrella Flappy', emoji: 'â­', color: '#F59E0B', unlocked: false } as Badge]
      if (withStar.some(b => b.id === 'flappy-star' && b.unlocked)) return
      const badges = withStar.map(b => (b.id === 'flappy-star' ? { ...b, unlocked: true } : b))
      const updated = { ...studentProfile, progress: { ...studentProfile.progress, badges } }
      setStudentProfile(updated)
      saveStudentProfile(updated)
      const nb = badges.find(b => b.id === 'flappy-star')
      if (nb) {
        setEarnedBadge({ ...nb })
        setShowBadgeCelebration(true)
      }
    }

    // Insignia Maestro Snake: rÃ©cord de 30 manzanas en Snake
    const awardSnakeMaster = (bestScore: number) => {
      if (profileType !== 'student') return
      if (bestScore < 30) return
      const current = studentProfile.progress.badges
      const withBadge = current.some(b => b.id === 'snake-master')
        ? current
        : [...current, { id: 'snake-master', name: 'Maestro Snake', emoji: 'ðŸ', color: '#10B981', unlocked: false } as Badge]
      if (withBadge.some(b => b.id === 'snake-master' && b.unlocked)) return
      const badges = withBadge.map(b => (b.id === 'snake-master' ? { ...b, unlocked: true } : b))
      const updated = { ...studentProfile, progress: { ...studentProfile.progress, badges } }
      setStudentProfile(updated)
      saveStudentProfile(updated)
      const nb = badges.find(b => b.id === 'snake-master')
      if (nb) {
        setEarnedBadge({ ...nb })
        setShowBadgeCelebration(true)
      }
    }

    // Insignia Atrapa Valores: rÃ©cord de 40 puntos en Atrapa la honestidad
    const awardCatchMaster = (bestScore: number) => {
      if (profileType !== 'student') return
      if (bestScore < 40) return
      const current = studentProfile.progress.badges
      const withBadge = current.some(b => b.id === 'catch-master')
        ? current
        : [...current, { id: 'catch-master', name: 'Atrapa Valores', emoji: 'ðŸ§º', color: '#EC4899', unlocked: false } as Badge]
      if (withBadge.some(b => b.id === 'catch-master' && b.unlocked)) return
      const badges = withBadge.map(b => (b.id === 'catch-master' ? { ...b, unlocked: true } : b))
      const updated = { ...studentProfile, progress: { ...studentProfile.progress, badges } }
      setStudentProfile(updated)
      saveStudentProfile(updated)
      const nb = badges.find(b => b.id === 'catch-master')
      if (nb) {
        setEarnedBadge({ ...nb })
        setShowBadgeCelebration(true)
      }
    }

    // Insignia Mente Maestra: completar Memoria con 20 movimientos o menos
    const awardMemoryWin = (moves: number) => {
      if (profileType !== 'student') return
      if (moves > 20) return
      const current = studentProfile.progress.badges
      const withBadge = current.some(b => b.id === 'memory-master')
        ? current
        : [...current, { id: 'memory-master', name: 'Mente Maestra', emoji: 'ðŸ§ ', color: '#14B8B6', unlocked: false } as Badge]
      if (withBadge.some(b => b.id === 'memory-master' && b.unlocked)) return
      const badges = withBadge.map(b => (b.id === 'memory-master' ? { ...b, unlocked: true } : b))
      const updated = { ...studentProfile, progress: { ...studentProfile.progress, badges } }
      setStudentProfile(updated)
      saveStudentProfile(updated)
      const nb = badges.find(b => b.id === 'memory-master')
      if (nb) {
        setEarnedBadge({ ...nb })
        setShowBadgeCelebration(true)
      }
    }

    // Insignia CorazÃ³n Valiente: completar los 3 niveles de esquive
    const awardDodgeMaster = () => {
      if (profileType !== 'student') return
      const current = studentProfile.progress.badges
      const withBadge = current.some(b => b.id === 'dodge-master')
        ? current
        : [...current, { id: 'dodge-master', name: 'CorazÃ³n Valiente', emoji: 'ðŸ’œ', color: '#F43F5E', unlocked: false } as Badge]
      if (withBadge.some(b => b.id === 'dodge-master' && b.unlocked)) return
      const badges = withBadge.map(b => (b.id === 'dodge-master' ? { ...b, unlocked: true } : b))
      const updated = { ...studentProfile, progress: { ...studentProfile.progress, badges } }
      setStudentProfile(updated)
      saveStudentProfile(updated)
      const nb = badges.find(b => b.id === 'dodge-master')
      if (nb) {
        setEarnedBadge({ ...nb })
        setShowBadgeCelebration(true)
      }
    }

    const awardPlatformLevels = (clearedCount?: number) => {
      if (profileType !== 'student') return
      const stored = safeParse(safeGet('hablemos-claro-plat-niveles'))
      const fromStore = Array.isArray(stored) ? stored.filter(x => typeof x === 'number').length : 0
      const total = Math.max(clearedCount ?? 0, fromStore)
      if (total < 5) return
      const current = studentProfile.progress.badges
      const withBadge = current.some(b => b.id === 'platform-levels')
        ? current
        : [...current, { id: 'platform-levels', name: 'Explorador', emoji: 'ðŸš©', color: '#22C55E', unlocked: false } as Badge]
      if (withBadge.some(b => b.id === 'platform-levels' && b.unlocked)) return
      const badges = withBadge.map(b => (b.id === 'platform-levels' ? { ...b, unlocked: true } : b))
      const updated = { ...studentProfile, progress: { ...studentProfile.progress, badges } }
      setStudentProfile(updated)
      saveStudentProfile(updated)
      const nb = badges.find(b => b.id === 'platform-levels')
      if (nb) {
        setEarnedBadge({ ...nb })
        setShowBadgeCelebration(true)
      }
    }

    const awardPlatformMaster = () => {
      if (profileType !== 'student') return
      const current = studentProfile.progress.badges
      const withBadge = current.some(b => b.id === 'platform-master')
        ? current
        : [...current, { id: 'platform-master', name: 'Guerrero de Duoli', emoji: 'ðŸ‰', color: '#E11D48', unlocked: false } as Badge]
      if (withBadge.some(b => b.id === 'platform-master' && b.unlocked)) return
      const badges = withBadge.map(b => (b.id === 'platform-master' ? { ...b, unlocked: true } : b))
      const updated = { ...studentProfile, progress: { ...studentProfile.progress, badges } }
      setStudentProfile(updated)
      saveStudentProfile(updated)
      const nb = badges.find(b => b.id === 'platform-master')
      if (nb) {
        setEarnedBadge({ ...nb })
        setShowBadgeCelebration(true)
      }
    }

    const celebrateFamilyBadges = (unlocked: FamilyBadge[]) => {
    if (unlocked.length === 0) return
    const last = unlocked[unlocked.length - 1]
    setEarnedBadge({ id: last.id as unknown as BadgeType, name: last.name, emoji: last.emoji, color: '#F59E0B', unlocked: true })
    setShowBadgeCelebration(true)
  }

  const familyProgressPercent = (p: FamilyProfile): number => {
    const topicsDone = mainTopics.filter(t => (p.progress.topicProgress[t] ?? 0) >= 100).length
    const topicsPart = (topicsDone / mainTopics.length) * 60
    const convPart = Math.min(p.progress.conversations / 5, 1) * 20
    const badgePart = p.familyBadges.length > 0 ? (p.familyBadges.filter(b => b.unlocked).length / p.familyBadges.length) * 20 : 0
    return Math.round(topicsPart + convPart + badgePart)
  }

   const completeConversation = () => {
     const currentProfile = profileType === 'student' ? studentProfile : familyProfile
     const newProgress = { ...currentProfile.progress, conversations: currentProfile.progress.conversations + 1 }
     if (profileType === 'student') {
       const checked = checkStudentBadges({ ...studentProfile, progress: newProgress })
       setStudentProfile({ ...studentProfile, progress: checked.profile.progress })
       saveStudentProfile({ ...studentProfile, progress: checked.profile.progress })
       if (checked.unlocked.length > 0) {
         setEarnedBadge({ ...checked.unlocked[0] })
         setShowBadgeCelebration(true)
       }
      } else {
        const member = familyProfile.members.find(m => m.id === familyProfile.activeMemberId) ?? familyProfile.members[0]
        const members = member
          ? familyProfile.members.map(m => (m.id === member.id
            ? { ...m, conversations: (m.conversations ?? 0) + 1, lastActive: new Date().toISOString() }
            : m))
          : familyProfile.members
        let updated: FamilyProfile = { ...familyProfile, members, progress: newProgress }
        updated = pushFamilyLog(updated, `ðŸ’¬ ${member ? member.name : 'La familia'} iniciÃ³ una conversaciÃ³n.`)
        const checked = checkFamilyBadges(updated)
        setFamilyProfile(checked.profile)
        saveFamilyProfile(checked.profile)
        celebrateFamilyBadges(checked.unlocked)
      }
    }

  // Responder pregunta del quiz
  const handleAnswer = (selected: number) => {
    setUserAnswers(prev => [...prev, selected])
    setShowFeedback(true)
    
    // Determinar si es correcta
    const correctAnswers = [1] // Ãndice correcto para cada pregunta
    const isCorrect = selected === correctAnswers[userAnswers.length - 1]
    
    if (isCorrect) {
      setFeedbackMessage('Â¡Correcto! Has aprendido algo nuevo.')
      updateProgress()
    } else {
      setFeedbackMessage('Casi. Recuerda que una coima es cuando alguien ofrece algo de valor para obtener un beneficio injusto.')
      updateProgress()
    }
  }

   // Continuar despuÃ©s del feedback
   const continueAfterFeedback = () => {
     setShowFeedback(false)
     setUserAnswers([])
     
     // Avanzar segÃºn la pantalla actual
     switch (currentScreen) {
       case 'quiz':
         // Verificar si completaron todas las preguntas
         if (userAnswers.length >= 3) {
           // Guardar puntaje del quiz
           const correctCount = userAnswers.filter(a => a === 1).length
           const score = Math.round((correctCount / userAnswers.length) * 100)
           const currentProf = profileType === 'student' ? studentProfile : familyProfile
           const newQuizScores = [...currentProf.progress.quizScores, score]
           if (profileType === 'student') {
             const newProgress = { ...studentProfile.progress, quizScores: newQuizScores }
             const checked = checkStudentBadges({ ...studentProfile, progress: newProgress })
             setStudentProfile({ ...studentProfile, progress: checked.profile.progress })
             saveStudentProfile({ ...studentProfile, progress: checked.profile.progress })
             if (checked.unlocked.length > 0) {
               setEarnedBadge({ ...checked.unlocked[0] })
               setShowBadgeCelebration(true)
             }
           }
           navigateTo('result')
         }
         break
       case 'games':
         requestConverse()
         break
       case 'activity':
         navigateTo('cases')
         break
       default:
         // Ya no hacer nada, solo cerrar feedback
     }
   }

  // Completar conversaciÃ³n
  // (ya definida arriba)

  // Reiniciar aplicaciÃ³n

  // Renderizar segÃºn pantalla
  const renderScreen = () => {
    switch (currentScreen) {
    case 'welcome':
      const welcomeStats = [
        { icon: 'ðŸ“š', label: t('welcomeStatTopics') },
        { icon: 'ðŸŽ®', label: t('welcomeStatGames') },
        { icon: 'ðŸ—£ï¸', label: t('welcomeStatLanguages') },
        { icon: 'ðŸ‘¨â€ðŸ‘©â€ðŸ‘§', label: t('welcomeStatFamily') },
      ]
      return (
        <div className="min-h-screen welcome-bg flex items-center justify-center p-6 md:p-8 relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute top-16 right-[12%] text-3xl animate-float hidden md:block">âœ¨</div>
            <div className="absolute bottom-24 left-[8%] text-3xl animate-float hidden md:block" style={{ animationDelay: '1s' }}>â­</div>
          </div>
          <div className="relative max-w-3xl mx-auto text-center text-white animate-fade-in py-10 md:py-14">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-[28px] bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-5xl md:text-6xl shadow-2xl animate-float">
              ðŸ’¬
            </div>
            <p className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] md:text-xs font-black uppercase tracking-[0.18em] mb-5">
              {t('welcomeEyebrow')}
            </p>
            <h1 className="text-4xl md:text-7xl font-black mb-5 drop-shadow-lg tracking-tight">
              Hablemos{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-100 bg-clip-text text-transparent">Claro</span>
            </h1>
            <p className="text-lg md:text-2xl mb-9 opacity-90 leading-relaxed max-w-xl mx-auto">{t('welcomeSub')}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10">
              {welcomeStats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/12 backdrop-blur-md border border-white/20 rounded-2xl py-3 px-2 shadow-lg"
                >
                  <div className="text-2xl mb-1" aria-hidden>{s.icon}</div>
                  <p className="text-sm md:text-base font-extrabold leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <button
                onClick={goHome}
                className="btn-glow bg-white text-indigo-700 font-extrabold py-5 px-8 rounded-2xl text-lg shadow-xl transition-transform hover:scale-[1.02]"
              >
                {t('start')} <span aria-hidden>â†’</span>
              </button>
              <button
                onClick={() => setCurrentScreen('about')}
                className="bg-white/15 backdrop-blur-md border-2 border-white/30 text-white font-bold py-5 px-8 rounded-2xl text-lg hover:bg-white/25 transition-all"
              >
                {t('howItWorks')}
              </button>
            </div>
            <p className="mt-7 text-xs md:text-sm text-white/70 font-medium">{t('welcomeFootnote')}</p>
          </div>
        </div>
      )

    case 'profile-type':
      return (
        <div className="min-h-screen p-6 md:p-10 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 50%, #F5F0FF 100%)' }}>
          {/* Fondo decorativo sutil */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-20 w-[28rem] h-[28rem] rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-warning/5 blur-3xl" />
            <svg className="absolute top-12 left-[7%] w-16 h-16 text-primary/15 hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5.5h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-5 4v-4H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z" />
              <circle cx="9" cy="10.5" r="0.6" fill="currentColor" />
              <circle cx="12.5" cy="10.5" r="0.6" fill="currentColor" />
              <circle cx="16" cy="10.5" r="0.6" fill="currentColor" />
            </svg>
            <svg className="absolute bottom-14 right-[8%] w-16 h-16 text-secondary/15 hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 6c-2-1.5-5-2-8-2v13c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2Z" />
              <path d="M12 6v13" />
            </svg>
            <svg className="absolute top-1/3 right-[4%] w-8 h-8 text-warning/25 hidden lg:block" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4L12 2Z" />
            </svg>
            <svg className="absolute bottom-1/4 left-[5%] w-6 h-6 text-success/25 hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>

          <button
            onClick={() => setCurrentScreen('welcome')}
            className="absolute top-5 left-5 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-gray-600 text-sm font-bold shadow-sm hover:bg-white hover:text-primary transition-all"
          >
            {t('back')}
          </button>

          <div className="relative w-full max-w-5xl mx-auto animate-slide-up text-center py-6">
            {/* Encabezado */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl shadow-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}>
                <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
                  <path d="M4 5.5h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-5 4v-4H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z" fill="#FFFFFF" />
                  <circle cx="9" cy="10.5" r="1.3" fill="#2563EB" />
                  <circle cx="12.5" cy="10.5" r="1.3" fill="#2563EB" />
                  <circle cx="16" cy="10.5" r="1.3" fill="#2563EB" />
                </svg>
              </div>
              <span className="text-2xl font-black text-dark">Hablemos Claro</span>
            </div>
            <p className="text-gray-500 font-medium mb-8">{t('selectTagline')}</p>

            <p className="text-xs font-black tracking-[0.25em] text-secondary mb-2">{t('selectEyebrow')}</p>
            <h1 className="text-3xl md:text-4xl font-black text-dark mb-2">{t('selectTitle')}</h1>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">{t('welcomeSub')}</p>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 text-left">
              <button
                onClick={() => {
                  setProfileType('student')
                  setCurrentScreen('home')
                }}
                className="group bg-white rounded-3xl p-7 md:p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              >
                <div className="rounded-2xl p-4 mb-5 flex justify-center" style={{ background: 'linear-gradient(135deg, #DBEAFE, #EDE9FE)' }}>
                  <svg role="img" aria-label="IlustraciÃ³n de estudiante aprendiendo" viewBox="0 0 220 170" className="w-full max-w-[230px] h-auto transition-transform duration-300 group-hover:scale-105">
                    <ellipse cx="110" cy="88" rx="92" ry="68" fill="#DBEAFE" />
                    <path d="M150 34l42 14-42 14-42-14 42-14Z" fill="#1F2937" />
                    <path d="M178 52v22" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="178" cy="78" r="4" fill="#F59E0B" />
                    <path d="M40 44l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5 2.5-6Z" fill="#7C3AED" />
                    <circle cx="196" cy="120" r="5" fill="#93C5FD" />
                    <rect x="82" y="106" width="56" height="48" rx="16" fill="#2563EB" />
                    <circle cx="110" cy="74" r="24" fill="#FCD9B8" />
                    <path d="M88 68C88 52 98 46 110 46c12 0 22 6 22 22-6-8-14-10-22-10s-16 2-22 10Z" fill="#1F2937" />
                    <circle cx="102" cy="76" r="2.5" fill="#1F2937" />
                    <circle cx="118" cy="76" r="2.5" fill="#1F2937" />
                    <path d="M104 84q6 5 12 0" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M60 128q25-10 50 0v24q-25-10-50 0Z" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="2" />
                    <path d="M160 128q-25-10-50 0v24q25-10 50 0Z" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="2" />
                    <path d="M110 128v24" stroke="#BFDBFE" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 4 22 9l-10 5L2 9l10-5Z" />
                    <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
                    <path d="M22 9v6" />
                  </svg>
                  <h2 className="text-lg font-black tracking-wide text-primary">{t('studentCardTitle')}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{t('studentCardDesc')}</p>
                <span className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-full transition-all duration-300 group-hover:gap-3 group-hover:shadow-lg">
                  {t('enterBtn')}
                </span>
              </button>

              <button
                onClick={() => {
                  setProfileType('family')
                  setCurrentScreen('home')
                }}
                className="group bg-white rounded-3xl p-7 md:p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              >
                <div className="rounded-2xl p-4 mb-5 flex justify-center" style={{ background: 'linear-gradient(135deg, #EDE9FE, #FEF3C7)' }}>
                  <svg role="img" aria-label="IlustraciÃ³n de familia unida" viewBox="0 0 220 170" className="w-full max-w-[230px] h-auto transition-transform duration-300 group-hover:scale-105">
                    <ellipse cx="110" cy="92" rx="95" ry="66" fill="#EDE9FE" />
                    <ellipse cx="110" cy="154" rx="78" ry="9" fill="#DDD6FE" />
                    <path d="M110 32c-6-12-22-12-22 0 0 8 10 14 22 22 12-8 22-14 22-22 0-12-16-12-22 0Z" fill="#EC4899" />
                    <rect x="20" y="26" width="42" height="28" rx="9" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="2" />
                    <path d="M30 54l5 8 6-8" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="32" cy="40" r="2.5" fill="#7C3AED" />
                    <circle cx="41" cy="40" r="2.5" fill="#7C3AED" />
                    <circle cx="50" cy="40" r="2.5" fill="#7C3AED" />
                    <rect x="46" y="86" width="40" height="60" rx="15" fill="#7C3AED" />
                    <circle cx="66" cy="66" r="19" fill="#FCD9B8" />
                    <path d="M47 66a19 19 0 0 1 38 0Z" fill="#1F2937" />
                    <rect x="96" y="82" width="40" height="64" rx="15" fill="#10B981" />
                    <circle cx="116" cy="62" r="19" fill="#F1C27D" />
                    <path d="M97 62a19 19 0 0 1 38 0Z" fill="#7C4A2D" />
                    <rect x="148" y="108" width="28" height="38" rx="12" fill="#F59E0B" />
                    <circle cx="162" cy="94" r="14" fill="#FCD9B8" />
                    <path d="M148 94a14 14 0 0 1 28 0Z" fill="#1F2937" />
                    <path d="M186 96l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="#F59E0B" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
                    <circle cx="16.8" cy="9" r="2.4" />
                    <path d="M16 14.3c2.6.4 4.3 2 4.7 4.2" />
                  </svg>
                  <h2 className="text-lg font-black tracking-wide text-secondary">{t('familyCardTitle')}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{t('familyCardDesc')}</p>
                <span className="inline-flex items-center gap-2 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 group-hover:gap-3 group-hover:shadow-lg" style={{ background: '#7C3AED' }}>
                  {t('enterBtn')}
                </span>
              </button>
            </div>
          </div>
        </div>
      )

    case 'about':
      const cust2 = getCustomization();
      const aboutSteps = [
        { icon: 'ðŸŽ¨', title: 'Elige tu perfil', desc: 'Estudiante o familia, y personaliza tu avatar con tu foto, colores y fondos.', ring: 'text-primary', chip: 'bg-primary/10' },
        { icon: 'ðŸ“š', title: 'Aprende temas', desc: '7 temas con juegos de verdadero o falso, completar y casos. Â¡Responde todo bien para avanzar!', ring: 'text-secondary', chip: 'bg-secondary/10' },
        { icon: 'ðŸŽ®', title: 'Juega y gana insignias', desc: 'Snake, Flappy, Atrapa, Memoria y CorazÃ³n Valiente: juega, responde y marca tu rÃ©cord ðŸ†.', ring: 'text-warning', chip: 'bg-warning/10' },
        { icon: 'ðŸ’¬', title: 'Conversa en familia', desc: 'Preguntas y reto familiar para hablar juntos en casa.', ring: 'text-success', chip: 'bg-success/10' },
      ];
      const whyBenefits = [
        { icon: 'ðŸ”Ž', title: t('why1Title'), desc: t('why1Desc'), ring: 'text-primary', chip: 'bg-primary/10' },
        { icon: 'ðŸŒ±', title: t('why2Title'), desc: t('why2Desc'), ring: 'text-success', chip: 'bg-success/10' },
        { icon: 'ðŸª‘', title: t('why3Title'), desc: t('why3Desc'), ring: 'text-secondary', chip: 'bg-secondary/10' },
        { icon: 'ðŸ†“', title: t('why4Title'), desc: t('why4Desc'), ring: 'text-warning', chip: 'bg-warning/10' },
      ];
      return (
        <div className="min-h-screen p-6 md:p-10 relative overflow-hidden" style={{ background: cust2.backgroundValue, backgroundSize: cust2.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          {/* DecoraciÃ³n de fondo */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 w-[28rem] h-[28rem] rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute top-16 right-[10%] text-4xl animate-float hidden md:block">âœ¨</div>
            <div className="absolute bottom-32 left-[7%] text-4xl animate-float hidden md:block" style={{ animationDelay: '1.2s' }}>ðŸŽ®</div>
            <div className="absolute top-2/5 left-[3%] text-3xl animate-float hidden lg:block" style={{ animationDelay: '0.6s' }}>ðŸ’¬</div>
          </div>

          <button
            onClick={() => setCurrentScreen('welcome')}
            className="absolute top-5 left-5 z-10 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-gray-600 text-sm font-bold shadow-sm hover:bg-white hover:text-primary transition-all"
          >
            {t('back')}
          </button>

          <div className="relative w-full max-w-3xl mx-auto animate-slide-up py-8 md:py-12">
            {/* Encabezado */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center text-4xl animate-float">
                ðŸ’¡
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg mb-2">{t('aboutTitle')}</h1>
              <p className="text-white/85 font-medium">{t('aboutSub')}</p>
            </div>

            {/* Â¿De quÃ© trata? */}
            <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 mb-6 shadow-custom border border-white/60 card-hover animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-2xl shrink-0">ðŸ’¬</div>
                <div>
                  <h2 className="font-extrabold text-dark text-lg mb-1">Â¿De quÃ© trata?</h2>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Hablemos Claro</strong> es para aprender en familia a reconocer <strong>coimas</strong> y a elegir lo honesto. Con temas interactivos, 5 juegos, insignias y conversaciones: Â¡sin aburrimiento! ðŸš€
                  </p>
                </div>
              </div>
            </div>

            {/* Pasos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {aboutSteps.map((s, i) => (
                <div
                  key={s.title}
                  className="bg-white/85 backdrop-blur-xl rounded-3xl p-5 shadow-custom border border-white/60 card-hover animate-fade-in"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="flex gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${s.chip} flex items-center justify-center text-2xl shrink-0`}>{s.icon}</div>
                    <div className="min-w-0">
                      <p className={`text-xs font-black uppercase tracking-wide ${s.ring}`}>Paso {i + 1}</p>
                      <h3 className="font-extrabold text-dark leading-tight">{s.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Â¿Por quÃ© Hablemos Claro? */}
            <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 md:p-7 mb-7 shadow-custom border border-white/60 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-center mb-5">
                <h2 className="text-xl md:text-2xl font-black text-dark">{t('whyTitle')}</h2>
                <p className="text-sm text-gray-600 mt-1 max-w-md mx-auto">{t('whySub')}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyBenefits.map((b) => (
                  <div key={b.title} className="flex gap-3 items-start">
                    <div className={`w-11 h-11 rounded-2xl ${b.chip} flex items-center justify-center text-xl shrink-0`} aria-hidden>{b.icon}</div>
                    <div className="min-w-0">
                      <h3 className={`font-extrabold ${b.ring} leading-tight`}>{b.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Para quiÃ©n + extras */}
            <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-5 mb-7 shadow-custom border border-white/60 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <p className="font-extrabold text-dark mb-3 text-center">Â¿Para quiÃ©n es? ðŸŽ¯</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">ðŸ‘¨â€ðŸ‘©â€ðŸ‘§ Familias</span>
                <span className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold">ðŸ§‘â€ðŸŽ“ JÃ³venes</span>
                <span className="px-3 py-1.5 rounded-full bg-warning/10 text-warning text-sm font-bold">ðŸ“š Docentes</span>
                <span className="px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-bold">ðŸ¡ En casa</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-alert/10 text-alert text-sm font-bold">ðŸŽ® Modo juego</span>
                <span className="px-3 py-1.5 rounded-full bg-warning/10 text-warning text-sm font-bold">ðŸ… Insignias</span>
                <span className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold">ðŸ“± Reels</span>
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">ðŸ—£ï¸ Quechua</span>
                <span className="px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-bold">ðŸ Snake</span>
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">ðŸ¦ Flappy</span>
                <span className="px-3 py-1.5 rounded-full bg-warning/10 text-warning text-sm font-bold">ðŸ§º Atrapa</span>
                <span className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold">ðŸ§  Memoria</span>
                <span className="px-3 py-1.5 rounded-full bg-alert/10 text-alert text-sm font-bold">ðŸ’œ Valiente</span>
                <span className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold">ðŸ“± Vista mÃ³vil</span>
              </div>
            </div>

            <button
              onClick={goHome}
              className="btn-glow bg-primary text-white font-extrabold py-5 px-8 rounded-2xl text-lg w-full shadow-xl transition-transform hover:scale-[1.02]"
            >
              Â¡Empezar! <span aria-hidden>â†’</span>
            </button>
          </div>
        </div>
      )

    case 'config':
      const cust4 = getCustomization();
      return (
        <div className="min-h-screen p-8" style={{ background: cust4.backgroundValue, backgroundSize: cust4.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="bg-white rounded-2xl p-6 mb-10 shadow-sm text-center">
              <h2 className="text-3xl font-bold gradient-text">{t('configTitle')}</h2>
            </div>

            <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-lg shadow-indigo-500/5 p-8 mb-6 text-center">
              <p className="text-black font-bold text-center text-lg">{t('deviceQuestion')}</p>
              <p className="text-gray-600 mt-1 mb-4">{t('deviceSub')}</p>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <button
                  onClick={() => changeView('mobile')}
                  className={viewMode === 'mobile' ? 'bg-primary text-white font-bold py-5 px-6 rounded-xl shadow-lg text-lg' : 'bg-white font-bold py-5 px-6 rounded-xl text-black border-2 border-gray-200 shadow-sm hover:bg-primary/20 transition-all text-lg'}
                >
                  {t('mobileView')}
                </button>
                <button
                  onClick={() => changeView('pc')}
                  className={viewMode === 'pc' ? 'bg-secondary text-white font-bold py-5 px-6 rounded-xl shadow-lg text-lg' : 'bg-white font-bold py-5 px-6 rounded-xl text-black border-2 border-gray-200 shadow-sm hover:bg-secondary/20 transition-all text-lg'}
                >
                  {t('fullView')}
                </button>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-lg shadow-indigo-500/5 p-8 mb-6">
                <h3 className="font-bold text-xl mb-6 text-center">{t('yourData')}</h3>
                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-dark mb-2 block">{t('name')}</label>
                    <input
                      type="text"
                      value={userName}
                      onChange={e => setUserName(e.target.value)}
                      onBlur={saveUserData}
                      placeholder={t('name')}
                      className="mt-1 w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary font-medium text-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-dark mb-2 block">{t('age')}</label>
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={userAge}
                        onChange={e => setUserAge(e.target.value)}
                        onBlur={saveUserData}
                        placeholder={t('age')}
                        className="mt-1 w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary font-medium text-lg"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-dark mb-2 block">{t('district')}</label>
                      <input
                        type="text"
                        value={userDistrict}
                        onChange={e => setUserDistrict(e.target.value)}
                        onBlur={saveUserData}
                        placeholder={t('district')}
                        className="mt-1 w-full px-5 py-4 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary font-medium text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-black font-bold text-center text-lg bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">{t('roleQuestion')}</p>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <button
                  onClick={() => setSelectedRole('parent')}
                  className={selectedRole === 'parent' ? 'bg-primary text-white font-bold py-5 px-6 rounded-xl shadow-lg text-lg' : 'bg-white font-bold py-5 px-6 rounded-xl text-black border-2 border-gray-200 shadow-sm hover:bg-primary/20 transition-all text-lg'}
                >
                  {t('parent')}
                </button>
                <button
                  onClick={() => setSelectedRole('child')}
                  className={selectedRole === 'child' ? 'bg-secondary text-white font-bold py-5 px-6 rounded-xl shadow-lg text-lg' : 'bg-white font-bold py-5 px-6 rounded-xl text-black border-2 border-gray-200 shadow-sm hover:bg-secondary/20 transition-all text-lg'}
                >
                  {t('child')}
                </button>
              </div>

              <p className="text-black font-bold text-center text-lg bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200 mt-10">{t('languageTitle')}</p>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <button
                  onClick={() => changeLanguage('es')}
                  className={language === 'es' ? 'bg-primary text-white font-bold py-5 px-6 rounded-xl shadow-lg text-lg' : 'bg-white font-bold py-5 px-6 rounded-xl text-black border-2 border-gray-200 shadow-sm hover:bg-primary/20 transition-all text-lg'}
                >
                  {t('spanish')}
                </button>
                <button
                  onClick={() => changeLanguage('qu')}
                  className={language === 'qu' ? 'bg-secondary text-white font-bold py-5 px-6 rounded-xl shadow-lg text-lg' : 'bg-white font-bold py-5 px-6 rounded-xl text-black border-2 border-gray-200 shadow-sm hover:bg-secondary/20 transition-all text-lg'}
                >
                  {t('quechua')}
                </button>
              </div>
</div>

              <button
                onClick={goHome}
                className="btn-glow bg-primary text-white font-bold py-5 px-8 rounded-xl text-xl w-full mt-10"
              >
                ðŸ  {t('goHome')}
              </button>
          </div>
        </div>
      )

    case 'home':
      const currentProgress = getProgress()
      const unlockedCount = currentProgress.badges.filter(b => b.unlocked).length
      const isFamHome = profileType === 'family'
      const homeBadgeCount = isFamHome ? familyProfile.familyBadges.filter(b => b.unlocked).length : unlockedCount
       const homeBadgeTotal = isFamHome ? familyProfile.familyBadges.length : getBadges().length
      const kidsDoneArr = currentProgress.kidsDone ?? []
      const kidsDoneCount = kidsDoneArr.length
      const kidsTotal = KIDS_TOPICS.length
      const lessonsPct = kidsTotal > 0 ? Math.round((kidsDoneCount / kidsTotal) * 100) : 0
      const streakDays = currentProgress.streakDays ?? 0
      const nextKid = KIDS_TOPICS.find(k => !kidsDoneArr.includes(k.id)) ?? null
      const nextGuide = PARENT_GUIDES.find(g => !(currentProgress.guidesDone ?? []).includes(g.id)) ?? null
      const nextLesson = nextKid
        ? { title: nextKid.title, desc: nextKid.desc, icon: nextKid.icon, go: () => openTemasTab(`-tema-${nextKid.id}`) }
        : nextGuide
          ? { title: nextGuide.title, desc: nextGuide.desc, icon: nextGuide.icon, go: () => openTemasTab(`-guia-${nextGuide.id}`) }
          : null
      const lessonTotal = nextKid ? kidsTotal : nextGuide ? PARENT_GUIDES.length : kidsTotal
      const nextLessonNum = nextKid ? KIDS_TOPICS.indexOf(nextKid) + 1 : nextGuide ? PARENT_GUIDES.indexOf(nextGuide) + 1 : kidsDoneCount

      const custHome = getCustomization()
      const textColors = getTextColorForTheme(custHome.backgroundValue)
      return (
        <div className="min-h-screen pb-36" style={{ background: custHome.backgroundValue, backgroundSize: custHome.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          {/* NAVBAR */}
          <header className="h-16 md:h-[68px] bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-30">
            <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8 lg:px-6 h-full flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 md:w-11 md:h-11 shrink-0 rounded-xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-lg shadow-md shadow-primary/20">
                  ðŸ›¡ï¸
                </div>
                <div className="min-w-0">
                  <p className="font-black text-slate-800 leading-tight truncate text-[15px] md:text-base">{t('welcomeTitle')}</p>
                  <p className="text-[11px] md:text-xs font-semibold text-slate-500 truncate">ðŸ  {t('homeNav')}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 shrink-0 flex-wrap justify-end">
                <div className="px-2.5 py-1.5 rounded-xl bg-white shadow-sm border border-slate-100 text-slate-700 font-black text-sm md:text-base flex items-center gap-1.5 tabular-nums" title={t('streak')}>ðŸ”¥ {streakDays}</div>
                <div className="px-2.5 py-1.5 rounded-xl bg-white shadow-sm border border-slate-100 text-slate-700 font-black text-sm md:text-base flex items-center gap-1.5 tabular-nums" title={t('quickBadges')}>ðŸ… {homeBadgeCount}/{homeBadgeTotal}</div>
                <button onClick={() => setCurrentScreen('profile')} className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white hover:bg-primary/10 shadow-sm text-lg transition-colors" aria-label={t('profile')} title={t('profile')}>ðŸ‘¤</button>
                <button onClick={() => setCurrentScreen('config')} className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white hover:bg-primary/10 shadow-sm text-base transition-colors" aria-label={t('configTitle')} title={t('configTitle')}>âš™ï¸</button>
              </div>
            </div>
          </header>

            <main className="mx-auto w-full max-w-[1120px] px-5 md:px-8 lg:px-6 pt-5 md:pt-7 pb-16 animate-slide-up">
               {/* HERO */}
               <section className="relative overflow-hidden rounded-[28px] border-2 shadow-[0_18px_52px_rgba(15,23,42,0.18)] px-6 py-8 md:px-14 md:py-11 text-center" style={{ background: textColors.cardBg, borderColor: withAlpha(custHome.themeColor, 0.4) }}>
                 {/* Elementos decorativos animados */}
                  <div aria-hidden className="pointer-events-none absolute -top-28 -left-28 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '0s', background: `rgba(124,58,237,0.1)` }} />
                  <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-28 w-80 h-80 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s', background: `rgba(59,130,246,0.1)` }} />
                  <div aria-hidden className="pointer-events-none absolute top-8 left-10 text-3xl animate-float opacity-20 hidden md:block" style={{ animationDelay: '0.3s' }}>âœ¨</div>
                  <div className="relative mx-auto max-w-2xl flex flex-col items-center gap-4">
                    <span className="inline-flex items-center gap-2 w-max px-5 py-2 rounded-full border text-xs md:text-sm font-black uppercase tracking-widest shadow-sm backdrop-blur-sm" style={{ background: withAlpha(textColors.cardBg, 0.55), borderColor: textColors.border, color: textColors.primary }}>
                      âœ¨ {t('heroEyebrow')}
                    </span>
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-primary/25 animate-float">
                     ðŸ›¡ï¸
                   </div>
                    <h1 className="text-[32px] md:text-[44px] font-black leading-[1.08] max-w-xl" style={{ color: textColors.primary}}>{t('heroTitle')}</h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-lg font-medium" style={{ color: withAlpha(textColors.primary, 0.92) }}>{t('welcomeLine')}</p>

                   <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
                     <button
                       onClick={nextLesson ? nextLesson.go : () => openTemasTab('')}
                       className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-sm md:text-[15px] font-bold rounded-full px-8 h-12 bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                     >
                       {t('continueLesson')} <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">â†’</span>
                     </button>
                     <button
                       onClick={() => setCurrentScreen('games')}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-sm md:text-[15px] font-bold rounded-full px-8 h-12 border-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        style={{ color: textColors.primary, borderColor: withAlpha(textColors.primary, 0.7), backgroundColor: withAlpha(textColors.primary, 0.14) }}
                      >
                        {t('playAndPractice')} <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">â†’</span>
                     </button>
                   </div>

                   <div className="flex items-center gap-3 w-full max-w-[360px] mt-4">
                      <div className="flex-1 h-4 rounded-full overflow-hidden shadow-inner" style={{ background: withAlpha(textColors.primary, 0.25) }} role="progressbar" aria-valuenow={lessonsPct} aria-valuemin={0} aria-valuemax={100} aria-label={t('topicsCompleted')}>
                       <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-[width] duration-700 shadow-sm" style={{ width: `${lessonsPct}%` }}></div>
                     </div>
                     <span className="text-xs md:text-sm font-bold shrink-0 tabular-nums" style={{ color: textColors.secondary }}>
                        {t('lessonWord')} {nextLessonNum} de {lessonTotal} <span className="opacity-70">â€¢ {lessonsPct}% {t('completedPct')}</span>
                     </span>
                   </div>
                 </div>
               </section>

             {/* ORDEN: en movil el juego va primero, en PC las tarjetas van arriba */}
             {/* CARACTERÃSTICAS */}
             <section className="mt-8 md:mt-10">
               <div className="flex items-center gap-3 mb-6 justify-center">
                 <span className="h-px flex-1 max-w-[120px]" style={{ background: withAlpha(textColors.border, 0.6) }} aria-hidden />
                 <h2 className="text-sm md:text-base font-black uppercase tracking-widest" style={{ color: textColors.secondary}}>âœ¨ {t('learnSection')}</h2>
                 <span className="h-px flex-1 max-w-[120px]" style={{ background: withAlpha(textColors.border, 0.6) }} aria-hidden />
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                 <button
                   onClick={() => openTemasTab('')}
                   className="group rounded-[22px] backdrop-blur-xl border p-6 md:p-7 text-left shadow-[0_8px_28px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,41,82,0.10)] hover:border-secondary/30 transition-all duration-200 flex flex-col gap-3"
                   style={{ background: `${textColors.cardBg}`, borderColor: textColors.border }}
                 >
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110" aria-hidden>ðŸ“–</div>
                   <div className="flex-1">
                     <p className="font-black text-xl md:text-2xl" style={{ color: textColors.primary}}>{t('themes')}</p>
                     <p className="text-sm mt-1 leading-relaxed" style={{ color: textColors.secondary}}>{t('themesDesc')}</p>
                   </div>
                   <span className="inline-flex items-center gap-1.5 self-start mt-1 text-sm font-bold px-4 py-2 rounded-full border-2 transition-all duration-200 group-hover:-translate-y-0.5" style={{ color: textColors.accent, borderColor: textColors.accent, background: withAlpha(textColors.accent, 0.07) }}>
                     {t('viewMore')} <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">â†’</span>
                   </span>
                 </button>
                 <button
                   onClick={() => setCurrentScreen('reels')}
                   className="group rounded-[22px] backdrop-blur-xl border p-6 md:p-7 text-left shadow-[0_8px_28px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,41,82,0.10)] hover:border-warning/30 transition-all duration-200 flex flex-col gap-3"
                   style={{ background: `${textColors.cardBg}`, borderColor: textColors.border }}
                 >
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-warning to-warning/60 flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110" aria-hidden>ðŸ“±</div>
                   <div className="flex-1">
                     <p className="font-black text-xl md:text-2xl" style={{ color: textColors.primary}}>{t('reels')}</p>
                     <p className="text-sm mt-1 leading-relaxed" style={{ color: textColors.secondary}}>{t('reelsDesc')}</p>
                   </div>
                   <span className="inline-flex items-center gap-1.5 self-start mt-1 text-sm font-bold px-4 py-2 rounded-full border-2 transition-all duration-200 group-hover:-translate-y-0.5" style={{ color: textColors.accent, borderColor: textColors.accent, background: withAlpha(textColors.accent, 0.07) }}>
                     {t('viewMore')} <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">â†’</span>
                   </span>
                 </button>
                 <button
                   onClick={requestConverse}
                   className="group rounded-[22px] backdrop-blur-xl border p-6 md:p-7 text-left shadow-[0_8px_28px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,41,82,0.10)] hover:border-success/30 transition-all duration-200 flex flex-col gap-3"
                   style={{ background: `${textColors.cardBg}`, borderColor: textColors.border }}
                 >
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-success to-success/60 flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110" aria-hidden>ðŸ‘¨â€ðŸ‘©â€ðŸ‘§</div>
                   <div className="flex-1">
                     <p className="font-black text-xl md:text-2xl" style={{ color: textColors.primary}}>{t('familyActivityLabel')}</p>
                     <p className="text-sm mt-1 leading-relaxed" style={{ color: textColors.secondary}}>{t('familyDesc')}</p>
                   </div>
                    <span className="inline-flex items-center gap-1.5 self-start mt-1 text-sm font-bold px-4 py-2 rounded-full border-2 transition-all duration-200 group-hover:-translate-y-0.5" style={{ color: textColors.accent, borderColor: textColors.accent, background: withAlpha(textColors.accent, 0.07) }}>
                      {t('viewMore')} <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">â†’</span>
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentScreen('games')}
                    className="group order-first md:order-none rounded-[22px] backdrop-blur-xl border p-6 md:p-7 text-left shadow-[0_8px_28px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,41,82,0.10)] transition-all duration-200 flex flex-col gap-3"
                    style={{ background: `${textColors.cardBg}`, borderColor: textColors.border }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110" aria-hidden>ðŸŽ®</div>
                    <div className="flex-1">
                      <p className="font-black text-xl md:text-2xl" style={{ color: textColors.primary}}>Â¿Listo para jugar?</p>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: textColors.secondary}}>Flappy, Snake y mÃ¡s. Juega, aprende y supera tu rÃ©cord.</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start mt-1 text-sm font-bold text-white px-4 py-2 rounded-full shadow-md group-hover:translate-x-1 transition-transform" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                      Jugar ahora â†’
                    </span>
                  </button>
              </div>
             </section>
             {/* ESTADO RÃPIDO */}
             <section className="grid grid-cols-3 gap-3 md:gap-5 mt-8 md:mt-10">
               <button onClick={() => setCurrentScreen('profile')} className="group rounded-[20px] backdrop-blur-xl border p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 shadow-[0_6px_22px_rgba(15,23,42,0.10)]" style={{ background: `${textColors.cardBg}`, borderColor: textColors.border }}>
                 <div className="text-2xl md:text-3xl" aria-hidden>ðŸ“ˆ</div>
                 <p className="font-black text-lg md:text-2xl tabular-nums mt-1" style={{ color: textColors.primary}}>{lessonsPct}%</p>
                 <p className="text-[11px] font-bold uppercase tracking-wide mt-0.5 truncate" style={{ color: textColors.secondary}}>{t('yourProgress')}</p>
               </button>
               <button onClick={() => setCurrentScreen('profile')} className="group rounded-[20px] backdrop-blur-xl border p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 shadow-[0_6px_22px_rgba(15,23,42,0.10)]" style={{ background: `${textColors.cardBg}`, borderColor: textColors.border }}>
                 <div className="text-2xl md:text-3xl" aria-hidden>ðŸ”¥</div>
                 <p className="font-black text-lg md:text-2xl tabular-nums mt-1" style={{ color: textColors.primary}}>{streakDays}</p>
                 <p className="text-[11px] font-bold uppercase tracking-wide mt-0.5 truncate" style={{ color: textColors.secondary}}>{t('streak')}</p>
               </button>
               <button onClick={() => setCurrentScreen('profile')} className="group rounded-[20px] backdrop-blur-xl border p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 shadow-[0_6px_22px_rgba(15,23,42,0.10)]" style={{ background: `${textColors.cardBg}`, borderColor: textColors.border }}>
                 <div className="text-2xl md:text-3xl" aria-hidden>ðŸ…</div>
                 <p className="font-black text-lg md:text-2xl tabular-nums mt-1" style={{ color: textColors.primary}}>{homeBadgeCount}<span className="text-sm font-bold">/{homeBadgeTotal}</span></p>
                 <p className="text-[11px] font-bold uppercase tracking-wide mt-0.5 truncate" style={{ color: textColors.secondary}}>{t('quickBadges')}</p>
               </button>
             </section>

            {/* PIE DEL LANDING */}
            <footer className="mt-10 md:mt-12 text-center">
              <p className="text-slate-500 text-sm">{t('bottomQuote')}</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-2">Hablemos Claro Â· {t('selectTagline')}</p>
            </footer>
          </main>

           {/* NavegaciÃ³n principal */}
            <nav className="fixed left-1/2 -translate-x-1/2 z-40 w-max max-w-[94vw] bottom-[calc(1rem+env(safe-area-inset-bottom))] rounded-3xl shadow-xl shadow-indigo-500/25 px-3 py-2 flex items-center gap-1" style={{ background: '#2A1B50' }}>
             {[
               { label: t('homeNav'), icon: 'ðŸ ', active: true, go: () => setCurrentScreen('home') },
               { label: t('themes'), icon: 'ðŸ“–', active: false, go: () => openTemasTab('') },
               { label: t('reels'), icon: 'ðŸ“±', active: false, go: () => setCurrentScreen('reels') },
               { label: t('profile'), icon: 'ðŸ‘¤', active: false, go: () => setCurrentScreen('profile') },
             ].map(navItem => (
               <button
                 key={navItem.label}
                 onClick={navItem.go}
                  className={`px-3 md:px-4 py-2 rounded-2xl flex flex-col items-center gap-1 text-[13px] md:text-[15px] font-bold whitespace-nowrap transition-all ${navItem.active ? 'shadow-md' : 'hover:bg-white/20'}`}
                  style={{ color: navItem.active ? '#ffffff' : '#E0E0FF', background: navItem.active ? '#6B46C1' : 'rgba(255,255,255,0.10)' }}
               >
                 <span className="text-base leading-none">{navItem.icon}</span>
                 {navItem.label}
               </button>
             ))}
            </nav>
        </div>
      )

    case 'reels':
      const cust6 = getCustomization();
      return (
        <div className="min-h-screen p-8" style={{ background: cust6.backgroundValue, backgroundSize: cust6.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-5xl mx-auto animate-slide-up">
            <div className="bg-white rounded-2xl p-5 flex items-center justify-between mb-6 shadow-sm">
              <div>
                <h1 className="text-3xl font-bold gradient-text">{t('reels')} ðŸ“±</h1>
                <p className="text-sm text-gray-600">{t('reelsDesc')}</p>
              </div>
              <button onClick={() => navigateTo('home')} className="glass-card px-3 py-1 rounded-xl text-gray-600 text-sm hover:bg-gray-100 transition-all">
                {t('back')}
              </button>
            </div>

            <div className="space-y-4">
              <div
                className="block bg-gradient-to-r from-primary to-secondary rounded-3xl shadow-lg shadow-primary/25 p-6 text-white text-center card-hover animate-slide-up"
              >
                <p className="font-black text-xl mb-1">ðŸ”— SÃGUENOS EN TIKTOK ðŸ”—</p>
                <p className="text-white/90 mb-4">Entra y conoce mÃ¡s de nuestro trabajo</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://www.tiktok.com/@proyectoshumanidades_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-primary font-black px-6 py-2.5 rounded-full hover:scale-[1.02] active:scale-[0.99] transition-all"
                  >
                    ðŸ‘‰ Â¡SÃ­guenos! ðŸ’™
                  </a>
                  <a
                    href="https://vt.tiktok.com/ZSbePoGYT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-primary font-black px-6 py-2.5 rounded-full hover:scale-[1.02] active:scale-[0.99] transition-all"
                  >
                    ðŸŽ¬ Video 1
                  </a>
                  <a
                    href="https://vt.tiktok.com/ZSbeaqdRp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white/20 border border-white/40 text-white font-black px-6 py-2.5 rounded-full hover:bg-white/30 active:scale-[0.99] transition-all"
                  >
                    ðŸŽ¬ Video 2
                  </a>
                  <a
                    href="https://vt.tiktok.com/ZSbeavVC7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white/20 border border-white/40 text-white font-black px-6 py-2.5 rounded-full hover:bg-white/30 active:scale-[0.99] transition-all"
                  >
                    ðŸŽ¬ Video 3
                  </a>
                  <a
                    href="https://www.tiktok.com/@proyectoshumanidades_/video/7688869627883048199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white/20 border border-white/40 text-white font-black px-6 py-2.5 rounded-full hover:bg-white/30 active:scale-[0.99] transition-all"
                  >
                    ðŸŽ¬ Video 4
                  </a>
                </div>
              </div>
              <div
                className="block rounded-3xl shadow-lg p-6 text-white text-center card-hover animate-slide-up"
                style={{ background: 'linear-gradient(135deg, #1877F2 0%, #0d5bbf 100%)', boxShadow: '0 10px 30px rgba(24,119,242,0.35)' }}
              >
                <p className="font-black text-xl mb-1">ðŸ‘ SÃGUENOS EN FACEBOOK ðŸ‘</p>
                <p className="text-white/90 mb-4">Entra y conoce mÃ¡s de nuestro trabajo</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://www.facebook.com/profile.php?id=61594629992198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white font-black px-6 py-2.5 rounded-full hover:scale-[1.02] active:scale-[0.99] transition-all"
                    style={{ color: '#1877F2' }}
                  >
                    ðŸ‘‰ Â¡SÃ­guenos! ðŸ’™
                  </a>
                </div>
              </div>
              <div
                className="block rounded-3xl shadow-lg p-6 text-white text-center card-hover animate-slide-up"
                style={{ background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)', boxShadow: '0 10px 30px rgba(253,29,29,0.35)' }}
              >
                <p className="font-black text-xl mb-1">ðŸ“¸ SÃGUENOS EN INSTAGRAM ðŸ“¸</p>
                <p className="text-white/90 mb-4">Entra y conoce mÃ¡s de nuestro trabajo</p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://www.instagram.com/p/Ddpe90VgYok/?stkn=MWV0a3ZqNDZvczZ4dw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white font-black px-6 py-2.5 rounded-full hover:scale-[1.02] active:scale-[0.99] transition-all"
                    style={{ color: '#C13584' }}
                  >
                    ðŸ‘‰ Â¡MÃ­ranos! ðŸ’œ
                  </a>
                </div>
              </div>
              {reelsMessages.map((reel, index) => (
                <div key={reel.id} className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-lg shadow-indigo-500/5 p-6 shadow-custom-lg card-hover animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warning to-primary flex items-center justify-center text-white font-bold">
                      {reel.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-dark">{reel.author}</p>
                      <p className="text-xs text-gray-500">{reel.time}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{reel.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    case 'learn':
      // Temas educativos
      const duliTip = (() => {
        const kd = getProgress().kidsDone ?? []
        return kd.length === 0
          ? 'Â¡Toca el primer tema y gana tu primer XP! ðŸš€'
          : kd.length < KIDS_TOPICS.length
            ? `Â¡Vas ${kd.length}/${KIDS_TOPICS.length}! No pierdas tu racha ðŸ”¥`
            : 'Â¡Todos los temas listos! Â¿Probamos el examen? ðŸ†'
      })()
      const coimaCases = [
        {
          id: 1,
          situation: 'Una persona ofrece dinero para que le den un trato especial que no le corresponde.',
          isCoima: true,
          explanation: 'Correcto. Se estÃ¡ ofreciendo algo para obtener un beneficio que no corresponde.'
        },
        {
          id: 2,
          situation: 'Un funcionario pide un "extra" para acelerar un trÃ¡mite importante.',
          isCoima: true,
          explanation: 'Correcto. Pedir dinero extra por hacer su trabajo es una coima.'
        },
        {
          id: 3,
          situation: 'Un amigo te presta su cuaderno para que copies la tarea.',
          isCoima: false,
          explanation: 'Correcto. Prestar un cuaderno entre amigos no es una coima, es ayuda entre compaÃ±eros.'
        },
        {
          id: 4,
          situation: 'Una persona ofrece un regalo caro a un juez para que falle a su favor.',
          isCoima: true,
          explanation: 'Correcto. Ofrecer regalos a autoridades para influir en decisiones es coima.'
        },
        {
          id: 5,
          situation: 'Un comerciante paga el precio justo por un producto en el mercado.',
          isCoima: false,
          explanation: 'Correcto. Pagar el precio acordado en una transacciÃ³n honesta no es coima.'
        },
      ]

      const kidsDone = getProgress().kidsDone ?? []
      const guidesDone = getProgress().guidesDone ?? []
      const activeKid = KIDS_TOPICS.find(k => k.id === activeKidId) ?? null
      const activeGuide = PARENT_GUIDES.find(g => g.id === activeGuideId) ?? null
      const examUnlocked = kidsDone.length >= KIDS_TOPICS.length
      const cust7 = getCustomization();
      const learnStreak = getProgress().streakDays ?? 0
      const learnBadge = getProgress().badges?.filter(b => b.unlocked).length ?? 0
      const learnBadgeTotal = getProgress().badges?.length ?? 3
      const kidsXp = kidsDone.length * 50
      const guidesXp = guidesDone.length * 30

      // Pantalla "Â¿Coima o no?"
      if (showCoimaONo) {
        const currentCase = coimaCases[currentCoimaCase]
        const cust8 = getCustomization();
        return (
          <div className="min-h-screen p-8" style={{ background: cust8.backgroundValue, backgroundSize: cust8.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
            <div className="max-w-3xl mx-auto animate-slide-up space-y-8 text-center">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold gradient-text">Â¿Coima o no?</h1>
                <button onClick={() => { setShowCoimaONo(false); setCurrentCoimaCase(0); }} className="glass-card px-4 py-2 rounded-xl text-gray-500 hover:text-primary text-sm font-medium">
                  â† AtrÃ¡s
                </button>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden max-w-xs mx-auto">
                <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${((currentCoimaCase + 1) / coimaCases.length) * 100}%` }}></div>
              </div>
              <p className="text-sm text-gray-500">Caso {currentCoimaCase + 1} de {coimaCases.length}</p>

              <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Caso {currentCoimaCase + 1} de {coimaCases.length}</span>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden w-48">
                    <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${((currentCoimaCase + 1) / coimaCases.length) * 100}%` }}></div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">{currentCase.situation}</p>

                <div className="grid grid-cols-2 gap-6">
                  <button
                    onClick={() => {
                      const isCorrect = currentCase.isCoima === true
                      setFeedbackMessage(isCorrect ? currentCase.explanation : 'Incorrecto. ' + currentCase.explanation)
                      setShowFeedback(true)
                      updateProgress()
                    }}
                    className="btn-glow bg-primary text-white font-bold py-5 px-6 rounded-xl text-lg font-medium w-full shadow-lg"
                  >
                    âœ… SÃ­, es una coima
                  </button>
                  <button
                    onClick={() => {
                      const isCorrect = currentCase.isCoima === false
                      setFeedbackMessage(isCorrect ? currentCase.explanation : 'Incorrecto. ' + currentCase.explanation)
                      setShowFeedback(true)
                      updateProgress()
                    }}
                    className="btn-glow bg-white border-2 border-primary text-primary font-bold py-5 px-6 rounded-xl text-lg font-medium hover:bg-primary/5"
                  >
                    âŒ No, no es una coima
                  </button>
                </div>
              </div>

              {showFeedback && (
                <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-lg shadow-indigo-500/5 p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                         style={{ background: feedbackMessage.includes('Correcto') ? '#10B98120' : '#EF444420' }}>
                      {feedbackMessage.includes('Correcto') ? 'âœ…' : 'âŒ'}
                    </div>
                    <p className="font-bold text-lg" style={{ color: feedbackMessage.includes('Correcto') ? '#10B981' : '#EF4444' }}>
                      {feedbackMessage.includes('Correcto') ? 'Â¡Correcto!' : 'Intenta de nuevo'}
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feedbackMessage}</p>
                </div>
              )}

              {showFeedback && (
                <button
                  onClick={() => {
                    setShowFeedback(false)
                    if (currentCoimaCase < coimaCases.length - 1) {
                      setCurrentCoimaCase(prev => prev + 1)
                    } else {
                      setShowCoimaONo(false)
                      setCurrentCoimaCase(0)
                      navigateTo('home')
                    }
                  }}
                  className="btn-glow bg-primary text-white font-bold py-4 px-8 rounded-xl text-lg w-full"
                >
                  {currentCoimaCase < coimaCases.length - 1 ? 'Siguiente caso â†’' : 'Volver al inicio'}
                </button>
              )}
            </div>
          </div>
        )
      }

      return (
        <div className="min-h-screen p-8 temas-page" style={{ background: cust7.backgroundValue, backgroundSize: cust7.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-4xl mx-auto animate-slide-up space-y-14">
            
            {/* Header */}
            <div className="bg-white rounded-2xl p-8 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">ðŸ“š</div>
                <div>
                  <h1 className="text-4xl font-bold gradient-text">Explora los temas</h1>
                  <p className="text-gray-600 text-lg mt-2 mb-1">Elige contenidos segÃºn tu rol dentro de la familia.</p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (learnView !== 'hub') {
                    setLearnView('hub')
                  } else if (BOOT_HASH) {
                    window.close()
                  } else {
                    navigateTo('home')
                  }
                }}
                className="glass-card px-6 py-3 rounded-xl text-gray-600 hover:text-primary text-base font-bold hover:bg-gray-100 transition-all shrink-0"
              >
                {learnView === 'hub' ? 'â† Inicio' : 'â† Volver al mapa'}
              </button>
            </div>

            {/* HUB â€” ACADEMIA SEPARADA EN ISLAS */}
            {learnView === 'hub' && (
              <div className="space-y-10 md:space-y-14 max-w-2xl mx-auto">
                {/* HERO COMPARTIDO */}
                <section className="relative overflow-hidden rounded-[28px] border border-primary/15 bg-gradient-to-br from-primary via-primary/90 to-secondary shadow-[0_16px_48px_rgba(37,99,235,0.25)] px-6 py-8 md:px-10 md:py-10 text-white text-center">
                  <div aria-hidden className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" />
                  <div aria-hidden className="pointer-events-none absolute top-6 right-8 text-4xl opacity-30">â˜ï¸</div>
                  <div aria-hidden className="pointer-events-none absolute bottom-6 left-8 text-4xl opacity-30">â˜ï¸</div>
                  <div className="relative flex flex-col items-center gap-3">
                    <div className="flex items-center justify-center gap-4 pt-1">
                        <div className="w-20 h-20 md:w-24 md:h-24 shrink-0" style={{ filter: 'drop-shadow(0 10px 18px rgba(15,23,42,0.3))' }}>
                        <DuliMascot className="w-full h-full" />
                      </div>
                      <div className="text-left bg-white text-slate-800 rounded-2xl rounded-bl-sm px-4 py-3 shadow-xl border border-white/80 max-w-[230px]">
                        <p className="text-sm font-black leading-tight">Â¡Hola, soy Duli! ðŸ¦‰</p>
                        <p className="text-xs font-semibold text-slate-500 mt-1 leading-snug">Te acompaÃ±o a aprender integridad paso a paso.</p>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black leading-tight">Academia de Integridad</h2>
                    <p className="text-white/85 text-sm md:text-base max-w-md leading-relaxed">
                      Espacios separados para cada etapa: los hijos aprenden temas cortitos con reto y racha; los padres encuentran guÃ­as para conversar en familia.
                    </p>
                    {/* CHIPS */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                      <div className="px-3 py-2 rounded-2xl bg-white/15 backdrop-blur border border-white/20 font-bold text-sm">ðŸ”¥ {learnStreak}</div>
                      <div className="px-3 py-2 rounded-2xl bg-white/15 backdrop-blur border border-white/20 font-bold text-sm">â­ {kidsXp + guidesXp} XP</div>
                      <div className="px-3 py-2 rounded-2xl bg-white/15 backdrop-blur border border-white/20 font-bold text-sm">ðŸ… {learnBadge}/{learnBadgeTotal}</div>
                      <div className="px-3 py-2 rounded-2xl bg-white/15 backdrop-blur border border-white/20 font-bold text-sm">ðŸ“– {kidsDone.length + guidesDone.length} lecciones</div>
                    </div>
                  </div>
                </section>

                {/* ISLA 1 Â· ACADEMIA HIJOS */}
                <section className="rounded-[28px] border border-primary/10 bg-gradient-to-b from-white to-primary/[0.03] shadow-xl overflow-hidden">
                  {/* cabecera de la isla */}
                  <div className="pt-8 px-6 md:px-10 text-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/10 text-[11px] font-black uppercase tracking-wider">ðŸŽ“ Academia Hijos</span>
                    <h3 className="mt-3 text-2xl md:text-3xl font-black text-primary">Para Hijos y Estudiante</h3>
                    <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed mt-1">
                      Temas cortitos, con reflexiÃ³n, reto y racha diaria. Â¡Completa los {KIDS_TOPICS.length} para desbloquear el examen!
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                      <div className="px-3 py-2 rounded-2xl bg-slate-100 border border-slate-200 font-bold text-sm">ðŸ”¥ {learnStreak}</div>
                      <div className="px-3 py-2 rounded-2xl bg-slate-100 border border-slate-200 font-bold text-sm">â­ {kidsXp} XP</div>
                      <div className="px-3 py-2 rounded-2xl bg-slate-100 border border-slate-200 font-bold text-sm">ðŸ… {learnBadge}/{learnBadgeTotal}</div>
                      <div className="px-3 py-2 rounded-2xl bg-slate-100 border border-slate-200 font-bold text-sm">ðŸ“– {kidsDone.length}/{KIDS_TOPICS.length}</div>
                    </div>
                    <div className="w-full max-w-[360px] mx-auto mt-5 temas-progress">
                      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full progress-bar bg-primary transition-[width] duration-700" style={{ width: `${(kidsDone.length / KIDS_TOPICS.length) * 100}%` }}></div>
                      </div>
                      <p className="text-sm font-bold text-gray-500 mt-2 temas-count">{kidsDone.length} de {KIDS_TOPICS.length} temas completados</p>
                    </div>
                  </div>
                  {/* camino de la isla */}
                  <div className="px-4 md:px-6 pb-2">
                    {(() => {
                      const firstUndone = KIDS_TOPICS.findIndex(k => !kidsDone.includes(k.id))
                      const openTopic = (k: KidTopic) => { setActiveKidId(k.id); setLearnView('kid'); setShowFeedback(false); setTopicStep(0); setAnsweredOpt(null); setRevealedCases([]); setReflectNote(''); setTfAnswers({}); setTfRevealed(false); setBlankInputs({}); setBlanksChecked(false) }
                      return (
                        <section className="relative temas-road">
                          {KIDS_TOPICS.map((k, i) => {
                            const done = kidsDone.includes(k.id)
                            const isCurrent = i === firstUndone
                            const locked = !done && !isCurrent
                            const even = i % 2 === 0
                            return (
                              <RoadmapReveal key={k.id}>
                                <div className={`relative py-12 md:py-20 ${locked ? 'opacity-75' : ''}`}>
                                  {/* segmento de lÃ­nea */}
                                  <div aria-hidden className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] temas-roadline rounded-full transition-colors duration-500 ${
                                    done
                                      ? 'bg-gradient-to-b from-success to-emerald-400'
                                      : isCurrent
                                        ? 'bg-gradient-to-b from-primary to-teal-400'
                                        : 'bg-secondary-100'
                                  }`} />
                                  {/* nodo */}
                                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 temas-roadnode">
                                    <button
                                      onClick={locked ? undefined : () => openTopic(k)}
                                      disabled={!!locked}
                                      title={locked ? 'Completa el tema anterior para desbloquearlo.' : undefined}
                                      aria-label={k.title}
                                      className={`relative w-14 h-14 md:w-[68px] md:h-[68px] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black border-2 transition-all duration-300 ${
                                        done
                                          ? 'bg-gradient-to-br from-success to-emerald-400 text-white border-emerald-300/60 shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 cursor-pointer'
                                          : isCurrent
                                            ? 'bg-gradient-to-br from-primary to-teal-400 text-white border-white ring-4 ring-primary/15 shadow-[0_10px_30px_rgba(37,99,235,0.45)] animate-pulse hover:scale-110 active:scale-95 cursor-pointer'
                                            : 'bg-slate-100 text-slate-400 border-slate-200 opacity-70 cursor-not-allowed'
                                      }`}
                                    >
                                      {done ? 'âœ“' : locked ? 'ðŸ”’' : k.icon}
                                      {isCurrent && <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-warning text-white text-[11px] font-black flex items-center justify-center shadow-md">ðŸ‘†</span>}
                                    </button>
                                  </div>
                                  {/* contenido */}
                                  <div className={`w-[calc(50%-2.5rem)] md:w-[calc(50%-6rem)] temas-roadcard ${even ? 'mr-auto' : 'ml-auto'}`}>
                                    <div className={`bg-white rounded-[20px] border p-4 md:p-5 text-center shadow-sm transition-all duration-300 ${
                                      done ? 'border-success/20' : isCurrent ? 'border-primary/30 shadow-md shadow-primary/10' : 'border-slate-100'
                                    }`}>
                                      <span className={`inline-flex items-center justify-center gap-1 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                                        done
                                          ? 'bg-success/15 text-success'
                                          : isCurrent
                                            ? 'bg-gradient-to-r from-primary to-teal-500 text-white shadow-sm shadow-primary/25'
                                            : 'bg-slate-100 text-slate-400'
                                      }`}>
                                        {done ? 'âœ“ Completado' : isCurrent ? (kidsDone.length === 0 ? 'â— Empezar' : 'â— Continuar') : 'ðŸ”’ Bloqueado'}
                                      </span>
                                      <p className="mt-3 text-[11px] font-bold text-slate-400 tabular-nums">{String(i + 1).padStart(2, '0')} Â· {k.category}</p>
                                      <h4 className="mt-1 font-bold text-slate-800 text-[17px] md:text-lg leading-snug">{k.title}</h4>
                                      <p className="text-sm text-slate-500 leading-relaxed mt-1 line-clamp-2">{k.desc}</p>
                                      <div className="flex items-center justify-center gap-2 mt-3">
                                        <span className="text-xs font-black text-primary">+50 XP</span>
                                        <span className={`text-xs font-bold ${isCurrent && !done ? 'text-primary' : 'text-slate-400'}`}>{done ? 'âœ“ Repasado' : '1 lecciÃ³n'}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </RoadmapReveal>
                            )
                          })}
                          {/* Nodo EXAMEN FINAL */}
                          <RoadmapReveal>
                            <div className="relative py-12 md:py-20">
                            <div aria-hidden className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] temas-roadline rounded-full transition-colors duration-500 ${
                              examUnlocked ? 'bg-gradient-to-b from-secondary to-warning' : 'bg-secondary-100'
                              }`} />
                              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 temas-roadnode">
                                <button
                                  aria-label="Examen final"
                                  disabled={!examUnlocked}
                                  onClick={examUnlocked ? () => { setActiveKidId(null); setLearnView('exam'); setExamAnswers({}) } : undefined}
                                  title={examUnlocked ? undefined : 'Completa todos los temas para desbloquearlo.'}
                                  className={`relative w-14 h-14 md:w-[68px] md:h-[68px] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black border-2 transition-all duration-300 ${
                                    examUnlocked
                                      ? 'bg-gradient-to-br from-secondary to-warning text-white border-purple-300/60 shadow-[0_8px_24px_rgba(217,70,239,0.35)] hover:scale-105 active:scale-95 cursor-pointer'
                                      : 'bg-slate-100 text-slate-400 border-slate-200 opacity-70 cursor-not-allowed'
                                  }`}
                                >
                                  {examUnlocked ? 'ðŸ' : 'ðŸ”’'}
                                </button>
                              </div>
                              <div className="w-[calc(50%-2.5rem)] md:w-[calc(50%-6rem)] ml-auto temas-roadcard">
                                <div className={`bg-white rounded-[20px] border p-4 md:p-5 text-center shadow-sm transition-all duration-300 ${
                                  examUnlocked ? 'border-warning/30 shadow-md shadow-warning/10' : 'border-slate-100'
                                }`}>
                                  <span className={`inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                                    examUnlocked ? 'bg-warning/15 text-warning' : 'bg-slate-100 text-slate-400'
                                  }`}>
                                    {examUnlocked ? 'ðŸŽ“ Examen final' : 'ðŸ”’ Bloqueado'}
                                  </span>
                                  <p className="mt-3 text-[11px] font-bold text-slate-400 tabular-nums">{String(KIDS_TOPICS.length + 1).padStart(2, '0')} Â· Reto final</p>
                                  <h4 className="mt-1 font-bold text-slate-800 text-[17px] md:text-lg leading-snug">Examen final</h4>
                                  <p className="text-sm text-slate-500 leading-relaxed mt-1 line-clamp-2">
                                    {examUnlocked ? 'Pon a prueba todo lo aprendido y consigue tus insignias.' : `Completa los ${KIDS_TOPICS.length} temas para desbloquearlo.`}
                                  </p>
                                  <div className="flex items-center justify-center gap-2 mt-3">
                                    <span className="text-xs font-black text-warning">ðŸ… Insignias</span>
                                    <span className={`text-xs font-bold ${examUnlocked ? 'text-warning' : 'text-slate-400'}`}>{examUnlocked ? 'Disponible' : 'Bloqueado'}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </RoadmapReveal>
                        </section>
                      )
                    })()}
                  </div>
                </section>

                {/* ISLA 2 Â· ACADEMIA PADRES */}
                <section className="rounded-[28px] border border-secondary/10 bg-gradient-to-b from-white to-secondary/[0.03] shadow-xl overflow-hidden">
                  {/* cabecera de la isla */}
                  <div className="pt-8 px-6 md:px-10 text-center">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/10 text-[11px] font-black uppercase tracking-wider">ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦ Academia Padres</span>
                    <h3 className="mt-3 text-2xl md:text-3xl font-black text-secondary">Para Padres y Tutores</h3>
                    <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed mt-1">
                      GuÃ­as cortitas para conversar y acompaÃ±ar a tus hijos. Revisa las {PARENT_GUIDES.length} a tu ritmo.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                      <div className="px-3 py-2 rounded-2xl bg-slate-100 border border-slate-200 font-bold text-sm">ðŸ”¥ {learnStreak}</div>
                      <div className="px-3 py-2 rounded-2xl bg-slate-100 border border-slate-200 font-bold text-sm">â­ {guidesXp} XP</div>
                      <div className="px-3 py-2 rounded-2xl bg-slate-100 border border-slate-200 font-bold text-sm">ðŸ“– {guidesDone.length}/{PARENT_GUIDES.length}</div>
                    </div>
                    <div className="w-full max-w-[360px] mx-auto mt-5">
                      <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full progress-bar transition-[width] duration-700" style={{ width: `${(guidesDone.length / PARENT_GUIDES.length) * 100}%`, background: '#7C3AED' }}></div>
                      </div>
                      <p className="text-sm font-bold text-gray-500 mt-2">{guidesDone.length} de {PARENT_GUIDES.length} guÃ­as revisadas</p>
                    </div>
                  </div>
                  {/* camino de la isla */}
                  <div className="px-4 md:px-6 pb-2">
                    {(() => {
                      const firstUndone = PARENT_GUIDES.findIndex(g => !guidesDone.includes(g.id))
                      const openGuide = (g: ParentGuide) => { requestGuide(g.id) }
                      return (
                        <section className="relative temas-road">
                          {PARENT_GUIDES.map((g, i) => {
                            const done = guidesDone.includes(g.id)
                            const isCurrent = i === firstUndone
                            const locked = !done && !isCurrent
                            const even = i % 2 === 0
                            return (
                              <RoadmapReveal key={g.id}>
                                <div className={`relative py-12 md:py-20 ${locked ? 'opacity-75' : ''}`}>
                                  {/* segmento de lÃ­nea */}
                                  <div aria-hidden className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] temas-roadline rounded-full transition-colors duration-500 ${
                                    done
                                      ? 'bg-gradient-to-b from-success to-emerald-400'
                                      : isCurrent
                                        ? 'bg-gradient-to-b from-secondary to-fuchsia-400'
                                        : 'bg-secondary-100'
                                  }`} />
                                  {/* nodo */}
                                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 temas-roadnode">
                                    <button
                                      onClick={locked ? undefined : () => openGuide(g)}
                                      disabled={!!locked}
                                      title={locked ? 'Revisa la guÃ­a anterior para desbloquear esta.' : undefined}
                                      aria-label={g.title}
                                      className={`relative w-14 h-14 md:w-[68px] md:h-[68px] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black border-2 transition-all duration-300 ${
                                        done
                                          ? 'bg-gradient-to-br from-success to-emerald-400 text-white border-emerald-300/60 shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 cursor-pointer'
                                          : isCurrent
                                            ? 'bg-gradient-to-br from-fuchsia-500 to-secondary text-white border-white ring-4 ring-secondary/15 shadow-[0_10px_30px_rgba(217,70,239,0.45)] animate-pulse hover:scale-110 active:scale-95 cursor-pointer'
                                            : 'bg-slate-100 text-slate-400 border-slate-200 opacity-70 cursor-not-allowed'
                                      }`}
                                    >
                                      {done ? 'âœ“' : locked ? 'ðŸ”’' : g.icon}
                                      {isCurrent && <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-warning text-white text-[11px] font-black flex items-center justify-center shadow-md">ðŸ‘†</span>}
                                    </button>
                                  </div>
                                  {/* contenido */}
                                  <div className={`w-[calc(50%-2.5rem)] md:w-[calc(50%-6rem)] temas-roadcard ${even ? 'mr-auto' : 'ml-auto'}`}>
                                    <div className={`bg-white rounded-[20px] border p-4 md:p-5 text-center shadow-sm transition-all duration-300 ${
                                      done ? 'border-success/20' : isCurrent ? 'border-secondary/30 shadow-md shadow-secondary/10' : 'border-slate-100'
                                    }`}>
                                      <span className={`inline-flex items-center justify-center gap-1 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                                        done
                                          ? 'bg-success/15 text-success'
                                          : isCurrent
                                            ? 'bg-gradient-to-r from-fuchsia-500 to-secondary text-white shadow-sm shadow-secondary/25'
                                            : 'bg-slate-100 text-slate-400'
                                      }`}>
                                        {done ? 'âœ“ Revisada' : isCurrent ? (guidesDone.length === 0 ? 'â— Empezar' : 'â— Continuar') : 'ðŸ”’ Bloqueado'}
                                      </span>
                                      <p className="mt-3 text-[11px] font-bold text-slate-400 tabular-nums">{String(i + 1).padStart(2, '0')} Â· {g.category}{g.joint ? ' Â· ðŸ‘¨â€ðŸ‘©â€ðŸ‘§' : ''}</p>
                                      <h4 className="mt-1 font-bold text-slate-800 text-[17px] md:text-lg leading-snug">{g.title}</h4>
                                      <p className="text-sm text-slate-500 leading-relaxed mt-1 line-clamp-2">{g.desc}</p>
                                      <div className="flex items-center justify-center gap-2 mt-3">
                                        <span className="text-xs font-black text-secondary">+30 XP</span>
                                        <span className={`text-xs font-bold ${isCurrent && !done ? 'text-secondary' : 'text-slate-400'}`}>{done ? 'âœ“ Repasada' : '1 guÃ­a'}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </RoadmapReveal>
                            )
                          })}
                        </section>
                      )
                    })()}
                  </div>
                </section>
              </div>
            )}

            {/* DETALLE TEMA HIJO */}
            {learnView === 'kid' && activeKid && (
              <div className="w-full max-w-[760px] mx-auto rounded-[28px] p-4 md:p-8 space-y-5 md:space-y-6" style={{ background: 'linear-gradient(180deg, #F8FAFF 0%, #EDF1F9 100%)' }}>
                {/* NAVBAR */}
                <div className="bg-white/90 backdrop-blur-xl border border-slate-100 rounded-[20px] px-4 md:px-5 py-3 flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center overflow-hidden shadow-sm">
                      <DuliMascot className="w-8 h-8" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-black text-slate-800 leading-tight truncate text-[15px]">Hablemos Claro</p>
                      <p className="text-[11px] font-semibold text-slate-500 truncate">ðŸ“š Temas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                    <span className="px-2.5 py-1.5 rounded-xl bg-white shadow-sm border border-slate-100 text-slate-700 font-bold text-xs tabular-nums">{Math.round((kidsDone.length / KIDS_TOPICS.length) * 100)}%</span>
                    <button onClick={() => setCurrentScreen('profile')} className="w-9 h-9 rounded-xl bg-white hover:bg-primary/10 shadow-sm text-base transition-colors" aria-label="Mi progreso" title="Mi progreso">ðŸ“ˆ</button>
                    <button onClick={() => setLearnView('hub')} className="px-3 h-9 rounded-xl bg-white hover:bg-primary/10 shadow-sm text-sm font-bold text-slate-600 hover:text-primary transition-colors">â† Volver a temas</button>
                  </div>
                </div>

                {/* HERO */}
                <section className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-gradient-to-br from-primary-50 via-white to-secondary-50 shadow-[0_18px_52px_rgba(15,23,42,0.18)] px-6 py-10 md:px-10 md:py-12 text-center temas-hero">
                  <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary-100/60 blur-3xl" />
                  <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary-100/60 blur-3xl" />
                  <div className="relative flex flex-col items-center gap-4">
                    <span className="inline-flex gap-2 w-max px-4 py-1.5 rounded-full bg-white/80 border border-slate-100 text-[11px] font-bold uppercase tracking-widest text-primary shadow-sm">
                      âœ¨ Tema {KIDS_TOPICS.findIndex(k => k.id === activeKid.id) + 1} de {KIDS_TOPICS.length} Â· {activeKid.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black gradient-text leading-tight max-w-xl">{activeKid.title}</h2>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mt-1">{activeKid.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-white/90 border border-slate-100 rounded-full pl-1.5 pr-4 py-1.5 shadow-sm">
                      <DuliMascot className="w-8 h-8" />
                      <span className="text-xs font-black text-slate-600 text-left">Â¡TÃº puedes aprender y ganar XP! ðŸ’ª</span>
                    </div>
                    <div className="flex items-center gap-3 w-full max-w-[420px] mt-2">
                      <div className="flex-1 h-3 bg-slate-200/80 rounded-full overflow-hidden shadow-inner" role="progressbar" aria-valuenow={Math.round((kidsDone.length / KIDS_TOPICS.length) * 100)} aria-valuemin={0} aria-valuemax={100} aria-label="Progreso de temas">
                        <div className="progress-bar h-full rounded-full transition-[width] duration-700" style={{ width: `${Math.round((kidsDone.length / KIDS_TOPICS.length) * 100)}%`, background: 'linear-gradient(90deg, #10B981, #2563EB)' }}></div>
                      </div>
                      <span className="shrink-0 tabular-nums text-base md:text-lg font-black text-slate-700 leading-none">
                        {Math.round((kidsDone.length / KIDS_TOPICS.length) * 100)}%<span className="text-xs md:text-sm font-bold text-slate-500"> completado</span>
                      </span>
                    </div>
                  </div>
                </section>

                {/* PASOS */}
                <div className="flex gap-2 flex-wrap justify-center" role="tablist" aria-label="Pasos del tema">
                  {KID_STEPS.map((s, i) => {
                    const state = topicStep === i ? 'active' : topicStep > i ? 'done' : 'todo'
                    const cls = state === 'active'
                      ? 'bg-secondary text-white shadow-md shadow-secondary/25'
                      : state === 'done'
                        ? 'bg-success text-white shadow-sm shadow-success/25'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    return (
                      <button
                        key={s}
                        role="tab"
                        aria-selected={state === 'active'}
                        aria-current={state === 'active' ? 'step' : undefined}
                        onClick={() => { setTopicStep(i); setShowFeedback(false); setRevealedCases([]); setReflectNote(''); setTfAnswers({}); setTfRevealed(false); setBlankInputs({}); setBlanksChecked(false); }}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${cls}`}
                      >
                        <span aria-hidden className="opacity-90">{state === 'done' ? 'âœ“' : `${i + 1}`}</span> {s}
                      </button>
                    )
                  })}
                </div>
                <p className="text-center text-xs font-bold text-slate-400 -mt-3">Paso {topicStep + 1} de {KID_STEPS.length}</p>

                {/* IlustraciÃ³n */}
                <div className="bg-white rounded-[24px] px-5 py-8 md:py-10 border border-slate-100 shadow-[0_4px_20px_rgba(30,41,82,0.05)] flex justify-center items-center">
                  <div className="w-full max-w-[280px] mx-auto flex justify-center">
                    {KID_ART[activeKid.art]}
                  </div>
                </div>

                {/* 1. APRENDE */}
                {topicStep === 0 && (
                  <>
                <div className={KID_CARD}>
                  <span className={KID_CHIP}>ðŸ’¡ En pocas palabras</span>
                  <p className={KID_BODY}>{activeKid.summary}</p>
                  {activeKid.deepen && (
                    <p className={`${KID_BODY} mt-4 pt-4 border-t border-slate-100`}>{activeKid.deepen}</p>
                  )}
                </div>

                {/* Por quÃ© es un problema */}
                <div className={KID_CARD}>
                  <span className={KID_CHIP}>â“ Â¿Por quÃ© es un problema?</span>
                  <ul className="space-y-3">
                    {activeKid.problems.map((pb, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm shadow-primary/25">âœ“</span>
                        <p className={KID_LIST}>{pb}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corto y largo plazo */}
                {activeKid.shortTerm && (
                <div className={KID_CARD}>
                  <span className={KID_CHIP}>â³ Corto y largo plazo</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-xl p-5 bg-primary-50 border border-primary/15">
                      <p className="font-black text-primary text-sm mb-2">âš¡ A corto plazo</p>
                      <p className={`${KID_BODY} text-sm md:text-base`}>{activeKid.shortTerm}</p>
                    </div>
                    <div className="rounded-xl p-5 bg-warning-50 border border-warning/25">
                      <p className="font-black text-warning text-sm mb-2">ðŸ•°ï¸ A largo plazo</p>
                      <p className={`${KID_BODY} text-sm md:text-base`}>{activeKid.longTerm}</p>
                    </div>
                  </div>
                </div>
                )}

                {/* A quiÃ©n afecta */}
                {activeKid.affectsPeople && (
                <div className={KID_CARD}>
                  <span className={KID_CHIP}>ðŸ‘¥ Â¿A quiÃ©n afecta?</span>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl shrink-0">ðŸ§’</span>
                      <p className={KID_LIST}><strong>Personas:</strong> {activeKid.affectsPeople}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl shrink-0">ðŸ˜ï¸</span>
                      <p className={KID_LIST}><strong>Comunidad:</strong> {activeKid.affectsCommunity}</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl shrink-0">ðŸŒŽ</span>
                      <p className={KID_LIST}><strong>PaÃ­s:</strong> {activeKid.affectsCountry}</p>
                    </li>
                  </ul>
                </div>
                )}

                {/* Mira mÃ¡s allÃ¡ */}
                {activeKid.beyond && (
                <div className={KID_CARD}>
                  <span className={KID_CHIP}>ðŸ”­ Mira mÃ¡s allÃ¡</span>
                  <ul className="space-y-3">
                    {activeKid.beyond.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm shadow-primary/25">{i + 1}</span>
                        <p className={KID_LIST}>{b}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                )}

                {/* CorrupciÃ³n vs coima */}
                {activeKid.compareA && (
                  <div className={KID_CARD}>
                    <span className={KID_CHIP_WARN}>âš–ï¸ No son lo mismo</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-xl p-5 bg-primary-50 border border-primary/15">
                        <p className={KID_BODY}>{activeKid.compareA}</p>
                      </div>
                      <div className="rounded-xl p-5 bg-warning-50 border border-warning/25">
                        <p className={KID_BODY}>{activeKid.compareB}</p>
                      </div>
                    </div>
                    <p className="text-center font-bold text-slate-800 mt-5">{activeKid.compareNote}</p>
                  </div>
                )}
                  </>
                )}
                {/* 2. OBSERVA */}
                {topicStep === 1 && (
                  <>
                    <div className={`${KID_CARD} border-l-8`} style={{ borderLeftColor: '#F59E0B' }}>
                      <span className={KID_CHIP_WARN}>ðŸ‘€ Observa</span>
                      <p className={`${KID_BODY} italic`}>â€œ{activeKid.observe}â€</p>
                    </div>
                    <div className={KID_CARD}>
                      <p className="font-bold text-slate-800 mb-2">ðŸ’¡ Ejemplo cotidiano</p>
                      <p className={`${KID_BODY} italic`}>â€œ{activeKid.example}â€</p>
                    </div>
                    {activeKid.identify && (
                    <div className={KID_CARD}>
                      <span className={KID_CHIP_WARN}>ðŸ” Identifica la situaciÃ³n</span>
                      <p className="text-slate-500 mb-4 text-sm md:text-base">Lee cada caso y decide: Â¿es corrupciÃ³n o no? Toca la tarjeta para ver la respuesta.</p>
                      <div className="space-y-3">
                        {activeKid.identify.map((cs, ci) => {
                          const open = revealedCases.includes(ci)
                          return (
                            <button
                              key={ci}
                              onClick={() => setRevealedCases(open ? revealedCases.filter(x => x !== ci) : [...revealedCases, ci])}
                              className={`w-full text-left rounded-[18px] border-2 p-5 transition-all ${open ? 'bg-white border-primary/40' : 'bg-white border-gray-200 hover:border-primary/60'}`}
                            >
                              <p className="text-slate-800 text-base md:text-lg leading-relaxed">{cs.text}</p>
                              {open && (
                                <div className={`mt-3 p-4 rounded-xl border ${cs.isCorruption ? 'bg-warning-50 border-warning/25' : 'bg-success/10 border-success/30'}`}>
                                  <p className="font-black text-sm mb-1">{cs.isCorruption ? 'â›” SÃ­ es corrupciÃ³n' : 'âœ… No es corrupciÃ³n'}</p>
                                  <p className="text-slate-700 leading-relaxed">{cs.why}</p>
                                </div>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                    )}
                  </>
                )}
                {/* 3. REFLEXIONA */}
                {topicStep === 2 && (
                  <div className={KID_CARD}>
                    <span className={KID_CHIP}>ðŸ¤” Reflexiona</span>
                    <div className="text-5xl mb-4 mt-3">ðŸ¤”</div>
                    <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-medium">{activeKid.reflectQ}</p>
                    <p className="text-slate-500 mt-4 text-sm md:text-base">TÃ³mate un momento para pensarlo antes de continuar.</p>
                    {activeKid.reflectMore && (
                    <div className="mt-6 pt-6 border-t border-slate-100 text-left">
                      <p className="font-black text-primary text-sm tracking-widest mb-4">ðŸ§  Para explicar</p>
                      <ul className="space-y-3 mb-5">
                        {activeKid.reflectMore.map((q, qi) => (
                          <li key={qi} className="flex items-start gap-3">
                            <span className="w-7 h-7 rounded-full bg-primary-50 text-primary flex items-center justify-center font-bold text-sm shrink-0">?</span>
                            <p className="text-slate-800 text-base md:text-lg leading-relaxed font-medium">{q}</p>
                          </li>
                        ))}
                      </ul>
                      <textarea
                        value={reflectNote}
                        onChange={e => setReflectNote(e.target.value)}
                        rows={3}
                        placeholder="Escribe tu reflexiÃ³n aquÃ­ con tus propias palabras..."
                        className="w-full p-4 rounded-[18px] border-2 border-slate-200 focus:border-primary/60 outline-none text-slate-700 text-base md:text-lg leading-relaxed"
                      />
                    </div>
                    )}
                  </div>
                )}
                {/* 4. ELIGE */}
                {topicStep === 3 && (
                <div className={`${KID_CARD} border-2 border-primary/20`}>
                  <span className={KID_CHIP}>ðŸ¤” Â¿QuÃ© harÃ­as tÃº?</span>
                  <p className="text-slate-800 text-base md:text-lg mb-5">{activeKid.scenarioQ}</p>
                  <div className="space-y-4">
                    {activeKid.scenarioOpts.map((opt, oi) => (
                      <button
                        key={oi}
                        onClick={() => {
                          setAnsweredOpt(oi)
                          setFeedbackMessage(activeKid.scenarioFeedback[oi] ?? '')
                          setShowFeedback(true)
                        }}
                        className={`btn-glow w-full py-4 px-5 rounded-[18px] text-center font-medium text-lg border-2 transition-all ${
                          answeredOpt === oi
                            ? oi === activeKid.scenarioCorrect
                              ? 'bg-success text-white border-success shadow-lg'
                              : 'bg-white border-warning text-slate-800'
                            : 'bg-white border-gray-200 hover:border-primary/60 text-slate-800'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {showFeedback && (
                    <div className="mt-5 p-5 rounded-[18px] bg-primary-50 border border-primary/20 animate-fade-in">
                      <p className="text-[11px] font-black tracking-widest text-primary mb-2">ðŸ’¡ Para pensar</p>
                      <p className="text-slate-800 text-base md:text-lg leading-relaxed">{feedbackMessage}</p>
                    </div>
                  )}
                  {activeKid.trueFalse && (
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className={KID_CHIP}>âœ… Verdadero o falso</span>
                    <p className="text-slate-500 mb-4 text-sm md:text-base">Marca V o F en cada afirmaciÃ³n y luego comprueba tus respuestas.</p>
                    <div className="space-y-3">
                      {activeKid.trueFalse.map((tf, ti) => {
                        const ans = tfAnswers[ti]
                        const graded = tfRevealed && ans !== undefined
                        const ok = ans === tf.answer
                        return (
                          <div key={ti} className={`rounded-[18px] border-2 p-5 transition-all ${graded ? (ok ? 'bg-success/10 border-success/40' : 'bg-warning-50 border-warning/40') : 'bg-white border-gray-200'}`}>
                            <p className="text-slate-800 text-base md:text-lg leading-relaxed mb-3">{ti + 1}. {tf.text}</p>
                            <div className="flex gap-3">
                              {([true, false] as boolean[]).map(v => (
                                <button
                                  key={String(v)}
                                  disabled={tfRevealed}
                                  onClick={() => setTfAnswers({ ...tfAnswers, [ti]: v })}
                                  className={`flex-1 py-2.5 rounded-full font-black transition-all ${
                                    ans === v
                                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                  } ${tfRevealed ? 'opacity-60 cursor-default' : ''}`}
                                >
                                  {v ? 'V' : 'F'}
                                </button>
                              ))}
                            </div>
                            {graded && (
                              <div className="mt-3">
                                <p className="font-black text-sm mb-1">{ok ? 'âœ… Â¡Correcto!' : `âŒ La respuesta es: ${tf.answer ? 'Verdadero' : 'Falso'}`}</p>
                                <p className="text-slate-700 leading-relaxed">{tf.why}</p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-5">
                      <button
                        onClick={() => setTfRevealed(true)}
                        className="flex-1 btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full"
                      >
                        Comprobar âœ…
                      </button>
                      <button
                        onClick={() => { setTfAnswers({}); setTfRevealed(false); }}
                        className="flex-1 bg-white border-2 border-slate-200 text-slate-600 font-bold py-3 px-6 rounded-full hover:bg-slate-50"
                      >
                        Intentar de nuevo
                      </button>
                    </div>
                    {tfRevealed && (
                      <p className="text-center font-black text-primary mt-4">
                        Acertaste {activeKid.trueFalse.filter((tf, ti) => tfAnswers[ti] === tf.answer).length} de {activeKid.trueFalse.length} ðŸŽ¯
                      </p>
                    )}
                  </div>
                  )}
                  {activeKid.id === 'k4' && (
                    <button
                      onClick={() => { setShowCoimaONo(true); setCurrentCoimaCase(0); setShowFeedback(false); }}
                      className="btn-glow bg-gradient-to-r from-warning to-primary text-white font-bold py-4 px-6 rounded-full text-lg w-full mt-6"
                    >
                      ðŸŽ¯ Jugar Â¿Coima o no?
                    </button>
                  )}
                </div>
                )}
                {/* 5. CONVERSA */}
                {topicStep === 4 && (
                <div className="bg-white/85 backdrop-blur-xl rounded-[26px] shadow-lg shadow-indigo-500/5 p-5 md:p-7 border border-warning/20">
                  <span className={KID_CHIP_WARN}>ðŸ’¬ Conversa en familia</span>
                  <h3 className="font-bold text-warning text-lg md:text-xl mb-2 mt-2">Conversarlo en familia</h3>
                  <p className={`${KID_BODY} italic`}>â€œ{activeKid.familyPrompt}â€</p>
                  <p className="text-slate-800 font-bold mt-3 text-base md:text-lg leading-relaxed">Pregunta para conversar: {activeKid.familyQuestion}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <button
                      onClick={requestConverse}
                      className="btn-glow bg-warning text-white font-bold py-4 px-6 rounded-full"
                    >
                      Iniciar conversaciÃ³n familiar â†’
                    </button>
                    <button
                      onClick={() => { requestGuide(activeKid.relatedGuide) }}
                      className="btn-glow bg-white border-2 border-secondary text-secondary font-bold py-4 px-6 rounded-full"
                    >
                      Ver guÃ­a para padres â†’
                    </button>
                  </div>
                </div>
                )}
                {/* 6. COMPLETA */}
                {topicStep === 5 && (
                <>
                <div className={`${KID_CARD} text-center`}>
                  <span className={KID_CHIP}>ðŸŽ¯ Completa</span>
                  <div className="text-5xl mb-3 mt-3">ðŸŽ¯</div>
                  <p className="text-slate-800 text-base md:text-lg leading-relaxed mb-2">{activeKid.finalTask}</p>
                </div>
                {activeKid.blanks && (
                <div className={KID_CARD}>
                  <span className={KID_CHIP}>ðŸ“ Completa lo que falta</span>
                  <p className="text-slate-500 mb-4 text-sm md:text-base">Rellena los espacios con palabras del banco y luego comprueba.</p>
                  {activeKid.wordBank && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {activeKid.wordBank.map((w, wi) => (
                      <button
                        key={wi}
                        disabled={blanksChecked}
                        onClick={() => {
                          const idx = activeKid.blanks!.findIndex((b, bi) => !(blankInputs[bi] ?? '').trim() || (blanksChecked && blankInputs[bi].trim().toLowerCase() !== b.answer.toLowerCase()))
                          if (idx >= 0) setBlankInputs({ ...blankInputs, [idx]: w })
                        }}
                        className="px-4 py-2 rounded-full bg-primary-50 border border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all disabled:opacity-50"
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                  )}
                  <div className="space-y-4">
                    {activeKid.blanks.map((b, bi) => {
                      const val = blankInputs[bi] ?? ''
                      const graded = blanksChecked && val.trim() !== ''
                      const ok = val.trim().toLowerCase() === b.answer.toLowerCase()
                      return (
                        <p key={bi} className="text-slate-800 text-base md:text-lg leading-relaxed">
                          {b.before}{' '}
                          <input
                            value={val}
                            disabled={blanksChecked}
                            onChange={e => setBlankInputs({ ...blankInputs, [bi]: e.target.value })}
                            size={Math.max(b.answer.length + 2, 8)}
                            placeholder="..."
                            className={`inline-block px-3 py-1 rounded-xl border-2 outline-none font-bold text-center transition-all ${
                              graded
                                ? ok
                                  ? 'bg-success/10 border-success/50 text-success'
                                  : 'bg-warning-50 border-warning/50 text-slate-800'
                                : 'bg-white border-slate-200 focus:border-primary/60 text-slate-800'
                            }`}
                          />{' '}
                          {b.after}
                          {graded && !ok && (
                            <span className="block text-sm font-bold text-warning mt-1">Respuesta: {b.answer}</span>
                          )}
                        </p>
                      )
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-5">
                    <button
                      onClick={() => setBlanksChecked(true)}
                      className="flex-1 btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full"
                    >
                      Comprobar âœ…
                    </button>
                    <button
                      onClick={() => { setBlankInputs({}); setBlanksChecked(false); }}
                      className="flex-1 bg-white border-2 border-slate-200 text-slate-600 font-bold py-3 px-6 rounded-full hover:bg-slate-50"
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                </div>
                )}
                {(() => {
                  const scenarioOK = answeredOpt === activeKid.scenarioCorrect
                  const tfList = activeKid.trueFalse ?? []
                  const tfScore = tfList.filter((tf, ti) => tfAnswers[ti] === tf.answer).length
                  const tfOK = tfList.length > 0 && tfScore === tfList.length
                  const blankList = activeKid.blanks ?? []
                  const blanksOK = blankList.length > 0 && blankList.every((b, bi) => (blankInputs[bi] ?? '').trim().toLowerCase() === b.answer.toLowerCase())
                  const mastered = scenarioOK && tfOK && blanksOK
                  return (
                <>
                <div className={KID_CARD}>
                  <p className="font-black text-primary text-sm tracking-widest mb-3">ðŸŽ“ Para completar el tema</p>
                  <p className="text-slate-500 text-sm mb-4">Responde correctamente las tres actividades.</p>
                  <ul className="space-y-2">
                    <li className={`flex items-center gap-2 font-bold text-sm md:text-base ${scenarioOK ? 'text-success' : 'text-slate-500'}`}>
                      <span>{scenarioOK ? 'âœ“' : 'â—‹'}</span> Elige bien en â€œÂ¿QuÃ© harÃ­as tÃº?â€ (paso 4)
                    </li>
                    <li className={`flex items-center gap-2 font-bold text-sm md:text-base ${tfOK ? 'text-success' : 'text-slate-500'}`}>
                      <span>{tfOK ? 'âœ“' : 'â—‹'}</span> Verdadero o falso: {tfScore}/{tfList.length} correctas
                    </li>
                    <li className={`flex items-center gap-2 font-bold text-sm md:text-base ${blanksOK ? 'text-success' : 'text-slate-500'}`}>
                      <span>{blanksOK ? 'âœ“' : 'â—‹'}</span> Completa lo que falta sin errores
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => completeKidTopic(activeKid.id)}
                  disabled={kidsDone.includes(activeKid.id) || !mastered}
                  className={`font-bold py-4 px-6 rounded-full text-lg w-full transition-all ${
                    kidsDone.includes(activeKid.id)
                      ? 'bg-success/15 text-success cursor-default'
                      : !mastered
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'btn-glow bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:scale-[1.01] active:scale-[0.99]'
                  }`}
                >
                  {kidsDone.includes(activeKid.id)
                    ? 'âœ“ Tema completado'
                    : !mastered
                      ? 'Responde todo correctamente para completar'
                      : 'Marcar como terminado âœ“'}
                </button>
                </>
                  )
                })()}
                {kidsDone.includes(activeKid.id) && (() => {
                  const next = KIDS_TOPICS.find(k => !kidsDone.includes(k.id))
                  return (
                    <button
                      onClick={() => {
                        if (next) {
                          setActiveKidId(next.id)
                          setShowFeedback(false)
                          setTopicStep(0)
                          setAnsweredOpt(null)
                          setRevealedCases([]); setReflectNote(''); setTfAnswers({}); setTfRevealed(false); setBlankInputs({}); setBlanksChecked(false)
                        } else {
                          setLearnView('hub')
                        }
                      }}
                      className="btn-glow bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-full text-lg w-full shadow-lg shadow-primary/25 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {next ? `Continuar con: ${next.title} â†’` : 'Volver a la biblioteca â†’'}
                    </button>
                  )
                })()}
                </>
                )}
                {/* NavegaciÃ³n entre pasos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <button
                    onClick={() => { setTopicStep(Math.max(0, topicStep - 1)); setShowFeedback(false); setRevealedCases([]); setReflectNote(''); setTfAnswers({}); setTfRevealed(false); setBlankInputs({}); setBlanksChecked(false); }}
                    disabled={topicStep === 0}
                    className={`font-bold py-3 px-4 rounded-full transition-all ${
                      topicStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-slate-700 shadow-sm border border-slate-100 hover:bg-gray-50'
                    }`}
                  >
                    â† Anterior
                  </button>
                  <button
                    onClick={() => setLearnView('hub')}
                    className="bg-white text-slate-700 font-bold py-3 px-4 rounded-full shadow-sm border border-slate-100 hover:bg-gray-50 transition-all order-last sm:order-none"
                  >
                    Ver temas
                  </button>
                  <button
                    onClick={() => { setTopicStep(Math.min(KID_STEPS.length - 1, topicStep + 1)); setShowFeedback(false); setRevealedCases([]); setReflectNote(''); setTfAnswers({}); setTfRevealed(false); setBlankInputs({}); setBlanksChecked(false); }}
                    disabled={topicStep === KID_STEPS.length - 1}
                    className={`font-bold py-3 px-4 rounded-full transition-all text-white ${
                      topicStep === KID_STEPS.length - 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    Siguiente â†’
                  </button>
                </div>

                {/* Footer */}
                <footer className="text-center">
                  <p className="text-slate-500 text-sm">{t('bottomQuote')}</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-2">Hablemos Claro Â· {t('selectTagline')}</p>
                </footer>
              </div>
            )}

            {/* DETALLE GUÃA PADRES */}
            {learnView === 'guide' && activeGuide && (
              <>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                  {profileType === 'family' && activeFamilyMember && (
                    <div className="mb-5 inline-flex items-center gap-2 max-w-full px-3 py-2 rounded-full bg-secondary/5 border border-secondary/20">
                      <span className="w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center text-base overflow-hidden">
                        <span className="leading-none">{avatarOrFallback(activeFamilyMember.avatar)}</span>
                      </span>
                      <span className="text-xs md:text-sm font-black text-slate-700 truncate">{activeFamilyMember.name}</span>
                      <span className="text-[10px] md:text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full shrink-0">
                        {t('activeNow')}
                      </span>
                    </div>
                  )}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-3xl shrink-0">{activeGuide.icon}</div>
                    <div>
                      <p className="text-xs font-black text-gray-400">{activeGuide.category}{activeGuide.joint ? ' Â· ðŸ‘¨â€ðŸ‘©â€ðŸ‘§ JUNTOS' : ''}</p>
                      <h2 className="text-2xl font-black text-dark leading-tight">{activeGuide.title}</h2>
                      <p className="text-gray-500 mt-1">{activeGuide.desc}</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    {activeGuide.body.map((p, i) => (
                      <p key={i} className="text-gray-700 text-lg leading-relaxed">{p}</p>
                    ))}
                  </div>
                  <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/15 mb-6">
                    <h3 className="font-bold text-secondary text-lg mb-4">Preguntas para conversar</h3>
                    <ul className="space-y-4">
                      {activeGuide.questions.map((q, i) => (
                      <li key={i} className="flex items-start justify-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                            {i + 1}
                          </div>
                          <p className="text-dark leading-relaxed font-medium">{q}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 bg-dark rounded-2xl mb-8" style={{ background: '#1F2937' }}>
                    <p className="font-bold text-white mb-2">ðŸ’¡ Consejo</p>
                    <p className="text-white/90 leading-relaxed">{activeGuide.tip}</p>
                  </div>
                  <button
                    onClick={() => reviewGuide(activeGuide.id)}
                    disabled={guidesDone.includes(activeGuide.id)}
                    className={`font-bold py-4 px-6 rounded-xl text-lg w-full ${
                      guidesDone.includes(activeGuide.id)
                        ? 'bg-gray-200 text-gray-500 cursor-default'
                        : 'btn-glow bg-secondary text-white'
                    }`}
                  >
                    {guidesDone.includes(activeGuide.id) ? 'âœ“ GuÃ­a revisada' : 'Marcar como revisada âœ“'}
                  </button>
                  <button
                    onClick={() => {
                      const kid = KIDS_TOPICS.find(k => k.id === activeGuide.relatedKid)
                      if (profileType === 'family') {
                        let updated: FamilyProfile = { ...familyProfile }
                        updated = pushFamilyLog(updated, `ðŸ“Œ Actividad familiar asignada: ${kid ? kid.title : activeGuide.title}.`)
                        const checked = checkFamilyBadges(updated)
                        setFamilyProfile(checked.profile)
                        saveFamilyProfile(checked.profile)
                        celebrateFamilyBadges(checked.unlocked)
                      }
                      if (kid) {
                        setActiveKidId(kid.id)
                        setLearnView('kid')
                        setShowFeedback(false)
                      }
                    }}
                    className="btn-glow bg-white border-2 border-warning text-warning font-bold py-4 px-6 rounded-xl text-lg w-full mt-4"
                  >
                    ðŸ“Œ Asignar actividad familiar
                  </button>
                </div>
                <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-lg shadow-indigo-500/5 p-8">
                  <h3 className="font-bold text-primary text-xl mb-2">ðŸ‘¦ Actividad relacionada</h3>
                  <p className="text-gray-600 mb-6">Tu hijo puede trabajar este tema desde su biblioteca.</p>
                  <button
                    onClick={() => { setActiveKidId(activeGuide.relatedKid); setLearnView('kid'); setShowFeedback(false); setTopicStep(0); setAnsweredOpt(null); setRevealedCases([]); setReflectNote(''); setTfAnswers({}); setTfRevealed(false); setBlankInputs({}); setBlanksChecked(false); }}
                    className="btn-glow bg-primary text-white font-bold py-4 px-6 rounded-xl w-full"
                  >
                    Ver tema relacionado â†’
                  </button>
                </div>
              </>
            )}

            {/* EXAMEN FINAL */}
            {learnView === 'exam' && examUnlocked && (
              <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-lg shadow-indigo-500/5 p-8">
                <button onClick={() => setLearnView('hub')} className="text-gray-500 hover:text-primary text-sm font-medium mb-4">
                  â† Biblioteca
                </button>
                <h2 className="text-2xl font-bold text-primary mb-3">ðŸ“ Examen final</h2>
                <p className="text-gray-600 leading-relaxed mb-2">
                  {examQuestions.length} preguntas de todos los temas. Responde todo para conseguir tus insignias ðŸ…
                </p>
                <p className="text-sm font-bold text-primary mb-8">
                  Respondidas: {Object.keys(examAnswers).length} de {examQuestions.length}
                </p>

                {examQuestions.map((q, qi) => (
                  <div key={qi} className="glass-card rounded-xl p-6 mb-6 border border-primary/15">
                    <p className="text-sm font-bold text-gray-500 mb-2">{q.icon} {q.topic} Â· Pregunta {qi + 1}</p>
                    <p className="text-gray-800 text-lg mb-5">{q.question}</p>
                    <div className="space-y-4">
                      {q.options.map((opt, oi) => (
                        <button
                          key={oi}
                          onClick={() => setExamAnswers(prev => ({ ...prev, [qi]: oi }))}
                          className={`btn-glow w-full py-4 px-5 rounded-xl text-left font-medium border-2 ${
                            examAnswers[qi] === oi
                              ? 'bg-primary text-white border-primary shadow-lg'
                              : 'bg-white border-gray-200 text-dark hover:border-primary/50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => { completeTest(); navigateTo('result'); }}
                  disabled={Object.keys(examAnswers).length < examQuestions.length}
                  className={`font-bold py-4 px-6 rounded-xl text-lg w-full ${
                    Object.keys(examAnswers).length < examQuestions.length
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'btn-glow bg-success text-white'
                  }`}
                >
                  {Object.keys(examAnswers).length < examQuestions.length
                    ? `Responde todo (${Object.keys(examAnswers).length}/${examQuestions.length})`
                    : 'Terminar examen y conseguir insignias ðŸ…'}
                </button>
              </div>
            )}
          </div>

          {/* MASCOTA DULI â€” compaÃ±era flotante del mapa de Temas */}
          {learnView === 'hub' && (
            <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2 pointer-events-none temas-tip">
              <div className="relative bg-white rounded-2xl rounded-br-sm border border-slate-100 shadow-xl px-3.5 py-2.5 max-w-[210px] pointer-events-auto">
                <p className="text-[11px] font-black text-slate-700 leading-snug">{duliTip}</p>
                <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45" aria-hidden />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 pointer-events-auto" style={{ filter: 'drop-shadow(0 8px 16px rgba(30,41,82,0.25))' }}>
                <DuliMascot className="w-full h-full" />
              </div>
            </div>
          )}
        </div>
      )

    case 'quiz':
      // Quiz interactivo con casos
      const quizCases = [
        {
          id: 1,
          situation: 'Un adulto te dice que puede darte dinero para que alguien haga algo que no deberÃ­a.',
          options: [
            { id: 0, text: 'Aceptarlo' },
            { id: 1, text: 'Ignorarlo y seguir' },
            { id: 2, text: 'Hablar con un adulto de confianza y explicar la situaciÃ³n' },
          ]
        },
        {
          id: 2,
          situation: 'Una persona ofrece dinero para que le den un trato especial que no le corresponde.',
          options: [
            { id: 0, text: 'SÃ­, es una coima' },
            { id: 1, text: 'No, no es una coima' },
          ]
        },
        {
          id: 3,
          situation: 'Un funcionario pide un "extra" para acelerar un trÃ¡mite importante.',
          options: [
            { id: 0, text: 'SÃ­, es una coima' },
            { id: 1, text: 'No, no es una coima' },
          ]
        },
      ]

      return (
        <div className="min-h-screen bg-gradient-to-br from-secondary/10 via-primary/5 to-success/10 p-8">
          <div className="max-w-5xl mx-auto animate-slide-up">
            <div className="bg-white rounded-2xl p-5 flex items-center justify-between mb-6 shadow-sm">
              <h1 className="text-3xl font-bold gradient-text">Â¿QuÃ© harÃ­as?</h1>
              <button onClick={() => navigateTo('home')} className="glass-card px-3 py-1 rounded-xl text-gray-600 text-sm hover:bg-gray-100 transition-all">
                â† AtrÃ¡s
              </button>
            </div>

            <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-lg shadow-indigo-500/5 p-6 shadow-custom-lg mb-6 card-hover">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">{quizCases[currentQuestionIndex].situation}</p>
              
              {quizCases[currentQuestionIndex].options.map((opt, _i) => (
                <div key={opt.id} className="mb-3">
                  <button
                    onClick={() => handleAnswer(opt.id)}
                    className="btn-glow w-full py-4 px-5 rounded-xl text-left glass-card hover:border-primary/50 transition-all text-dark font-medium"
                  >
                    {opt.text}
                  </button>
                </div>
              ))}
            </div>

            {showFeedback && (
              <div className="mt-4 p-5 rounded-xl bg-primary/10 border border-primary/20 animate-fade-in">
                <p className="font-bold text-primary text-lg">{feedbackMessage}</p>
              </div>
            )}

            {!showFeedback && currentQuestionIndex < quizCases.length - 1 && (
              <button
                onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                className="btn-glow bg-primary text-white font-bold py-4 px-6 rounded-xl text-lg w-full mt-4"
              >
                Siguiente caso â†’
              </button>
            )}

            {showFeedback && currentQuestionIndex >= quizCases.length - 1 && showFeedback && (
              <button
                onClick={() => continueAfterFeedback()}
                className="btn-glow bg-success text-white font-bold py-4 px-6 rounded-xl text-lg w-full mt-4"
              >
                Terminar quiz â†’
              </button>
            )}
          </div>
        </div>
      )

    case 'result':
      const cust8 = getCustomization();
      const resultProgress = getProgress();
      return (
        <div className="min-h-screen p-8" style={{ background: cust8.backgroundValue, backgroundSize: cust8.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-4">Â¡Actividad completada! ðŸŽ‰</h2>
            <p className="text-3xl font-bold">{resultProgress.completedActivities}/{resultProgress.totalActivities}</p>
            <p className="text-gray-700 mt-4">Has aprendido a identificar algunas situaciones relacionadas con las coimas.</p>
            
            <div className="mt-6 p-4 bg-primary/5 rounded">
              <p className="font-medium text-primary">+20 puntos</p>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => navigateTo('games')}
                className="btn-primary w-full py-3 px-6 rounded-lg text-lg"
              >
                Continuar aprendiendo
              </button>
              <button
                onClick={() => requestConverse()}
                className="btn-outline w-full py-3 px-6 rounded-lg text-lg mt-2"
              >
                Conversar con mi familia
              </button>
            </div>
          </div>
        </div>
      )

    case 'snake': {
      const custSnake = getCustomization();
      return (
        <div className="min-h-screen pb-16 snake-screen" style={{ background: custSnake.backgroundValue, backgroundSize: custSnake.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-10 animate-slide-up">
            <div className="flex items-center justify-between gap-3 mb-6">
              <button
                onClick={() => navigateTo('games')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-success/10 text-slate-600 hover:text-success text-sm font-bold shadow-sm transition-colors shrink-0"
              >
                â† Juegos
              </button>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl">ðŸ</span>
                <span className="font-black text-sm md:text-base truncate" style={{ color: getTextColorForTheme(custSnake.backgroundValue).primary }}>Snake</span>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-success/15 text-success text-xs font-black uppercase tracking-wider shrink-0">ClÃ¡sico</span>
            </div>
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-black gradient-text mb-2">Snake ðŸ</h1>
              <p className="font-bold" style={{ color: getTextColorForTheme(custSnake.backgroundValue).secondary }}>Come, crece y no choques.</p>
            </div>
            <SnakeGame onSnakeBest={awardSnakeMaster} />
            <footer className="mt-10 text-center">
              <p className="text-slate-500 text-sm">Hablemos Claro Â· Aprende con juegos ðŸŽ®</p>
            </footer>
          </div>
        </div>
      )
    }

    case 'flappy': {
      const custFlappy = getCustomization();
      const flappyColors = getTextColorForTheme(custFlappy.backgroundValue)
      return (
        <div className="min-h-screen pb-16" style={{ background: custFlappy.backgroundValue, backgroundSize: custFlappy.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-10 animate-slide-up">
            <div className="flex items-center justify-between gap-3 mb-6">
              <button
                onClick={() => navigateTo('games')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-primary/10 text-slate-600 hover:text-primary text-sm font-bold shadow-sm transition-colors shrink-0"
              >
                â† Juegos
              </button>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl">ðŸ¦</span>
                <span className="font-black text-sm md:text-base truncate" style={{ color: flappyColors.primary }}>Flappy</span>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-black uppercase tracking-wider shrink-0">Nuevo</span>
            </div>
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-black gradient-text mb-2">Flappy ðŸ¦</h1>
              <p className="font-bold" style={{ color: flappyColors.secondary }}>Vuela, esquiva y responde.</p>
            </div>
            <FlappyGame onFlappyXpTotal={awardFlappyStar} />
            <footer className="mt-10 text-center">
              <p className="text-slate-500 text-sm">Hablemos Claro Â· Aprende con juegos ðŸŽ®</p>
            </footer>
          </div>
        </div>
      )
    }

    case 'platformer': {
      const custPlat = getCustomization();
      const platColors = getTextColorForTheme(custPlat.backgroundValue)
      return (
        <div className="min-h-screen pb-16" style={{ background: custPlat.backgroundValue, backgroundSize: custPlat.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-10 animate-slide-up">
            <div className="flex items-center justify-between gap-3 mb-6">
              <button
                onClick={() => navigateTo('games')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-emerald-500/10 text-slate-600 hover:text-emerald-600 text-sm font-bold shadow-sm transition-colors shrink-0"
              >
                â† Juegos
              </button>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl">ðŸš©</span>
                <span className="font-black text-sm md:text-base truncate" style={{ color: platColors.primary }}>Tuki y los 10 Niveles</span>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider shrink-0">Nuevo</span>
            </div>
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-black gradient-text mb-2">Tuki y los 10 Niveles ðŸš©</h1>
              <p className="font-bold" style={{ color: platColors.secondary }}>Salta, junta valores y vence a Duoli en el castillo.</p>
            </div>
            <PlatformGame onLevelCleared={awardPlatformLevels} onAllCleared={awardPlatformMaster} />
            <footer className="mt-10 text-center">
              <p className="text-slate-500 text-sm">Hablemos Claro Â· Aprende con juegos ðŸŽ®</p>
            </footer>
          </div>
        </div>
      )
    }

    case 'catch': {
      const custCatch = getCustomization();
      const catchColors = getTextColorForTheme(custCatch.backgroundValue)
      const catchBestHub = parseInt(safeGet('hablemos-claro-catch-best') ?? '0', 10) || 0
      return (
        <div className="min-h-screen pb-16" style={{ background: custCatch.backgroundValue, backgroundSize: custCatch.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-10 animate-slide-up">
            <div className="flex items-center justify-between gap-3 mb-6">
              <button
                onClick={() => navigateTo('games')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-warning/10 text-slate-600 hover:text-warning text-sm font-bold shadow-sm transition-colors shrink-0"
              >
                â† Juegos
              </button>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl">ðŸ§º</span>
                <span className="font-black text-sm md:text-base truncate" style={{ color: catchColors.primary }}>Atrapa la honestidad</span>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-warning/15 text-warning text-xs font-black uppercase tracking-wider shrink-0">Nuevo{catchBestHub > 0 ? ` Â· ðŸ† ${catchBestHub}` : ''}</span>
            </div>
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-black gradient-text mb-2">Atrapa la honestidad ðŸ§º</h1>
              <p className="font-bold" style={{ color: catchColors.secondary }}>Atrapa valores, esquiva coimas y trampas.</p>
            </div>
            <CatchGame onCatchBest={awardCatchMaster} />
            <footer className="mt-10 text-center">
              <p className="text-slate-500 text-sm">Hablemos Claro Â· Aprende con juegos ðŸŽ®</p>
            </footer>
          </div>
        </div>
      )
    }

    case 'memory': {
      const custMemory = getCustomization();
      const memoryColors = getTextColorForTheme(custMemory.backgroundValue)
      return (
        <div className="min-h-screen pb-16" style={{ background: custMemory.backgroundValue, backgroundSize: custMemory.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-10 animate-slide-up">
            <div className="flex items-center justify-between gap-3 mb-6">
              <button
                onClick={() => navigateTo('games')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-secondary/10 text-slate-600 hover:text-secondary text-sm font-bold shadow-sm transition-colors shrink-0"
              >
                â† Juegos
              </button>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl">ðŸ§ </span>
                <span className="font-black text-sm md:text-base truncate" style={{ color: memoryColors.primary }}>Memoria</span>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-secondary/15 text-secondary text-xs font-black uppercase tracking-wider shrink-0">Nuevo</span>
            </div>
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-black gradient-text mb-2">Memoria ðŸ§ </h1>
              <p className="font-bold" style={{ color: memoryColors.secondary }}>Encuentra las parejas con menos movimientos.</p>
            </div>
            <MemoryGame onMemoryWin={awardMemoryWin} />
            <footer className="mt-10 text-center">
              <p className="text-slate-500 text-sm">Hablemos Claro Â· Aprende con juegos ðŸŽ®</p>
            </footer>
          </div>
        </div>
      )
    }

    case 'dodge': {
      const custDodge = getCustomization();
      const dodgeColors = getTextColorForTheme(custDodge.backgroundValue)
      return (
        <div className="min-h-screen pb-16" style={{ background: custDodge.backgroundValue, backgroundSize: custDodge.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-5xl mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-10 animate-slide-up">
            <div className="flex items-center justify-between gap-3 mb-6">
              <button
                onClick={() => navigateTo('games')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-sm font-bold shadow-sm transition-colors shrink-0"
              >
                â† Juegos
              </button>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl">ðŸ’œ</span>
                <span className="font-black text-sm md:text-base truncate" style={{ color: dodgeColors.primary }}>CorazÃ³n Valiente</span>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-600 text-xs font-black uppercase tracking-wider shrink-0">Nuevo</span>
            </div>
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-black gradient-text mb-2">CorazÃ³n Valiente ðŸ’œ</h1>
              <p className="font-bold" style={{ color: dodgeColors.secondary }}>Esquiva, sobrevive y conquista los 3 niveles.</p>
            </div>
            <DodgeGame onDodgeAllComplete={awardDodgeMaster} />
            <footer className="mt-10 text-center">
              <p className="text-slate-500 text-sm">Hablemos Claro Â· Aprende con juegos ðŸŽ®</p>
            </footer>
          </div>
        </div>
      )
    }

    case 'games':
      const cust9 = getCustomization();
      const gamesBadgeCount = profileType === 'family' ? familyProfile.familyBadges.filter(b => b.unlocked).length : getBadges().filter(b => b.unlocked).length;
       const gamesBadgeTotal = profileType === 'family' ? familyProfile.familyBadges.length : getBadges().length;
       const snakeBestHub = parseInt(safeGet('hablemos-claro-snake-best') ?? '0', 10) || 0
       const flappyBestHub = parseInt(safeGet('hablemos-claro-flappy-best') ?? '0', 10) || 0
       const catchBestHub = parseInt(safeGet('hablemos-claro-catch-best') ?? '0', 10) || 0
       const memoryBestHub = parseInt(safeGet('hablemos-claro-memory-best') ?? '0', 10) || 0
       const studentBadgeList = studentProfile.progress.badges
       const gameBadge = (id: BadgeType) => studentBadgeList.find(b => b.id === id)
       const dodgeHub = (() => {
         const v = safeParse(safeGet('hablemos-claro-dodge-levels'))
         return Array.isArray(v) ? v.filter(x => typeof x === 'string').length : 0
       })()
       const platLevelsHub = (() => {
         const v = safeParse(safeGet('hablemos-claro-plat-niveles'))
         return Array.isArray(v) ? v.filter(x => typeof x === 'number').length : 0
       })()
      return (
        <div className="min-h-screen pb-24" style={{ background: cust9.backgroundValue, backgroundSize: cust9.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          {/* DecoraciÃ³n de fondo */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/10 to-primary/10 blur-3xl" />
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-warning/5 blur-3xl" />
          </div>

          <div className="relative max-w-5xl mx-auto px-6 md:px-8 pt-8 md:pt-10 pb-16 animate-slide-up">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-base md:text-lg font-black text-white shadow-lg shadow-primary/25 mb-6">
                ðŸŽ® Centro de Juegos
              </div>
              <h1 className="text-5xl md:text-6xl font-black gradient-text mb-4 leading-tight">Â¡DiviÃ©rtete y aprende!</h1>
              <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-2xl mx-auto text-center leading-relaxed">Juega, aprende sobre integridad y consigue insignias en cada reto.</p>
            </div>

            {/* Snake - Juego clÃ¡sico */}
            <button
              onClick={() => navigateTo('snake')}
              className="group w-full mb-8 text-left relative overflow-hidden rounded-[28px] bg-gradient-to-br from-success via-success/80 to-emerald-600 p-[2px] shadow-xl shadow-success/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white rounded-[26px] p-6 md:p-8 flex items-stretch gap-4 md:gap-6 h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 self-start rounded-2xl bg-gradient-to-br from-success to-emerald-600 flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-success/30 group-hover:scale-110 transition-transform duration-300">
                  ðŸ
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-black text-emerald-600">Snake</h2>
                    <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider shadow-sm">ClÃ¡sico</span>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">Come manzanas, crece y no choques con los bordes ni contigo mismo.</p>
                  <p className="text-slate-500 text-sm font-black mb-2">{snakeBestHub > 0 ? `ðŸ† RÃ©cord: ${snakeBestHub}` : 'ðŸŽ® Juega y marca tu rÃ©cord'}</p>
                  {(() => {
                    const b = gameBadge('snake-master')
                    if (!b) return null
                    return <p className={`text-sm font-black mb-3 ${b.unlocked ? 'text-warning' : 'text-slate-400'}`}>{b.unlocked ? `ðŸ… ${b.emoji} ${b.name} Â¡desbloqueada!` : `ðŸ”’ Insignia ${b.emoji} ${b.name} (rÃ©cord 30)`}</p>
                  })()}
                  <span className="mt-auto self-start inline-flex items-center gap-2 text-base font-black text-white px-5 py-2.5 rounded-full shadow-md group-hover:scale-105 transition-transform bg-gradient-to-r from-emerald-700 to-emerald-800">â–¶ Jugar ahora â†’</span>
                </div>
                <div className="shrink-0 hidden md:flex items-center self-center text-slate-300 group-hover:text-success transition-colors">
                  <span className="text-3xl">ðŸŽ</span>
                </div>
              </div>
            </button>

            {/* Flappy - Vuela y responde */}
            <button
              onClick={() => navigateTo('flappy')}
              className="group w-full mb-8 text-left relative overflow-hidden rounded-[28px] bg-gradient-to-br from-sky-400 via-primary to-secondary p-[2px] shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white rounded-[26px] p-6 md:p-8 flex items-stretch gap-4 md:gap-6 h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 self-start rounded-2xl bg-gradient-to-br from-sky-400 to-primary flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
                  ðŸ¦
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-black text-sky-600">Flappy</h2>
                    <span className="px-3 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-black uppercase tracking-wider shadow-sm">Nuevo</span>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">Vuela entre torres, suma puntos y responde preguntas de integridad.</p>
                  <p className="text-slate-500 text-sm font-black mb-2">{flappyBestHub > 0 ? `ðŸ† RÃ©cord: ${flappyBestHub}` : 'ðŸŽ® Juega y marca tu rÃ©cord'}</p>
                  {(() => {
                    const b = gameBadge('flappy-star')
                    if (!b) return null
                    return <p className={`text-sm font-black mb-3 ${b.unlocked ? 'text-warning' : 'text-slate-400'}`}>{b.unlocked ? `ðŸ… ${b.emoji} ${b.name} Â¡desbloqueada!` : `ðŸ”’ Insignia ${b.emoji} ${b.name} (500 XP)`}</p>
                  })()}
                  <span className="mt-auto self-start inline-flex items-center gap-2 text-base font-black text-white px-5 py-2.5 rounded-full shadow-md group-hover:scale-105 transition-transform bg-gradient-to-r from-sky-700 to-primary">â–¶ Jugar ahora â†’</span>
                </div>
                <div className="shrink-0 hidden md:flex items-center self-center text-slate-300 group-hover:text-sky-500 transition-colors">
                  <span className="text-3xl">ðŸ•¹ï¸</span>
                </div>
              </div>
            </button>

            {/* Atrapa la honestidad */}
            <button
              onClick={() => navigateTo('catch')}
              className="group w-full mb-8 text-left relative overflow-hidden rounded-[28px] bg-gradient-to-br from-warning via-alert to-warning p-[2px] shadow-xl shadow-warning/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white rounded-[26px] p-6 md:p-8 flex items-stretch gap-4 md:gap-6 h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 self-start rounded-2xl bg-gradient-to-br from-warning to-alert flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-warning/30 group-hover:scale-110 transition-transform duration-300">
                  ðŸ§º
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-black text-amber-600">Atrapa la honestidad</h2>
                    <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider shadow-sm">Nuevo</span>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">Mueve la canasta, atrapa valores y esquiva coimas y trampas.</p>
                  <p className="text-slate-500 text-sm font-black mb-2">{catchBestHub > 0 ? `ðŸ† RÃ©cord: ${catchBestHub}` : 'ðŸŽ® Juega y marca tu rÃ©cord'}</p>
                  {(() => {
                    const b = gameBadge('catch-master')
                    if (!b) return null
                    return <p className={`text-sm font-black mb-3 ${b.unlocked ? 'text-warning' : 'text-slate-400'}`}>{b.unlocked ? `ðŸ… ${b.emoji} ${b.name} Â¡desbloqueada!` : `ðŸ”’ Insignia ${b.emoji} ${b.name} (rÃ©cord 40)`}</p>
                  })()}
                  <span className="mt-auto self-start inline-flex items-center gap-2 text-base font-black text-white px-5 py-2.5 rounded-full shadow-md group-hover:scale-105 transition-transform bg-gradient-to-r from-amber-700 to-orange-700">â–¶ Jugar ahora â†’</span>
                </div>
                <div className="shrink-0 hidden md:flex items-center self-center text-slate-300 group-hover:text-amber-500 transition-colors">
                  <span className="text-3xl">â­</span>
                </div>
              </div>
            </button>

            {/* Memoria - Encuentra las parejas */}
            <button
              onClick={() => navigateTo('memory')}
              className="group w-full mb-8 text-left relative overflow-hidden rounded-[28px] bg-gradient-to-br from-secondary via-primary to-secondary p-[2px] shadow-xl shadow-secondary/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white rounded-[26px] p-6 md:p-8 flex items-stretch gap-4 md:gap-6 h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 self-start rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform duration-300">
                  ðŸ§ 
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-black text-violet-600">Memoria</h2>
                    <span className="px-3 py-1.5 rounded-full bg-violet-100 text-violet-800 text-xs font-black uppercase tracking-wider shadow-sm">Nuevo</span>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">Encuentra las 8 parejas de valores con los menos movimientos.</p>
                  <p className="text-slate-500 text-sm font-black mb-2">{memoryBestHub > 0 ? `ðŸ† RÃ©cord: ${memoryBestHub} movimientos` : 'ðŸŽ® Juega y marca tu rÃ©cord'}</p>
                  {(() => {
                    const b = gameBadge('memory-master')
                    if (!b) return null
                    return <p className={`text-sm font-black mb-3 ${b.unlocked ? 'text-warning' : 'text-slate-400'}`}>{b.unlocked ? `ðŸ… ${b.emoji} ${b.name} Â¡desbloqueada!` : `ðŸ”’ Insignia ${b.emoji} ${b.name} (20 movimientos o menos)`}</p>
                  })()}
                  <span className="mt-auto self-start inline-flex items-center gap-2 text-base font-black text-white px-5 py-2.5 rounded-full shadow-md group-hover:scale-105 transition-transform bg-gradient-to-r from-violet-600 to-secondary">â–¶ Jugar ahora â†’</span>
                </div>
                <div className="shrink-0 hidden md:flex items-center self-center text-slate-300 group-hover:text-violet-500 transition-colors">
                  <span className="text-3xl">ðŸƒ</span>
                </div>
              </div>
            </button>

            {/* CorazÃ³n Valiente - Esquiva en la arena */}
            <button
              onClick={() => navigateTo('dodge')}
              className="group w-full mb-8 text-left relative overflow-hidden rounded-[28px] bg-gradient-to-br from-rose-500 via-fuchsia-500 to-secondary p-[2px] shadow-xl shadow-rose-500/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white rounded-[26px] p-6 md:p-8 flex items-stretch gap-4 md:gap-6 h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 self-start rounded-2xl bg-gradient-to-br from-rose-500 to-fuchsia-600 flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform duration-300">
                  ðŸ’œ
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-black text-rose-600">CorazÃ³n Valiente</h2>
                    <span className="px-3 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-black uppercase tracking-wider shadow-sm">Nuevo</span>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">Esquiva los ataques en la arena y supera los 3 niveles.</p>
                  <p className="text-slate-500 text-sm font-black mb-2">{dodgeHub > 0 ? `ðŸ… Niveles: ${dodgeHub}/3` : 'ðŸŽ® Juega y supera los niveles'}</p>
                  {(() => {
                    const b = gameBadge('dodge-master')
                    if (!b) return null
                    return <p className={`text-sm font-black mb-3 ${b.unlocked ? 'text-warning' : 'text-slate-400'}`}>{b.unlocked ? `ðŸ… ${b.emoji} ${b.name} Â¡desbloqueada!` : `ðŸ”’ Insignia ${b.emoji} ${b.name} (3 niveles)`}</p>
                  })()}
                  <span className="mt-auto self-start inline-flex items-center gap-2 text-base font-black text-white px-5 py-2.5 rounded-full shadow-md group-hover:scale-105 transition-transform bg-gradient-to-r from-rose-600 to-fuchsia-700">â–¶ Jugar ahora â†’</span>
                </div>
                <div className="shrink-0 hidden md:flex items-center self-center text-slate-300 group-hover:text-rose-500 transition-colors">
                  <span className="text-3xl">ðŸŽ¯</span>
                </div>
              </div>
            </button>

            {/* Tuki y los 10 Niveles - plataformas */}
            <button
              onClick={() => navigateTo('platformer')}
              className="group w-full mb-8 text-left relative overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-500 via-lime-500 to-amber-400 p-[2px] shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              <div className="bg-white rounded-[26px] p-6 md:p-8 flex items-stretch gap-4 md:gap-6 h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 self-start rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-600 flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  ðŸš©
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl md:text-3xl font-black text-emerald-600">Tuki y los 10 Niveles</h2>
                    <span className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider shadow-sm">Nuevo</span>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">Salta por 10 niveles, cruza la bandera, entra al castillo y vence a Duoli.</p>
                  <p className="text-slate-500 text-sm font-black mb-2">{platLevelsHub > 0 ? `ðŸ… Niveles: ${platLevelsHub}/10` : 'ðŸŽ® Supera los 10 niveles'}</p>
                  {(() => {
                    const b = gameBadge('platform-master')
                    if (!b) return null
                    return <p className={`text-sm font-black mb-3 ${b.unlocked ? 'text-warning' : 'text-slate-400'}`}>{b.unlocked ? `ðŸ… ${b.emoji} ${b.name} Â¡desbloqueada!` : `ðŸ”’ Insignia ${b.emoji} ${b.name} (vencer a Duoli)`}</p>
                  })()}
                  <span className="mt-auto self-start inline-flex items-center gap-2 text-base font-black text-white px-5 py-2.5 rounded-full shadow-md group-hover:scale-105 transition-transform bg-gradient-to-r from-emerald-700 to-lime-700">â–¶ Jugar ahora â†’</span>
                </div>
                <div className="shrink-0 hidden md:flex items-center self-center text-slate-300 group-hover:text-emerald-500 transition-colors">
                  <span className="text-3xl">ðŸ‰</span>
                </div>
              </div>
            </button>

            {/* SecciÃ³n de actividad y badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-indigo-500/5 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warning to-warning/60 flex items-center justify-center text-xl">ðŸ…</div>
                  <div>
                    <h3 className="font-black text-slate-800 text-lg">Insignias</h3>
                    <p className="text-sm text-slate-500">Desbloquea todas para ser CampeÃ³n</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-warning to-warning/60 transition-all duration-700" style={{ width: `${(gamesBadgeCount / gamesBadgeTotal) * 100}%` }} />
                  </div>
                  <span className="text-sm font-bold text-slate-700 shrink-0">{gamesBadgeCount}/{gamesBadgeTotal}</span>
                </div>
                <div className="mt-3 flex gap-2">
                  {['ðŸ›¡ï¸', 'ðŸŽ®', 'ðŸ†'].map((emoji, i) => (
                    <span key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg border-2 ${i < gamesBadgeCount ? 'bg-white border-primary/30 shadow-sm' : 'bg-slate-50 border-slate-200 opacity-40'}`}>
                      {i < gamesBadgeCount ? emoji : 'ðŸ”’'}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-indigo-500/5 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl">ðŸ”¥</div>
                  <div>
                    <h3 className="font-black text-slate-800 text-lg">Racha</h3>
                    <p className="text-sm text-slate-500">DÃ­as consecutivos jugando</p>
                  </div>
                </div>
                <p className="text-4xl font-black gradient-text">{Math.max(1, Math.floor(Math.random() * 7) + 1)}<span className="text-xl text-slate-500 ml-2">dÃ­as</span></p>
                <p className="text-xs text-slate-400 mt-1">Â¡MantÃ©n tu racha activa!</p>
              </div>
            </div>

            {/* CTA principal */}
            <div className="text-center mt-10">
              <button
                onClick={() => navigateTo('flappy')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-lg font-bold rounded-full px-10 py-4 bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-105 active:scale-[0.98] transition-all duration-200"
              >
                ðŸš€ Jugar Flappy
                <span className="transition-transform duration-200 group-hover:translate-x-1">â†’</span>
              </button>
            </div>

            {/* Footer */}
            <footer className="mt-14 text-center">
              <p className="text-slate-500 text-sm">Hablemos Claro Â· Aprende con juegos ðŸŽ®</p>
            </footer>
          </div>

          {/* NavegaciÃ³n inferior */}
          <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-max max-w-[94vw] rounded-3xl shadow-xl shadow-indigo-500/25 px-3 py-2 flex items-center gap-1" style={{ background: '#2A1B50' }}>
            {[
              { label: 'Inicio', icon: 'ðŸ ', go: () => navigateTo('home') },
              { label: 'Temas', icon: 'ðŸ“–', go: () => openTemasTab('') },
              { label: 'Juegos', icon: 'ðŸŽ®', active: true, go: () => setCurrentScreen('games') },
              { label: 'Perfil', icon: 'ðŸ‘¤', go: () => navigateTo('profile') },
            ].map(navItem => (
              <button
                key={navItem.label}
                onClick={navItem.go}
                className={`px-3 md:px-4 py-2 rounded-2xl flex flex-col items-center gap-1 text-[13px] md:text-[15px] font-bold transition-all ${navItem.active ? 'shadow-md' : 'hover:bg-white/20'}`}
                style={{ color: navItem.active ? '#ffffff' : '#E0E0FF', background: navItem.active ? '#6B46C1' : 'rgba(255,255,255,0.10)' }}
              >
                <span className="text-base leading-none">{navItem.icon}</span>
                {navItem.label}
              </button>
            ))}
          </nav>
        </div>
      )

    case 'converse':
      const cust10 = getCustomization()
      const convTextColors = getTextColorForTheme(cust10.backgroundValue)
      const prompt = conversationPrompts[currentQuestionIndex]
      const isLastQ = currentQuestionIndex >= conversationPrompts.length
      const turnIsKid = conversationTurn === 'kid'
      const isClosed = prompt?.type === 'closed'
      const convPct = Math.round((Math.min(currentQuestionIndex, conversationPrompts.length) / conversationPrompts.length) * 100)

      return (
        <div className="min-h-screen p-4 md:p-8 relative overflow-hidden" style={{ background: cust10.backgroundValue, backgroundSize: cust10.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(16,185,129,0.18)' }} />
            <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(37,99,235,0.18)' }} />
            <div className="absolute top-24 left-[6%] text-3xl animate-float hidden md:block">ðŸ’¬</div>
            <div className="absolute bottom-32 right-[7%] text-3xl animate-float hidden md:block" style={{ animationDelay: '1.1s' }}>ðŸ‘¨â€ðŸ‘§</div>
          </div>

          <div className="relative max-w-3xl mx-auto animate-slide-up py-2">
            {/* Encabezado */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-3 rounded-3xl shadow-lg flex items-center justify-center text-3xl animate-float" style={{ background: 'linear-gradient(135deg, #10b981, #2563EB)' }}>
                ðŸ’¬
              </div>
              <h1 className="text-2xl md:text-4xl font-black mb-2" style={{ color: convTextColors.primary }}>Conversemos en familia</h1>
              <p className="text-sm md:text-base max-w-lg mx-auto" style={{ color: convTextColors.secondary }}>
                Respondan por turnos: primero ðŸ‘¦ y luego ðŸ‘¨. Â¡AquÃ­ no hay respuestas malas!
              </p>
              {profileType === 'family' && activeFamilyMember && (
                <div className="mt-3 inline-flex items-center gap-2 max-w-full px-3 py-2 rounded-full bg-white/80 border border-slate-100 shadow-sm">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center text-base overflow-hidden">
                    <span className="leading-none">{avatarOrFallback(activeFamilyMember.avatar)}</span>
                  </span>
                  <span className="text-xs md:text-sm font-black text-slate-700 truncate">{activeFamilyMember.name}</span>
                  <span className="text-[10px] md:text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full shrink-0">
                    {t('activeNow')}
                  </span>
                </div>
              )}
            </div>

            {!isLastQ ? (
              <>
                {/* Progreso */}
                <div className="mb-5">
                  <div className="flex justify-between mb-1.5 text-xs font-black" style={{ color: convTextColors.secondary }}>
                    <span>Pregunta {currentQuestionIndex + 1} de {conversationPrompts.length}</span>
                    <span>{convPct}%</span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: convTextColors.border }}>
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${convPct}%`, background: 'linear-gradient(90deg, #10b981, #2563EB)' }} />
                  </div>
                </div>

                {/* Turno actual */}
                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black shadow-lg" style={{ background: turnIsKid ? 'linear-gradient(135deg, #2563EB, #7C3AED)' : 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff' }}>
                    {turnIsKid ? 'ðŸ‘§ Turno del joven' : 'ðŸ‘¨ Turno del padre'}
                  </span>
                </div>

                {/* Tarjeta de pregunta */}
                <div className="rounded-3xl p-6 md:p-8 shadow-custom-lg border border-white/70 mb-6 animate-fade-in" style={{ backgroundColor: '#ffffff' }}>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-2xl">{turnIsKid ? 'ðŸ‘¦' : 'ðŸ‘¨'}</span>
                    <span className="font-black text-slate-800">{turnIsKid ? 'Joven' : 'Padre'}</span>
                    <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: isClosed ? '#EFF6FF' : '#F0FDF4', color: isClosed ? '#2563EB' : '#059669' }}>
                      {isClosed ? 'OpciÃ³n mÃºltiple âœ…' : 'Respuesta abierta âœï¸'}
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-black text-center text-slate-900 leading-snug mb-6">
                    {turnIsKid ? prompt.kidQuestion : prompt.parentQuestion}
                  </p>

                  {isClosed ? (
                    <div className="space-y-3">
                      {(turnIsKid ? prompt?.kidOptions : prompt?.parentOptions)?.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (turnIsKid) {
                              setKidAnswer(opt)
                            } else {
                              setParentAnswer(opt)
                            }
                            // Auto-advance to next turn or next question
                            setTimeout(() => {
                              if (!turnIsKid) {
                                // Parent just answered, move to next question
                                setConversationTurn('kid')
                                setKidAnswer('')
                                setParentAnswer('')
                                setCurrentQuestionIndex(prev => prev + 1)
                              } else {
                                // Kid just answered, switch to parent
                                setConversationTurn('parent')
                              }
                            }, 300)
                          }}
                          className="w-full text-left py-3.5 px-4 rounded-2xl border-2 border-slate-200 text-sm font-bold text-slate-700 hover:border-emerald-400 hover:bg-emerald-50 transition-all"
                        >
                          <span className="mr-2 font-black text-slate-400">{'ABCDEF'[i] ?? 'â€¢'}</span>{opt}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <textarea
                        className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-emerald-400 focus:outline-none resize-none min-h-[120px] placeholder-slate-400 text-slate-800 bg-white"
                        placeholder={turnIsKid ? 'Escribe tu respuesta como joven...' : 'Escribe tu respuesta como padre...'}
                        value={turnIsKid ? kidAnswer : parentAnswer}
                        onChange={(e) => {
                          if (turnIsKid) setKidAnswer(e.target.value)
                          else setParentAnswer(e.target.value)
                        }}
                      ></textarea>
                      <button
                        onClick={() => {
                          const answer = turnIsKid ? kidAnswer : parentAnswer
                          if (answer.trim()) {
                            if (turnIsKid) {
                              setKidAnswer(answer)
                            } else {
                              setParentAnswer(answer)
                            }
                            if (!turnIsKid) {
                              // Parent finished, go to next question
                              setConversationTurn('kid')
                              setKidAnswer('')
                              setParentAnswer('')
                              setCurrentQuestionIndex(prev => prev + 1)
                            } else {
                              // Kid finished, switch to parent
                              setConversationTurn('parent')
                            }
                          }
                        }}
                        className="mt-3 w-full py-3.5 rounded-2xl text-white font-black text-sm transition-all hover:scale-[1.01] shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                      >
                        {turnIsKid ? 'ðŸ‘¦ RespondÃ­ â†’ Le toca al padre' : 'ðŸ‘¨ RespondÃ­ â†’ Siguiente pregunta'}
                      </button>
                    </div>
                  )}
                </div>

                {/* NavegaciÃ³n */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => navigateTo('home')}
                    className="py-2.5 px-5 rounded-full text-sm font-bold transition-all"
                    style={{ backgroundColor: convTextColors.cardBg, color: convTextColors.label, border: `1.5px solid ${convTextColors.border}` }}
                  >
                    ðŸ  Inicio
                  </button>
                  <button
                    onClick={() => navigateTo('activity')}
                    className="py-2.5 px-5 rounded-full text-sm font-black text-white shadow-lg transition-all hover:scale-[1.02]"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)' }}
                  >
                    ðŸŽ¯ Actividad familiar completa â†’
                  </button>
                </div>
              </>
            ) : (
              /* Completado */
              <div className="rounded-3xl p-7 md:p-9 shadow-custom-lg border border-white/70 text-center animate-slide-up" style={{ backgroundColor: '#ffffff' }}>
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 text-4xl animate-float" style={{ backgroundColor: '#ECFDF5' }}>ðŸŽ‰</div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Â¡Excelente conversaciÃ³n!</h2>
                <p className="text-slate-600 mb-1">Los dos participaron: asÃ­ se construye una familia mÃ¡s honesta. ðŸ’š</p>
                <p className="text-sm text-slate-500 mb-6">Tu progreso se guardÃ³ en el perfil.</p>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setCurrentQuestionIndex(0)
                      setConversationTurn('kid')
                      setKidAnswer('')
                      setParentAnswer('')
                      completeConversation()
                    }}
                    className="w-full py-3.5 px-6 rounded-2xl text-white font-black transition-all hover:scale-[1.01] shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                  >
                    ðŸ”„ Volver a empezar
                  </button>
                  <button
                    onClick={() => navigateTo('activity')}
                    className="w-full py-3.5 px-6 rounded-2xl text-white font-black transition-all hover:scale-[1.01] shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)' }}
                  >
                    ðŸŽ¯ Seguir con la actividad familiar
                  </button>
                  <button
                    onClick={() => navigateTo('home')}
                    className="w-full py-3.5 px-6 rounded-2xl font-black transition-all bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    ðŸ  Volver al inicio
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    case 'activity':
      const cust11 = getCustomization();
      const totalPrompts = familyActivityQuestions.length;
      const isDoneView = familyActivityIndex >= totalPrompts;
      const safeIndex = Math.min(familyActivityIndex, totalPrompts - 1);
      const currentPrompt = familyActivityQuestions[safeIndex];
      const isLastPrompt = safeIndex === totalPrompts - 1;
      const activityPct = isDoneView ? 100 : Math.round((safeIndex / totalPrompts) * 100);
      const phaseTabs = [
        { id: 'comprendemos' as const, dataType: 'comprendemos', label: 'Comprendemos', emoji: 'ðŸ§ ', color: '#2563EB' },
        { id: 'relacionamos' as const, dataType: 'relaciona', label: 'Relacionamos', emoji: 'ðŸ”—', color: '#7C3AED' },
        { id: 'actuamos' as const, dataType: 'actuamos', label: 'Actuamos', emoji: 'ðŸš€', color: '#10b981' },
      ];
      const activePhase = phaseTabs.find(p => p.dataType === currentPrompt.type)?.id ?? 'comprendemos';
      const activePhaseMeta = phaseTabs.find(p => p.id === activePhase) ?? phaseTabs[0];
      const typeSubs: Record<string, string> = {
        comprendemos: 'Hablen juntos sobre lo aprendido',
        relaciona: 'Conecten con sus experiencias',
        actuamos: 'Propongan acciones en familia',
      };
      const speakPrompt = () => {
        try {
          const synth = window.speechSynthesis;
          if (!synth) return;
          synth.cancel();
          const utter = new SpeechSynthesisUtterance(currentPrompt.text);
          utter.lang = 'es-PE';
          utter.rate = 0.95;
          synth.speak(utter);
        } catch {
          // El navegador no soporta lectura en voz alta
        }
      };

      return (
        <div className="min-h-screen p-4 md:p-8 relative overflow-hidden" style={{ background: cust11.backgroundValue, backgroundSize: cust11.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-16 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(124,58,237,0.18)' }} />
            <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(16,185,129,0.16)' }} />
            <div className="absolute top-24 right-[8%] text-3xl animate-float hidden md:block">âœ¨</div>
            <div className="absolute bottom-32 left-[7%] text-3xl animate-float hidden md:block" style={{ animationDelay: '1.2s' }}>ðŸŽ¯</div>
          </div>

          <button
            onClick={() => requestConverse()}
            className="absolute top-5 left-5 z-10 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-gray-600 text-sm font-bold shadow-sm hover:bg-white hover:text-primary transition-all"
          >
            â† AtrÃ¡s
          </button>

          <div className="relative max-w-3xl mx-auto animate-slide-up py-10 md:py-14">
            {/* Encabezado */}
            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-3 rounded-3xl shadow-lg flex items-center justify-center text-3xl animate-float" style={{ background: 'linear-gradient(135deg, #7C3AED, #10b981)' }}>
                ðŸ—£ï¸
              </div>
              <h1 className="text-2xl md:text-4xl font-black text-white drop-shadow-lg mb-2">Conversamos en familia</h1>
              <p className="text-white/85 text-sm md:text-base max-w-lg mx-auto">
                Elijan una pregunta, hablen 5 minutos todos y escriban solo palabras clave. Â¡Escuchar es tan importante como hablar! ðŸ‘‚
              </p>
            </div>

            {/* Fases */}
            {!isDoneView && (
              <div className="flex justify-center gap-2 mb-5 flex-wrap">
                {phaseTabs.map(tab => {
                  const active = activePhase === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        const first = familyActivityQuestions.findIndex(q => q.type === tab.dataType);
                        if (first >= 0) setFamilyActivityIndex(first);
                      }}
                      className="px-4 py-2 rounded-full text-xs md:text-sm font-black transition-all shadow-sm"
                      style={
                        active
                          ? { background: tab.color, color: '#ffffff', boxShadow: `0 6px 16px ${tab.color}55` }
                          : { backgroundColor: 'rgba(255,255,255,0.85)', color: '#475569' }
                      }
                    >
                      {tab.emoji} {tab.label}
                    </button>
                  );
                })}
              </div>
            )}

            {!isDoneView ? (
              <>
                {/* Progreso */}
                <div className="mb-5">
                  <div className="flex justify-between mb-1.5 text-xs font-black text-white/85">
                    <span>Pregunta {safeIndex + 1} de {totalPrompts}</span>
                    <span>{activityPct}%</span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden bg-white/25">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: `${activityPct}%`, background: 'linear-gradient(90deg, #7C3AED, #10b981)' }} />
                  </div>
                </div>

                {/* Tarjeta de pregunta */}
                <div className="rounded-3xl p-6 md:p-9 shadow-custom-lg border border-white/70 mb-6 animate-fade-in" style={{ backgroundColor: '#ffffff' }}>
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black" style={{ backgroundColor: `${activePhaseMeta.color}18`, color: activePhaseMeta.color }}>
                      {activePhaseMeta.emoji} {activePhaseMeta.label}
                    </span>
                    {isLastPrompt ? (
                      <span className="text-xs font-black px-2.5 py-1 rounded-full" style={{ backgroundColor: '#FFF7ED', color: '#C2410C' }}>ðŸ Â¡Ãšltima pregunta!</span>
                    ) : (
                      <span className="text-xs font-bold text-slate-400">{typeSubs[currentPrompt.type]}</span>
                    )}
                  </div>

                  <p className="text-2xl md:text-3xl font-black text-slate-900 leading-snug mb-6">
                    {currentPrompt.text}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <button
                      onClick={speakPrompt}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-black transition-all hover:scale-[1.02]"
                      style={{ backgroundColor: '#EFF6FF', color: '#2563EB' }}
                    >
                      ðŸ”Š Leer en voz alta
                    </button>
                    <button
                      onClick={() => setFamilyDoneList(prev => prev.includes(safeIndex) ? prev.filter(i => i !== safeIndex) : [...prev, safeIndex])}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-black transition-all hover:scale-[1.02]"
                      style={
                        familyDoneList.includes(safeIndex)
                          ? { backgroundColor: '#DCFCE7', color: '#15803D' }
                          : { backgroundColor: '#F8FAFC', color: '#64748B' }
                      }
                    >
                      {familyDoneList.includes(safeIndex) ? 'â­ Ya la conversaron' : 'â˜† Marcar como conversada'}
                    </button>
                    <span className="inline-flex items-center px-3 py-2.5 text-xs font-bold text-white/80">
                      â­ {familyDoneList.length}/{totalPrompts}
                    </span>
                  </div>

                  <label className="block text-sm font-bold text-slate-600 mb-2">Notas de la familia âœï¸ (opcional)</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-emerald-400 focus:outline-none resize-none min-h-[100px] text-slate-800 placeholder-slate-400"
                    placeholder="Escriban palabras clave de lo que hablaron..."
                  ></textarea>
                </div>

                {/* NavegaciÃ³n */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setFamilyActivityIndex(prev => Math.max(0, prev - 1))}
                    disabled={safeIndex === 0}
                    className="flex-1 py-3.5 px-4 rounded-2xl text-sm font-black transition-all disabled:opacity-40 bg-white/90 text-slate-700 border-2 border-white hover:bg-white"
                  >
                    â† Anterior
                  </button>
                  <button
                    onClick={() => {
                      if (isLastPrompt && familyDoneList.length < 5) {
                        setActivityNeedMore(true)
                      } else {
                        setActivityNeedMore(false)
                        setFamilyActivityIndex(prev => (prev < totalPrompts - 1 ? prev + 1 : totalPrompts))
                      }
                    }}
                    className="flex-1 py-3.5 px-6 rounded-2xl text-sm font-black text-white shadow-lg transition-all hover:scale-[1.02]"
                    style={{ background: isLastPrompt ? 'linear-gradient(135deg, #F59E0B, #EA580C)' : 'linear-gradient(135deg, #7C3AED, #2563EB)' }}
                  >
                    {isLastPrompt ? 'ðŸ Terminar' : 'Siguiente â†’'}
                  </button>
                </div>
                {activityNeedMore && familyDoneList.length < 5 && (
                  <p className="mt-3 text-center text-sm font-black rounded-2xl px-4 py-3 shadow-sm border" style={{ backgroundColor: '#FFF7ED', color: '#C2410C', borderColor: '#FDBA74' }}>
                    ðŸ”’ Marca al menos 5 preguntas como conversadas para completar la actividad (llevas {familyDoneList.length}/5). Â¡Padres e hijos juntos!
                  </p>
                )}
              </>
            ) : (
              // Completado
              <div className="rounded-3xl p-7 md:p-9 shadow-custom-lg border border-white/70 text-center animate-slide-up" style={{ backgroundColor: '#ffffff' }}>
                <div className="text-6xl mb-3 animate-float">ðŸŽ‰</div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Â¡Actividad completada!</h2>
                <p className="text-slate-600 mb-1">Conversar en familia nos ayuda a aprender y convivir mejor. ðŸ’š</p>
                <p className="text-sm text-slate-500 mb-5">
                  Marcaron {familyDoneList.length} de {totalPrompts} preguntas.
                </p>

                <p className="font-black text-slate-800 mb-3">Elijan UNA acciÃ³n para esta semana ðŸ‘‡</p>
                <div className="grid gap-2.5 mb-6 text-left">
                  {[
                    'ðŸ˜„ Compartir un momento de alegrÃ­a cada dÃ­a',
                    'ðŸ… Reconocer una buena decisiÃ³n familiar esta semana',
                    'ðŸ—£ï¸ Crear un ritual de conversaciÃ³n familiar',
                  ].map((actionText, i) => {
                    const selected = familyWeeklyAction === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setFamilyWeeklyAction(i)}
                        className="w-full py-3 px-4 rounded-2xl text-sm font-bold text-left transition-all border-2"
                        style={
                          selected
                            ? { backgroundColor: '#ECFDF5', borderColor: '#10b981', color: '#065F46' }
                            : { backgroundColor: '#F8FAFC', borderColor: '#E2E8F0', color: '#334155' }
                        }
                      >
                        {selected ? 'âœ… ' : ''}{actionText}
                      </button>
                    );
                  })}
                </div>

                <div className="grid gap-2.5">
                  <button
                    onClick={() => {
                      setFamilyActivityIndex(0);
                      setFamilyDoneList([]);
                      setFamilyWeeklyAction(null);
                      setActivityNeedMore(false);
                    }}
                    className="w-full py-3.5 rounded-2xl text-white font-black transition-all hover:scale-[1.01] shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)' }}
                  >
                    ðŸ”„ Volver a empezar
                  </button>
                  <button
                    onClick={() => goHome()}
                    className="w-full py-3.5 rounded-2xl font-black transition-all bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    ðŸ  Volver al inicio
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    case 'cases':
      const lifeCases = [
        {
          title: ' Escuela',
          situation: 'Un estudiante ofrece dinero a un compaÃ±ero para que le permita copiar un examen.',
          questions: [
            'Â¿QuÃ© estÃ¡ pasando?',
            'Â¿DÃ³nde estÃ¡ el problema?',
            'Â¿QuÃ© consecuencias podrÃ­a tener?',
            'Â¿QuÃ© decisiÃ³n serÃ­a responsable?',
          ]
        },
        {
          title: ' TrÃ¡mites',
          situation: 'Una persona ofrece "propina" al funcionario para que su trÃ¡mite sea procesado mÃ¡s rÃ¡pido.',
          questions: [
            'Â¿QuÃ© estÃ¡ pasando?',
            'Â¿DÃ³nde estÃ¡ el problema?',
            'Â¿QuÃ© consecuencias podrÃ­a tener?',
            'Â¿QuÃ© decisiÃ³n serÃ­a responsable?',
          ]
        },
        {
          title: ' Competencias',
          situation: 'Un atleta ofrece dinero al entrenador para que sea incluido en el equipo titular.',
          questions: [
            'Â¿QuÃ© estÃ¡ pasando?',
            'Â¿DÃ³nde estÃ¡ el problema?',
            'Â¿QuÃ© consecuencias podrÃ­a tener?',
            'Â¿QuÃ© decisiÃ³n serÃ­a responsable?',
          ]
        },
        {
          title: ' Servicios',
          situation: 'Un vecino ofrece dinero al encargado del edificio para que repare su fuga antes que al resto.',
          questions: [
            'Â¿QuÃ© estÃ¡ pasando?',
            'Â¿DÃ³nde estÃ¡ el problema?',
            'Â¿QuÃ© consecuencias podrÃ­a tener?',
            'Â¿QuÃ© decisiÃ³n serÃ­a responsable?',
          ]
        },
        {
          title: ' Situaciones comunitarias',
          situation: 'Un comerciante ofrece dinero al comitÃ© local para que su negocio sea el elegido para un festival.',
          questions: [
            'Â¿QuÃ© estÃ¡ pasando?',
            'Â¿DÃ³nde estÃ¡ el problema?',
            'Â¿QuÃ© consecuencias podrÃ­a tener?',
            'Â¿QuÃ© decisiÃ³n serÃ­a responsable?',
          ]
        },
      ]

      return (
        <div className="min-h-screen bg-light text-dark p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-primary">Casos de la vida cotidiana</h1>
              <button onClick={() => navigateTo('activity')} className="text-gray-500 hover:text-primary">
                â† AtrÃ¡s
              </button>
            </div>

            <div className="space-y-6">
              {lifeCases.map((caseItem, index) => (
                <div key={index} className="bg-white rounded-lg p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-3">{caseItem.title}</h3>
                  <p className="text-gray-700 mb-4">{caseItem.situation}</p>
                  
                  <div>
                    <p className="font-medium">1. Â¿QuÃ© estÃ¡ pasando?</p>
                    <p className="text-gray-600 italic small">(Para discutir en familia)</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">2. Â¿DÃ³nde estÃ¡ el problema?</p>
                    <p className="text-gray-600 italic small">(Reflexionar juntos)</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">3. Â¿QuÃ© consecuencias podrÃ­a tener?</p>
                    <p className="text-gray-600 italic small">(Analizar impactos)</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">4. Â¿QuÃ© decisiÃ³n serÃ­a responsable?</p>
                    <p className="text-gray-600 italic small">(Tomar una decisiÃ³n)</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => navigateTo('profile')}
                className="btn-primary w-full py-3 px-6 rounded-lg text-lg mt-4"
              >
                Ver mi perfil
              </button>
            </div>
          </div>
        </div>
      )

    case 'profile':
      const currentBadges = getBadges()
      const currentUnlockedCount = currentBadges.filter(b => b.unlocked).length
      const cust13 = getCustomization();
      const famBadges = familyProfile.familyBadges
      const famUnlocked = famBadges.filter(b => b.unlocked).length
      const famPct = familyProgressPercent(familyProfile)
      const ringC = 2 * Math.PI * 54
      
      return (
        <div className="min-h-screen p-8" style={{ background: cust13.backgroundValue, backgroundSize: cust13.backgroundType === 'pattern' ? '50px 50px' : 'cover' }}>
          <div className="max-w-6xl mx-auto animate-slide-up relative">
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-secondary/10 blur-2xl" />
              <div className="absolute top-1/3 -right-12 w-64 h-64 rounded-full bg-warning/10 blur-2xl" />
              <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
              <span className="absolute top-28 right-6 text-3xl opacity-20 animate-float">ðŸ’¬</span>
              <span className="absolute bottom-48 left-4 text-3xl opacity-20 animate-float">ðŸ“š</span>
              <span className="absolute top-1/2 left-1 text-2xl opacity-20">ðŸ¤</span>
              <span className="absolute bottom-24 right-8 text-2xl opacity-20">ðŸ’¡</span>
            </div>
            {/* Profile Type Tabs */}
            <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-lg shadow-indigo-500/5 p-3 mb-8 flex gap-3">
              <button
                onClick={() => setProfileType('student')}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-base transition-all ${
                  profileType === 'student' ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {t('studentProfile')}
              </button>
              <button
                onClick={() => setProfileType('family')}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-base transition-all ${
                  profileType === 'family' ? 'bg-secondary text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {t('familyProfile')}
              </button>
            </div>

            {profileType === 'student' ? (
              // STUDENT PROFILE
              <>
                {/* Header con avatar mejorado */}
                <div className="flex flex-col items-center text-center mb-10 relative">
                  <div className="relative inline-block">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-[3px] shadow-lg shadow-primary/30 animate-float">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                          {studentProfile.photo ? (
                            <img
                              src={studentProfile.photo}
                              alt="Perfil"
                              className="w-full h-full object-cover"
                              style={{
                                objectPosition: `${studentProfile.photoPos?.x ?? 50}% ${studentProfile.photoPos?.y ?? 50}%`,
                                transform: `scale(${studentProfile.photoPos?.zoom ?? 1})`,
                              }}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
                              ðŸ‘¤
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Badge de nivel */}
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-warning to-secondary flex items-center justify-center text-lg shadow-lg border-4 border-white font-black text-white">
                        {currentUnlockedCount >= currentBadges.length && currentBadges.length > 0 ? 'ðŸ†' : currentUnlockedCount >= 1 ? 'ðŸ¥‡' : 'ðŸ¥‰'}
                      </div>
                      {/* Edit photo button */}
                      <button
                        onClick={() => {
                          setTempPhoto(studentProfile.photo)
                          setPhotoUrl(studentProfile.photo.startsWith('http') ? studentProfile.photo : '')
                          setPosDraft(studentProfile.photoPos ?? defaultPhotoPos)
                          setEditPhotoModal(true)
                        }}
                        className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all text-lg"
                        aria-label={t('editPhoto')}
                      >
                        âœï¸
                      </button>
                    </div>
                  </div>
                  <div className="bg-white/85 backdrop-blur-xl rounded-3xl px-6 py-5 mt-7 shadow-lg shadow-indigo-500/5 w-full sm:w-auto sm:max-w-md">
                    <h2 className="text-4xl sm:text-5xl font-black gradient-text leading-tight break-words">{studentProfile.name || 'Estudiante'}</h2>
                    <p className="text-slate-400 text-sm font-semibold mt-2">{t('profileSub')}</p>
                    {(studentProfile.age || studentProfile.district) && (
                      <div className="flex justify-center gap-2 mt-3 flex-wrap">
                        {studentProfile.age && (
                          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">
                            ðŸŽ‚ {studentProfile.age} {t('ageYears')}
                          </span>
                        )}
                        {studentProfile.district && (
                          <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold">
                            ðŸ“ {studentProfile.district}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* XP Level Bar */}
                <div className="bg-white/85 backdrop-blur-xl rounded-2xl p-5 md:p-6 mb-6 flex items-center gap-4 md:gap-5 shadow-lg shadow-indigo-500/5">
                  <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl md:text-3xl shadow-md">
                    {currentUnlockedCount >= currentBadges.length && currentBadges.length > 0 ? 'ðŸ†' : 'â­'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-lg md:text-xl font-black text-slate-800 truncate">Nivel {currentUnlockedCount >= currentBadges.length && currentBadges.length > 0 ? 'CampeÃ³n' : currentUnlockedCount >= 1 ? 'En camino' : 'Aprendiz'}</span>
                      <span className="text-lg md:text-xl font-black text-primary shrink-0">{currentUnlockedCount}/{currentBadges.length} insignias</span>
                    </div>
                    <div className="h-4 md:h-5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-700 shadow-sm" style={{ width: `${currentBadges.length > 0 ? (currentUnlockedCount / currentBadges.length) * 100 : 0}%` }} />
                    </div>
                  </div>
                </div>

                {/* CÃ³mo conseguir insignias */}
                <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-5 md:p-7 mb-6 shadow-lg shadow-indigo-500/5 border border-slate-100">
                  <div className="flex items-start gap-3 mb-5">
                    <span className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-xl md:text-2xl">ðŸŽ¯</span>
                    <div className="min-w-0">
                      <h3 className="font-black text-dark text-lg md:text-xl leading-tight">{t('howToEarn')}</h3>
                      <p className="text-slate-500 text-sm md:text-base leading-snug mt-1">{t('howToEarnHint')}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentBadges.map(badge => {
                      const guide = BADGE_GUIDE[badge.id]
                      return (
                        <li
                          key={badge.id}
                          className={`flex items-start gap-3 rounded-2xl p-3.5 border transition-colors ${
                            badge.unlocked
                              ? 'bg-success/5 border-success/25'
                              : 'bg-white border-slate-200'
                          }`}
                        >
                          <span
                            className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-xl flex items-center justify-center text-xl md:text-2xl"
                            style={badge.unlocked
                              ? { background: withAlpha(badge.color, 0.15), border: `2px solid ${withAlpha(badge.color, 0.35)}` }
                              : { background: '#F1F5F9', border: '2px solid #E2E8F0', filter: 'grayscale(1)', opacity: 0.65 }}
                            aria-hidden
                          >
                            {badge.emoji}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className={`font-black text-[15px] md:text-base leading-tight break-words ${badge.unlocked ? 'text-slate-800' : 'text-slate-500'}`}>
                              {badge.name}
                            </p>
                            <p className="text-slate-500 text-[13px] md:text-sm leading-snug mt-1 break-words">
                              <span className="font-bold text-primary/70">{guide?.area}</span> Â· {guide?.how}
                            </p>
                            <p className={`mt-1.5 inline-flex items-center gap-1 text-[11px] md:text-xs font-black uppercase tracking-wider ${badge.unlocked ? 'text-success' : 'text-slate-400'}`}>
                              <span aria-hidden>{badge.unlocked ? 'âœ“' : 'ðŸ”’'}</span> {badge.unlocked ? t('badgeUnlocked') : t('badgeLocked')}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Stats Cards mejoradas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                  <button onClick={() => setCurrentScreen('profile')} className={`group rounded-[20px] border p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${currentUnlockedCount > 0 ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20' : 'bg-white/70 border-slate-200 opacity-70'}`}>
                    <div className="text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform">ðŸ…</div>
                    <div className={`text-xl md:text-2xl font-black ${currentUnlockedCount > 0 ? 'gradient-text' : 'text-slate-400'}`}>{currentUnlockedCount}/{currentBadges.length}</div>
                    <div className={`text-xs md:text-sm font-bold mt-1 ${currentUnlockedCount > 0 ? 'text-primary/80' : 'text-slate-400'}`}>{t('myBadges')}</div>
                  </button>
                  <button onClick={() => setCurrentScreen('profile')} className={`group rounded-[20px] border p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${getProgress().completedActivities > 0 ? 'bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20' : 'bg-white/70 border-slate-200 opacity-70'}`}>
                    <div className="text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform">ðŸ“š</div>
                    <div className={`text-xl md:text-2xl font-black ${getProgress().completedActivities > 0 ? 'text-secondary' : 'text-slate-400'}`}>{getProgress().completedActivities}</div>
                    <div className={`text-xs md:text-sm font-bold mt-1 ${getProgress().completedActivities > 0 ? 'text-secondary/80' : 'text-slate-400'}`}>{t('activities')}</div>
                  </button>
                  <button onClick={() => setCurrentScreen('profile')} className={`group rounded-[20px] border p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${getProgress().conversations > 0 ? 'bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20' : 'bg-white/70 border-slate-200 opacity-70'}`}>
                    <div className="text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform">ðŸ’¬</div>
                    <div className={`text-xl md:text-2xl font-black ${getProgress().conversations > 0 ? 'text-warning' : 'text-slate-400'}`}>{getProgress().conversations}</div>
                    <div className={`text-xs md:text-sm font-bold mt-1 ${getProgress().conversations > 0 ? 'text-warning/80' : 'text-slate-400'}`}>{t('conversations')}</div>
                  </button>
                  <button onClick={() => setCurrentScreen('profile')} className={`group rounded-[20px] border p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${getProgress().streakDays > 0 ? 'bg-gradient-to-br from-success/10 to-success/5 border-success/20' : 'bg-white/70 border-slate-200 opacity-70'}`}>
                    <div className="text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform">ðŸ”¥</div>
                    <div className={`text-xl md:text-2xl font-black ${getProgress().streakDays > 0 ? 'text-success' : 'text-slate-400'}`}>{getProgress().streakDays}</div>
                    <div className={`text-xs md:text-sm font-bold mt-1 ${getProgress().streakDays > 0 ? 'text-success/80' : 'text-slate-400'}`}>{t('streak')}</div>
                  </button>
                </div>

                {/* Badges o Stats */}
                <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-8 shadow-lg shadow-indigo-500/5">
                  {currentUnlockedCount > 0 ? (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-black text-dark text-lg">{t('myBadges')}</h3>
                        <span className="text-sm font-bold text-primary">{currentUnlockedCount}/{currentBadges.length}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                        {currentBadges.map(badge => (
                          <div key={badge.id} className={`flex-1 min-w-[130px] max-w-[200px] text-center p-5 rounded-2xl transition-all hover:-translate-y-1 ${badge.unlocked ? 'bg-gradient-to-br from-warning/10 to-primary/10 border-2 border-warning/30 shadow-md animate-float' : 'bg-gray-50 border-2 border-dashed border-gray-200 opacity-60'}`}>
                            <div className="text-5xl mb-2">{badge.emoji}</div>
                            <div className="text-sm font-bold mt-1" style={{ color: badge.color }}>{badge.name}</div>
                            <div className="text-xs mt-1" style={{ color: badge.unlocked ? '#059669' : '#94a3b8' }}>
                              {badge.unlocked ? 'âœ“ Desbloqueada' : 'ðŸ”’ Bloqueada'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center mb-8">
                        <div className="text-5xl mb-3" aria-hidden>ðŸŒ±</div>
                        <h3 className="font-black text-dark text-xl md:text-2xl mb-2">{t('noBadgesTitle')}</h3>
                        <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">{t('noBadgesHint')}</p>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-black text-dark text-base md:text-lg mb-4 pb-3 border-b border-slate-100">{t('topicProgress')}</h4>
                          <div className="space-y-4">
                            {Object.entries(getProgress().topicProgress).map(([topic, value]) => (
                              <div key={topic} className={`rounded-xl px-3 py-2 -mx-3 ${value >= 100 ? 'bg-success/5 border border-success/25' : ''}`}>
                                <div className="flex justify-between gap-3 mb-2">
                                  <span className={`text-sm md:text-base font-semibold leading-snug text-left ${value >= 100 ? 'text-success' : 'text-slate-600'}`}>
                                    {value >= 100 && <span aria-hidden className="mr-1.5">âœ…</span>}
                                    {topicTitles[topic as LearningTopic] ?? topic}
                                  </span>
                                  <span className={`text-sm md:text-base font-black shrink-0 tabular-nums ${value >= 100 ? 'text-success' : value > 0 ? 'text-primary' : 'text-slate-300'}`}>{value}%</span>
                                </div>
                                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                  <div className={`h-full rounded-full transition-all duration-700 shadow-sm ${value >= 100 ? 'bg-gradient-to-r from-success to-emerald-500' : 'bg-gradient-to-r from-primary to-secondary'}`} style={{ width: `${value}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {getProgress().quizScores.length > 0 && (
                          <div>
                            <h4 className="font-bold text-secondary mb-3">{t('avgQuizScore')}</h4>
                            <div className="h-36 flex items-end justify-around gap-2">
                              {getProgress().quizScores.slice(-6).map((score, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center">
                                  <div className="w-full bg-gradient-to-t from-secondary to-primary rounded-t transition-all shadow-sm" style={{ height: `${score}%` }} />
                                  <span className="text-xs text-gray-500 mt-1">Q{i + 1}</span>
                                </div>
                              ))}
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-2">
                              Promedio: {Math.round(getProgress().quizScores.reduce((a, b) => a + b, 0) / getProgress().quizScores.length)}%
                            </p>
                          </div>
                        )}
                        <div className="pt-6 border-t border-slate-100">
                          <h4 className="font-black text-dark text-base md:text-lg mb-4">{t('activitySummary')}</h4>
                          <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, rgba(5,150,105,0.12), rgba(16,185,129,0.05))', border: '2px solid rgba(5,150,105,0.25)' }}>
                            <div className="text-6xl md:text-7xl font-black text-success leading-none mb-2">{Object.values(getProgress().topicProgress).filter(v => v >= 100).length}</div>
                            <div className="text-base md:text-lg font-black text-slate-700">{t('topicsCompleted')}</div>
                            <p className="text-sm text-slate-500 mt-2">Cada tema completado es un paso mÃ¡s. Â¡Sigue asÃ­! ðŸ’ª</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* General Progress */}
                <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 mb-6 shadow-lg shadow-indigo-500/5">
                  <h3 className="font-black text-dark mb-4">{t('generalProgress')}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-700 shadow-sm"
                        style={{ width: `${getProgress().totalActivities > 0 ? (getProgress().completedActivities / getProgress().totalActivities) * 100 : 0}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-primary whitespace-nowrap">
                      {getProgress().completedActivities}/{getProgress().totalActivities}
                    </span>
                  </div>
                </div>

                {/* Customization Panel */}
                <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 mb-8 shadow-lg shadow-indigo-500/5">
                  <h3 className="font-black text-dark mb-6 flex items-center gap-2">ðŸŽ¨ {t('customization')}</h3>
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-700 mb-4">{t('backgrounds')}</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {backgrounds.map(bg => (
                        <button
                          key={bg.name}
                          onClick={() => {
                            const updated = { ...studentProfile, customization: { ...studentProfile.customization, backgroundType: bg.type, backgroundValue: bg.value } }
                            setStudentProfile(updated)
                            saveStudentProfile(updated)
                          }}
                          className={`p-4 rounded-xl border-3 transition-all text-center ${
                            studentProfile.customization.backgroundType === bg.type && studentProfile.customization.backgroundValue === bg.value
                              ? 'ring-4 ring-secondary shadow-md'
                              : 'border-transparent hover:border-gray-300 hover:shadow-sm'
                          }`}
                          style={{ background: bg.value, backgroundSize: bg.type === 'pattern' ? '50px 50px' : 'cover' }}
                        >
                          <span className="block text-sm font-bold text-gray-700 mt-2">{bg.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const updated = { ...studentProfile, customization: defaultCustomization }
                      setStudentProfile(updated)
                      saveStudentProfile(updated)
                    }}
                    className="w-full py-3 px-5 rounded-xl text-base text-gray-500 hover:text-primary hover:bg-gray-100 transition-all font-bold"
                  >
                    {t('resetCustomization')}
                  </button>
                </div>

                {/* Back button */}
                <div className="mt-6">
                  <button onClick={() => setCurrentScreen('home')} className="btn-glow bg-primary text-white font-bold py-4 px-6 rounded-xl text-lg w-full">
                    â† Volver al inicio
                  </button>
                </div>
              </>
             ) : (
              // FAMILY PROFILE
              <>
                {/* Header con avatar mejorado */}
                <div className="text-center mb-10 relative">
                  <div className="relative inline-block">
                    <div className="relative w-36 h-36 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-warning p-[3px] shadow-lg shadow-secondary/30 animate-float">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white flex items-center justify-center text-5xl bg-white">
                          {familyProfile.familyAvatar ? (
                            <span className="leading-none">{familyProfile.familyAvatar}</span>
                          ) : (
                            <span className="leading-none text-5xl">ðŸ‘¨â€ðŸ‘©â€ðŸ‘§</span>
                          )}
                        </div>
                      </div>
                      {/* Badge de progreso */}
                      <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-warning flex items-center justify-center text-xl shadow-lg border-4 border-white font-black text-white">
                        {famUnlocked >= 4 ? 'ðŸ†' : famUnlocked >= 2 ? 'ðŸ¥‡' : 'ðŸ¥‰'}
                      </div>
                    </div>
                    {/* Edit avatar button */}
                    <button
                      onClick={() => setEditingFamAvatar(v => !v)}
                      className="absolute bottom-0 right-0 w-11 h-11 rounded-full bg-gradient-to-br from-secondary to-warning text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-xl"
                      aria-label={t('editName')}
                    >
                      âœï¸
                    </button>
                    {editingFamAvatar && (
                      <div className="bg-white rounded-2xl px-4 py-4 shadow-lg shadow-indigo-500/5 mb-4 animate-fade-in">
                        <p className="text-sm font-bold text-dark mb-3">Elige el avatar de la familia</p>
                        <div className="flex gap-2 justify-center flex-wrap">
                          {familyAvatarOptions.map(a => (
                            <button
                              key={a}
                              onClick={() => {
                                const updated = { ...familyProfile, familyAvatar: a }
                                setFamilyProfile(updated)
                                saveFamilyProfile(updated)
                                setEditingFamAvatar(false)
                              }}
                              className={`relative w-14 h-14 rounded-full text-3xl flex items-center justify-center transition-all hover:scale-110 ${
                                familyProfile.familyAvatar === a
                                  ? 'bg-primary/15 ring-2 ring-primary scale-105'
                                  : 'bg-gray-100 hover:bg-gray-200'
                              }`}
                            >
                              <span className="leading-none">{a}</span>
                              {familyProfile.familyAvatar === a && <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-success text-white text-[10px] flex items-center justify-center font-bold">âœ“</span>}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="bg-white/85 backdrop-blur-xl rounded-3xl px-6 py-5 shadow-lg shadow-indigo-500/5 inline-block">
                      {editingFamName ? (
                        <div className="flex gap-2 justify-center">
                          <input type="text" value={famNameDraft} onChange={e => setFamNameDraft(e.target.value)} placeholder="Nombre de la familia" className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary font-bold text-xl text-center max-w-xs" />
                          <button onClick={saveFamilyName} className="bg-success text-white font-bold px-4 py-2 rounded-xl">âœ“</button>
                          <button onClick={() => setEditingFamName(false)} className="bg-gray-200 text-gray-600 font-bold px-4 py-2 rounded-xl">âœ•</button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <h2 className="text-3xl font-black gradient-text">{familyProfile.name}</h2>
                          <button onClick={() => { setFamNameDraft(familyProfile.name); setEditingFamName(true) }} className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label={t('editName')}>âœï¸</button>
                        </div>
                      )}
                      <p className="text-gray-500 mt-1">{t('familyTagline')}</p>
                    </div>
                  </div>
                </div>

                {/* Accesos rÃ¡pidos mejorados */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                  <button onClick={() => setCurrentScreen('learn')} className="group rounded-[20px] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">ðŸ“š</div>
                    <div className="text-sm font-bold text-primary">{t('quickActivities')}</div>
                  </button>
                  <button onClick={requestConverse} className="group rounded-[20px] bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">ðŸ’¬</div>
                    <div className="text-sm font-bold text-warning">{t('quickConvos')}</div>
                  </button>
                  <button onClick={() => scrollToRef(badgesRef)} className="group rounded-[20px] bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">ðŸ…</div>
                    <div className="text-sm font-bold text-secondary">{t('quickBadges')}</div>
                  </button>
                  <button onClick={() => scrollToRef(membersRef)} className="group rounded-[20px] bg-gradient-to-br from-success/10 to-success/5 border border-success/20 p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">ðŸ‘¨â€ðŸ‘©â€ðŸ‘§</div>
                    <div className="text-sm font-bold text-success">{t('quickMembers')}</div>
                  </button>
                </div>

                {/* EstadÃ­sticas mejoradas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                  <button onClick={() => scrollToRef(badgesRef)} className="group rounded-[20px] bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">ðŸ…</div>
                    <div className="text-2xl md:text-3xl font-black text-warning">{famUnlocked}<span className="text-sm text-gray-400">/6</span></div>
                    <div className="text-xs font-bold text-warning/80 mt-1">{t('myBadges')}</div>
                  </button>
                  <button onClick={() => setCurrentScreen('learn')} className="group rounded-[20px] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">ðŸ“š</div>
                    <div className="text-2xl md:text-3xl font-black text-primary">{familyProfile.progress.completedActivities}</div>
                    <div className="text-xs font-bold text-primary/80 mt-1">{t('activities')}</div>
                  </button>
                  <button onClick={requestConverse} className="group rounded-[20px] bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">ðŸ’¬</div>
                    <div className="text-2xl md:text-3xl font-black text-warning">{familyProfile.progress.conversations}</div>
                    <div className="text-xs font-bold text-warning/80 mt-1">{t('conversations')}</div>
                  </button>
                  <button onClick={() => scrollToRef(membersRef)} className="group rounded-[20px] bg-gradient-to-br from-success/10 to-success/5 border border-success/20 p-4 md:p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">ðŸ‘¨â€ðŸ‘©â€ðŸ‘§</div>
                    <div className="text-2xl md:text-3xl font-black text-success">{familyProfile.members.length}</div>
                    <div className="text-xs font-bold text-success/80 mt-1">{t('statMembers')}</div>
                  </button>
                </div>

                {/* Progreso circular mejorado */}
                <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 mb-8 shadow-lg shadow-indigo-500/5 text-center relative overflow-hidden">
                  <span aria-hidden className="pointer-events-none absolute top-4 right-4 text-3xl opacity-20 animate-float">âœ¨</span>
                  <h3 className="font-black text-dark text-xl mb-6">{t('generalProgress')}</h3>
                  <div className="flex justify-center">
                    <div className="relative">
                      <svg width="160" height="160" viewBox="0 0 140 140">
                        <circle cx="70" cy="70" r="54" fill="none" stroke="#E5E7EB" strokeWidth="14" />
                        <circle cx="70" cy="70" r="54" fill="none" stroke="url(#familyProgressGrad)" strokeWidth="14" strokeLinecap="round" strokeDasharray={ringC} strokeDashoffset={ringC - (ringC * famPct) / 100} transform="rotate(-90 70 70)" style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
                        <defs>
                          <linearGradient id="familyProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#10B981" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-black gradient-text">{famPct}%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-4">{t('progressHint')}</p>
                </div>

                {/* Insignias mejoradas */}
                <div ref={badgesRef} className="bg-white/85 backdrop-blur-xl rounded-3xl p-7 md:p-8 mb-8 scroll-mt-4 relative overflow-hidden shadow-lg shadow-indigo-500/5">
                  <span aria-hidden className="pointer-events-none absolute top-4 right-5 text-xl opacity-30 animate-float">âœ¨</span>
                  <span aria-hidden className="pointer-events-none absolute top-4 left-5 text-xl opacity-30">ðŸŒŸ</span>
                  <h3 className="font-black text-dark text-xl mb-1">ðŸ… {t('myBadges')}</h3>
                  <p className="text-gray-500 mb-6">{famUnlocked} de 6 desbloqueadas</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    {famBadges.map(b => (
                      <div key={b.id} className={`rounded-2xl p-5 text-center border-2 card-hover ${b.unlocked ? 'bg-gradient-to-br from-warning/10 to-primary/10 border-warning/30 shadow-lg' : 'bg-gray-50 border-dashed border-gray-200'}`}>
                        <div className="relative inline-block">
                          <div className={`text-5xl mb-2 ${b.unlocked ? 'animate-float' : 'grayscale opacity-50'}`}>{b.emoji}</div>
                          {!b.unlocked && <div className="absolute -top-1 -right-1 text-lg">ðŸ”’</div>}
                        </div>
                        <div className="font-bold text-dark">{b.name}</div>
                        <div className="text-xs text-gray-500 mt-1 leading-snug">{b.desc}</div>
                        <div className={`text-xs font-bold mt-2 ${b.unlocked ? 'text-success' : 'text-gray-400'}`}>
                          {b.unlocked ? `âœ“ ${t('unlockedBadge')}` : t('lockedBadge')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actividad reciente con timeline */}
                <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 mb-8 shadow-lg shadow-indigo-500/5">
                  <h3 className="font-black text-dark text-xl mb-6">ðŸ•˜ {t('recentActivity')}</h3>
                  {familyProfile.activityLog.length === 0 ? (
                    <p className="text-gray-500">{t('noActivity')}</p>
                  ) : (
                    <div className="space-y-3 relative">
                      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-secondary/30 to-transparent" />
                      {familyProfile.activityLog.slice(0, 6).map(e => (
                        <div key={e.id} className="relative flex items-start gap-4 pl-8 animate-slide-up">
                          <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-secondary border-2 border-white shadow-sm" />
                          <div className="bg-white rounded-xl px-4 py-3 shadow-sm flex-1 border border-gray-50">
                            <p className="text-dark font-medium text-sm">{e.text}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{e.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Integrantes mejorados */}
                <div ref={membersRef} className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 mb-8 scroll-mt-4">
                  <h3 className="font-black text-dark text-xl mb-6">ðŸ‘¨â€ðŸ‘©â€ðŸ‘§ {t('membersTitle')} ({familyProfile.members.length})</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {familyProfile.members.map(m => {
                      const pct = memberProgressPercent(m)
                      const isActive = m.id === familyProfile.activeMemberId
                      return (
                      <div key={m.id} className={`rounded-2xl p-5 text-center border transition-all hover:-translate-y-1 hover:shadow-md ${isActive ? 'bg-secondary/5 border-2 border-secondary/30 shadow-md' : 'bg-white border border-gray-100'}`}>
                        {isActive && (
                          <span className="inline-block px-2.5 py-1 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-wider mb-2">
                            âœ“ {t('activeNow')}
                          </span>
                        )}
                        <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-4xl bg-gradient-to-br from-primary/15 to-secondary/15 border-2 border-white shadow overflow-hidden`}>
                          <span className="leading-none">{avatarOrFallback(m.avatar)}</span>
                        </div>
                        {editingMemberId === m.id ? (
                          <div className="flex gap-1 justify-center mb-2">
                            <input type="text" value={memberNameDraft} onChange={e => setMemberNameDraft(e.target.value)} className="w-full px-2 py-1 rounded-lg border border-gray-200 text-dark font-bold text-center" />
                            <button onClick={() => saveMemberName(m.id)} className="bg-success text-white font-bold px-3 py-1 rounded-lg">âœ“</button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-1">
                            <p className="font-bold text-dark text-sm break-words">{m.name}</p>
                            <button onClick={() => { setEditingMemberId(m.id); setMemberNameDraft(m.name) }} className="text-xs text-gray-400 hover:text-primary" aria-label={t('editName')}>âœï¸</button>
                          </div>
                        )}
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mt-2">{m.role}</span>

                        <div className="mt-3">
                          <div className="flex items-center justify-between text-[11px] md:text-xs mb-1">
                            <span className="font-black text-slate-600">{t('memberProgress')}</span>
                            <span className="font-black text-secondary tabular-nums">{pct}%</span>
                          </div>
                          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #10B981, #7C3AED)' }} />
                          </div>
                        </div>

                        <ul className="mt-3 space-y-1 text-left">
                          <li className="flex items-center justify-between gap-2 text-[12px] md:text-[13px]">
                            <span className="text-slate-500">ðŸ“– {t('guidesRead')}</span>
                            <span className="font-black text-dark tabular-nums">{m.guidesDone?.length ?? 0}/{PARENT_GUIDES.length}</span>
                          </li>
                          <li className="flex items-center justify-between gap-2 text-[12px] md:text-[13px]">
                            <span className="text-slate-500">ðŸ’¬ {t('conversationsDone')}</span>
                            <span className="font-black text-dark tabular-nums">{m.conversations ?? 0}</span>
                          </li>
                          <li className="flex items-center justify-between gap-2 text-[12px] md:text-[13px]">
                            <span className="text-slate-500">âœ… {t('activities')}</span>
                            <span className="font-black text-dark tabular-nums">{m.activities}</span>
                          </li>
                        </ul>

                        <button onClick={() => registerMemberActivity(m.id)} className="mt-3 w-full bg-gradient-to-r from-success to-success/80 text-white font-bold py-2 px-4 rounded-xl text-sm hover:shadow-md transition-all">
                          {t('registerActivity')}
                        </button>
                      </div>
                      )
                    })}
                  </div>
                  <div className="bg-white rounded-2xl p-5 border-2 border-dashed border-gray-300">
                    <h4 className="font-bold text-dark mb-4">{t('addMember')}</h4>
                    <input type="text" value={newMemberName} onChange={e => setNewMemberName(e.target.value)} placeholder={t('memberNamePh')} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary font-medium mb-3" />
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-sm font-medium text-dark mb-2">{t('memberRole')}</p>
                        <select value={newMemberRole} onChange={e => { const role = e.target.value as FamilyRole; setNewMemberRole(role); setNewMemberAvatar(roleAvatar[role]) }} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark font-medium">
                          {familyRoles.map(r => <option key={r} value={r}>{roleAvatar[r]} {r}</option>)}
                        </select>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-dark mb-2">{t('memberAvatar')}</p>
                        <div className="flex gap-2 flex-wrap">
                          {memberAvatars.map(a => (
                            <button key={a} onClick={() => setNewMemberAvatar(a)} className={`relative w-11 h-11 rounded-full text-2xl flex items-center justify-center transition-all hover:scale-110 ${newMemberAvatar === a ? 'bg-primary/15 ring-2 ring-primary scale-105' : 'bg-gray-100 hover:bg-gray-200'}`}>
                              <span className="leading-none">{a}</span>
                              {newMemberAvatar === a && <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-success text-white text-[9px] flex items-center justify-center font-bold">âœ“</span>}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button onClick={addFamilyMember} disabled={newMemberName.trim() === ''} className={`font-bold py-3 px-6 rounded-xl w-full ${newMemberName.trim() === '' ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'btn-glow bg-primary text-white'}`}>
                      {t('add')}
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={() => setCurrentScreen('home')} className="btn-glow bg-primary text-white font-bold py-4 px-6 rounded-xl text-lg w-full">
                    {t('backHome')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )

    case 'content-for-parents':
      return (
        <div className="min-h-screen bg-light text-dark p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-primary">GuÃ­a para conversar</h1>
              <button onClick={() => navigateTo('home')} className="text-gray-500 hover:text-primary">
                â† AtrÃ¡s
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 text-lg mb-6">Consejos para padres y madres:</p>
              
              <ul className="space-y-4">
                <li className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-primary mb-1">Escucha primero.</p>
                  <p className="text-gray-600 text-sm">Permite que tu hijo/a exprese sus opiniones sin interrumpir.</p>
                </li>
                
                <li className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-primary mb-1">No conviertas la conversaciÃ³n en un interrogatorio.</p>
                  <p className="text-gray-600 text-sm">Haz preguntas abiertas y naturales.</p>
                </li>
                
                <li className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-primary mb-1">Utiliza ejemplos cotidianos.</p>
                  <p className="text-gray-600 text-sm">Conecta el tema con situaciones que vivan juntos.</p>
                </li>
                
                <li className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-primary mb-1">Pregunta quÃ© piensa tu hijo.</p>
                  <p className="text-gray-600 text-sm">Valida sus opiniones y reflexiona juntos.</p>
                </li>
                
                <li className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-primary mb-1">ExplÃ­cale las consecuencias.</p>
                  <p className="text-gray-600 text-sm">AyÃºdalo a entender el impacto de las acciones.</p>
                </li>
                
                <li className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-primary mb-1">Refuerza valores como honestidad y responsabilidad.</p>
                  <p className="text-gray-600 text-sm">Elogia las decisiones correctas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )

    default:
      return null
    }
  }

    // Edit Photo Modal
    const editPhotoModalContent = editPhotoModal ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="glass-card rounded-3xl p-8 max-w-md w-full text-center animate-slide-up shadow-2xl">
          <h3 className="text-2xl font-bold gradient-text mb-2">{t('editPhoto')}</h3>
          <p className="text-gray-500 mb-6">{t('choosePhoto')}</p>
          
          <div className="space-y-3 mb-6">
            <button
              onClick={() => {
                const updated = { ...studentProfile, photo: '' }
                setStudentProfile(updated)
                saveStudentProfile(updated)
                setEditPhotoModal(false)
              }}
              className="btn-glow bg-secondary text-white font-bold py-3 px-6 rounded-xl w-full"
            >
              Eliminar foto
            </button>

            <button
              onClick={() => {
                const url = photoUrl.trim()
                setTempPhoto(url !== '' ? url : studentProfile.photo)
                const updated = {
                  ...studentProfile,
                  photo: url !== '' ? url : studentProfile.photo,
                  photoPos: posDraft,
                }
                setStudentProfile(updated)
                saveStudentProfile(updated)
                setEditPhotoModal(false)
              }}
              className="btn-glow bg-success text-white font-bold py-3 px-6 rounded-xl w-full"
            >
              ðŸ’¾ Guardar foto âœ“
            </button>

            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="font-bold text-dark mb-3">{t('photoLinkTitle')}</p>
              <input
                type="url"
                value={photoUrl}
                onChange={e => setPhotoUrl(e.target.value)}
                placeholder={t('photoLinkPlaceholder')}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary font-medium"
              />
              {photoUrl.trim() !== '' && (
                <div className="mt-3 flex justify-center">
                  <img
                    src={photoUrl.trim()}
                    alt="Vista previa"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
              )}
            </div>
            
              <button
                onClick={() => setEditPhotoModal(false)}
                className="text-gray-500 hover:text-primary text-sm font-medium"
              >
                {t('back')}
              </button>
            </div>

            {(photoUrl.trim() !== '' || studentProfile.photo !== '') && (
              <div className="bg-white rounded-xl p-4 border border-gray-200 mt-3 text-left">
                <p className="font-bold text-dark mb-1">ðŸ–¼ï¸ Encuadrar imagen</p>
                <p className="text-sm text-gray-500 mb-3">Arrastra la foto para moverla y usa los controles para ajustar.</p>
                <div
                  className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 touch-none cursor-move select-none"
                  onPointerDown={(e) => {
                    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
                    dragStart.current = { sx: e.clientX, sy: e.clientY, x: posDraft.x, y: posDraft.y }
                  }}
                  onPointerMove={(e) => {
                    const d = dragStart.current
                    if (!d) return
                    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                    const nx = Math.min(100, Math.max(0, d.x - ((e.clientX - d.sx) / rect.width) * 100))
                    const ny = Math.min(100, Math.max(0, d.y - ((e.clientY - d.sy) / rect.height) * 100))
                    setPosDraft(prev => ({ ...prev, x: nx, y: ny }))
                  }}
                  onPointerUp={() => { dragStart.current = null }}
                  onPointerCancel={() => { dragStart.current = null }}
                >
                  <img
                    src={photoUrl.trim() !== '' ? photoUrl.trim() : studentProfile.photo}
                    alt="Ajuste"
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                    style={{
                      objectPosition: `${posDraft.x}% ${posDraft.y}%`,
                      transform: `scale(${posDraft.zoom})`,
                    }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <label className="block text-sm font-medium text-dark">
                    â†” Horizontal: {Math.round(posDraft.x)}%
                    <input
                      type="range" min={0} max={100} value={posDraft.x}
                      onChange={e => setPosDraft(prev => ({ ...prev, x: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </label>
                  <label className="block text-sm font-medium text-dark">
                    â†• Vertical: {Math.round(posDraft.y)}%
                    <input
                      type="range" min={0} max={100} value={posDraft.y}
                      onChange={e => setPosDraft(prev => ({ ...prev, y: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </label>
                  <label className="block text-sm font-medium text-dark">
                    ðŸ” Zoom: {posDraft.zoom.toFixed(1)}x
                    <input
                      type="range" min={1} max={2.5} step={0.1} value={posDraft.zoom}
                      onChange={e => setPosDraft(prev => ({ ...prev, zoom: Number(e.target.value) }))}
                      className="w-full"
                    />
                  </label>
                </div>
              </div>
            )}
        </div>
      </div>
    ) : null

  return (
    <div className={viewMode === 'pc' ? 'pc-mode' : 'mobile-mode'}>
      {renderScreen()}
      {memberPickerFor && familyProfile.members.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true" aria-label={t('whoIsEntering')}>
          <div className="bg-white rounded-3xl p-5 md:p-7 w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl">
            <div className="flex items-start gap-3 mb-5">
              <span className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-secondary/10 flex items-center justify-center text-2xl md:text-3xl">ðŸ‘¨â€ðŸ‘©â€ðŸ‘§</span>
              <div className="min-w-0">
                <h2 className="font-black text-dark text-xl md:text-2xl leading-tight">{t('whoIsEntering')}</h2>
                <p className="text-slate-500 text-sm md:text-base leading-snug mt-1">{t('whoIsEnteringHint')}</p>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {familyProfile.members.map(m => {
                const pct = memberProgressPercent(m)
                const isActive = m.id === familyProfile.activeMemberId
                return (
                  <li key={m.id}>
                    <button
                      onClick={() => confirmMemberEntry(m.id)}
                      className={`w-full text-left rounded-2xl border-2 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                        isActive ? 'border-secondary bg-secondary/5' : 'border-slate-200 bg-white hover:border-secondary/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 border-2 border-white shadow flex items-center justify-center text-2xl md:text-3xl overflow-hidden">
                          <span className="leading-none">{avatarOrFallback(m.avatar)}</span>
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-black text-dark text-[15px] md:text-base leading-tight truncate">{m.name}</p>
                          <p className="text-xs font-bold text-secondary mt-0.5">{m.role}</p>
                        </div>
                        {isActive && (
                          <span className="shrink-0 text-[10px] md:text-[11px] font-black uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                            âœ“ {t('activeNow')}
                          </span>
                        )}
                      </div>

                      <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #10B981, #7C3AED)' }} />
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className="text-[13px] md:text-sm font-black text-slate-700">{t('memberProgress')} {pct}%</span>
                        <span className="text-[11px] md:text-xs text-slate-500 text-right">
                          ðŸ“– {m.guidesDone?.length ?? 0}/{PARENT_GUIDES.length} {t('guidesRead')} Â· ðŸ’¬ {m.conversations ?? 0} {t('conversationsDone')}
                        </span>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>

            <button
              onClick={() => { setMemberPickerFor(null); setPendingGuideId(null) }}
              className="mt-5 w-full py-3 rounded-2xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-colors"
            >
              {t('cancel')}
            </button>
          </div>
        </div>
      )}
{showBadgeCelebration && earnedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="rounded-3xl p-8 max-w-sm w-full text-center text-white animate-slide-up shadow-2xl" style={{ background: 'linear-gradient(135deg, #1e3a8a, #6d28d9, #b45309)' }}>
            <div className="text-7xl mb-4 animate-float">{earnedBadge.emoji}</div>
            <p className="text-2xl font-bold mb-1">Â¡Insignia desbloqueada!</p>
            <p className="text-lg mb-6" style={{ color: earnedBadge.color }}>{earnedBadge.name}</p>
            <p className="text-sm text-white/70 mb-6">Sigue aprendiendo para conseguir las demÃ¡s insignias. ðŸŒŸ</p>
            <button
              onClick={() => setShowBadgeCelebration(false)}
              className="bg-white text-primary font-bold py-3 px-8 rounded-full text-lg w-full"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
      {editPhotoModalContent}
    </div>
  )
}