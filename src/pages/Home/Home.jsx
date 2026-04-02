import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";

function Home() {
    const navigate = useNavigate();
    const navigateToPage = (path) => {
        navigate(path);
    }

    return (
        <>
            <h1>Welcome to ReactLab 🚀</h1>
            <p>A place to practice and explore React concepts</p>
            <div style={{ display: "flex", gap: "20px" }}>
                <Card title="Hooks" description="Learn useState, useEffect" cardClicked={() => navigateToPage("/hooks")} />
                <Card title="Props" description="Understand data passing" cardClicked={() => navigateToPage("/props")} />
                <Card title="Forms" description="Handle inputs" cardClicked={() => navigateToPage("/forms")} />
                <Card title="Styling" description="Styling" cardClicked={() => navigateToPage("/style")} />
            </div>

            <p>
                This is a practice application to learn and explore React concepts like
                components, props, hooks, routing, and performance optimization.
            </p>

            <h2>What you can do here:</h2>
            <ul>
                <li>Learn React basics and advanced concepts</li>
                <li>See working code examples</li>
                <li>Practice UI components</li>
                <li>Prepare for interviews</li>
            </ul>

            <h3>Start Learning:</h3>
            <p>Select a topic from the sidebar to begin 🚀</p>
        </>
    )
}

export default Home;