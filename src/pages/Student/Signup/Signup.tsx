import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../axios";

export default function Signup() {
	const userInfo = useRef({});

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (
		ev: React.FormEvent<HTMLFormElement>
	) => {
		ev.preventDefault();
		console.log(userInfo.current);
		axiosClient
			.post("/signup", userInfo.current)
			.then((data) => {
				console.log(data);
			})
			.catch(
				(error: {
					response: {
						data: {
							errors: string[];
						};
					};
				}) => {
					if (error.response) {
						const errors = Object.values(error.response.data.errors).reduce(
							(acc: string[], next) => {
								console.log(next);
								return [...acc, ...next];
							},
							[]
						);
						console.log(errors);
					}
				}
			);
	};
	return (
		<>
			<h2 className="-mt-5 mb-10  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
				Sign Up For Free
			</h2>

			<form
				onSubmit={(ev: React.FormEvent<HTMLFormElement>) => onSubmit(ev)}
				className="space-y-6"
			>
				<div>
					<label
						htmlFor="full-name"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Full Name
					</label>
					<div className="mt-2">
						<input
							onChange={(ev) =>
								(userInfo.current = {
									...userInfo.current,
									name: ev.target.value,
								})
							}
							id="full-name"
							name="name"
							type="text"
							required
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Full Name"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Email address
					</label>
					<div className="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							onChange={(ev) =>
								(userInfo.current = {
									...userInfo.current,
									email: ev.target.value,
								})
							}
						/>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<label
							htmlFor="password"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Password
						</label>
						<div className="text-sm">
							<a
								href="#"
								className="font-semibold text-indigo-600 hover:text-indigo-500"
							>
								Forgot password?
							</a>
						</div>
					</div>
					<div className="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="current-password"
							required
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							onChange={(ev) =>
								(userInfo.current = {
									...userInfo.current,
									password: ev.target.value,
								})
							}
						/>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<label
							htmlFor="password-confirmation"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Password Confirmation
						</label>
					</div>
					<div className="mt-2">
						<input
							id="password-confirmation"
							name="password_confirmation"
							type="password"
							required
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Password Confirmation"
							onChange={(ev) => {
								userInfo.current = {
									...userInfo.current,
									password_confirmation: ev.target.value,
								};
							}}
						/>
					</div>
				</div>
				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sign Up
					</button>
				</div>
			</form>

			<p className="mt-10 text-center text-sm text-gray-500">
				you are a member?
				<Link
					className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
					to={"/login"}
					replace={true}
				>
					sing in with you account
				</Link>
			</p>
		</>
	);
}
