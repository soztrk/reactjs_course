import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

import styled from "styled-components"
import styles from "./components/UI/Button/Checkbox.module.css"

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const[darkTheme,setDarkTheme] = useState(false)

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  const GoalForm = styled.section`
    background-color:${props => props.darkTheme ? '#333' : '#fff'};
  `
  const changeThemeHandler = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div>      
      <GoalForm id="goal-form" darkTheme={darkTheme}>
        <input onChange={changeThemeHandler} checked={darkTheme} className={styles["theme-checkbox"]} type="checkbox" />
        <CourseInput onAddGoal={addGoalHandler} />
      </GoalForm>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
