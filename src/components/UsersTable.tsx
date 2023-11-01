"use client";

import { Order, User } from "@/types";
import { getSortOrder, getTotalPages } from "@/utils";
import {
	Button,
	Pagination,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Link from "next/link";
import { deleteUser, getUsers } from "@/services/userService";
import toast from "react-hot-toast";
import useUsers from "@/hooks/useUsers";

type Props = {
	users: User[];
	totalCount: number;
};

const columns = [
	{
		title: "#",
		slug: "id",
	},
	{
		title: "First Name",
		slug: "first_name",
	},
	{
		title: "Last Name",
		slug: "last_name",
	},
	{
		title: "Email",
		slug: "email",
	},
	{
		title: "Gender",
		slug: "gender",
	},
	{
		title: "Action",
		slug: "action",
	},
];

export default function UsersTable({
	users: initialUsers,
	totalCount: initialTotalCount,
}: Props) {
	const {
		users,
		sort,
		order,
		search,
		page,
		handlePageChange,
		handleDelete,
		handleSort,
		handleSearch,
		setSearch,
		totalCount,
	} = useUsers({ initialUsers, initialTotalCount });

	return (
		<TableContainer>
			<Stack direction="row" alignItems="center">
				<TextField
					id="standard-basic"
					label="Search"
					variant="standard"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<Button onClick={handleSearch} variant="contained">
					Search
				</Button>
			</Stack>

			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell
								onClick={(e) => handleSort(column.slug)}
								key={column.title}
							>
								{column.title}{" "}
								{column.slug === sort && (
									<>
										{order === Order.Ascending && <ArrowUpwardIcon />}
										{order === Order.Descending && <ArrowDownwardIcon />}
									</>
								)}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((row) => (
						<TableRow
							key={row.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.first_name}</TableCell>
							<TableCell>{row.last_name}</TableCell>
							<TableCell>{row.email}</TableCell>
							<TableCell>{row.gender}</TableCell>
							<TableCell>
								<Link href={`/users/${row.id}`} style={{ marginRight: "5px" }}>
									Edit
								</Link>
								<a onClick={(e) => handleDelete(row.id)}>Delete</a>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination
				count={getTotalPages(totalCount)}
				page={page}
				onChange={handlePageChange}
			/>
		</TableContainer>
	);
}
