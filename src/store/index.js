import Vuex from 'vuex'

// Import modules
import auth from './modules/auth'
import products from './modules/products'
import search from './modules/search'



const storeData = {
	modules: {
		auth,
		products,
		search
	}
}

const store = new Vuex.Store(storeData)

export default store