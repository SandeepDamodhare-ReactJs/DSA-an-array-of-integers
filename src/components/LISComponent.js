import React, { useState } from 'react';

const LISComponent = () => {
  const [array, setArray] = useState([10, 9, 2, 5, 3, 7, 101, 18]);
  const [lengthOfLIS, setLengthOfLIS] = useState(null);

  // Function to calculate the length of the longest increasing subsequence
  const findLISLength = (arr) => {
    if (arr.length === 0) return 0;

    // Create a dp array and initialize all values to 1
    const dp = new Array(arr.length).fill(1);

    // Fill the dp array using dynamic programming approach
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }

    // The result is the maximum value in the dp array
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
