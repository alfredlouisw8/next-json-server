import { deleteUser, getUsers } from "@/services/userService";
import { Order, User } from "@/types";
import { getSortOrder } from "@/utils";
import { useState } from "react";
import toast from "react-hot-toast";

type Params = {
	initialUsers: User[];
	initialTotalCount: number;
};

export default function useUsers({ initialUsers, initialTotalCount }: Params) {
	const [users, setUsers] = useState(initialUsers);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");
	const [totalCount, setTotalCount] = useState(initialTotalCount);
	const [sort, setSort] = useState("");
	const [order, setOrder] = useState("");

	const handlePageChange = async (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		const { data } = await getUsers(value, search, sort, order);
		setUsers(data);
		setPage(value);
	};

	const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const { data, totalCount } = await getUsers(1, search, sort, order);
		setUsers(data);
		setTotalCount(totalCount);
	};

	const handleSort = async (slug: string) => {
		if (slug === "action") return;

		let currentOrder = "";
		if (sort === slug) {
			setOrder((prev) => {
				currentOrder = getSortOrder(prev);
				return currentOrder;
			});
		} else {
			setSort(slug);
			currentOrder = Order.Ascending;
			setOrder(currentOrder);
		}
		const { data } = await getUsers(page, search, slug, currentOrder);
		setUsers(data);
	};

	const handleDelete = async (id: number) => {
		try {
			await deleteUser(id);

			const { data, totalCount } = await getUsers(1, search, sort, order);
			setUsers(data);
			setTotalCount(totalCount);

			toast.success("User deleted");
		} catch (error) {
			toast.error("error");
		}
	};

	return {
		users,
		sort,
		order,
		search,
		totalCount,
		page,
		handlePageChange,
		handleDelete,
		handleSort,
		handleSearch,
		setSearch,
	};
}
