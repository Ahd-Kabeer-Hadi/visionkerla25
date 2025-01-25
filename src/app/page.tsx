import { Hero } from '@/components/sections/hero';
import { Solution } from '@/components/sections/solution';
// import { SocialProof } from '@/components/sections/social-proof';
import { Features } from '@/components/sections/features';
import { CallToAction } from '@/components/sections/call-to-action';
import { FAQ } from '@/components/sections/faq';
import { Header } from '@/components/header';
import { Problem } from '@/components/sections/problem';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      {/* <SocialProof /> */}
      <Features />
      <CallToAction />
      <FAQ />
    </main>
  );
}