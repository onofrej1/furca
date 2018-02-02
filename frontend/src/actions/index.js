import axios from "axios";
import { createBrowserHistory } from "history";
import {
  setActiveResourceName,
  setResourceRow,
  deleteResourceRow,
  fetchResourceData,
  fetchResourceColumns,
  setResource,
  setResourceUrl,
  saveResourceData
} from "./resources.js";

import {fetchFiles, setActiveDirectory} from './files.js';

import {login, register} from './auth.js';

export {
  /* resources.js */
  setActiveResourceName,
  setResourceRow,
  deleteResourceRow,
  fetchResourceData,
  fetchResourceColumns,
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
