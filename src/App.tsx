import './App.css'
import background from './assets/livefest.webp'
function App() {


  return (
    <>
     <header className='main-header'>
      <img className='background' src={background} alt="" />
      <div className='top-header'>
        <h2><em>ticketmaster</em></h2>
        <button>Sign in</button>
      </div>
      <section>
        <h1>Rock Your Sales on Ticketmaster!</h1>
        <p>Connect with buyers and sell faster.</p>
        <p>Ready to sell? Enter your email to create and start selling</p>
        <input type="text" />
        <button> Get Started</button>
      </section>
     </header>
    </>
  )
}

export default App
