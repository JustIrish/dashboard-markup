import data from './data.json';

const table = document.querySelector('.table');

const markup = data.reduce(
  (acc, { name, company, phone, email, country, status }) => {
    if (!status) {
      return (
        acc +
        `<tbody class="table__body">
        <tr>
            <td>${name}</td>
            <td>${company}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td>${country}</td>
            <td><span class="table__data">Inactive</span></td>
        </tr>
     </tbody>`
      );
    } else {
      return (
        acc +
        `<tbody class="table__body">
        <tr>
            <td>${name}</td>
            <td>${company}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td>${country}</td>
            <td><span class="table__data--active">Active</span></td>
        </tr>
     </tbody>`
      );
    }
  },
  ` <thead class="table__header">
        <tr>
          <th>Customer Name</th>
          <th>Company</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
        </tr>
      </thead>`
);

table.insertAdjacentHTML('beforeend', markup);
