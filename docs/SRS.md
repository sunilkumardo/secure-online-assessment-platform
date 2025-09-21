# Software Requirements Specification (SRS)
## Project: Secure Online Assessment Platform

---

## 1. Introduction

### 1.1 Purpose
The purpose of this project is to design and develop a **secure online platform for conducting exams**, ensuring authentication, preventing cheating, and providing reliable results.

### 1.2 Scope
The system will be a **web-based application** with three types of users:
- **Admin** → Creates exams, manages students, views reports.
- **Student** → Attempts exams in a secure environment.
- **Proctor** → Monitors students live during exams.

Key features:
- Secure login (OTP & face recognition).
- Randomized question papers.
- Anti-cheating features (webcam monitoring, screen-lock, disabling copy/paste).
- Real-time proctoring.
- Auto-evaluation & analytics reports.

---

## 2. Functional Requirements

1. **User Authentication**
   - Student/Admin sign-up & login.
   - OTP-based verification.
   - Face recognition for identity validation.

2. **Exam Management**
   - Admin can create, edit, delete exams.
   - Add questions (MCQ, descriptive).
   - Schedule start & end time.

3. **Exam Attempt**
   - Students can attempt exams with timer.
   - Auto-submit when timer ends.

4. **Anti-Cheating Features**
   - Webcam monitoring.
   - Screen recording/alerts if student switches tabs.
   - Disable copy-paste & screenshots.

5. **Proctor Dashboard**
   - Live monitoring of students.
   - Warning system for suspicious activity.

6. **Reports & Analytics**
   - Generate results after exam.
   - Performance analysis (per student & per exam).

---

## 3. Non-Functional Requirements

- **Security** → Encrypted communication, JWT-based authentication.
- **Scalability** → Should support 1000+ concurrent users.
- **Performance** → System response < 2 seconds for all major actions.
- **Reliability** → Exams should not be interrupted; auto-save answers.
- **Usability** → Responsive design, user-friendly UI.

---

## 4. System Models (to be added later)
- Use Case Diagram
- ER Diagram (Database)
- Architecture Diagram
