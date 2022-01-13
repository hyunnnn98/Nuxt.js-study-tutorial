import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
})

function fetchProductById(productId) {
    return instance.get(`/products/${productId}`)
}

function fetchProductByKeyword(keyword) {
    return instance.get(`/products`, {
        params: {
            name_like: keyword
        }
    })
}

// carts
function createCartItem(cartItem) {
    return instance.post('/carts', cartItem)
}

function fetchCartItems() {
    return instance.get('/carts')
}

export { fetchProductById, fetchProductByKeyword, createCartItem, fetchCartItems }