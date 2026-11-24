const express = require('express');
const router = express.Router();

let students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// 1. READ ALL - GET /students
router.get('/', (req, res) => {
  res.json(students);
});

// 2. READ ONE - GET /students/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) return res.status(404).send("Student not found");
  res.json(student);
});

// 3. CREATE - POST /students
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).send("Student name is required");

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student added", student: newStudent });
});

// 4. UPDATE - PUT /students/:id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) return res.status(404).send("Student not found");

  student.name = req.body.name || student.name;
  res.json({ message: "Student updated", student });
});

// 5. DELETE - DELETE /students/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) return res.status(404).send("Student not found");

  const deletedStudent = students.splice(index, 1);
  res.json({ message: "Student deleted", student: deletedStudent[0] });
});

module.exports = router;
