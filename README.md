# 🎯 React Quiz App

A simple and interactive quiz web application built with **React**.  
This project displays multiple-choice questions, tracks progress, and evaluates answers.  
It is styled with a clean minimal UI for readability and user engagement.

---

##  Features
-  **Multiple-choice questions** (loaded from JSON data)
-  **Answer validation** using `answerIndex`
-  **Progress bar** to track quiz completion
-  Optional **timer support** for each question or the whole quiz
-  **Minimal and responsive UI** (works well on desktop & mobile)
-  Easy to update questions via `quiz.json`

---

##  Project Structure
quiz-app/
│── public/
│ └── index.html
│── src/
│ ├── components/
│ │ ├── Header.js # App header (logo + title)
│ │ ├── ProgressBar.js # Shows quiz progress
│ │ ├── QuestionBox.js # Displays question + options
│ │ └── Result.js # Shows final score
│ ├── data/
│ │ └── quizData.json # Quiz questions & answers
│ ├── App.js # Main app component
│ └── index.js # React entry point
│── package.json
└── README.md


##  Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app

    Install dependencies:

npm install
<img width="1920" height="1080" alt="Screenshot (29)" src="https://github.com/user-attachments/assets/b1f20ce8-7375-4ec0-a1f2-2ee19f5161f6" />

Start development server:

npm start

The app will run at  http://localhost:3000

## Screenshots
<img width="1920" height="1080" alt="Screenshot (28)" src="https://github.com/user-attachments/assets/a2293c17-1f29-4213-a227-92fc4bac5650" />
<img width="1920" height="1080" alt="Screenshot (27)" src="https://github.com/user-attachments/assets/04026653-c33c-4220-8243-c89d053441b6" />
<img width="1920" height="1080" alt="Screenshot (29)" src="https://github.com/user-attachments/assets/f7c9888e-e810-451c-ab79-9da41be6d49b" />

