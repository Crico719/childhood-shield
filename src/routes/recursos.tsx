import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos y apoyo para víctimas · Segura" },
      {
        name: "description",
        content:
          "Recursos de apoyo psicológico, orientación legal, redes de comunidad y guías para familias frente al maltrato infantil en Perú.",
      },
      {
        property: "og:title",
        content: "Recursos y apoyo para víctimas · Segura",
      },
      {
        property: "og:description",
        content:
          "Apoyo psicológico, orientación legal y redes de acompañamiento para víctimas y familias.",
      },
      { name: "twitter:title", content: "Recursos y apoyo · Segura" },
      {
        name: "twitter:description",
        content: "Apoyo psicológico, legal y comunitario para víctimas y familias.",
      },
    ],
  }),
  component: ResourcesPage,
});

const support = [
  {
    tone: "sky",
    title: "Apoyo psicológico",
    desc: "Espacios de contención para el niño, la niña y su familia, con enfoque en la recuperación emocional tras una experiencia de violencia.",
    items: [
      "Atención gratuita en el CEM y centros de salud.",
      "Terapia especializada para niñas, niños y adolescentes.",
      "Acompañamiento a cuidadores durante el proceso.",
    ],
  },
  {
    tone: "brand",
    title: "Orientación legal",
    desc: "Información clara sobre tus derechos y cómo proteger al niño o niña durante el proceso legal.",
    items: [
      "Asesoría gratuita en las Defensorías del Pueblo.",
      "Medidas de protección para víctimas y denunciantes.",
      "Seguimiento del caso en fiscalía y juzgado.",
    ],
  },
  {
    tone: "rose",
    title: "Red de comunidad",
    desc: "Grupos de familias que han vivido algo similar, para que nadie cargue esta experiencia en silencio.",
    items: [
      "Grupos de apoyo entre pares.",
      "Espacios seguros para compartir y sanar.",
      "Acompañamiento de organizaciones de la sociedad civil.",
    ],
  },
];

const guides = [
  {
    title: "Cómo hablar con tu hijo o hija",
    desc: "Tips prácticos para escuchar sin presionar y crear un espacio de confianza donde el niño o niña se sienta seguro para contar lo que le pasa.",
  },
  {
    title: "Cuidado del cuidador",
    desc: "Acompañar a una víctima también requiere cuidado. Reconoce señales de agotamiento y busca tu propio apoyo emocional.",
  },
  {
    title: "Prevención en casa",
    desc: "Pautas para educar en límites corporales, autonomía y confianza, y reducir el riesgo de abuso.",
  },
  {
    title: "Después de la denuncia",
    desc: "Qué esperar en el proceso legal, cómo prepararse para las audiencias y cómo sostener a la familia en cada etapa.",
  },
];

function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="mt-8 max-w-3xl">
        <span className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> Apoyo
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Acompañamiento para víctimas y familias
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/70">
          La recuperación es un camino que se recorre con apoyo. Aquí encuentras
          recursos en Perú para el bienestar emocional, la orientación legal y
          la comunidad que sostiene.
        </p>
      </section>

      {/* Support types */}
      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {support.map((s) => (
          <div key={s.title} className="glass rounded-2xl p-6 shadow-sm">
            <span
              className={`grid size-11 place-items-center rounded-xl ${
                s.tone === "sky"
                  ? "bg-sky-soft text-sky"
                  : s.tone === "rose"
                  ? "bg-rose/15 text-rose"
                  : "bg-brand-soft/40 text-brand"
              }`}
            >
              <span className="size-3 rounded-full bg-current" />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold text-ink">
              {s.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.desc}</p>
            <ul className="mt-4 space-y-2">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm text-ink/70">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Guides */}
      <section className="mt-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Guías para familias
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
            Leer también ayuda
          </h2>
          <p className="mt-4 text-ink/70">
            Material claro para prevenir, acompañar y sanar. Compartido con
            tono cálido, sin tecnicismos.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {guides.map((g) => (
            <div
              key={g.title}
              className="glass rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand/10"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14">
        <div className="glass-strong rounded-3xl px-8 py-8 text-center shadow-xl shadow-brand/10">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            No cargues esto en soledad
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Si necesitas ayuda ahora, llama a la Línea 100. Si quieres aprender
            a detectar o denunciar, explora las demás secciones.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:100"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-deep"
            >
              Llamar a la Línea 100
            </a>
            <Link
              to="/senales"
              className="glass rounded-full px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-white/80"
            >
              Aprender a detectar señales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
