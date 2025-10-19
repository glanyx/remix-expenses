import { FaTrophy, FaHandshake } from 'react-icons/fa';

import PricingPlan from '~/components/marketing/PricingPlan';
import MainHeader from '~/components/navigation/MainHeader';

const PRICING_PLANS = [
  {
    id: 'p1',
    title: 'Basic',
    price: 'Free forever',
    perks: ['1 User', 'Up to 100 expenses/year', 'Basic analytics'],
    icon: FaHandshake
  },
  {
    id: 'p2',
    title: 'Pro',
    price: '$9.99/month',
    perks: ['Unlimited Users', 'Unlimited expenses/year', 'Detailed analytics'],
    icon: FaTrophy
  },
];

const PricingPage = () => {
  return (
    <>
      <MainHeader />
      <main id="pricing" className='text-center'>
        <h2>Great Product, Simple Pricing</h2>
        <ol id="pricing-plans" className='w-[36rem] my-12 mx-auto flex justify-center gap-8'>
          {PRICING_PLANS.map((plan) => (
            <li key={plan.id} className="bg-white rounded-md overflow-hidden shadow-[0_2px_4px_rgba(0_0_0_/_0.2)] text-gray-500 w-[50%] first:[&_header]:bg-primary-200 last:[&_header]:bg-primary-400">
              <PricingPlan
                title={plan.title}
                price={plan.price}
                perks={plan.perks}
                icon={plan.icon}
              />
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

export default PricingPage

export const meta = () => {}