const { Router } = require('express')
const StudentController = require('../controllers/StudentController')

const router = Router()

router.get('/students', StudentController.getStudents)
router.get('/students/:ra', StudentController.getOneStudent)
router.post('/students/', StudentController.createStudent)
router.put('/students/:ra', StudentController.updateStudent)
router.delete('/students/:ra', StudentController.deleteStudent)

module.exports = router