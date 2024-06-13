 export const Header = ()=>{
    return (

          <header className="main-header">
            <div className="top-header">
              <h2>
                <em>ticketmaster</em>
              </h2>
              <button>Sign in</button>
            </div>
            <section>
              <div className="selling-text">
                <h1>Rock Your Sales on Ticketmaster!</h1>
                <p>Connect with buyers and sell faster.</p>
              </div>
              <div className="cta">
                <p>
                  Ready to start selling? Enter your email to create your account
                  and get started!
                </p>
                <div className="sub-cta">
                <input type="text" />
                <button> Get Started</button>
                </div>
              </div>
            </section>
          </header>
      );
}

export default Header