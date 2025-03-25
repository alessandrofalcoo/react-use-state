export default function Button({ id, title }) {
    return (
        <button
            type="button"
            className="btn btn-primary"
            key={id}
        >
            {title}
        </button>

    )
}