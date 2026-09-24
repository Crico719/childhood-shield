import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/lineas")({
  head: () => ({
    meta: [
      { title: "Líneas de ayuda contra el maltrato infantil · Segura" },
      {
        name: "description",
        content:
          "Teléfonos gratuitos de ayuda en Perú: Línea 100, emergencias 105, ambulancia 106 y centros de atención para víctimas de maltrato infantil.",
      },
      {
        property: "og:title",
        content: "Líneas de ayuda contra el maltrato infantil · Segura",
      },
      {
        property: "og:description",
        content:
          "Teléfonos gratuitos de ayuda en Perú para denunciar y proteger a la niñez.",
      },
      { name: "twitter:title", content: "Líneas de ayuda · Segura" },
      {
        name: "twitter:description",
        content: "Teléfonos gratuitos de ayuda en Perú para proteger a la niñez.",
      },
    ],
  }),
  component: LinesPage,
});

const lines = [
  {
    label: "Línea 100",
    desc: "Denuncia de maltrato y violencia contra niños, niñas y adolescentes. Atención gratuita, confidencial y 24 horas.",
    num: "100",
    tag: "24/7 · Confidencial",
  },
  {
    label: "Emergencias",
    desc: "Policía y respuesta inmediata ante una situación de riesgo en curso.",
    num: "105",
    tag: "Urgente",
  },
  {
    label: "Ambulancia",
    desc: "Atención médica de urgencia cuando hay lesiones o necesidad de salud inmediata.",
    num: "106",
    tag: "Salud",
  },
];

const centers = [
  {
    title: "Centro de Emergencia Mujer (CEM)",
    desc: "Atención gratuita y especializada a víctimas de violencia familiar y sexual. Incluye apoyo legal, psicológico y social.",
  },
  {
    title: "Fiscalía de la Niñez y la Familia",
    desc: "Conduce la investigación de delitos contra niños, niñas y adolescentes. Acude para formalizar la denuncia.",
  },
  {
    title: "DEMUNA",
    desc: "Defensoría Municipal del Niño y Adolescente, presente en la mayoría de municipalidades. Orienta y deriva casos.",
  },
  {
    title: "Comisaría",
    desc: "Recibe denuncias a cualquier hora. Ante riesgo inminente, es el primer lugar al que acudir.",
  },
];

function LinesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="mt-8 max-w-3xl">
        <span className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> Líneas
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Números que responden
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/70">
          Estas líneas son gratuitas en todo el Perú. Si temes por la seguridad
          de un niño o niña, llama ahora mismo: no necesitas estar seguro para
          pedir ayuda.
        </p>
      </section>

      {/* Emergency numbers */}
      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {lines.map((l) => (
          <a
            key={l.label}
            href={`tel:${l.num}`}
            className="glass rounded-2xl p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-brand/10"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                {l.label}
              </p>
              <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
                {l.tag}
              </span>
            </div>
            <p className="mt-3 font-display text-5xl font-semibold text-ink">
              {l.num}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{l.desc}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Llamar ahora
              <span aria-hidden="true">→</span>
            </span>
          </a>
        ))}
      </section>

      {/* Centers */}
      <section className="mt-14">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Atención presencial
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
            Centros de atención en Perú
          </h2>
          <p className="mt-4 text-ink/70">
            Además de las líneas telefónicas, puedes acudir a estos espacios.
            La Línea 100 puede orientarte sobre cuál es el más cercano a tu
            distrito.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {centers.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-ink">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14">
        <div className="glass-strong rounded-3xl px-8 py-8 text-center shadow-xl shadow-brand/10">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            ¿No sabes a quién llamar?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            La Línea 100 te orienta sobre el punto de atención más cercano a tu
            distrito. Es gratuita y confidencial.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:100"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-deep"
            >
              Llamar a la Línea 100
            </a>
            <Link
              to="/denunciar"
              className="glass rounded-full px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-white/80"
            >
              Ver pasos para denunciar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
