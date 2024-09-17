import React, { useState } from 'react';

const LISComponent = () => {
  const [array, setArray] = useState([10, 9, 2, 5, 3, 7, 101, 18]);
  const [lengthOfLIS, setLengthOfLIS] = useState(null);

 
  const findLISLength = (arr) => {
    if (arr.length === 0) return 0;

  
    const dp = new Array(arr.length).fill(1);


    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }


    const maxLIS = Math.max(...dp);
    setLengthOfLIS(maxLIS);
    return maxLIS;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Longest Increasing Subsequence (LIS) Finder</h1>
      <p>Array: {JSON.stringify(array)}</p>
      <button onClick={() => findLISLength(array)}>Find Length of LIS</button>
      {lengthOfLIS !== null && (
        <p>Length of the Longest Increasing Subsequence: {lengthOfLIS}</p>
      )}
    </div>
  );
};

export default LISComponent;










