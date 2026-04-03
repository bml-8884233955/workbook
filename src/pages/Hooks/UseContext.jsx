import { UserContext } from "./userContext";
import { useContext } from "react";

function UseContext() {
    const user = useContext(UserContext);
    return (
        <>
            <h2 className="text-2xl font-bold text-gray-700"> What is useContext?</h2>
            <h4>Context Value printed :::: {user.user.name}</h4>
            <p className="text-base text-gray-700 mb-4"> useContext is a React Hook used to access data from a Context without prop drilling
                It allows yiu to share data globally across components
            </p>

            <h3>When to Use Context API</h3>
            <ul>
                <li>
                    Authentication(user Data)
                    {`{
                        user: {name: "Bimal", role: "Admin" },
                    isLoggedIn: true
                    }`}

                </li>
                <li> Theme (dark/light) mode
                    {`{
                        theme: "dark",
                        toggleTheme: () => {}
                        }`}
                </li>

                <li> Languague
                    {`{
                        language: "en",
                        changeLanguage: () => {}
                    }`}
                </li>
                <li>Global Settings</li>
                <li>App Config
                    {`{
                    apiUrl: "https://api.example.com",
                    appVersion: "1.0"
                    }`}
                </li>
            </ul>

            <h3> Core Concepts</h3>
            <p className="text-base text-gray-700 mb-4">
                <li>Concept	Purpose</li>
                <li>createContext	Create context</li>
                <li>Provider	Provide data</li>
                <li>useContext	Consume data</li>
            </p>

        </>
    )
}

export default UseContext;