import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/classcomponent";
import Greeting from "./components/props";
import UserGreeting from "./components/propsInClassComponent";
import ConditionalGreeting from "./components/ConditionalRendering";


function App() {
  return(
    <div>
      <h1>Main app Component</h1>
      <Welcome/>
      <Greeting/>
      <UserGreeting name="Salman" age="19" />
      <ConditionalGreeting isLoggedIn={true} name="Aadil" />
    </div>
  )
}



export default App;
