import "react-native-get-random-values"; // Required for secure randomness
import * as Crypto from "expo-crypto";

export async function hashObject(obj: any) {
	const str = JSON.stringify(obj);
	const hash = await Crypto.digestStringAsync(
		Crypto.CryptoDigestAlgorithm.SHA256,
		str,
		{
			encoding: Crypto.CryptoEncoding.HEX,
		}
	);
	return hash;
}
