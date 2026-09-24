import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Segura" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navItems = [
  { to: "/senales" as const, label: "Señales" },
  { to: "/denunciar" as const, label: "Denunciar" },
  { to: "/lineas" as const, label: "Líneas" },
  { to: "/recursos" as const, label: "Recursos" },
];

function SiteHeader() {
  return (
    <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4 sm:px-6">
      <div className="glass mt-4 flex items-center justify-between rounded-2xl px-5 py-3 shadow-sm">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-brand font-display text-lg font-semibold text-white">
            S
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold text-ink">
              Segura
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-ink/50">
              Centro de ayuda · Perú
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-brand" }}
              className="transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:100"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-deep"
        >
          <span className="size-1.5 rounded-full bg-white/90" />
          Denunciar ahora
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
      <div className="glass mb-6 flex flex-col items-center justify-between gap-3 rounded-2xl px-6 py-5 text-sm text-ink/60 sm:flex-row">
        <p>Segura · Centro de ayuda y denuncia sobre maltrato infantil</p>
        <p>Información orientativa. Ante una emergencia, llama al 100.</p>
      </div>
    </footer>
  );
}

function FloatingEmergency() {
  return (
    <a
      href="tel:100"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-brand px-5 py-3.5 font-semibold text-white shadow-lg ring-1 ring-black/10 transition-colors hover:bg-brand-deep"
    >
      <span className="relative grid size-5 place-items-center">
        <span className="absolute inset-0 rounded-full bg-white/60 motion-pulse" />
        <span className="relative size-2.5 rounded-full bg-white" />
      </span>
      Emergencia · 100
    </a>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="aurora-bg relative min-h-screen overflow-hidden">
        {/* ambient light blobs */}
        <div className="pointer-events-none absolute -left-24 -top-32 size-[520px] rounded-full bg-sky/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-40 size-[480px] rounded-full bg-brand/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 size-[420px] rounded-full bg-rose/20 blur-[120px]" />

        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
          <FloatingEmergency />
        </div>
      </div>
    </QueryClientProvider>
  );
}
