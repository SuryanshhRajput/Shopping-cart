import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'

const Cart = () => {
  const { cartItems, totalQuantity } = useSelector((state) => state.cart)

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Your cart is empty</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Let’s fill it with something great.</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Add a few essentials from our featured collection and come back here to review your order.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Browse Products
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Shopping Cart</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">{totalQuantity} item(s) selected</h1>
        </div>
        <Link to="/" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">
          Continue shopping
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
        <CartSummary />
      </div>
    </main>
  )
}

export default Cart
