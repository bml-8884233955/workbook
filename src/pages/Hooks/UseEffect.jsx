import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState();
    // const [countNum, setCountNum] = useState();
    const [isActive, setIsActive] = useState();

    // Run once (component did mount)
    useEffect(() => {
        console.log("Mounted");
    }, []);

    // Run on State Change
    useEffect(() => {
        console.log("count changed");
    }, [count]);

    // Run on every render
    useEffect(() => {
        console.log("Run always");
    });

    // Cleanup Effect
    useEffect(() => {
        // const timer = setInterval(() => {
        //     console.log("Running...");
        // }, 1000);


        // setTimeout(() => {
        //     clearInterval(timer);
        // }, 5000); // stops after 5 seconds

        // return () => {
        //     console.log("Cleanup - stopping interval");
        //     clearInterval(timer);
        // }
    }, []);

    // API Call Template
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            console.log(data);
        };
        fetchData();
    }, []);


    // Infinite Loop
    // useEffect(() => {
    //     console.log(countNum);
    //     setCountNum(countNum + 1);

    // }, [countNum]);


    // Event Listner Template

    useEffect(() => {

        let timeout;
        const resetTimer = () => {
            setIsActive(true);

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsActive(false);
                console.log("User inactive -> Logging out...");
            }, 5000); //5 seconds
        };

        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);

        //Start timer initially
        resetTimer();

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
        };

    }, []);

    return (
        <div>
            <h2>useEffect Hook</h2>

            <h3 className="text-2xl font-bold text-gray-700">Status: {isActive ? "Active 🟢" : "Logged out 🔴"}</h3>

            <p className="text-base text-gray-700 mb-4"> useEffect is a  React Hook used to handle side effects in functional components</p>

            <p className="text-base text-gray-700 mb-4"> Examples of side effects </p>
            <ul>
                <li> Api Calls</li>
                <li> Dom Manipulation</li>
                <li> Timers (setTimeout, setInterval)</li>
                <li> Event Listeners</li>
                <li> Logging</li>
            </ul>
            <p className="text-base text-gray-700 mb-4"> Basic Syntax</p>
            <div>
                <ul>
                    <li>This runs after render</li>
                    <li>Executes after component renders</li>
                    <li>Dependency array controls execution</li>
                </ul>
                <div>

                    <p><b>[]</b> - runs once (on mount)</p>
                    <p><b>[value]</b> - runs when value changes</p>
                    <p><b>no array</b> - runs on every render</p>
                </div>

                <ul>
                    <p>Important points</p>
                    <li>Cleanup function</li>
                    <li>Avoid infinite loops</li>
                    <li>Multiple useEffect allowed</li>
                    <li>Execution Flow</li>
                </ul>
            </div >

            <div class="section">
                <h3>Common Interview Questions + Answers</h3>

                <p class="question">Q1: What is useEffect?</p>
                <p class="answer">👉 Used for handling side effects in functional components.</p>

                <p class="question">Q2: What does dependency array do?</p>
                <p class="answer">👉 Controls when effect runs.</p>

                <p class="question">Q3: What happens if no dependency array?</p>
                <p class="answer">👉 Runs after every render.</p>

                <p class="question">Q4: Why cleanup function?</p>
                <p class="answer">👉 Prevent memory leaks.</p>

                <p class="question">Q5: Can we use multiple useEffect?</p>
                <p class="answer">👉 Yes, recommended for separation of logic.</p>
            </div>
            <pre><code>
                🔹 8. Common Mistakes ❌
                ❌ Missing dependency

                {` useEffect(() => {
  console.log(count);
}, []); // ❌
`}
                👉 Fix:
                {`}, [count]);`}

                ❌ Infinite loop
                {`useEffect(() => {
                    setCount(count + 1);
}, [count]); // `}❌
                ❌ Async directly in useEffect
                {`useEffect(async () => { ❌
});
`}
                👉 Fix:
                {`
useEffect(() => {
  const fetchData = async () => { };
                fetchData();
}, []);
`}
                🔹 9. Cheat Sheet 🚀
                {`useEffect(() => { }, [])        → run once
                    useEffect(() => { }, [state])   → run on state change
                    useEffect(() => { })            → run always

                    return () => { }                → cleanup 
                    `}
            </code></pre>
            <h2 className="text-2xl font-bold text-gray-700">10. Real - Life Use Cases</h2>
            <ul>
                <li>Fetch API data</li>
                <li>Track user actions</li>
                <li>Form validation</li>
                <li>Animations</li>
                <li>Subscriptions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700">11. Best Practices</h2>
            <div>
                <p>✔ Keep effects small</p>
                <p>✔ Use multiple effects</p>
                <p>✔ Always clean up</p>
                <p>✔ Avoid unnecessary dependencies</p>
                <p>✔ Don’t overuse useEffect</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-700">Final Summary</h2>
            <p className="text-base text-gray-700 mb-4">👉 useEffect = handle side effects</p>
            <p className="text-base text-gray-700 mb-4">👉 Dependency array = control execution</p>
            <p className="text-base text-gray-700 mb-4">👉 Cleanup = avoid leaks</p>
            <p className="text-base text-gray-700 mb-4">👉 Use multiple effects for clarity</p>


            < button onCpck={() => setCount(count + 1)}> Click + </button >
        </div >

    );
}

export default UseEffect;