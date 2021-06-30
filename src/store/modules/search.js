const searchModule = {
	state: {
        items: []
    },
	getters: {
		items: state => state.items,
	},
    mutations: {
        MUTATE_ITEMS: (state, items) => {
            state.items = items;
        }
    },

    actions: {
        async loadItems(context, items) {
            context.commit('MUTATE_ITEMS', items);
        }
    }
}

export default searchModule