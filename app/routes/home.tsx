  import { FaArrowRight, FaDollarSign, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router';
import MainHeader from '~/components/navigation/MainHeader';

const Home = () => {
  return (
    <>
      <MainHeader />
      <main>
        <section className="my-24 mx-auto">
          <header className='flex gap-8 items-center text-primary-50'>
            <FaDollarSign className='text-lg' />
            <h2 className='m-0'>A Central Space</h2>
          </header>
          <div className="flex gap-8 my-12 mx-0">
            <div className="w-[50%] rounded-md shadow-[0_2px_8px_rgba(0_0_0_/_0.2)] p-2 bg-primary-100 flex justify-center items-center -rotate-z-5">
              <img className='w-full rounded-sm' src="images/expenses-management.jpg" alt="A list of expenses." />
            </div>
            <div className="w-[50%]">
              <p>Manage your expenses in one central place.</p>
              <p>
                <Link className="cta" to="/expenses">
                  <span>Get Started</span>
                  <FaArrowRight />
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="my-24 mx-auto text-right">
          <header className='flex gap-8 items-center text-primary-50 justify-end'>
            <FaChartBar className='text-lg' />
            <h2 className='m-0'>Detailed Analytics</h2>
          </header>
          <div className="flex gap-8 my-12 mx-0">
            <p className='w-[50%]'>
              Benefit from best-in-class analytics to understand your spending
              patterns.
            </p>
            <div className="w-[50%] rounded-md shadow-[0_2px_8px_rgba(0_0_0_/_0.2)] p-2 bg-primary-100 flex justify-center items-center rotate-z-5">
              <img className='w-full rounded-sm' src="images/expenses-chart.jpg" alt="A demo bar chart." />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

export const meta = () => {}