const PAYOUTS = [
  { mult: '×2,9', id: 'ID 99·····54', sum: '7 000 RUB', dep: '2 425 RUB депозит', hot: false },
  { mult: '×1,7', id: 'ID 43·····74', sum: '5 263 RUB', dep: '3 100 RUB депозит', hot: false },
  { mult: '×4,5', id: 'ID 18·····40', sum: '4 000 RUB', dep: '896 RUB депозит', hot: false },
  { mult: '×4,6', id: 'ID 10·····14', sum: '6 000 RUB', dep: '1 312 RUB депозит', hot: false },
  { mult: '×6,4', id: 'ID 25·····86', sum: '5 100 RUB', dep: '800 RUB депозит', hot: true },
  { mult: '×3,7', id: 'ID 73·····50', sum: '3 500 RUB', dep: '950 RUB депозит', hot: false },
  { mult: '×5,2', id: 'ID 61·····28', sum: '8 400 RUB', dep: '1 615 RUB депозит', hot: false },
  { mult: '×2,3', id: 'ID 37·····91', sum: '2 900 RUB', dep: '1 260 RUB депозит', hot: false },
]

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c.6 4.8 2.4 7.4 4.6 8.6 1.6.9 3.4 1.2 5.4 1.4-4.8.6-7.4 2.4-8.6 4.6-.9 1.6-1.2 3.4-1.4 5.4-.6-4.8-2.4-7.4-4.6-8.6C5.8 12.5 4 12.2 2 12c4.8-.6 7.4-2.4 8.6-4.6C11.5 5.8 11.8 4 12 2Z" />
    </svg>
  )
}

function PayoutRow() {
  return (
    <div className="x4v7-pay-row" aria-hidden="true">
      {PAYOUTS.map((p) => (
        <div className="x4v7-pay-chip" key={p.id}>
          <div className={p.hot ? 'x4v7-mult x4v7-mult-hot' : 'x4v7-mult'}>
            <span>{p.mult}</span>
          </div>
          <div className="x4v7-pay-meta">
            <span className="x4v7-pay-id">{p.id}</span>
            <span className="x4v7-pay-sum">
              {p.sum}
              <span style={{ color: 'var(--x4v7-green)' }}>
                <ArrowIcon />
              </span>
            </span>
            <span className="x4v7-pay-dep">{p.dep}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function PayoutsTicker() {
  return (
    <section className="x4v7-pay" aria-label="ТОП выплаты игроков">
      <div className="x4v7-pay-in">
        <div className="x4v7-pay-head">
          <span className="x4v7-pay-label">
            ТОП Выплаты
            <span style={{ color: 'var(--x4v7-pink)' }}>
              <StarIcon />
            </span>
          </span>
          <span className="x4v7-pay-total">28 305 792 RUB</span>
        </div>
        <div className="x4v7-pay-scroll">
          <div className="x4v7-pay-track">
            <PayoutRow />
            <PayoutRow />
          </div>
        </div>
      </div>
    </section>
  )
}
