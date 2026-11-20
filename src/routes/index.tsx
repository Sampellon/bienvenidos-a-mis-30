import { createFileRoute } from "@tanstack/react-router";
import birthday30 from "@/assets/birthday-30.jpg.asset.json";

const MAPS = "https://maps.app.goo.gl/6cvXM7RtVVzLvXsj8";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R.I.P. 20s · Los 30 de Sam" },
      { name: "description", content: "Despedimos los 20s y brindamos por los 30s. Sábado 28 de noviembre, 6 PM a 1 AM. Dress code: negro." },
      { property: "og:title", content: "R.I.P. 20s · Los 30 de Sam" },
      { property: "og:description", content: "Sábado 28 de noviembre · 6 PM – 1 AM · Dress code: negro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <article className="invite-card relative w-full max-w-md overflow-hidden px-8 py-12 text-center">
        <span aria-hidden className="big-30">30</span>

        <div className="relative">
          <p className="font-caps text-xs tracking-[0.4em] text-muted-foreground">R.I.P. a mis</p>
          <h1 className="font-script text-7xl leading-none text-foreground -mt-1">Veintes</h1>

          <img src={birthday30.url} alt="Birthday party con un 30 de fondo" className="mx-auto my-4 w-56 fade-in" />

          <p className="font-caps text-xs tracking-[0.35em] text-muted-foreground">Bienvenidos</p>
          <h2 className="font-script text-6xl text-foreground leading-tight">mis 30's</h2>
          <p className="font-caps text-sm tracking-[0.4em] text-foreground mt-2">— Sam Pellón —</p>

          <div className="divider my-6" />

          <p className="font-caps text-sm tracking-[0.3em] text-foreground">Sábado</p>
          <p className="font-serif text-4xl text-foreground my-1">28 · 11 · 2026</p>
          <p className="font-caps text-sm tracking-[0.3em] text-foreground">6 PM — 1 AM</p>

          <a href={MAPS} target="_blank" rel="noreferrer" className="invite-btn mt-6 inline-block">
            Ver ubicación
          </a>

          <div className="divider my-6" />

          <p className="font-caps text-xs tracking-[0.35em] text-muted-foreground">Dress code</p>
          <p className="font-script text-4xl text-foreground">Total black</p>
          <p className="font-serif italic text-sm text-muted-foreground">de luto… pero con estilo</p>

          <p className="font-serif italic text-sm text-muted-foreground mt-8 leading-relaxed">
            Tu presencia es lo más importante;<br />
            pero si quieres sumarle algo al brindis,<br />
            los 30 también se celebran con detalles ✦
          </p>
        </div>
      </article>
    </main>
  );
}
