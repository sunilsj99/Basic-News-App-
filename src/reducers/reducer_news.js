import { GET_NEWS } from "../actions/index";

export default function(state = [], action) {
	//console.log(action.payload);
	switch (action.type) {
		case GET_NEWS:
			return state.concat([action.payload.data]);
	}

	return state;
}
