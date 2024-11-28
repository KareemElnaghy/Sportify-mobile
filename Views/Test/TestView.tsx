import { PMTest } from "@/PMs/Test/TestPM";

interface TestProps {
	pm: PMTest;
}

export default function TestView({ pm }: TestProps) {
	return (
		<div>
			Hello {pm.someModelVal}
			<input
				type="text"
				style={{
					color: "black",
				}}
				value={pm.someViewVal}
				onChange={(e) => {
					pm.someViewVal = e.target.value;
					pm.onChange();
				}}
			/>
		</div>
	);
}
