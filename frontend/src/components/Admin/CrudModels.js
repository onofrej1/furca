import React from "react";

const article = {
  title: 'Clanky',
  form: {
    //source: false,
    content: {
      type: 'ckeditor'
    },
    sourcex: {
      type: 'checkboxList',
      options: [{ value: "aaa", label: "AAA" }, { value: "bbb", label: "BBB" }]
    },
    created_at: false,
    tags: {
      type: 'pivotRelation',
      resourceTable: 'tag',
      show: 'title',
    }
  },
  list: {
    content: {
      Cell: props => <span>CC</span>
    }
  }
}

const menuitem = {
  title: 'Menu',
  form: {
    title: 'text',
    menu: {
      type: 'relation',
      resourceTable: 'menu',
      show: 'title',
      label: 'Menu'
    },
    parent_id: {
      type: 'relation',
      resourceTable: 'menuitem',
      show: 'title',
      label: 'Parent'
    },
    link: 'text',
    page: {
      type: 'relation',
      resourceTable: 'page',
      label: 'Stranka',
      show: 'title',
    }
  },
  list: {
    menu_id: {
      Cell: (props) => <strong>aaa</strong>
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
