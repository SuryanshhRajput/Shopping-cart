import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
