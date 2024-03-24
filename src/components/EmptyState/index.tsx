import "./styles.scss";

type EmptyStateProps = {
    imageEmpty: string;
    title: string;
    description: string;
    children?: React.ReactNode;
}

export const EmptyState = ({ imageEmpty, description, title, children}: EmptyStateProps) => {
    return (
        <div className="container-empty">
            <img src={imageEmpty} alt={`Image ${title}`} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            {children}
        </div>
    )
}