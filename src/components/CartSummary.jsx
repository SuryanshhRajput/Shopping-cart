import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

const CartSummary = () => {
  const dispatch = useDispatch()
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart)

  return (
    <aside className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-lg">
      <h2 className="text-xl font-semibold">Order Summary</h2>
      <div className="mt-6 space-y-3 text-sm text-slate-300">
        <div className="flex items-center justify-between">
          <span>Items</span>
          <span>{totalQuantity}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-700 pt-3 text-base font-semibold text-white">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(clearCart())}
        className="mt-6 w-full rounded-full border border-slate-700 bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/20"
      >
        Clear Cart
      </button>
    </aside>
  )
}

export default CartSummary
