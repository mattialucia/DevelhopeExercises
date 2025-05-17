import Age from "./Age";
import Message from './Message';

const Welcome = ({ name = "user", age }) => {
    return (
        <div className="welcome">
            <p>Welcome, <strong>{name}</strong>!</p>

            {/* Conditional Renderings */}
            {age > 18 && <Age age={age} />}
            {age && <Age age={age} />}
            {age > 18 && age < 65 && <Age age={age} />}
            {age > 18 && name === "John" && <Age age={age} />}

            <Message age={age} />
        </div>
    );
};

export default Welcome;
