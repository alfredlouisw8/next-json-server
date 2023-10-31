"use client";

import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Stack, TextField } from "@mui/material";
import { User } from "@/types";

const validationSchema = yup.object({
	first_name: yup.string().required("First name is required"),
	last_name: yup.string().required("Last name is required"),
	email: yup
		.string()
		.email("Enter a valid email")
		.required("Email is required"),
	gender: yup.string().required("Gender is required"),
});

type Props = {
	initialValues: Partial<User>;
	handleSubmit: (values: Partial<User>) => Promise<void>;
};

export default function Form({ initialValues, handleSubmit }: Props) {
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: handleSubmit,
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Stack direction="column" gap="10px">
				<TextField
					fullWidth
					id="first_name"
					name="first_name"
					label="First Name"
					value={formik.values.first_name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.first_name && Boolean(formik.errors.first_name)}
					helperText={formik.touched.first_name && formik.errors.first_name}
				/>
				<TextField
					fullWidth
					id="last_name"
					name="last_name"
					label="Last Name"
					value={formik.values.last_name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.last_name && Boolean(formik.errors.last_name)}
					helperText={formik.touched.last_name && formik.errors.last_name}
				/>
				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id="gender"
					name="gender"
					label="Gender"
					value={formik.values.gender}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.gender && Boolean(formik.errors.gender)}
					helperText={formik.touched.gender && formik.errors.gender}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</Stack>
		</form>
	);
}
