import React from 'react';

const TodayList = props => {
  const { today, deleteItem } = props;
  let total = today.reduce((acc, val) => acc + val.quantity * val.calories, 0);

  return (
    <>
      {today.map((item, i) => {
        return (
          <>
            <p key = {i}>
              {i > 0 && (
                <span>
                  {item.quantity} {item.name} = {item.calories * item.quantity} cal
                </span>
              )}
              {i > 0 && (
                <button onClick={() => deleteItem(item.name)}>Delete</button>
              )}
            </p>
          </>
        );
      })}
      <p>
        <strong>Total: {total} cal</strong>
      </p>

    </>
  );
};

export default TodayList;
