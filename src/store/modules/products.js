import axios from 'axios'

const productsModule = {
	state: {
		products: []
	},
	getters: {
		products: state => state.products,
	},
	actions: {
		async getProducts({ commit }) {
			try {
				const response = await axios.get(
					'http://127.0.0.1:3000/api/v1/products'
				)
				commit('SET_PRODUCTS', response.data)
			} catch (error) {
				console.log(error)
			}
		},
	},
	mutations: {
		SET_PRODUCTS(state, products) {
			state.products = products
		}
	}
}

export default productsModule