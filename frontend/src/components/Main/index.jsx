import styles from "./styles.module.css";
import Home1 from "../../Pages/Home/Home1";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			{/* <nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav> */}
			<Home1 />

		</div>
	);
};

export default Main;
