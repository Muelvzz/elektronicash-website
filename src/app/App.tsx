import Home from './pages/Home'
import Loading from './pages/Loading'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

export default function App() {
  const AboutUs = lazy(() => import("./pages/AboutUs"))
  const Branches = lazy(() => import("./pages/Branches"))
  const ErrorNotFound = lazy(() => import("./pages/ErrorNotFound"))

  return (
    <BrowserRouter>
      <Navigation />

      <Suspense fallback={ <Loading /> }>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/about-us' element={ <AboutUs /> }/>
          <Route path='/locations' element={ <Branches /> }/>
          <Route path='*' element={ <ErrorNotFound /> }/>
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  )
}