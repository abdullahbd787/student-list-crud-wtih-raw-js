const form = document.querySelector("#submit");
const studentList = document.querySelector('#student-table tbody');

const data = []

let id = 0;

form.addEventListener("click", (e) => {
  e.preventDefault();

  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const roll = document.getElementById("roll").value;
  if (!fName || !lName || !roll) {
    alert('Please fill the input')
  }else{
    const row = document.createElement('tr');
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    td4.classList.add('action-buttons')
    const editBtn = document.createElement('button')
    const deletBtn = document.createElement('button');
    editBtn.id = `edit-${id}`
    deletBtn.id = `delete-${id}`
    editBtn.classList.add('edit')
    deletBtn.classList.add('delete')

    td1.innerText = fName
    td2.innerText = lName
    td3.innerText = roll
    editBtn.innerText = 'Edit'
    deletBtn.innerText = 'Delete'

    td4.appendChild(deletBtn)
    td4.appendChild(editBtn)

    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)
    row.appendChild(td4)
    studentList.appendChild(row);
    data.push({fName, lName, roll})
    id++
    document.getElementById("fName").value = ''
    document.getElementById("lName").value = ''
    document.getElementById("roll").value = ''
  }

  const stData = document.querySelectorAll('tbody tr');
  stData.forEach(el=>{
    el.childNodes[3].childNodes[1].addEventListener('click', (e)=>{
      const id = parseInt(e.target.id.split('-')[1]);
      document.getElementById("fName").value = data[id].fName
      document.getElementById("lName").value = data[id].lName
      document.getElementById("roll").value = data[id].roll
    })
  })
});
