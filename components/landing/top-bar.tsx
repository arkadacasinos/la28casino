import { REF_LINK } from '@/lib/ref-link'

function GiftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8" />
      <path d="M12 8c-2.5 0-4.5-1.3-4.5-3A2.5 2.5 0 0 1 10 2.5c1.7 0 2 3 2 5.5Zm0 0c2.5 0 4.5-1.3 4.5-3A2.5 2.5 0 0 0 14 2.5c-1.7 0-2 3-2 5.5Z" />
    </svg>
  )
}

function SlotsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M9 5v14M15 5v14" />
      <path d="M6 10.5h.01M12 10.5h.01M18 10.5h.01" />
    </svg>
  )
}

function LiveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

export function TopBar() {
  return (
    <header className="x4v7-topbar">
      <div className="x4v7-topbar-in">
        <a className="x4v7-burger" href="#x4v7-menu" aria-label="Открыть меню">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>
        <a className="x4v7-logo" href={REF_LINK} aria-label="La Casino — на главную">
          <span className="x4v7-logo-la">ЛЯ</span>
          <span className="x4v7-logo-casino">Casino</span>
        </a>
        <nav id="x4v7-menu" className="x4v7-rail" aria-label="Основное меню">
          <a className="x4v7-drawer-close" href="#!" aria-label="Закрыть меню">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </a>
          <a className="x4v7-rail-link" href={REF_LINK}>
            <GiftIcon />
            Бонусы
          </a>
          <a className="x4v7-rail-link" href={REF_LINK}>
            <SlotsIcon />
            Казино
          </a>
          <a className="x4v7-rail-link" href={REF_LINK}>
            <LiveIcon />
            Live Казино
          </a>
        </nav>
        <div className="x4v7-top-actions">
          <a className="x4v7-searchbtn" href={REF_LINK} aria-label="Поиск по сайту">
            <SearchIcon />
          </a>
          <a className="x4v7-btn-ghost" href={REF_LINK}>
            Вход
          </a>
          <a className="x4v7-btn-pink" href={REF_LINK}>
            Регистрация
          </a>
        </div>
      </div>
    </header>
  )
}
