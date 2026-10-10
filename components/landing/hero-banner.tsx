import { REF_LINK } from '@/lib/ref-link'

export function HeroBanner() {
  return (
    <section className="x4v7-hero" aria-label="Главное предложение La Casino">
      <div className="x4v7-hero-in">
        <div className="x4v7-hero-copy">
          <h1 className="x4v7-hero-h1">Мощный старт.</h1>
          <p className="x4v7-hero-sub">до 225% + 1000 ФС на четыре депозита</p>
          <a className="x4v7-hero-cta" href={REF_LINK}>
            Зарегаться!
          </a>
        </div>
      </div>
    </section>
  )
}
