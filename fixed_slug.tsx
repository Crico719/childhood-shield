import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CirclePlay,
  Lightbulb,
  Lock,
  MessageCircle,
  NotebookPen,
  Sparkles,
  BookOpen,
  Zap,
  Trophy,
  ImageIcon,
  Calculator,
  Target,
  Info,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react";
import { IconTile, ProgressBar, Surface } from "@kit";
import { usePathname, useSearch } from "@tanstack/react-router";
import { courses } from "@/lib/data";

export const Route = createFileRoute("/cursos/$slug")({
  async loader({ params }) {
    const { slug } = params;
    const course = courses.find((c) => c.slug === slug);
    if (!course) return notFound();
    
    // Load course content based on slug
    let courseContent;
    try {
      const contentModule = await import(`./data/${slug}`);
      courseContent = contentModule.courseContent?.[slug];
    } catch (e) {
      console.error(`Error loading content for ${slug}:`, e);
    }
    
    return { course, courseContent };
  },

  component({ resolve }) {
    const { course, courseContent } = resolve() || {};
    const pathname = usePathname();
    const search = useSearch();

    const [activeLesson, setActiveLesson] = useState(0);
    const [showDownload, setShowDownload] = useState(false);
    const [downloadedFile, setDownloadedFile] = useState<string | null>(null);

    // Calculate total lessons and hours from courseContent
    const totalLessons = courseContent?.reduce((sum, module) => sum + module.exercises.length, 0) || 0;
    const totalHours = Math.ceil(totalLessons / 3);

    const handleDownload = () => {
      if (!courseContent) {
        alert("Guía de estudio no disponible");
        setShowDownload(false);
        return;
      }
      
      // Generate study guide filename based on course slug
      const guiaFilename = `${course.slug}-guia-avanzada.txt`;
      setDownloadedFile(guiaFilename);
      setShowDownload(false);
      
      // Try to download/notify
      try {
        // Generate study guide based on module theory data
        const studyGuideLines = courseContent
          .slice(0, 5)
          .flatMap((module) => module.theory?.lines || [])
          .slice(0, 20);
        
        const content = `# Guía de estudio: ${course.name}

## Resumen

${studyGuideLines.join("\n\n")}

---
*Guía generada automáticamente basada en los primeros 5 módulos del curso de ${course.name}*
`;
        
        // Trigger download
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = guiaFilename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error generating study guide:", error);
        alert("Guía de estudio no disponible");
      }
    };

    return (
      <div className="min-h-screen bg-background p-4">
        <nav className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft2 className="size-4" /> Volver al inicio
          </Link>
          
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">{course.name}</h1>
            <span className="text-sm text-muted-foreground">{course.description}</span>
          </div>
        </nav>

        <Surface className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courseContent?.map((module, moduleIndex) => (
            <Surface
              key={moduleIndex}
              className="p-4 border rounded-xl hover:border-primary/30 transition-colors"
            >
              <h3 className="font-semibold mb-2">
                {module.index} {module.title || `Módulo ${moduleIndex + 1}`}
              </h3>
              <p className="text-sm text-muted-foreground">
                {module.exercises.length} preguntas · Nivel {module.difficulty}
              </p>
              <p className="mt-2 line-clamp-2">
                {module.theory?.lines?.slice(0, 3).join("... ") || "Contenido de teoría"}
              </p>
            </Surface>
          ))}
        </Surface>

        <div className="mt-6 p-4 bg-card rounded-xl">
          <h2 className="font-semibold mb-3">Progreso</h2>
          <ProgressBar
            value={Math.round(((activeLesson + 1) / totalLessons) * 100)}
            tone="primary"
          />
          <p className="mt-2 text-sm text-muted-foreground">
            {activeLesson + 1} de {totalLessons} lecciones · {totalHours} h restantes
          </p>
        </div>

        {/* Study Guide Download */}
        {showDownload && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-zxl z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Generando guía de estudio para {course.name}...
              </p>
              <button
                onClick={handleDownload}
                className="mt-4 px-4 py-2 bg-primary text-white rounded"
              >
                Descargar guía
              </button>
              <button
                onClick={() => setShowDownload(false)}
                className="mt-2 ml-auto text-sm text-muted-foreground"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    );
  },
});