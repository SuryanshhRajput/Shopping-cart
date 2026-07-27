import { createSlice } from '@reduxjs/toolkit'

const loadCartFromStorage = () => {
  if (typeof window === 'undefined') return { cartItems: [], totalQuantity: 0, totalPrice: 0 }

  try {
    const savedCart = window.localStorage.getItem('redux-cart')
    return savedCart ? JSON.parse(savedCart) : { cartItems: [], totalQuantity: 0, totalPrice: 0 }
  } catch (error) {
    console.error('Failed to load cart', error)
    return { cartItems: [], totalQuantity: 0, totalPrice: 0 }
  }
}

const initialState = loadCartFromStorage()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
      cartSlice.caseReducers.calculateTotals(state)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
      cartSlice.caseReducers.calculateTotals(state)
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
      cartSlice.caseReducers.calculateTotals(state)
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload)
      if (item) {
        item.quantity -= 1
      }
      if (item && item.quantity <= 0) {
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload)
      }
      cartSlice.caseReducers.calculateTotals(state)
    },
    clearCart: (state) => {
      state.cartItems = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
    calculateTotals: (state) => {
      state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
      state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)
    },
  },
})

const persistCart = (state) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('redux-cart', JSON.stringify(state))
  }
}

const cartReducer = (state, action) => {
  const nextState = cartSlice.reducer(state, action)
  persistCart(nextState)
  return nextState
}

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  calculateTotals,
} = cartSlice.actions

export default cartReducer
