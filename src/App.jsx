import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body from "./Body"

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<Body/>}>
          <Route path='/login' element={<div>Login Page</div>}></Route>
          <Route path='/test' element={<div>Testing Page</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
