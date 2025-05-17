const Message = ({ age }) => {
    return (
        <p>
            {age > 18 ? "What a beautiful day!" : "You are very young!"}
        </p>
    );
};

export default Message;
