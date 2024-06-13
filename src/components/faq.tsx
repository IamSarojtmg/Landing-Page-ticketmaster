import { useState } from "react"

export const Faq = ()=>{

    const [hide, setHide]=useState<Boolean>(true)

    //use clicks on the h3 > setHide to false
    //if hide = false than show the p
    //how to make sure that it only does that with one of the faq and not open to whole faqs. Maybe for that try a new classname for each questions

    return(
        <>
        <h1>FAQ</h1>
        <section>
            <div>
            <h3>How do I start selling on Ticketmaster</h3>
            <p>To start selling, create a seller account by entering your email and following the setup instructions.</p>
            </div>
            <div>
            <h3>What types of tickets can I sell?</h3>
            <p>You can sell tickets for concerts, sports events, theater shows, and more..</p>
            </div>

        </section>
        </>
    )
}