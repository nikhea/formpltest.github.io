import axios from 'axios';

const API ="https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates";

const corsanywhere = "https://cors-anywhere.herokuapp.com";
import {loadTemplests, loadTemplestsSuccess, loadTemplestsError} from '../../features/templest/templestSlice'



export function fetchTemplest() {
  return async (dispatch) => {
    dispatch(loadTemplests());
    try {
      const response = await axios.get(`${API}`)
      const data = await response;
      dispatch(loadTemplestsSuccess(data));
    } catch (error) {
        console.log("error",error.message);
      // dispatch(loadTemplestsError(error));
    }
  };
}

console.log("data :golbal");