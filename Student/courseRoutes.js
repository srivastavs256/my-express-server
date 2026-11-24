const express = require('express');
const router = express.Router();

let courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// 1. READ ALL - GET /courses
router.get('/', (req, res) => {
  res.json(courses);
});

// 2. READ ONE - GET /courses/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) return res.status(404).send("Course not found");
  res.json(course);
});

// 3. CREATE - POST /courses
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).send("Course name and description are required");
  }

  const newCourse = {
    id: courses.length ? courses[courses.length - 1].id + 1 : 1,
    name,
    description
  };

  courses.push(newCourse);
  res.status(201).json({ message: "Course added", course: newCourse });
});

// 4. UPDATE - PUT /courses/:id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) return res.status(404).send("Course not found");

  course.name = req.body.name || course.name;
  course.description = req.body.description || course.description;
  res.json({ message: "Course updated", course });
});

// 5. DELETE - DELETE /courses/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = courses.findIndex(c => c.id === id);

  if (index === -1) return res.status(404).send("Course not found");

  const deletedCourse = courses.splice(index, 1);
  res.json({ message: "Course deleted", course: deletedCourse[0] });
});

module.exports = router;
