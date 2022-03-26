import React from 'react';

const Questions = () => {
    return (
        <div>
            <h3>Q 01.How useState work? </h3>
            <p>Ans:useState is a one kind of hook. Its state is a funcftional component. Its pass the initial state to  function . Then returns a variable with the current state value .Then another function to update this value.</p>
            <h3>Q 02.What is Props vs State?</h3>
            <p>Ans: 1. Props data is passed from one component to another component but state data passed only component.
                2.props cannot be data modified but state is data modified.
                3.Props are read only but state are read and write .
                4.	Props make components reusable but State cannot make components reusable.
                5.props use for child component but state cannot use child component.
            </p>

        </div>
    );
};

export default Questions;