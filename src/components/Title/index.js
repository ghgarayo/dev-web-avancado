import "./Title.css";

export default function Title({title, text}) {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="title display-4">{title}</h1>
                <h6 className="subtitle">{text}</h6>
            </div>
        </div>
    )
}