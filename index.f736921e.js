function o(o){return o&&o.__esModule?o.default:o}var t;t=JSON.parse('[{"name":"Jane Cooper","company":"Microsoft","phone":"(225) 555-0118","email":"jane@microsoft.com","country":"United States","status":true},{"name":"Floyd Miles","company":"Yahoo","phone":"(205) 555-0100","email":"floyd@yahoo.com","country":"Kiribati","status":false},{"name":"Ronald Richards","company":"Adobe","phone":"(302) 555-0107","email":"ronald@adobe.com","country":"Israel","status":false},{"name":"Marvin McKinney","company":"Tesla","phone":"(252) 555-0126","email":"marvin@tesla.com","country":"Iran","status":true},{"name":"Jerome Bell","company":"Google","phone":"(629) 555-0129","email":"jerome@google.com","country":"Réunion","status":true},{"name":"Kathryn Murphy","company":"Microsoft","phone":"(406) 555-0120","email":"kathryn@microsoft.com","country":"Curaçao","status":true},{"name":"Jacob Jones","company":"Yahoo","phone":"(208) 555-0112","email":"jacob@yahoo.com","country":"Brazil","status":true},{"name":"Kristin Watson","company":"Facebook","phone":"(704) 555-0127","email":"kristin@facebook.com","country":"Åland Islands","status":false},{"name":"Chaim Lewis","company":"Microsoft","phone":"(294) 840-6685","email":"lewis@microsoft.com","country":"United States","status":true},{"name":"Kennedy Lane","company":"Yahoo","phone":"(542) 451-7038","email":"kennedy@yahoo.com","country":"Kiribati","status":false},{"name":"Wylie Pope","company":"Tesla","phone":"(692) 802-2949","email":"wylie@tesla.com","country":"Belgium","status":true},{"name":"Cyrus Jackson","company":"Google","phone":"(501) 472-5218","email":"cyrus@google.com","country":"Argentina","status":true},{"name":"Abbot Franks","company":"Google","phone":"(186) 568-3720","email":"abbot@google.com","country":"Germany","status":true},{"name":"Reuben Henry","company":"Microsoft","phone":"(715) 598-5792","email":"reuben@microsoft.com","country":"Greece","status":true},{"name":"Simon Morton","company":"Yahoo","phone":"(233) 738-2360","email":"simon@yahoo.com","country":"Brazil","status":true},{"name":"Thomas Lucas","company":"Facebook","phone":"(704) 398-7993","email":"kristin@facebook.com","country":"Canada","status":false},{"name":"Alec Howard","company":"Microsoft","phone":"(748) 206-2688","email":"alec@microsoft.com","country":"Georgia","status":true}]');const a=document.querySelector(".table"),e=o(t).reduce(((o,{name:t,company:a,phone:e,email:n,country:s,status:c})=>c?o+`<tbody class="table__body">\n        <tr>\n            <td>${t}</td>\n            <td>${a}</td>\n            <td>${e}</td>\n            <td>${n}</td>\n            <td>${s}</td>\n            <td><span class="table__data--active">Active</span></td>\n        </tr>\n     </tbody>`:o+`<tbody class="table__body">\n        <tr>\n            <td>${t}</td>\n            <td>${a}</td>\n            <td>${e}</td>\n            <td>${n}</td>\n            <td>${s}</td>\n            <td><span class="table__data">Inactive</span></td>\n        </tr>\n     </tbody>`),' <thead class="table__header">\n        <tr>\n          <th>Customer Name</th>\n          <th>Company</th>\n          <th>Phone Number</th>\n          <th>Email</th>\n          <th>Country</th>\n          <th>Status</th>\n        </tr>\n      </thead>');a.insertAdjacentHTML("beforeend",e);
//# sourceMappingURL=index.f736921e.js.map
