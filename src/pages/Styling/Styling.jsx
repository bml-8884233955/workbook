import styles from "./Styling.module.css"

const Styling = () => {
    return (
        <>
            <h3>Styling Approaches in React</h3>
            <ul>
                <li> Inline Styles</li>
                <li> Css Modules</li>
                <li>Styled Components</li>
                <li>Tailwind CSS</li>
            </ul>
            <p>
                <button style={{ backgroundColor: 'blue', color: "white" }}>
                    Inline Style
                </button>
            </p>


            <p>
                <button className={styles.button}>Style Module</button>
            </p>
            <p>
                <button className="bg-green-500 text-white p-6">Tail Wind</button>
            </p >

        </>
    )
}

export default Styling;