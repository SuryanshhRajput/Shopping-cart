import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
            R
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">Redux Cart</p>
            <p className="text-sm text-slate-500">Mini Hackathon Store</p>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:block">
            Home
          </Link>
          <Link to="/cart" className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
            <span>Cart</span>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">{totalQuantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
