import React, { useState } from 'react';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setIsValid]=useState(true)

  const goalInputChangeHandler = event => {
  if(event.target.value.trim().length >0) //check the length
  {
    setIsValid(true)
  }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0)
    {
      setIsValid(false);
    return;    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} >
        {/* 
        case 2: dynamic classes uses template literals backticks
         <div className={`form-control ${!isValid ?'invalid':''}`}  
          //checks for valid  
         and concatenats the required as 
         a)form-contol.invalid(if invalid)  : changes made in css file
         b)form-control(valid)
         */}
        <label>Course Goal</label>
{/* 
case 1: inline styling : label  is : 
    <input style={{borderColor:!isValid?"red":"black", background:!isValid?'salmon':'transparent'}}
    */}
        <input        
        type="text" 
        onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;