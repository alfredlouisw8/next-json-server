"use client";
import { getUsers, updateUser } from "@/services/userService";
import { User } from "@/types";
import toast from "react-hot-toast";
import Form from "./Form";
import { useRouter } from "next/navigation";

type Props = {
	initialUser: User;
};

export default function EditForm({ initialUser }: Props) {
	const router = useRouter();
	const handleSubmit = async (values: Partial<User>) => {
		try {
			await updateUser(initialUser.id, values);

			toast.success("User updated");
			window.location.replace("/");
		} catch (error) {
			toast.error("error");
		}
	};
	return <Form initialValues={initialUser} handleSubmit={handleSubmit} />;
}
