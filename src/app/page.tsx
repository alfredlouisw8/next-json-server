import Navbar from "@/components/Navbar";
import UsersTable from "@/components/UsersTable";
import { getUsers } from "@/services/userService";
import { Stack } from "@mui/material";
import Link from "next/link";

export default async function Home() {
	const { data: users, totalCount } = await getUsers();

	return (
		<>
			<UsersTable users={users} totalCount={totalCount} />
		</>
	);
}
