// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const port = 3000;

// Sample quiz questions and answers
const quizQuestions = [
    {
        question: 'What does Node.js allow you to do?',
        options: ['Build server-side applications', 'Build client-side applications', 'Build mobile applications'],
        correctAnswerIndex: 0
    },
    {
        question: 'Which of the following is the core module of Node.js?',
        options: ['fs', 'http', 'crypto'],
        correctAnswerIndex: 1
    },
    // Add more questions here
];

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Endpoint for serving quiz questions
app.get('/quiz', (req, res) => {
    res.json(quizQuestions);
});

// Endpoint for submitting quiz answers
app.post('/quiz/submit', (req, res) => {
    const userAnswers = req.body.answers;
    let score = 0;
    let feedback = [];

    // Calculate score and provide feedback
    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswerIndex) {
            score++;
            feedback.push({ question: question.question, result: 'Correct', correctAnswer: question.options[question.correctAnswerIndex] });
        } else {
            feedback.push({ question: question.question, result: 'Incorrect', correctAnswer: question.options[question.correctAnswerIndex] });
        }
    });

    res.json({ score, feedback });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//npm install express body-parser
//app.js
//node app.js
//http://localhost:3000/quiz
//Run The above application in terminal with last 4 commands 
