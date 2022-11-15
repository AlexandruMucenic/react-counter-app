import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './counterPage.css';

const CounterPage = () => {
  const [countNum, setCount] = useState(5);
  const [isDisabledPlus, setIsDisabledPlus] = useState(false);
  const [isDisabledMinus, setIsDisabledMinus] = useState(false);
  const [bgColor, setBgColor] = useState('blue');

  //Background
  useEffect(() => {
    if (countNum < 4) {
      setBgColor('green');
    } else if (countNum >= 4 && countNum <= 7) {
      setBgColor('blue');
    } else {
      setBgColor('red');
    }
  }, [countNum]);

  //Disable button effect
  useEffect(() => {
    if (countNum === 10) {
      setIsDisabledPlus(true);
    } else if (countNum === 0) {
      setIsDisabledMinus(true);
    } else {
      setIsDisabledPlus(false);
      setIsDisabledMinus(false);
    }
  }, [countNum]);

  // Button functions
  const handleIncreaseValue = () => {
    setCount(prevCount => (prevCount += 1));
  };

  const handleDecreaseValue = () => {
    setCount(prevCount => (prevCount -= 1));
  };

  //ErrorMessage logic
  const renderErrorMessage = () => {
    if (countNum === 0) {
      return <ErrorMessage message="You've reached the lower limit!" />;
    } else if (countNum === 10) {
      return <ErrorMessage message="You've reached the upper limit!" />;
    }
  };

  return (
    <div className={`counterContainer ${bgColor}`}>
      <div className='numberContainer'>
        <h1 className='number'> {countNum} </h1>
      </div>
      <div className='butonsContainer'>
        <Button
          sign='+'
          onclick={handleIncreaseValue}
          disabled={isDisabledPlus}
        />
        <Button
          sign='-'
          onclick={handleDecreaseValue}
          disabled={isDisabledMinus}
        />
      </div>
      {renderErrorMessage()}
    </div>
  );
};

export default CounterPage;
