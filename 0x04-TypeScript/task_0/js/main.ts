interface Student {
    firstname: string,
    lastname: string,
    age: number,
    location: string
    }

const student1: Student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 22,
    location: 'USA'
}

const student2: Student = {
    firstname: 'Jane',
    lastname: 'Doe',
    age: 21,
    location: 'UK'
}

const studentsList: Array<Student> = [student1, student2]

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstname;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

document.body.appendChild(table);