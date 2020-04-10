import { CREATE_STEPS } from './stepConsts';
import axios from 'axios';

const SERVER = 'http://localhost:4003/formstepper';

export const getSteps = () => async dispatch => {
	try {
		const res = await axios.get(`${SERVER}`);
		dispatch({
			type: CREATE_STEPS,
			payload: res.data
		});
	} catch (e) {
		console.log(e);
	}
}