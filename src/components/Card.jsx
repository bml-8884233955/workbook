import "./Card.css";

function Card({ title, description, children, cardClicked, isSelected }) {
    return (
        <>

            <div className={`card ${isSelected ? "card--active" : ""}`} onClick={cardClicked}>
                <h3 className="card_title">{title}</h3>
                <p className="card_description">{description}</p>
                {/* Extra content (butons, links, etc.) */}
                {children}
            </div>
        </>
    )
};

export default Card;