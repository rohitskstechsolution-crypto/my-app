import homeimg from "../assets/images/homeimg.webp";

export default function HeroAbout() {
  return (
    <section id="hero" className="bg-white py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Build with confidence
          </span>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Digital experiences designed to convert.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            I create polished websites and landing pages with a focus on clean UI, fast performance, and thoughtful interaction.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Get in touch
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-900 transition hover:border-slate-500 hover:text-slate-700"
            >
              Learn more
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-950/95 px-5 py-6 text-white shadow-lg shadow-slate-200/10">
              <p className="text-2xl font-semibold">12+</p>
              <p className="mt-2 text-sm text-slate-400">Years experience</p>
            </div>
            <div className="rounded-3xl bg-slate-950/95 px-5 py-6 text-white shadow-lg shadow-slate-200/10">
              <p className="text-2xl font-semibold">120+</p>
              <p className="mt-2 text-sm text-slate-400">Projects launched</p>
            </div>
            <div className="rounded-3xl bg-slate-950/95 px-5 py-6 text-white shadow-lg shadow-slate-200/10">
              <p className="text-2xl font-semibold">24/7</p>
              <p className="mt-2 text-sm text-slate-400">Support ready</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-100 shadow-2xl shadow-slate-200/20">
          <img
            src={homeimg}
            alt="Hero illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
