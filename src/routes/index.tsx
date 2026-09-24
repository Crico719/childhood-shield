import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segura · Centro de ayuda contra el maltrato infantil" },
      {
        name: "description",
        content:
          "Guía clara para familias y adultos en Perú: cómo detectar el maltrato infantil, dónde y cómo denunciar, y qué pasos seguir para proteger a la niñez.",
      },
      {
        property: "og:title",
        content: "Segura · Centro de ayuda contra el maltrato infantil",
      },
      {
        property: "og:description",
        content:
          "Detecta las señales, denuncia con seguridad y encuentra apoyo. Confidencial, gratuito y 24/7.",
      },
      { name: "twitter:title", content: "Segura · Centro de ayuda contra el maltrato infantil" },
      {
        name: "twitter:description",
        content:
          "Detecta las señales, denuncia con seguridad y encuentra apoyo. Confidencial, gratuito y 24/7.",
      },
    ],
  }),
  component: HomePage,
});

const signals = [
  {
    num: "1",
    tone: "sky",
    title: "Cambios de conducta",
    text: "Miedo súbito, aislamiento, regresión o agresividad inusual en el niño o niña.",
  },
  {
    num: "2",
    tone: "brand",
    title: "Marcas físicas",
    text: "Moretones, quemaduras o heridas que no coinciden con la explicación que se da.",
  },
  {
    num: "3",
    tone: "rose",
    title: "Negligencia",
    text: "Hambre, falta de higiene, ropa inadecuada o ausencia de atención médica.",
  },
];

const steps = [
  { n: "01", t: "Documenta con cuidado", d: "Anota fechas, descripciones y, si es seguro, toma fotos." },
  { n: "02", t: "Contacta la línea 100", d: "Reporta de forma anónima y recibe indicaciones inmediatas." },
  { n: "03", t: "Acude a un punto", d: "Comisaría, fiscalía o centro de salud de tu localidad." },
  { n: "04", t: "Acompaña al menor", d: "Ofrece apoyo emocional y sigue las indicaciones del equipo." },
];

function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {/* Hero */}
      <section className="mt-8 grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-brand">
            <span className="size-1.5 rounded-full bg-brand" />
            Confidencial · Gratuito · 24/7
          </span>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Si ves una señal,
            <br />
            <span className="text-brand">actúa a tiempo.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            Guía clara para familias y adultos: cómo detectar el maltrato
            infantil, dónde y cómo denunciar, y qué pasos seguir para proteger a
            quien más lo necesita.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/denunciar"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-deep"
            >
              Cómo denunciar
            </Link>
            <Link
              to="/senales"
              className="glass-strong rounded-full px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-white/90"
            >
              Ver señales
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/60">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-sky" /> Línea 100
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-brand" /> Puntos de atención
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-rose" /> Apoyo psicológico
            </span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="glass-strong rounded-3xl p-6 shadow-xl shadow-brand/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Llamada de emergencia
            </p>
            <p className="mt-2 font-display text-5xl font-semibold text-ink">100</p>
            <p className="mt-1 text-sm text-ink/60">
              Línea de protección de la niñez · gratuita y anónima.
            </p>
            <div className="mt-5 h-px bg-ink/10" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Emergencias
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">105</p>
            <p className="mt-1 text-sm text-ink/60">
              Policía y respuesta inmediata ante riesgo.
            </p>
            <a
              href="tel:100"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Llamar a la Línea 100
            </a>
          </div>
        </div>
      </section>

      {/* Signals preview */}
      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Detectar
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
              Señales de alerta
            </h2>
          </div>
          <Link
            to="/senales"
            className="hidden text-sm font-semibold text-brand hover:underline sm:inline"
          >
            Ver todas las señales
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {signals.map((s) => (
            <div
              key={s.num}
              className="glass rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand/10"
            >
              <div
                className={`grid size-11 place-items-center rounded-xl font-display text-lg font-semibold ${
                  s.tone === "sky"
                    ? "bg-sky-soft text-sky"
                    : s.tone === "rose"
                    ? "bg-rose/15 text-rose"
                    : "bg-brand-soft/40 text-brand"
                }`}
              >
                {s.num}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps preview */}
      <section className="mt-16 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Actuar
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
            Pasos a seguir
          </h2>
          <p className="mt-4 leading-relaxed text-ink/70">
            Una denuncia oportuna puede salvar una vida. Sigue este orden para
            actuar con seguridad y eficacia.
          </p>
          <div className="glass mt-6 rounded-2xl p-5">
            <p className="text-sm font-semibold text-brand">¿No sabes a quién acudir?</p>
            <p className="mt-1 text-sm text-ink/65">
              Llama al 100 y te orientan sobre el punto de atención más cercano a
              tu distrito.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-5">
              <span className="font-display text-3xl font-semibold text-brand/40">
                {s.n}
              </span>
              <h3 className="mt-2 font-semibold text-ink">{s.t}</h3>
              <p className="mt-1 text-sm text-ink/65">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="glass-strong rounded-3xl px-8 py-10 text-center shadow-xl shadow-brand/10 sm:px-12">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Nadie debería enfrentar esto en soledad
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink/70">
            Si sospechas que un niño o niña está en riesgo, no estás solo. Aquí
            encuentras cómo reconocer, denunciar y obtener apoyo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/lineas"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-deep"
            >
              Ver líneas de ayuda
            </Link>
            <Link
              to="/recursos"
              className="glass rounded-full px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-white/80"
            >
              Recursos de apoyo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
