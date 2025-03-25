export default function Button({ id, title, onClick, color }) {
    return (
        <button
            type="button"
            className={`btn ${color} `}
            key={id}
            onClick={onClick}
        >
            {title}
        </button>

    )
}