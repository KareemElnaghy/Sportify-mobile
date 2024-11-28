import { PMLogin } from "@/PMs/Auth/LoginPM";

// import "./AdminLoginStyle.css";
import { styles } from "./LoginStyles";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Checkbox from "expo-checkbox";

interface propsType {
	pm: PMLogin;
}

export default function LoginView({ pm }: propsType) {
	return (
		<View style={styles.main_container}>
			{/* <Image source={} src="/" /> */}
			{/* <div className="logo">
				<img src="/dumble.png" alt="logo" />
			</div> */}
			<TextInput
				// style={styles.}
				placeholder="AUC Email"
				className="input-field"
				value={pm.email}
				onChangeText={(t) => {
					pm.email = t;
					pm.onEmailChange();
				}}
			/>
			<View className="password-container">
				<TextInput
					placeholder="Password"
					className="input-field"
					value={pm.password}
					onChangeText={(t) => {
						pm.password = t;
						pm.onPasswordChange();
					}}
				/>
				{/* <span className="show-password"></span> */}
			</View>
			<View className="remember-me">
				<Checkbox
					value={pm.rememberme}
					onValueChange={(v) => {
						pm.rememberme = v;
						pm.onRememberChange();
					}}
					color={pm.rememberme ? "#4630EB" : undefined}
				/>
				<Text>Remember Me</Text>
			</View>
			<Pressable onPress={pm.onLOGIN}>
				<Text>LOGIN</Text>
			</Pressable>
		</View>
	);
}
