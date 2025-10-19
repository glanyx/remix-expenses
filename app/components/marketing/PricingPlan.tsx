import type { IconType } from "react-icons"

interface IPricingPlanProps {
  title: string
  price: string
  perks: Array<string>
  icon: IconType
}

const PricingPlan = ({
  title,
  price,
  perks,
  icon,
}: IPricingPlanProps) => {
  const Icon = icon;
  return (
    <article>
      <header className="p-4">
        <div className=" w-16 h-16 text-2xl flex justify-center items-center text-white border-2 border-solid border-white rounded-2xl my-4 mx-auto">
          <Icon />
        </div>
        <h2 className="m-0 text-gray-10">{title}</h2>
        <p className="m-0 text-gray-10 text-sm mt-2">{price}</p>
      </header>
      <div className="p-4">
        <ol>
          {perks.map((perk) => (
            <li className="my-4 mx-0" key={perk}>{perk}</li>
          ))}
        </ol>
        <div className='mt-12 mb-6 mx-0'>
          <a className="bg-secondary-500 text-gray-10 py-3 px-8 rounded-[30px] hover:bg-secondary-600" href="/not-implemented">Learn More</a>
        </div>
      </div>
    </article>
  );
}

export default PricingPlan;
