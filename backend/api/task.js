const express=require('express')

const {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
}=require('../controllers/taskController');

const router=express.Router()

router.post('/create',createTask);
router.get('/get',getTasks);
router.delete('/delete/:_id',deleteTask);
router.put('/update/:_id',updateTask);

module.exports=router