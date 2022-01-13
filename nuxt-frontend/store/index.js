import { fetchCartItems } from "~/api"

// contants ( 상수화 )
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
    cartItems: []
})

export const mutations = {
    addCartItem(state, cartItem) {
        const newCartItem = {
            ...cartItem,
            imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
        }
        state.cartItems.push(newCartItem)
    },
    initCartItems(state) {
        state.cartItems = []
    }
}

export const actions = {
    // ES6+ 문법 적용. key값 바인딩 타입추론, 유지보수에 도움이 된다.
    async [FETCH_CART_ITEMS]({ commit }) {
        const { data: cartItems } = await fetchCartItems()
        commit('initCartItems')
        cartItems.forEach(item => {
            commit('addCartItem', item)
        })
    },
    async nuxtServerInit(storeContext, nuxtContext) {
        await storeContext.dispatch(FETCH_CART_ITEMS)
        // 💡 위 코드와 동일한 로직. 깔끔하게 dispatch로 불러와서 적용하자.
        // const { data: cartItems } = await fetchCartItems()
        // storeContext.commit('initCartItems')
        // cartItems.forEach(item => {
        //     storeContext.commit('addCartItem', item)
        // })
    }
}