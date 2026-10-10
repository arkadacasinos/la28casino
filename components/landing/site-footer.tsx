import { REF_LINK } from '@/lib/ref-link'

const TAGS = [
  { label: '#la casino', href: '#sec-la-casino' },
  { label: '#la casino зеркало', href: '#sec-la-casino-zerkalo' },
  { label: '#la casino играть', href: '#sec-la-casino-igrat' },
  { label: '#la casino официальный', href: '#sec-la-casino-oficialnyj' },
  { label: '#la casino официальный сайт', href: '#sec-la-casino-oficialnyj-sajt' },
  { label: '#ла казино', href: '#sec-la-kazino' },
  { label: '#ля казино', href: '#sec-la-kazino' },
  { label: '#ля казино зеркало', href: '#sec-la-kazino-zerkalo' },
  { label: '#ля казино зеркало рабочее', href: '#sec-la-kazino-zerkalo-rabochee' },
  { label: '#ля казино играть', href: '#sec-la-kazino-igrat' },
  { label: '#ля казино онлайн', href: '#sec-la-kazino-onlajn' },
  { label: '#ля казино официальный', href: '#sec-la-kazino-oficialnyj' },
  { label: '#ля казино официальный сайт', href: '#sec-la-kazino-oficialnyj-sajt' },
]

const SECTIONS = [
  { label: 'La Casino зеркало', href: '#sec-la-casino-zerkalo' },
  { label: 'La Casino играть', href: '#sec-la-casino-igrat' },
  { label: 'La Casino официальный сайт', href: '#sec-la-casino-oficialnyj-sajt' },
  { label: 'Ля казино зеркало рабочее', href: '#sec-la-kazino-zerkalo-rabochee' },
  { label: 'Ля казино онлайн', href: '#sec-la-kazino-onlajn' },
  { label: 'Бонусы и выплаты', href: '#sec-bonusy' },
  { label: 'Частые вопросы', href: '#sec-faq' },
]

export function SiteFooter() {
  return (
    <footer className="x4v7-foot">
      <div className="x4v7-foot-in">
        <div>
          <h2 className="x4v7-foot-h">La Casino</h2>
          <p className="x4v7-foot-text">
            Ля казино официальный сайт с неоновым характером: слоты, live-столы, бонус до 225% + 1000 ФС на четыре
            депозита и выплаты в RUB. La Casino зеркало рабочее открывает вход без блокировок с телефона и компьютера,
            а один аккаунт работает на всех адресах бренда.
          </p>
        </div>
        <nav aria-label="Разделы справки">
          <h2 className="x4v7-foot-h">Разделы</h2>
          <div className="x4v7-foot-links">
            {SECTIONS.map((s) => (
              <a key={s.href + s.label} href={s.href}>
                {s.label}
              </a>
            ))}
            <a href={REF_LINK}>Регистрация в La Casino</a>
          </div>
        </nav>
        <div>
          <h2 className="x4v7-foot-h">Поиск по сайту</h2>
          <div className="x4v7-tags">
            {TAGS.map((t) => (
              <a className="x4v7-tag" key={t.label} href={t.href}>
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="x4v7-foot-bottom">
        <div className="x4v7-foot-bottom-in">
          <span>© 2026 La Casino · Ля казино официальный сайт</span>
          <span>18+ · Азартные игры могут вызывать зависимость. Играйте ответственно.</span>
        </div>
      </div>
    </footer>
  )
}
