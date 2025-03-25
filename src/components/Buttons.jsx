export default function Button({ id, title, onClick }) {
    return (
        <button
            type="button"
            className="btn btn-primary"
            key={id}
            onClick={onClick}
        >
            {title}
        </button>

    )
}