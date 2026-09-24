import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/denunciar")({
  head: () => ({
    meta: [
      { title: "Cómo denunciar el maltrato infantil · Segura" },
      {
        name: "description",
        content:
          "Pasos claros para denunciar el maltrato infantil en Perú: dónde llamar, a dónde acudir y cómo proteger a la niñez. Gratuito, confidencial y anónimo.",
      },
      {
        property: "og:title",
        content: "Cómo denunciar el maltrato infantil · Segura",
      },
      {
        property: "og:description",
        content:
          "Pasos claros para denunciar el maltrato infantil en Perú. Gratuito, confidencial y anónimo.",
      },
      { name: "twitter:title", content: "Cómo denunciar el maltrato infantil · Segura" },
      {
        name: "twitter:description",
        content: "Pasos claros para denunciar el maltrato infantil en Perú.",
      },
    ],
  }),
  component: DenouncePage,
});

const steps = [
  {
    n: "01",
    t: "Prioriza la seguridad",
    d: "No confrontes a la persona agresora. La seguridad del niño o niña viene primero. Si hay riesgo inmediato, llama al 105.",
  },
  {
    n: "02",
    t: "Documenta con cuidado",
    d: "Anota fechas, descripciones y lo que observaste. Si es seguro, toma fotos o guarda mensajes. No necesitas pruebas perfectas.",
  },
  {
    n: "03",
    t: "Llama a la Línea 100",
    d: "Es gratuita, confidencial y funciona las 24 horas. Explica lo que sabes y el equipo te guía paso a paso. Puedes ser anónimo.",
  },
  {
    n: "04",
    t: "Acude a una comisaría o fiscalía",
    d: "Puedes presentar la denuncia en persona. También el Centro de Emergencia Mujer (CEM) atiende casos de violencia.",
  },
  {
    n: "05",
    t: "Guarda tu número de denuncia",
    d: "Anota el código que te entreguen. Te sirve para el seguimiento y para pedir medidas de protección si las necesitas.",
  },
  {
    n: "06",
    t: "Pide acompañamiento",
    d: "Si sientes que estás en riesgo, solicita protección. Busca apoyo psicológico para el niño, la niña y la familia.",
  },
];

const channels = [
  { label: "Línea 100", desc: "Protección a la niñez · 24 h, gratuita y confidencial", num: "100" },
  { label: "Emergencias", desc: "Policía y respuesta inmediata ante riesgo", num: "105" },
  { label: "Ambulancia", desc: "Atención médica de urgencia", num: "106" },
];

function DenouncePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="mt-8 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-brand">
            <span className="size-1.5 rounded-full bg-brand" /> Actuar
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Denunciar es proteger
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            La denuncia es gratuita, confidencial y puede ser anónima. No
            necesitas pruebas perfectas: tu preocupación ya es motivo
            suficiente para actuar.
          </p>

          <div className="glass-strong mt-8 rounded-3xl p-6 shadow-xl shadow-brand/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Llamada directa
            </p>
            <p className="mt-2 font-display text-5xl font-semibold text-ink">100</p>
            <p className="mt-1 text-sm text-ink/60">
              Línea de protección a la niñez · disponible las 24 horas.
            </p>
            <a
              href="tel:100"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Llamar a la Línea 100
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Pasos a seguir
          </p>
          <ol className="mt-4 space-y-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="glass flex gap-4 rounded-2xl p-5 shadow-sm"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display font-semibold text-white">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {s.t}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Channels */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
          Canales de denuncia en Perú
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={`tel:${c.num}`}
              className="glass rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand/10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {c.label}
              </p>
              <p className="mt-2 font-display text-4xl font-semibold text-ink">
                {c.num}
              </p>
              <p className="mt-2 text-sm text-ink/65">{c.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Where to go */}
      <section className="mt-14 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            ¿Dónde puedo denunciar en persona?
          </h2>
          <div className="glass mt-6 rounded-2xl p-6">
            <ul className="space-y-4 text-sm text-ink/75">
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="font-semibold text-ink">Comisaría más cercana</p>
                  <p className="mt-0.5">
                    Reciben denuncias las 24 horas. Puedes acudir sin cita.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="font-semibold text-ink">
                    Fiscalía de la Niñez y la Familia
                  </p>
                  <p className="mt-0.5">
                    Investiga delitos contra niños, niñas y adolescentes.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="font-semibold text-ink">
                    Centro de Emergencia Mujer (CEM)
                  </p>
                  <p className="mt-0.5">
                    Atiende casos de violencia familiar y sexual. Llama al 100
                    para ubicar el más cercano.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="font-semibold text-ink">DEMUNA</p>
                  <p className="mt-0.5">
                    Defensoría Municipal del Niño y Adolescente, en tu
                    municipalidad.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="glass-strong rounded-3xl p-6 shadow-xl shadow-brand/10">
            <h3 className="font-display text-xl font-semibold text-ink">
              Puedes denunciar de forma anónima
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              No es obligatorio dar tu nombre. Lo que importa es que la
              denuncia llegue para proteger al niño o niña. El equipo de la
              Línea 100 respeta tu confidencialidad en todo momento.
            </p>
            <Link
              to="/lineas"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Ver todas las líneas de ayuda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
