import React from 'react';
function JoinScreen({ start }) {
  return (
    <div className="join-screen">
      <h2> Join Quiz</h2>
      <ol>
        <li>
          <p>
            {' '}
            I spent <b>10</b> intense hours perfecting my latest creation - a
            challenging quiz - as a dedicated coder.
            <br /> <br />
            <li>
              <strong>
                {' '}
                <font size="4"> Just 20 sec to ans each qn. On music & Start. </font>{' '}
              </strong>
            </li>
            <br />
            <li>
              {' '}
              <h3>
                <b>Thank you to all who appreciated my quiz!</b>{' '}
              </h3>{' '}
            </li>
          </p>
        </li>
      </ol>
      <button onClick={start}> Start </button>
    </div>
  );
}
export default JoinScreen;
