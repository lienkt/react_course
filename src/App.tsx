
import { Link, NavLink, Route, Routes, useLocation } from "react-router"

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
import React from "react"
import Login from "./pages/fundamental/Login"
import User from "./pages/fundamental/User"
import InformationUser from "./components/InformationUser"
import BankUser from "./components/BankUser"
import Member from "./components/Member"
import MemberDetail from "./components/MemberDetail"
function App() {
  const location = useLocation();

  React.useEffect(() => {
    console.log("-------location-----------", location)
  }, [location])

  return (
    <>
      <nav className="bg-neutral-primary w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link
                  to="/jsx"
                  className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                >
                  JSX
                </Link>
              </li>
              <li>
                <Link
                  to="/props"
                  className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                >
                  Props
                </Link>
              </li>
              <li>
                <Link
                  to="/state"
                  replace
                  className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                >
                  State
                </Link>
              </li>
              <li>
                <NavLink
                  to="/event"
                  className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                >
                  Event Binding
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                >
                  User
                </NavLink>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <main>
        <Routes>
          <Route path="jsx" element={<JSX />} />
          <Route path="props" element={<Props />} />
          <Route path="state" element={<State />} />
          <Route path="event" element={<EventFunction />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />}>
            <Route path="information" element={<InformationUser />} />
            <Route path="bank" element={<BankUser />} />
            <Route path="member" element={<Member />} />
          </Route>
          <Route path="user/member/:memberId" element={<MemberDetail />} />
        </Routes>
      </main>

      <br />
      <hr />

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
