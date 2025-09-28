import { getAllPlans } from '@/api/requests'

import { FAQSection } from '@/components/home/faq-section'
import { HeroSection } from '@/components/home/hero-section'
import { PricingSection } from '@/components/home/pricing-section'
import { TrustedBySection } from '@/components/home/trusted-by-section'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export const revalidate = 60

export default async function Home() {
	const plans = await getAllPlans()

	return (
		<div className='min-h-screen'>
			<div className='w-full bg-gradient-to-b from-white via-[#FFF4EC] to-[#FFEBDD]'>
				<SiteHeader />
				<HeroSection />
				<PricingSection plans={plans} />
			</div>
			<TrustedBySection />
			<FAQSection />
			<SiteFooter />
		</div>
	)
}
