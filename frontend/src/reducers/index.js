import { combineReducers } from "redux";
import { apiUrl, activeResourceName, resources } from "./resources";
import { files, activeDirectory } from "./files";
import { user } from "./auth";

const url = 'http://nessbox.local:1337';
const baseUrl = (state = url, action) => {
  return state;
};

/*const baseUrl = (state = "http://nessbox.local:", action) => {
  return state;
};*/

const activeRow = (state = null, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ROW":
      return action.activeRow;
    default:
      return state;
  }
};

const reducers = combineReducers({
  /* resources.js */
  apiUrl,
  activeResourceName,
  resources,
  /* files.js */
  files,
  activeDirectory,
  /* auth.js */
  user,
  /* index.js */
  baseUrl,
  activeRow,
});

export {url};
export default reducers;
