module.exports.getStudents = 'SELECT * FROM students';
module.exports.getStudentById = 'SELECT * FROM students WHERE id = $1';
module.exports.checkEmailExists = 'SELECT s FROM students s WHERE s.email = $1';
module.exports.addStudent = 'INSERT INTO students (name, email, age, dob) VALUES($1, $2, $3, $4)'
module.exports.removeStudent = 'DELETE FROM students WHERE id = $1';
module.exports.updateStudent = "UPDATE students SET name = $2, email = $3, age = $4, dob = $5 WHERE id = $1";