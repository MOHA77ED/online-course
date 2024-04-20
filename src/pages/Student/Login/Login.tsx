import { Link } from "react-router-dom";
import axiosClient from "../../../axios";
import { useRef } from "react";

function Login() {
	const credentails = useRef({});
	const onSubmit: React.FormEventHandler<HTMLFormElement> = (
		ev: React.FormEvent<HTMLFormElement>
	) => {
		ev.preventDefault();
		axiosClient
			.post("/login", credentails.current)
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<h2 className="-mt-5 mb-10  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
				Sign In to your account
			</h2>

			<form
				className="space-y-6"
				onSubmit={(ev: React.FormEvent<HTMLFormElement>) => onSubmit(ev)}
			>
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
								(credentails.current = {
									...credentails.current,
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
								(credentails.current = {
									...credentails.current,
									password: ev.target.value,
								})
							}
						/>
					</div>
				</div>
				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sign in
					</button>
				</div>
			</form>
			<p className="mt-10 text-center text-sm text-gray-500">
				you are not a member ?
				<Link
					className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
					replace={true}
					to={"/signup"}
				>
					Sign Up For Free
				</Link>
			</p>
		</>
	);
}

export default Login;
