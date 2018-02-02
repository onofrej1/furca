import {url} from './index.js';

export const apiUrl = (state = url+"/api", action) => {
  switch (action.type) {
    case "SET_RESOURCE_BASE_URL":
      return action.resourceBaseUrl;
    default:
      return state;
  }
};

export const activeResourceName = (state = "", action) => {
  switch (action.type) {
    case "SET_ACTIVE_RESOURCE_NAME":
      return action.activeResourceName;
    default:
      return state;
  }
};

export const resources = (state = {}, action) => {
  switch (action.type) {
    case "SET_RESOURCE":
      return { ...state, [action.resource.name]: { ...action.resource } };

    case "SET_RESOURCE_DATA":
      let resource = state[action.name] || { name: action.name };
      resource.data = action.data;

      return { ...state, [action.name]: resource };
    case "SET_RESOURCE_COLUMNS":
      resource = state[action.name] || { name: action.name };
      resource.columns = action.columns;

      return { ...state, [action.name]: resource };
    case "SET_RESOURCE_ROW":
      resource = state[action.name];
      let row = resource.data.find(item => item.id == action.row.id);
      if (row) {
        resource.data = resource.data.map(
          item => (item.id == row.id ? { ...item, ...action.row } : item)
        );
      } else {
        resource.data = [...resource.data, action.row];
      }

      return { ...state, [action.name]: resource };
    default:
      return state;
  }
};
