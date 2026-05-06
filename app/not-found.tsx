import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ivory min-h-[60vh] flex items-center">
      <div className="container-x py-20 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl lg:text-7xl text-charcoal tracking-tight leading-[0.95]">
          We couldn't find that page.
        </h1>
        <p className="mt-6 text-stone-warm font-light max-w-md mx-auto">
          But we have everything you came for. Try the menu, the services, or just give us a call.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/menu" className="btn-secondary">View menu</Link>
        </div>
      </div>
    </section>
  );
}
