import {fetchFiles, setActiveDirectory} from './files.js';
import {login, register} from './auth.js';
import {
  setActiveResourceName,
  setResourceRow,
  deleteResourceRow,
  fetchResourceData,
  fetchResourceFields,
  setResource,
  setResourceUrl,
  saveResourceData
} from "./resources.js";

export {
  /* resources.js */
  setActiveResourceName,
  setResourceRow,
  deleteResourceRow,
  fetchResourceData,
  fetchResourceFields,
  setResource,
  setResourceUrl,
  saveResourceData,
  /* files.js */
  fetchFiles,
  setActiveDirectory,
  /* auth.js */
  login,
  register,
};

export const setActiveRow = activeRow => {
  return {
    type: "SET_ACTIVE_ROW",
    activeRow
  };
};
