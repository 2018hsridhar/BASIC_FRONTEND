import React from 'react';

export default function TipCalculator() {
  // Write your code here.

  return (
    <>
      {
    <div>
      <h3>Enter Numbers</h3>
      <div>
        <label>
          Input 1:
          <input
            type="number"
            name="input1"
            value={values.input1} // Controlled component requires a value prop linked to state
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Input 2:
          <input
            type="number"
            name="input2"
            value={values.input2}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Input 3:
          <input
            type="number"
            name="input3"
            value={values.input3}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <p>
        Current values: {values.input1}, {values.input2}, {values.input3}
      </p>
    </div>
      }
    </>
  );
}