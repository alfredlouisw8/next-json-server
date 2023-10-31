"use client";

import { createUser } from "@/services/userService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { User } from "@/types";
import Form from "@/components/Form";

export default function AddUser() {
	const router = useRouter();

	const handleSubmit = async (values: Partial<User>) => {
		try {
			await createUser(values);

			toast.success("User created");
			router.replace("/");
		} catch (error) {
			toast.error("error");
		}
	};

	const initialValues: Partial<User> = {
		first_name: "",
		last_name: "",
		email: "",
		gender: "",
	};

	return (
		<div>
			<Form initialValues={initialValues} handleSubmit={handleSubmit} />
		</div>
	);
}
