import { GET_THEME } from './themeConsts'
import axios from 'axios';

const SERVER = 'http://localhost:4002/themes';

export const getTheme = () => async dispatch => {

	try {
		const res = await axios.get(`${SERVER}`);
		dispatch ({
			type: GET_THEME,
			payload: res.data
		})
	} catch(error) {
		console.log('GET_THEME', error);
	}

}