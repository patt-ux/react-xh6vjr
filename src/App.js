import React, { useState } from 'react';
import './style.css';
import { theData } from './data';
import { newData } from './newdata';

export default function App() {
  const [gammaNum, setGammaNum] = useState(0);
  const [epNum, setEpNum] = useState(0);
  const [powerNum, setPowerNum] = useState(0);
  const testData = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];

  // Answer: 3923414
  const findGamma = () => {
    let gNum = [];
    let eNum = [];
    for (let i = 0; i < theData[0].length; i++) {
      gNum.push(findCommon(i));
      eNum.push(findLeastCommon(i));
    }
    var gbinary = gNum.join('');
    var ebinary = eNum.join('');
    var gdigit = parseInt(gbinary, 2);
    var edigit = parseInt(ebinary, 2);
    setGammaNum(gdigit);
    setEpNum(edigit);
    var power = edigit * gdigit;
    setPowerNum(power);
  };
  const findLeastCommon = (x) => {
    let zeros = 0;
    let ones = 0;
    theData.forEach((el) => {
      if (el[x] === '0') {
        zeros++;
      }
      if (el[x] === '1') {
        ones++;
      }
    });
    if (zeros < ones) {
      return 0;
    }
    return 1;
  };
  // find most common number in each position
  const findCommon = (x) => {
    let zeros = 0;
    let ones = 0;
    theData.forEach((el) => {
      if (el[x] === '0') {
        zeros++;
      }
      if (el[x] === '1') {
        ones++;
      }
    });
    if (zeros > ones) {
      return 0;
    }
    return 1;
  };

  const myClick = () => {
    let myStr = newData.split('\n');
    console.log(myStr);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() => {
          findGamma();
        }}
      >
        Find 0
      </button>
      <button
        onClick={() => {
          myClick();
        }}
      >
        Clicky
      </button>
      <div style={{ paddingTop: '20px' }}>
        <strong>Gamma:</strong> {gammaNum}
      </div>
      <div>
        <strong>Epsion:</strong> {epNum}
      </div>
      <div>
        <strong>Power:</strong> {powerNum}
      </div>
    </div>
  );
}
