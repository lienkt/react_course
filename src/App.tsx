import ConditionalRendering from "./pages/fundamental/ConditionalRendering"
import EventFunction from "./pages/fundamental/EventFunction"
import JSX from "./pages/fundamental/JSX"
import ListKey from "./pages/fundamental/ListKey"
import Props from "./pages/fundamental/Props"
import State from "./pages/fundamental/State"
import CSS from "./pages/fundamental/CSS"
import GenerateBox from "./sampleApp/lien/GenerateBox"
import LiftingStateUp from "./pages/fundamental/LiftingStateUp"
import Form from "./pages/fundamental/Form"
import StateHook from "./pages/fundamental/StateHook"
import EffectHook from "./pages/fundamental/EffectHook"

function App() {

  return (
    <>
      <JSX />

      <br />

      <Props />
      <br />

      <State />
      <br />

      <EventFunction />

      <br />
      <ConditionalRendering />

      <br />
      <ListKey />

      <br />
      <CSS />

      <br />
      <GenerateBox />

      <br />
      <LiftingStateUp />

      <br />
      <Form />

      <br />
      <StateHook />

      <br />
      <EffectHook />
  

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
