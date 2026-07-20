import Header from "./Header.jsx"
import Body from "./Body.jsx";
import { Outlet, useRoutes } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function App() {
  
  return (
    <>
      <section className="m-0 p-0 font-gilroy box-border">
        <Header/>
        <Outlet/>
      </section>
    </>
  )
    
}

export default App;
