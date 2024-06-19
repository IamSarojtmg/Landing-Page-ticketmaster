import "./App.css";
import { Faq } from "./components/faqs";
import { Header } from "./components/header";
import { Links } from "./components/links";
import { Steps } from "./components/steps";
function App() {
  return (
    <>
      <Header />
      <Steps />
      <Faq />
      <Links />
    </>
  );
}

export default App;

//empty object - it will have a key property with a number value and will retirn a boolean?

//turining in shallow copy so it wont mutate
// 1: false
