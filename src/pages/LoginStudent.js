// LoginStudent.js
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginStudent.module.css";
import { studentsData } from "./student_data"; // Import studentsData from student_data.js

const LoginStudent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFrameButtonClick = useCallback(() => {
    if (email && password) {
      const student = studentsData.find(
        (student) => student.email === email && student.password === password
      );

      if (student) {
        navigate("/student");
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("Please enter both email and password.");
    }
  }, [email, password, navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/register-student");
  }, [navigate]);

  return (
    <div className={styles.loginStudent}>
      <img
        className={styles.libraryShelf1Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <b className={styles.edulib}>EduLib</b>
      <div className={styles.loginStudentChild} />
      <button className={styles.loginWrapper} onClick={onFrameButtonClick}>
        <b className={styles.login}>Login</b>
      </button>
      <button className={styles.registerWrapper} onClick={onFrameButton1Click}>
        <b className={styles.register}>Register</b>
      </button>
      <input
        className={styles.loginStudentItem}
        type="password"
        placeholder="Password"
        maxLength={20}
        minLength={10}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <img
        className={styles.loginStudentInner}
        alt=""
        src="/rectangle-3@2x.png"
      />
      <input
        className={styles.frameInput}
        type="email"
        placeholder="Email"
        maxLength={30}
        minLength={5}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  );
};

export default LoginStudent;
