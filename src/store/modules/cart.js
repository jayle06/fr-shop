const cartModule = {
	state: {
        cartItems: []
    },
	getters: {
		cartItems: state => state.cartItems,
	},
    mutations: {
        MUTATE_ITEMS: (state, cartItems) => {
            state.cartItems = cartItems;
        }
    },

    actions: {
        async addToCart(context, cartItems) {
            context.commit('MUTATE_ITEMS', cartItems);
        }
    }
}

export default cartModule