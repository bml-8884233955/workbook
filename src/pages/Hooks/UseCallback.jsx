import { useCallback } from "react";

function UseCallback() {

    const dependencies = [];
    //Basic Syntax
    const memoizedFunction = useCallback(() => {
        //function logic

    }, [dependencies]);

    const reactClickFunction = `function Parent() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}`
    //Saem functions prevents re-render
    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return (
        <>
            <h3> useCallback</h3>
            <h2 className="text-2xl font-bold text-gray-700"> Why useCallback</h2>
            <p className="text-base text-gray-700 mb-4"> In react , functions are recreated on every render:</p>
            this causes
            <ul>
                <li>
                    unnecessary re-renders
                </li>
                <li>
                    performance issues
                </li>
            </ul> Without useCallback child-renders everytime
            {reactClickFunction}
            <h3>Important points</h3>
            <ul>
                <li>
                    1. Memoizes function (not value)
                    Opposite of useMemo
                </li>
                <li>
                    2.Works with dependency array
                    {`useCallback(() => {}, [value]);`}
                </li>
                <li>
                    3. Used with React.memo
                    Most effective when used together
                </li>
                <li>
                    4. Avoid unnecessary re-renders
                    Expecially in child components
                </li>
            </ul>

            Code Templates 🚀
            ✅ Basic Template
            {`const handleClick = useCallback(() => {
                console.log("Click");
}, []);`}
            ✅ With Dependency
            {`const handleClick = useCallback(() => {
                console.log(count);
}, [count]);`}
            ✅ Passing to Child
            {` <Child onClick={handleClick} /> `}
            ✅ With React.memo
            {`const Child = React.memo(({onClick}) => {
                console.log("Child rendered");
            return <button onClick={onClick}>Click</button>;
});`}
            🔹 7. useMemo vs useCallback ⭐
            Feature	useMemo	useCallback
            Returns	Value	Function
            Use case	Expensive calc	Prevent re-render
            🔹 8. Common Interview Questions
            ❓ Q1: What is useCallback?

            👉 Hook to memoize functions.

            ❓ Q2: Why use it?

            👉 To prevent unnecessary re-renders.

            ❓ Q3: Difference from useMemo?

            👉

            useMemo → value
            useCallback → function
            ❓ Q4: Does it improve performance always?

            👉 ❌ No, only in specific cases

            ❓ Q5: When to use it?

            👉 When passing functions to child components

            🔹 9. Common Mistakes ❌
            ❌ Overusing useCallback
            {`const fn = useCallback(() => count + 1, [count]);`} // ❌ unnecessary
            ❌ Missing dependencies
            {`useCallback(() => {
                console.log(count);
}, []); `}// ❌ bug
            ❌ Using without React.memo

            👉 No benefit if child always re-renders

            🔹 10. Real-Life Use Cases 🔥
            ✅ Button handlers in large apps
            ✅ Passing callbacks to child components
            ✅ Preventing re-renders in lists
            ✅ Optimizing forms
            🔹 11. Cheat Sheet 🚀
            {`useCallback(() => fn, [deps])`}

            Memoizes function
            Prevents re-creation
            Used with React.memo
            🔹 12. Best Practices ⭐

            ✔ Use only when needed
            ✔ Combine with React.memo
            ✔ Always include dependencies
            ✔ Avoid premature optimization

            🔹 13. Real Example (Best Pattern) 🔥
            {`const handleAdd = useCallback(() => {
                dispatch({ type: "ADD_ITEM" });
}, [dispatch]);

            return <Child onAdd={handleAdd} />;`}
            🔹 Final Summary

            👉 useCallback = memoize function
            👉 Prevents unnecessary re-renders
            👉 Works best with React.memo
            👉 Don’t overuse
        </>
    )
}

export default UseCallback;