import styles from "./styles.module.css"
import { Outlet } from "react-router-dom";

const { container } = styles;
const MainLayout = () => {
    return (
        <div className={container}>
            <div>
                <Outlet />
            </div>
        </div>
    )
};

export default MainLayout;
