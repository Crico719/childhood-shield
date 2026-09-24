import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/senales")({
  head: () => ({
    meta: [
      { title: "Señales de maltrato infantil · Segura" },
      {
        name: "description",
        content:
          "Aprende a reconocer las señales del maltrato infantil: físico, emocional, sexual y negligencia. No necesitas estar seguro para actuar.",
      },
      {
        property: "og:title",
        content: "Señales de maltrato infantil · Segura",
      },
      {
        property: "og:description",
        content:
          "Aprende a reconocer las señales del maltrato infantil: físico, emocional, sexual y negligencia.",
      },
      { name: "twitter:title", content: "Señales de maltrato infantil · Segura" },
      {
        name: "twitter:description",
        content: "Reconoce las señales del maltrato físico, emocional, sexual y negligencia.",
      },
    ],
  }),
  component: SignalsPage,
});

const types = [
  {
    num: "01",
    tone: "sky",
    title: "Maltrato físico",
    text: "Cualquier acto que cause dolor o daño físico al niño o niña.",
    signs: [
      "Moretones, quemaduras o hematomas en formas inusuales o en zonas poco habituales.",
      "Miedo excesivo a ser tocado o a acercarse a ciertas personas.",
      "Ropa que no corresponde al clima, usada para cubrir marcas.",
      "Lesiones recurrentes cuya explicación no coincide con lo que se observa.",
    ],
  },
  {
    num: "02",
    tone: "brand",
    title: "Maltrato emocional",
    text: "Conductas que dañan la autoestima, el desarrollo emocional o el sentido de valía.",
    signs: [
      "Cambios bruscos de comportamiento: tristeza, retraimiento o agresividad.",
      "Baja autoestima o autoconcepto negativo constante.",
      "Aislamiento de amigos y actividades que antes disfrutaba.",
      "Regresión a conductas de etapas anteriores (chuparse el dedo, enuresis).",
    ],
  },
  {
    num: "03",
    tone: "rose",
    title: "Maltrato sexual",
    text: "Cualquier contacto o exposición sexual con un niño o niña, incluido el abuso en línea.",
    signs: [
      "Conducta o vocabulario sexual inapropiado para su edad.",
      "Pesadillas o miedo intenso a quedarse solo.",
      "Rechazo al contacto físico o a personas específicas sin causa aparente.",
      "Mensajes codificados o cambios al hablar sobre lo que le pasa.",
    ],
  },
  {
    num: "04",
    tone: "ink",
    title: "Negligencia",
    text: "Falta de cuidado, supervisión o atención a las necesidades básicas del niño o niña.",
    signs: [
      "Hambre o desnutrición constante, sin atención.",
      "Higiene deficiente o ropa sucia y deteriorada.",
      "Falta de atención médica o de asistencia escolar.",
      "Exposición a peligros sin supervisión adecuada para su edad.",
    ],
  },
];

function SignalsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <section className="mt-8 max-w-3xl">
        <span className="glass-strong inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> Detectar
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Reconocer es el primer paso
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/70">
          No necesitas estar seguro al 100% para actuar. Si algo te genera
          preocupación, merece atención. Estas son las señales más comunes por
          tipo de maltrato.
        </p>
      </section>

      <section className="mt-12 space-y-5">
        {types.map((t) => (
          <div
            key={t.num}
            className="glass rounded-3xl p-7 shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="md:w-1/3">
                <div
                  className={`grid size-12 place-items-center rounded-2xl font-display text-xl font-semibold ${
                    t.tone === "sky"
                      ? "bg-sky-soft text-sky"
                      : t.tone === "rose"
                      ? "bg-rose/15 text-rose"
                      : t.tone === "ink"
                      ? "bg-ink/10 text-ink"
                      : "bg-brand-soft/40 text-brand"
                  }`}
                >
                  {t.num}
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {t.text}
                </p>
              </div>
              <div className="md:w-2/3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Señales a observar
                </p>
                <ul className="mt-3 space-y-3">
                  {t.signs.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-ink/75">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <div className="glass-strong rounded-3xl px-8 py-8 text-center shadow-xl shadow-brand/10">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            ¿Reconoces alguna de estas señales?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            No estás solo. Denunciar es proteger y puedes hacerlo de forma
            gratuita y confidencial.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/denunciar"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-deep"
            >
              Cómo denunciar
            </Link>
            <a
              href="tel:100"
              className="glass rounded-full px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-white/80"
            >
              Llamar a la Línea 100
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
