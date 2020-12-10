import { GET_LOGIN } from "../constans"



const defaultState = {
	users: [{
		userName: 'Vova',
		password: '99999',
		type: 'apprentice',
		class: "9",
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
	},
	books: {
		class: {
			9: [

				{
					book: 'https://www.aversev.by/upload/resize_cache/iblock/85e/375_515_0/85e32563b10cc79313c81a1644ba74da.jpg',
					id: '2',
					src: 'https://yadi.sk/d/jwE_ltALUdzwyg',
					name: 'trud'
				},

				{
					book: 'https://www.aversev.by/upload/resize_cache/iblock/0c2/375_515_0/0c2f9825620d6e54e309f6dc0a141e81.jpg',
					id: '4',
					src: 'https://yadi.sk/d/jwE_ltALUdzwyg',
					name: 'phisics'
				},
				{
					book: 'https://www.aversev.by/upload/resize_cache/iblock/dc1/375_515_0/dc1d377077521f29c9095ad95492a101.jpg',
					id: '5',
					src: 'https://yadi.sk/d/jwE_ltALUdzwyg',
					name: 'biology'
				},
				{
					book: 'https://www.aversev.by/upload/resize_cache/iblock/15d/375_515_0/15d2c99b9091fe2334921c52649735e2.jpg',
					id: '6',
					src: 'https://yadi.sk/d/jwE_ltALUdzwyg',
					name: 'algebra'
				},
				{
					book: 'https://www.aversev.by/upload/resize_cache/iblock/ac0/375_515_0/id01883.jpg',
					id: '7',
					src: 'https://yadi.sk/d/jwE_ltALUdzwyg',
					name: 'social'
				},
				{
					book: 'https://www.aversev.by/upload/resize_cache/iblock/ffd/375_515_0/ffd6ff092d8f2caf8c171e619c9546e4.jpg',
					id: '8',
					src: 'https://yadi.sk/d/jwE_ltALUdzwyg',
					name: 'inform'
				},
				{
					book: 'https://www.aversev.by/upload/resize_cache/iblock/e54/375_515_0/e5479b4b5d6fd0395a7de91b65a65b71.jpg',
					id: '1',
					src: 'https://yadi.sk/d/jwE_ltALUdzwyg',
					name: 'geographi'
				},


			]
		}
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