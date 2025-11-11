import ConditionalRendering from "./pages/fundamental/ConditionalRendering"
import EventFunction from "./pages/fundamental/EventFunction"
import JSX from "./pages/fundamental/JSX"
import ListKey from "./pages/fundamental/ListKey"
import Props from "./pages/fundamental/Props"
import State from "./pages/fundamental/State"
import CSS from "./pages/fundamental/CSS"
import GenerateBox from "./sampleApp/lien/GenerateBox"
import ColorBox from "./sampleApp/lien/ColorBox"
import LiftingStateUp from "./pages/fundamental/LiftingStateUp"
import Form from "./pages/fundamental/Form"
import StateHook from "./pages/fundamental/StateHook"
import EffectHook from "./pages/fundamental/EffectHook"
import RenderingPath from "./pages/fundamental/RenderingPath"
import MovieFilm from "./pages/fundamental/MovieFilm"
import { MovieProvider } from "./contexts/MovieContext"
import RefHook from "./pages/fundamental/RefHook"
import PerformanceHook from "./pages/fundamental/PerformanceHook"

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
      <LiftingStateUp />

      <br />
      <Form />

      <MovieProvider>
        <br />
        <StateHook />

        <br />
        <EffectHook />
    

        <br />
        <ColorBox />

        <br />
        <GenerateBox />

  
        <br />
        <RenderingPath />

        <br />
      
        <MovieFilm />
      </MovieProvider>

      <br />
      <RefHook />

      <br />
      <PerformanceHook />

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
