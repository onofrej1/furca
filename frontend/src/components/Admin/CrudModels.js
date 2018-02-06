import React from "react";

const article = {
  title: 'Clanky',
  form: {
    source: false,
  },
  list: {
    content: {
      Cell: props => <span></span>
    }
  }
}

const menuitem = {
  title: 'Menu',
  form: {
    title: 'text',
    menu_id: {
      type: 'relation',
      resourceTable: 'menu',
      show: 'title',
    }
  }
}

const page = {
  title: "Stranky",
  form: {
    title: "number",
    body: {
      type: "ckeditor",
      label: "Body",
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

const models = { page, tag, article, menuitem };

export default models;
