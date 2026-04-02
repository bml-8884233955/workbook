
import { useReducer } from "react";

const initialState = { count: 0 };

function Reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };

        default:
            return state;
    }

}


function UseReducer() {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <>
            <h2>What is useReducer</h2>
            <p> <i>useReducer</i> is a hook to manage complex state logic </p>
            <p>It is alternative to :</p>
            <li> useState(for Simple state)</li>
            <li> Works like Redux(mini version)</li>

            <h3>When to Use <i>useReducer</i></h3>
            <li> Multiple related state values</li>
            <li> Complex updates </li>
            <li>Dependent state changes</li>
            <li>Form handling</li>
            <li> Form transitions</li>
            <p>Basic Syntax</p>
            {` const [state, dispatch] = useReducer(reducer, initialValue)`}
            <table>
                <thead>
                    <tr>
                        <th>Part</th>
                        <th>Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>state</td>
                        <td>current state</td>
                    </tr>
                    <tr>
                        <td>dispatch</td>
                        <td>function to update state</td>
                    </tr>
                    <tr>
                        <td>reducer</td>
                        <td>logic to update state</td>
                    </tr>
                    <tr>
                        <td>initialState</td>
                        <td>starting value</td>
                    </tr>
                </tbody>
            </table>

            <h3> Reducer  use case</h3>

            <div>
                <h2>{state.count}</h2>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>
                    +
                </button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>
                    -
                </button>
                <button onClick={() => dispatch({ type: "RESET" })}>
                    Reset
                </button>
            </div>

            <p>
                13. Interview Questions
                ❓ Q1: What is useReducer?

                👉 Hook for complex state logic

                ❓ Q2: Difference between useState & useReducer?

                👉 Complexity + scalability

                ❓ Q3: What is reducer?

                👉 Function that returns new state based on action

                ❓ Q4: What is dispatch?

                👉 Function to trigger state updates
            </p>
        </>
    )
}

export default UseReducer;