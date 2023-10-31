import { User } from "@/types";
import axios from "axios";
import { BASE_API_URL, TOTAL_PER_PAGE } from "./const";

export function getTotalPages(totalCount: number) {
	return Math.ceil(totalCount / TOTAL_PER_PAGE);
}

export function getSortOrder(currentOrder: string) {
	if (currentOrder === "") {
		return "asc";
	}
	if (currentOrder === "asc") {
		return "desc";
	}
	if (currentOrder === "desc") {
		return "";
	}
	return "";
}
