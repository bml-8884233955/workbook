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


            <p>

                If you’re preparing seriously for a UI React interview (especially with ~10+ years experience), don’t just study random topics—the expectation is depth + real-world understanding.

                Here’s how interviewers usually structure it 👇

                🔥 1. Core JavaScript (Foundation — must be strong)

                They will test this before React

                Key areas:
                Closures
                Hoisting
                this keyword
                Event loop (microtask vs macrotask)
                Promises / async-await
                Debounce & throttle (very common for UI)

                👉 Example question:

                “Implement debounce for search input”

                ⚛️ 2. React Fundamentals (Non-negotiable)
                Must know:
                Functional components vs class (basic idea)
                JSX
                Props vs State
                Controlled vs uncontrolled components
                Lifecycle (via hooks)
                🔥 3. React Hooks (VERY IMPORTANT)

                You’ll definitely get questions here:

                Core hooks:
                useState
                useEffect (deep understanding)
                useRef
                Advanced hooks:
                useMemo
                useCallback
                Custom hooks

                👉 Expect:

                “When does useEffect run?”
                “Dependency array issues?”
                “Avoid infinite loops?”
                🚀 4. Performance Optimization (Senior-level focus)

                This is where many candidates fail.

                Topics:
                React.memo
                useMemo vs useCallback
                Re-rendering behavior
                Virtual DOM concept
                Key prop importance

                👉 Real question:

                “Why is my component re-rendering unnecessarily?”

                🧱 5. Component Design & Architecture
                Expect:
                Reusable components
                Folder structure
                Separation of concerns
                HOC vs Hooks
                Presentational vs Container components
                🌐 6. API Handling & State Management
                Must know:
                Fetch / Axios
                Loading & error handling
                Lifting state up
                State management:
                Context API
                Redux (basics + flow)

                👉 Senior expectation:

                “How do you manage global state in large apps?”

                🎨 7. HTML + CSS (VERY IMPORTANT for UI roles)

                Don’t underestimate this.

                Topics:
                Flexbox & Grid
                Responsive design
                Semantic HTML
                Accessibility (a11y basics)
                CSS specificity

                👉 Example:

                “Center a div vertically & horizontally”

                ⚡ 8. Modern Tools & Ecosystem
                Must know:
                Webpack (basic flow)
                Vite
                npm / yarn
                Environment variables
                🚀 9. Next.js (Very Common Now)
                Topics:
                SSR vs CSR
                Routing
                API routes
                Performance benefits
                🧪 10. Testing (Good to Have / Sometimes Required)
                Jest
                React Testing Library
                🔐 11. Security & Best Practices
                XSS basics
                Sanitizing input
                Token handling
                💼 12. Real-world Scenarios (MOST IMPORTANT)

                This is where interviews are won.

                Expect questions like:
                “Build a search with debounce”
                “Cart system design”
                “Infinite scroll”
                “Form validation (Formik / custom)”
                “Optimize large list rendering”
                🧠 13. Behavioral + Experience

                Since you’re experienced:

                “Tell me a performance issue you solved”
                “Biggest challenge in UI project”
                “How you handled production bug”
                🎯 How to Prioritize (Smart Strategy)
                Step 1:

                👉 JS + Hooks (must strong)

                Step 2:

                👉 Rendering + Performance

                Step 3:

                👉 Real-world problems

                Step 4:

                👉 System design (UI level)
            </p>
        </>
    )
}

export default Intro;