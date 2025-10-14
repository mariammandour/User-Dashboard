import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Not Found</p>
            <Link to="/" replace={true}>
                How about going back to safety?
            </Link>
        </div>
    )
}

export default Error