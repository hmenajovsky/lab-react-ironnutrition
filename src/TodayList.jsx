import React from 'react'

const TodayList = (props) => {
    const {today} = props;
    const isDisplayed = today.length > 1;
    today.unshift();
    console.log(today);
    let total = today.reduce((acc, val) => acc + val.quantity * val.calories, 0);
    console.log("total",total);

    return (
        <>
        { isDisplayed && today.map(item => {
            return (
            <p>{item.quantity} {item.name}({item.calories} cal) = {item.calories * item.quantity} cal </p>
            );
            })}
        <p>Total: {total} cal</p>

        </>
    )
}

export default TodayList
