import { Stack } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
	return (
		<Stack direction="row" gap="20px" style={{ marginBottom: "50px" }}>
			<Link href="/">Home</Link>
			<Link href="/users/new">Add User</Link>
		</Stack>
	);
}
