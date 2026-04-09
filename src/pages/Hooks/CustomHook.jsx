import useCounter from "./useCounter";
import UseFetch from "./UseFetch";

const CustomHook = () => {

    // some logic repeated in multiple components</p>
    /* useEffect(() => {
        fetchData();
    }, []); */


    //BAsic Syntax 

    /* function useCustomHook() {
        //logic
        return value;
    } */
    const { count, increment, decrement, reset } = useCounter(5);

    const { data, loading } = UseFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <>
            {/* {data && data[0].name} */}
            {loading ? (
                <p className="text-base text-gray-700 mb-4"> Loading...</p>
            ) : (
                data.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))
            )}
            <h2 className="text-2xl font-bold text-gray-700"> Custom Hook </h2>
            <h2>What is Custom hook</h2>
            <p className="text-base text-gray-700 mb-4"> A custom hook is a resusable function that :
                <ul>
                    <li> uses React hooks(useState, useEffect)</li>
                    <li>starts with use</li>
                    <li>shares logic between components</li>
                </ul>
            </p>
            <h3>Why custom hooks</h3>
            <p className="text-base text-gray-700 mb-4"> some logic repeated in multiple components</p>
            {`useEffect(() => {
                 fetchData();
            }, []);`}
            <ul>
                <li> Extract into reusable hook</li>
                <li>Clean code</li>
                <li>Better maintainability</li>
            </ul>

            <p className="text-base text-gray-700 mb-4">  Custom hook example</p>
            <h2 className="text-2xl font-bold text-gray-700">Count: {count}</h2>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <button onClick={reset}>Reset</button>

            <h3>Important Rules</h3>
            <ul>
                <li>
                    Must start with "use"
                </li>
                <li>
                    Can use other hooks inside  useState(), useEffect(), useContext()
                </li>
                <li>
                    Cannot use conditionally
                    {`if(true){useState();}`}
                </li>
            </ul>
            <h3>Common questions </h3>
            <div>
                Common Interview Questions
                ❓ Q1: What is a custom hook?

                👉 A reusable function using React hooks.

                ❓ Q2: Why use custom hooks?

                👉 To reuse logic across components.

                ❓ Q3: Naming convention?

                👉 Must start with use.

                ❓ Q4: Can custom hooks have state?

                👉 ✅ Yes

                ❓ Q5: Can we call API inside custom hook?

                👉 ✅ Yes (common use case)

                🔹 9. Common Mistakes ❌
                ❌ Not using "use" prefix
                function fetchData() { } // ❌
                ❌ Calling hooks conditionally
                ❌ Making hook too complex

                👉 Keep it focused
            </div>
        </>
    )
}

export default CustomHook