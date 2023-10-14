const form = document.querySelector("#submit");
const studentList = document.querySelector('#student-table tbody')

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
    td1.innerText = fName
    td2.innerText = lName
    td3.innerText = roll
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)
    studentList.appendChild(row)
  }
});
