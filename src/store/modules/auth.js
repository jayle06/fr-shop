import axios from 'axios'

const state = {
	auth: {
		isAuthenticated: false
	}
}

const getters = {
	isAuthenticated: state => state.auth.isAuthenticated
}

const actions = {
    async logout({ commit }) {
        try {
            const response = await axios.post(
                'http://127.0.0.1:3000/api/v1/logout'
            )
            commit('TOGGLE_AUTH', response.data);
            localStorage.removeItem('token');
        } catch (error) {
            console.log(error)
        }
    },
}

const mutations = {
	TOGGLE_AUTH(state) {
		state.auth.isAuthenticated = !state.auth.isAuthenticated
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}