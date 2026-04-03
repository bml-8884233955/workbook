import { useMemo } from 'react';
const UseMemo = () => {
    const basicSyntax = `
    const memoizedValue = useMemo(() => {
        return computeValue();
    }, [dependencies]);
`
    const sampleCode = `useMemo (()=> { }, [value]) ;`
    //without useMemo
    // const result = expensiveFunction();

    // with useMemo
    // const result1 = useMemo(() => expensiveFunction(), []);
    //Runs only when dependencies change


    // //Code Template
    // const dataResult = useMemo(() => {
    //     return data.filter((item) => item.active);
    // }, [data]);


    // //Sorting list
    // const sortedList = useMemo(() => {
    //     return [...list].sort((a, b) => a.price - b.price);
    // }, [list]);

    // //Derived State 
    // const cartTotal = useMemo(() => {
    //     return cartTotal.reduce((Sum, item) => sum + item.price, 0);
    // }, [cart]);

    return (
        <>
            <h2 className="text-2xl font-bold text-gray-700">UseMemo</h2>
            <p className="text-base text-gray-700 mb-4"> useMemo is a  React Hook used to memoize(cache) a calculated value</p>
            <p className="text-base text-gray-700 mb-4"> It prevents expensive calculations on every render</p>
            {basicSyntax}
            without useMemo , function will run on every render  - slow performance

            <h3> Important Points</h3>
            <p className="text-base text-gray-700 mb-4">1. Memoizes value(not function), Stores result, not function</p>
            <p className="text-base text-gray-700 mb-4">2. Runs only when value change
                {sampleCode}
            </p>
            <p className="text-base text-gray-700 mb-4">Works for  expensive calculations</p>
            <ul>
                <li> filtering large lisys</li>
                <li>sorting</li>
                <p className="text-base text-gray-700 mb-4"> heavy computations</p>
            </ul>
            <p className="text-base text-gray-700 mb-4">

                7. Common Interview Questions
                ❓ Q1: What is useMemo?

                👉 Hook to memoize computed values.

                ❓ Q2: Difference between useMemo and useEffect?

                👉

                useMemo → returns value
                useEffect → side effects
                ❓ Q3: Does useMemo improve performance?

                👉 Yes, but only for expensive operations.

                ❓ Q4: Can we skip dependencies?

                👉 ❌ No (can cause bugs)

                ❓ Q5: When NOT to use useMemo?

                👉 For simple calculations

                🔹 8. Common Mistakes ❌
                ❌ Overusing useMemo
                {/* const value = useMemo(() => count + 1, [count]); // ❌ unnecessary
                ❌ Missing dependency
useMemo(() => doSomething(data), []); // ❌
                ❌ Using for side effects
useMemo(() => {
                    console.log("Hi"); // ❌
}, []);

                👉 Use useEffect instead

                🔹 9. Cheat Sheet 🚀
useMemo(() => compute(), [deps]) */}

                Caches result
                Runs only when deps change
                Use for heavy calculations
                🔹 10. useMemo vs useCallback ⭐
                Feature	useMemo	useCallback
                Returns	Value	Function
                Use case	Expensive calc	Function memo
                🔹 11. Best Practices ⭐

                ✔ Use only for expensive operations
                ✔ Always include dependencies
                ✔ Don’t overuse
                ✔ Combine with React.memo if needed

                🔹 12. Real-Life Examples
                Filtering large datasets
                Sorting tables
                Calculating totals
                Search optimization
            </p>
        </>
    )
}

export default UseMemo;