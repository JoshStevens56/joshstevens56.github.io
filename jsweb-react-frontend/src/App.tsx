import "./style.css";
import { PageLayout } from './ui-components/PageLayout';

/** ------------------------------------
 *  App
 *  ------------------------------------
 *  Second-most Root level of application. Start of actual rendering behaviour.
 * 
 *  <div className="App"> - Highest level div. Renders background colour.
 * ------------------------------------ */


function App() {
  return (
    <div className="app">
      <PageLayout/>
    </div>
  );
}

export default App;
