const pool = require('../../db');
const queries = require('./queries');

module.exports.getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

module.exports.getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    })
};

module.exports.addStudent = (req, res) => {
    const {name, email, age, dob} = req.body;

    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (error) throw error;

        if (results.rows.length) {
            res.send('email already exists');
        }

        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if (error) throw error;

            res.status(201).send('student created successfully');
        });
    });
};

module.exports.removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;

        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("studnet does not exitsts in the database, could not remove student");
        }

        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;

            res.status(200).send('student removed successfully');
        })
    })
};

module.exports.updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, email, age, dob} = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;

        const noStudentFound = !results.rows.length;
        if (noStudentFound) {
            res.send("studnet does not exitsts in the database, could not remove student");
        }

        pool.query(queries.updateStudent, [id, name, email, age, dob], (error, results) => {
            if (error) throw error;

            res.status(200).send('student updated successfully');
        })
    })
};
