import { useRef, useState, useEffect } from "react";

function UseRef() {

    //Access DOM Element
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus();
    }

    //Store Previous Value
    const [count, setCount] = useState(0);
    const prevCount = useRef(0);
    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    //Timer/Interval ID

    //Avoid Re-Render (Mutable Storage)

    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current++;
        console.log(countRef.current);
    }


    return (
        <>
            <h2 className="text-2xl font-bold text-gray-700"> What is useRef?</h2>
            <p className="text-base text-gray-700 mb-4">
                useRef is a React Hook used to:
                <ul>
                    <li>
                        Access Dom elements Directly
                    </li>
                    <li>
                        Store mutable values that do NOT cause re-render
                    </li>
                </ul>
            </p>
            <p className="text-base text-gray-700 mb-4">
                Basic Syntax
                const ref = useRef(initialValue);

                Access Value:
                ref.current
            </p>
            <div>
                Key Difference from useState ⭐
                Feature	useState	useRef
                Causes re-render	✅ Yes	❌ No
                Stores value	✅ Yes	✅ Yes
                Mutable	❌ No	✅ Yes
            </div>

            <ul>
                <li>
                    1. Does NOT trigger re-render

                    ref.current = 10;

                </li>
                <li>
                    2. Value persists across renders

                    const inputRef = useRef();

                    {/* <unput ref={inputRef} /> */}
                </li>
                <li>
                    3. .current holds value
                    console.log(ref.current);
                </li>
            </ul>
            <div>
                <h2 className="text-2xl font-bold text-gray-700"> use Ref common use cases</h2>
                <p className="text-base text-gray-700 mb-4">Access DOM Element</p>
                <input ref={inputRef} />
                <button onClick={handleFocus}> Focus</button>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-gray-700"> Store Previous Value</h2>
                <h2 className="text-2xl font-bold text-gray-700">Current: {count}</h2>
                <h2 className="text-2xl font-bold text-gray-700">Previous: {prevCount.current}</h2>

                <button onClick={() => setCount(prev => prev + 1)}>
                    Increment
                </button>
            </div>
            <div>
                <p className="text-base text-gray-700 mb-4">2. Store Previous Value</p>
                <p className="text-base text-gray-700 mb-4">3. Timer/Interval ID</p>
                <p className="text-base text-gray-700 mb-4">AVoid Re-render(Mutable Storage)</p>
            </div>
            <div>
                <h3>Common Interview Questions</h3>
                <div>
                    ❓ Q1: What is useRef? <br />

                    👉 Hook to store mutable value without re-render.
                </div>

                <div>
                    ❓ Q2: Difference between useRef and useState?<br />

                    👉 useRef does NOT re-render.
                </div>

                <div>
                    ❓ Q3: When to use useRef?<br />

                    👉 DOM access, timers, previous values.
                </div>

                <div>
                    ❓ Q4: Can useRef trigger UI update?<br />

                    👉 ❌ No
                </div>

                <div>
                    ❓ Q5: Does value persist?<br />

                    👉 ✅ Yes across renders
                </div>


                <p className="text-base text-gray-700 mb-4">
                    <h3>Common Mistakes ❌</h3>
                    ❌ Expecting re-render<br />
                    ref.current = 5; //<br />
                    ❌ UI won't update<br />
                    ❌ Not checking null<br />
                    inputRef.current.focus(); //<br />
                    ❌ may crash<br />

                    👉 Fix:<br />

                    inputRef.current?.focus();<br />
                    ❌ Overusing instead of state<br />

                    👉 Use useState when UI needs update<br />
                </p>
                <p className="text-base text-gray-700 mb-4">
                    <h3>Cheat Sheet 🚀</h3>
                    const ref = useRef(value)<br />

                    ref.current → access/update<br />

                    No re-render<br />
                    Used for DOM + mutable values<br />
                </p>

                <p className="text-base text-gray-700 mb-4">
                    <h3>Best Practices ⭐</h3>

                    ✔ Use for DOM operations<br />
                    ✔ Use for storing non-UI data<br />
                    ✔ Don’t replace state unnecessarily<br />
                    ✔ Always check .current<br />
                </p>


                <p className="text-base text-gray-700 mb-4">
                    <h3>When to Use useRef</h3>

                    👉 Use when:

                    You need DOM access<br />
                    You don’t want re-render<br />
                    Store timers / previous values<br />
                </p>

                <p className="text-base text-gray-700 mb-4">
                    <h3>Real-Life Examples</h3>
                    Focus input field<br />
                    Scroll to element<br />
                    Store interval ID<br />
                    Track previous state<br />
                </p>

                <p className="text-base text-gray-700 mb-4">
                    <h3>Final Summary</h3>

                    👉 useRef = mutable storage + DOM access <br />
                    👉 No re-render<br />
                    👉 .current holds value<br />
                    👉 Best for performance cases<br />
                </p>

            </div >
        </>

    )
}

export default UseRef;