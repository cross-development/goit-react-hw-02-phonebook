(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={form:"ContactForm_form__3OHZ8",input:"ContactForm_input__1Id-M",button:"ContactForm_button__3VvOS"}},,,,,function(t,e,n){t.exports={listItem:"ContactListItem_listItem__3UfxH",contact:"ContactListItem_contact__3PFSP",button:"ContactListItem_button__2lupa"}},function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__2lAih",input:"Filter_input__HvHpI"}},,,function(t,e,n){t.exports={section:"Section_section__28PV2"}},,function(t,e,n){t.exports={list:"ContactList_list__3m4Ww"}},,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=n(13),i=n(2),u=n(3),s=n(5),m=n(4),f=n(7),p=n.n(f),b=function(t){var e=t.title,n=t.value,a=t.onChangeFilter;return r.a.createElement("div",{className:p.a.filterWrapper},r.a.createElement("label",null,e,r.a.createElement("input",{type:"text",value:n,autoComplete:"off",className:p.a.input,onChange:function(t){return a(t.target.value)}})))};b.defaultProps={title:""};var h=b,v=n(10),C=n.n(v),d=function(t){var e=t.title,n=t.children;return r.a.createElement("section",{className:C.a.section},e&&r.a.createElement("h2",null,e),n)};d.defaultProps={title:""};var _=d,E=n(11),g=n(1),y=n.n(g),N=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;return t.setState(Object(E.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("form",{className:y.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name",r.a.createElement("input",{className:y.a.input,required:!0,type:"text",name:"name",value:e,autoComplete:"off",onChange:this.handleChange})),r.a.createElement("label",null,"Number",r.a.createElement("input",{className:y.a.input,required:!0,type:"text",name:"number",value:n,autoComplete:"off",onChange:this.handleChange})),r.a.createElement("button",{className:y.a.button,type:"submit"},"Add contact"))}}]),n}(a.Component),O=n(6),F=n.n(O),j=function(t){var e=t.name,n=t.number,a=t.onRemove;return r.a.createElement("li",{className:F.a.listItem},r.a.createElement("p",{className:F.a.contact},r.a.createElement("span",null,e,":")," ",n),r.a.createElement("button",{type:"button",className:F.a.button,onClick:a},"Delete"))},w=n(12),S=n.n(w),x=function(t){var e=t.contacts,n=t.onRemoveContact;return r.a.createElement("ul",{className:S.a.list},e.map((function(t){var e=t.id,a=t.name,o=t.number;return r.a.createElement(j,{key:e,name:a,number:o,onRemove:function(){return n(e)}})})))},k=n(22),I=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return alert("".concat(e," is already in contacts"));var a={id:Object(k.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){return t.setState({filter:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{title:"Phonebook"},r.a.createElement(N,{onAddContact:this.addContact})),r.a.createElement(_,{title:"Contacts"},e.length>1&&r.a.createElement(h,{value:n,title:"Find contacts by name",onChangeFilter:this.handleChangeFilter}),e.length>0&&r.a.createElement(x,{contacts:a,onRemoveContact:this.removeContact})))}}]),n}(a.Component);n(19);c.a.render(r.a.createElement(I,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.7e3f2e3b.chunk.js.map