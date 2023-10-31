export type User = {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
};

export enum Order {
	Ascending = "asc",
	Descending = "desc",
}

export type GetUsersResponse = {
	data: User[];
};
