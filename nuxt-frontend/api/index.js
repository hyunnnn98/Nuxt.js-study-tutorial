import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
})

function fetchProductById(productId) {
    return instance.get(`/products/${productId}`)
}

export { fetchProductById }