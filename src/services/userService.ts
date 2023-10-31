import { User } from "@/types";
import { BASE_API_URL, TOTAL_PER_PAGE } from "@/utils/const";
import axios from "axios";

export async function getUsers(page = 1, search = "", sort = "", order = "") {
	let url = `${BASE_API_URL}/users?_page=${page}&_limit=${TOTAL_PER_PAGE}&q=${search}`;
	if (sort && order) {
		url += `&_sort=${sort}&_order=${order}`;
	}
	const response = await axios.get<User[]>(url);
	const totalCount = response.headers["x-total-count"];
	const data = response.data;

	return { data, totalCount };
}

export async function getUser(id: string) {
	let url = `${BASE_API_URL}/users/${id}`;

	const response = await axios.get<User>(url);
	const data = response.data;

	return { data };
}

export async function createUser(user: Partial<User>) {
	return await axios.post(`${BASE_API_URL}/users`, user, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function updateUser(id: number, user: Partial<User>) {
	return await axios.put(`${BASE_API_URL}/users/${id}`, user, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export async function deleteUser(id: number) {
	return await axios.delete(`${BASE_API_URL}/users/${id}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
}
