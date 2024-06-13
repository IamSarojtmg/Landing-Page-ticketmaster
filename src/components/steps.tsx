import stepOne from '../assets/step-1.png'
import stepTwo from '../assets/step-2.png'
import stepThree from '../assets/step-3.png'

export const Steps = () => {
  return (
    <>
      <main className="steps-cont">
      <header>
        <h1>THREE EASY STEPS TO SELL YOUR TICKETS</h1>
      </header>
      <section>
            <img src={stepOne} alt="Image of step one" />
            <div className='steps'>
                <h2>Select Tickets to Sell</h2>
                <p>If you purchased tickets from Ticketmaster, you can list your tickets from your account.</p>
            </div>
      </section>
            <div className='divider'></div>
      <section>
            <img src={stepTwo} alt="Image of step one" />
            <div className='steps'>
                <h2>Set Your Price</h2>
                <p>You’re in control. Set your price and see exactly how much you'll be paid when your tickets sell.</p>
            </div>
      </section>
            <div className='divider'></div>
      <section>
            <img src={stepThree} alt="Image of step one" />
            <div className='steps'>
                <h2>Get Paid</h2>
                <p>When your tickets sell, you’ll get paid via your selected method of payment typically within 17 days, provided we have all the necessary information.</p>
            </div>
      </section>
    </main>
    </>
  );

};
