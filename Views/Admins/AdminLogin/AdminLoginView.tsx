import { PMAdminLogin } from "@/PMs/Admins/AdminLogin/AdminLoginPM";

import "./AdminLoginStyle.css";
import { useEffect } from "react";

interface propsType {
	pm: PMAdminLogin;
}

export default function AdminLoginView({ pm }: propsType) {
	useEffect(() => {
		document.title = "Login";
	});

	return (
		<div className="login-container">
			<div className="logo">
				<img src="/dumble.png" alt="logo" />
			</div>
			<form
				className="login-form"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					type="email"
					placeholder="AUC Email"
					className="input-field"
					value={pm.email}
					onChange={(e) => {
						pm.email = e.target.value;
						pm.onEmailChange();
					}}
				/>
				<div className="password-container">
					<input
						type="password"
						placeholder="Password"
						className="input-field"
						value={pm.password}
						onChange={(e) => {
							pm.password = e.target.value;
							pm.onPasswordChange();
						}}
					/>
					<span className="show-password"></span>
				</div>
				<label className="remember-me">
					<input
						type="checkbox"
						checked={pm.rememberme}
						onChange={(e) => {
							pm.rememberme = e.target.checked;
							pm.onRememberChange();
						}}
					/>
					&nbsp;Remember Me
				</label>
				<button type="submit" className="login-button" onClick={pm.onLOGIN}>
					LOGIN
				</button>
			</form>
		</div>
	);
}
