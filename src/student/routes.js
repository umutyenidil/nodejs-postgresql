const {Router} = require('express');
const router = Router();

const controller = require('./controller');

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentById);
router.post('/create', controller.addStudent);
router.put('/:id/update', controller.updateStudent);
router.delete('/:id/delete', controller.removeStudent);

module.exports = router;