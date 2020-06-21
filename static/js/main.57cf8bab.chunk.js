(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,function(t,e,n){t.exports={contact:"ContactListItem_contact__jZ7P8",contactListButton:"ContactListItem_contactListButton__2pqDS",contactAction:"ContactListItem_contactAction__2htxw"}},,,function(t,e,n){t.exports={section:"Section_section__1KaH-"}},,function(t,e,n){t.exports={phonebookInput:"Filter_phonebookInput__SC2rn"}},,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){t.exports={contactList:"ContactList_contactList__3lsnO"}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),l=n(11),i=n(1),u=n(2),s=n(4),m=n(3),h=n(8),f=n.n(h),b=function(t){var e=t.title,n=t.children;return c.a.createElement("section",{className:f.a.section},e&&c.a.createElement("h2",null,e),n)};b.defaultProps={title:"Section title"};var p=b,v=n(9),d=(n(17),function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name",c.a.createElement("input",{name:"name",value:e,type:"text",onChange:this.handleChange})),c.a.createElement("label",null,"Number",c.a.createElement("input",{name:"number",value:n,type:"text",onChange:this.handleChange})),c.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component)),C=n(5),E=n.n(C),g=function(t){var e=t.name,n=t.number,a=t.onRemove;return c.a.createElement("li",null,c.a.createElement("p",{className:E.a.contact},e,": ",n),c.a.createElement("div",{className:E.a.contactAction},c.a.createElement("button",{type:"button",className:E.a.contactListButton,onClick:a},"Delete")))},_=(n(18),function(t){var e=t.contacts,n=t.onRemoveContact;return c.a.createElement("ul",null,e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement(g,{key:e,name:a,number:o,onRemove:function(){return n(e)}})})))}),y=n(10),j=n.n(y),k=function(t){var e=t.title,n=t.value,a=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("label",null,e,c.a.createElement("input",{className:j.a.phonebookInput,type:"text",value:n,onChange:function(t){return a(t.target.value)}})))};k.defaultProps={title:""};var O=k,S=n(22),L=(n(19),function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a={id:Object(S.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{title:"Phonebook"},c.a.createElement(d,{onAddContact:this.addContact})),c.a.createElement(p,{title:"Contacts"},e.length>1&&c.a.createElement(O,{title:"Find contacts by name",value:n,onChangeFilter:this.handleChangeFilter}),e.length>0&&c.a.createElement(_,{contacts:a,onRemoveContact:this.removeContact})))}}]),n}(a.Component));r.a.render(c.a.createElement(L,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.57cf8bab.chunk.js.map