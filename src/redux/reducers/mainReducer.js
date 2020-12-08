import { GET_LOGIN } from "../constans"



const defaultState = {
	users: [{
		userName: 'Vova',
		password: '99999',
		type: 'apprentice'
	},
	{
		userName: 'Gogi',
		password: '12345',
	},],
	contacts: {
		administrations: [
			{
				lastName: 'Антоненко',
				firstName: 'Вячеслав Владимирович',
				photo: 'https://content.schools.by/cache/a2/bd/a2bdf8becea28ac074d8bbc12c9f91e8.jpg',
				phone: '+375296698546',
				position: 'Директор',
				id: 1

			},
			{
				lastName: 'Антоненко',
				firstName: 'Вячеслав Владимирович',
				photo: 'https://content.schools.by/cache/a2/bd/a2bdf8becea28ac074d8bbc12c9f91e8.jpg',
				phone: '+375296698546',
				position: 'Директор',
				id: 1

			},
			{
				lastName: 'Антоненко',
				firstName: 'Вячеслав Владимирович',
				photo: 'https://content.schools.by/cache/a2/bd/a2bdf8becea28ac074d8bbc12c9f91e8.jpg',
				phone: '+375296698546',
				position: 'Директор',
				id: 1

			},
			{
				lastName: 'Антоненко',
				firstName: 'Вячеслав Владимирович',
				photo: 'https://content.schools.by/cache/a2/bd/a2bdf8becea28ac074d8bbc12c9f91e8.jpg',
				phone: '+375296698546',
				position: 'Директор',
				id: 1

			},

			{
				lastName: 'Потороча',
				firstName: 'Татьяна Николаевна',
				photo: 'https://content.schools.by/cache/f2/c5/f2c5129c1c08b79e2a84a4f3800c96e4.jpg',
				phone: '+375448957421',
				position: 'Заместитель директора по воспитательной работе',
				id: 2
			}, {
				lastName: 'Потороча',
				firstName: 'Татьяна Николаевна',
				photo: 'https://content.schools.by/cache/f2/c5/f2c5129c1c08b79e2a84a4f3800c96e4.jpg',
				phone: '+375448957421',
				position: 'Заместитель директора по воспитательной работе',
				id: 2
			}, {
				lastName: 'Потороча',
				firstName: 'Татьяна Николаевна',
				photo: 'https://content.schools.by/cache/f2/c5/f2c5129c1c08b79e2a84a4f3800c96e4.jpg',
				phone: '+375448957421',
				position: 'Заместитель директора по воспитательной работе',
				id: 2
			}, {
				lastName: 'Потороча',
				firstName: 'Татьяна Николаевна',
				photo: 'https://content.schools.by/cache/f2/c5/f2c5129c1c08b79e2a84a4f3800c96e4.jpg',
				phone: '+375448957421',
				position: 'Заместитель директора по воспитательной работе',
				id: 2
			},],
		teachers: [
			{
				lastName: 'Почтаренко',
				firstName: 'Владимир Андреевич',
				photo: 'https://content.schools.by/cache/91/dc/91dc40bd6c47d523f05c7f9f750106c7.jpg',
				phone: '+375291051916',
				position: 'Учитель трудового обучения',
				id: 3
			},
			{
				lastName: '',
				firstName: '',
				photo: 'https://content.schools.by/cache/93/e9/93e94a352c6b955e01fb5ce99ddae155.jpg',
				phone: '',
				position: '',
				id: 4
			}]
	}
}



const mainReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_LOGIN:
			return {
				...state,
				LoginIn: action.payload.LoginIn,
				receivingLogin: action.payload.username,
				receivingPassword: action.payload.password,

			};

		default:
			return state
	}
}

export default mainReducer