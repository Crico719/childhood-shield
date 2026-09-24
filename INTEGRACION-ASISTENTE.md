# MaChat - Instrucciones de Integración

## Archivos Creados

1. **`src/components/kit/Chat.tsx`** - Componente principal del chat
2. **`src/routes/asistente.tsx`** - Ruta `/asistente`

## Pasos para Integrar

### 1. Copiar archivos al proyecto

Copia estos archivos a tu proyecto `prepa-premium-uv`:

```
src/
├── components/
│   └── kit/
│       └── Chat.tsx          ← NUEVO
└── routes/
    └── asistente.tsx         ← NUEVO
```

### 2. Actualizar AppShell.tsx

Agrega el import de `Bot` en `src/components/layout/AppShell.tsx`:

```tsx
import {
  Bell,
  BookOpen,
  Bot,        // ← AGREGAR
  GraduationCap,
  Home,
  // ... resto de imports
} from "lucide-react";
```

Agrega la nueva ruta al array `nav`:

```tsx
const nav = [
  { to: "/", label: "Inicio", icon: Home },
  { to: "/cursos", label: "Cursos", icon: BookOpen },
  { to: "/simulacros", label: "Simulacros", icon: Target },
  { to: "/estrategias", label: "Hábitos", icon: Timer },
  { to: "/asistente", label: "MaChat", icon: Bot },  // ← AGREGAR
  { to: "/universidades", label: "Universidades", icon: GraduationCap },
  { to: "/comunidad", label: "Comunidad", icon: Users },
  { to: "/perfil", label: "Perfil", icon: User },
] as const;
```

Agrega al array `mobileNav`:

```tsx
const mobileNav = [nav[0], nav[1], nav[2], nav[4], nav[5]];  // ← ACTUALIZAR
```

### 3. Ejecutar

```bash
bun run dev
```

### 4. Acceder

Visita: `http://localhost:3000/asistente`

## Funcionalidades

- 💬 Chat interactivo con IA
- 📚 Preguntas sobre cualquier materia
- ✏️ Generación de ejercicios
- 💡 Consejos de estudio
- 🎯 Respuestas contextualizadas para admisión

## IA Actual

Usa un sistema de respuestas simuladas (mock). Para conectar con una IA real:

### Opción 1: Ollama (Local, Gratis)

1. Instalar Ollama: https://ollama.ai
2. Descargar modelo: `ollama pull llama2`
3. Modificar `Chat.tsx` para llamar a la API local

### Opción 2: Hugging Face (Gratis)

1. Crear cuenta en https://huggingface.co
2. Obtener API key gratuita
3. Integrar con Inference API
