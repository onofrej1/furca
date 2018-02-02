import React, { Component } from "react";

const page = {
  title: "Page",
  form: {
    title: "number",
    body: {
      type: "ckeditor",
      dataId: "required",
      label: "XXX",
      rows: 8,
      style: {
        color: "red",
        backgroundColor: "yellow"
      }
    },
    /*dalsi: {
      //type: "select",
      text: "AAA",
      label: "DDAlsi",
      options: [{ value: "aaa", label: "AAA" }, { value: "bbb", label: "BBB" }]
    }*/

  },
  list: {
    body: {
      Cell: (props) => <strong>body</strong>
    }
  }
};

const tag = {
  title: "Tag",
  form: {
    title: {
      type: "text",
      label: "Tag"
    }
  },
  list: {
    title: {
      Cell: (props) => <strong>{props.row.title}</strong>
    }
  }
};

const models = { page, tag };

export default models;
