import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Movies from './pages/Movies'
import Series from './pages/Series'
import { Suspense } from 'react'
import Loading from './pages/Loading'
import Error from './pages/Error'

function App() {

  return (
  <>
  <Router>
  <Suspense fallback={<Loading />}>
   <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    </Suspense>
  </ Router>
  </>
  )
}

export default App
