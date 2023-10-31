import EditForm from "@/components/EditForm";
import Form from "@/components/Form";
import { getUser, updateUser } from "@/services/userService";
import { User } from "@/types";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default async function EditUser({
	params: { id },
}: {
	params: { id: string };
}) {
	const { data: initialUser } = await getUser(id);

	return (
		<div>
			<EditForm initialUser={initialUser} />
		</div>
	);
}
