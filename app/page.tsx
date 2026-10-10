import { TopBar } from '@/components/landing/top-bar'
import { HeroBanner } from '@/components/landing/hero-banner'
import { PayoutsTicker } from '@/components/landing/payouts-ticker'
import { SeoArticle } from '@/components/landing/seo-article'
import { SiteFooter } from '@/components/landing/site-footer'

export default function Page() {
  return (
    <>
      <TopBar />
      <main>
        <HeroBanner />
        <PayoutsTicker />
        <SeoArticle />
      </main>
      <SiteFooter />
    </>
  )
}
