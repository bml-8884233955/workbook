function Intro() {
    return (
        <>
            <h1> Getting Started and Basic concepts</h1>
            <ul>
                <li>JSX & rendering elements</li>
                <li>Components (Function vs Class) </li>
                <li>Props & State</li>
                <li>Conditional rendering</li>
                <li>Lists & Keys</li>
                <li>Handling Events</li>
                <li>Controlled vs uncontrolled components</li>
                <li> Virtual DOM and reconciliation</li>
                <li>Component Life cycle (for class components and function components)</li>
                <li>Higher Order Components</li>
                <li>React Fragments</li>
                <li>Strict Mode</li>
                <li> Render Props</li>
                <li>Portals</li>
            </ul>
            <p> Don’t just study random topics—the expectation is depth + real-world understanding.</p>

            <div className="divide-y">
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        🔥 1. Core JavaScript (Foundation — must be strong)

                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        They will test this before React

                        Key areas:
                        <ul>
                            <li>Closures</li>
                            <li>Hoisting</li>
                            <li>this keyword</li>
                            <li>Event loop (microtask vs macrotask)</li>
                            <li>Promises / async-await</li>
                            <li> Debounce & throttle (very common for UI)</li>
                        </ul>

                        👉 Example question:

                        “Implement debounce for search input”
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        ⚛️ 2. React Fundamentals (Non-negotiable)
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        Must know:
                        <ul>
                            <li>Functional components vs class (basic idea)</li>
                            <li>JSX</li>
                            <li>Props vs State</li>
                            <li>Controlled vs uncontrolled components</li>
                            <li>Lifecycle (via hooks)</li>
                        </ul>
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        🔥 3. React Hooks (VERY IMPORTANT)
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        Core hooks:
                        <ul>
                            <li>useState</li>
                            <li>useEffect (deep understanding)</li>
                            <li>useRef</li>
                            Advanced hooks:
                            <li>useMemo</li>
                            <li>useCallback</li>
                            <li>Custom hooks</li>
                        </ul>
                        👉 Expect:

                        “When does useEffect run?”
                        “Dependency array issues?”
                        “Avoid infinite loops?”
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        🚀 4. Performance Optimization (Senior-level focus)
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        This is where many candidates fail.

                        Topics:
                        <ul>
                            <li>React.memo</li>
                            <li>useMemo vs useCallback</li>
                            <li>Re-rendering behavior</li>
                            <li>Virtual DOM concept</li>
                        </ul>

                        Key prop importance

                        👉 Real question:

                        “Why is my component re-rendering unnecessarily?”
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        🧱 5. Component Design & Architecture
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        Expect:
                        <ul>
                            <li>Reusable components</li>
                            <li>Folder structure</li>
                            Separation of concerns
                            <li>HOC vs Hooks</li>
                            <li>Presentational vs Container components</li>
                        </ul>
                    </p>
                </div>


                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        🌐 6. API Handling & State Management
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        Must know:
                        <ul>
                            <li> Fetch / Axios</li>
                            <li> Loading & error handling</li>
                            <li>Lifting state up</li>
                            State management:
                            <li>Context API</li>
                            <li>Redux (basics + flow)</li>
                        </ul>

                        👉 Senior expectation:

                        “How do you manage global state in large apps?”
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        🎨 7. HTML + CSS (VERY IMPORTANT for UI roles)
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        Don’t underestimate this.

                        Topics:
                        <ul>
                            <li>Flexbox & Grid</li>
                            <li>Responsive design</li>
                            <li>Semantic HTML</li>
                            <li>Accessibility (a11y basics)</li>
                            <li>CSS specificity</li>
                        </ul>

                        👉 Example:

                        “Center a div vertically & horizontally”
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        ⚡ 8. Modern Tools & Ecosystem
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        Must know:
                        <ul>
                            <li>Webpack (basic flow)</li>
                            <li>Vite</li>
                            <li>npm / yarn</li>
                            <li>Environment variables</li>
                        </ul>
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        🚀 9. Next.js (Very Common Now)

                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        Topics:
                        <ul>
                            <li> SSR vs CSR</li>
                            <li>Routing</li>
                            <li>API routes</li>
                            <li>Performance benefits</li>
                        </ul>
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">

                        🧪 10. Testing (Good to Have / Sometimes Required)
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        <ul>
                            <li>Jest</li>
                            <li>React Testing Library</li>
                        </ul>
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        🔐 11. Security & Best Practices
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        <ul>
                            <li>XSS basics</li>
                            <li>Sanitizing input</li>
                            <li>Token handling</li>
                        </ul>
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">
                        💼 12. Real-world Scenarios (MOST IMPORTANT)
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        This is where interviews are won.

                        Expect questions like:
                        <ul>
                            <li>“Build a search with debounce”</li>
                            <li>“Cart system design”</li>
                            <li>“Infinite scroll”</li>
                            <li>“Form validation (Formik / custom)”</li>
                            <li>“Optimize large list rendering”</li>
                        </ul>
                    </p>
                </div>
                <div className="py-3">
                    <h4 className="text-lg text-gray-600">

                        🧠 13. Behavioral + Experience
                    </h4>
                    <p className="text-base font-medium text-gray-900">
                        Since you’re experienced:

                        <ul>
                            <li>“Tell me a performance issue you solved”</li>
                            <li>“Biggest challenge in UI project”</li>
                            <li>“How you handled production bug”</li>
                        </ul>

                        🎯 How to Prioritize (Smart Strategy)

                        <ul>
                            <li>Step 1:

                                👉 JS + Hooks (must strong)</li>
                            <li>Step 2:

                                👉 Rendering + Performance</li>
                            <li> Step 3:

                                👉 Real-world problems</li>
                            <li>Step 4:

                                👉 System design (UI level)</li>
                        </ul>







                    </p>
                </div>
            </div>
        </>
    )
}

export default Intro;