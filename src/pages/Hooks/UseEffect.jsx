import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState();
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
        const timer = setInterval(() => {
            console.log("Running...");
        }, 1000);


        // setTimeout(() => {
        //     clearInterval(timer);
        // }, 5000); // stops after 5 seconds

        return () => {
            console.log("Cleanup - stopping interval");
            clearInterval(timer);
        }
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
            <h1>useEffect Hook</h1>

            <h2>Status: {isActive ? "Active 🟢" : "Logged out 🔴"}</h2>

            <p> useEffect is a  React Hook used to handle side effects in functional components</p>

            <p> Examples of side effects </p>
            <ul>
                <li> Api Calls</li>
                <li> Dom Manipulation</li>
                <li> Timers (setTimeout, setInterval)</li>
                <li> Event Listeners</li>
                <li> Logging</li>
            </ul>
            <p> Basic Syntax</p>
            <div>
                <ul>
                    <li>This runs after render</li>
                    <li>Executes after component renders</li>
                    <li>Dependency array controls execution</li>
                </ul>

                <ul>
                    <li><b>[]</b> - runs once (on mount)</li>
                    <li><b>[value]</b> - runs when value changes</li>
                    <li><b>no array</b> - runs on every render</li>
                </ul>

                <ul>
                    <li>Cleanup function</li>
                    <li>Avoid infinite loops</li>
                    <li>Multiple useEffect allowed</li>
                    <li>Execution Flow</li>
                </ul>
            </div>

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

            {/* 🔹 8. Common Mistakes ❌
❌ Missing dependency
useEffect(() => {
  console.log(count);
}, []); // ❌

👉 Fix:

}, [count]);
❌ Infinite loop
useEffect(() => {
  setCount(count + 1);
}, [count]); // ❌
❌ Async directly in useEffect
useEffect(async () => { ❌
});

👉 Fix:

useEffect(() => {
  const fetchData = async () => {};
  fetchData();
}, []);
🔹 9. Cheat Sheet 🚀
useEffect(() => {}, [])        → run once
useEffect(() => {}, [state])   → run on state change
useEffect(() => {})            → run always

return () => {}                → cleanup */}
            <h2>10. Real - Life Use Cases</h2>
            <ul>
                <li>Fetch API data</li>
                <li>Track user actions</li>
                <li>Form validation</li>
                <li>Animations</li>
                <li>Subscriptions</li>
            </ul>

            <h2>11. Best Practices</h2>
            <ul>
                <li>✔ Keep effects small</li>
                <li>✔ Use multiple effects</li>
                <li>✔ Always clean up</li>
                <li>✔ Avoid unnecessary dependencies</li>
                <li>✔ Don’t overuse useEffect</li>
            </ul>

            <h2>Final Summary</h2>
            <p>👉 useEffect = handle side effects</p>
            <p>👉 Dependency array = control execution</p>
            <p>👉 Cleanup = avoid leaks</p>
            <p>👉 Use multiple effects for clarity</p>


            < button onClick={() => setCount(count + 1)}> Click + </button >
        </div >

    );
}

export default UseEffect;