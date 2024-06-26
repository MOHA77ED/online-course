import {
	ClockIcon,
	ShoppingCartIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import { PhotoIcon, StarIcon } from "@heroicons/react/24/solid";
import { BiBookmarkAltPlus } from "react-icons/bi";
type Course = {
	title: string;
	rate: number;
	users: number;
	time: string;
	courseImage: string | null;
	teacher: {
		image: string | null;
		firstName: string;
		lastName: string;
	};
	price: string;
};
type CourseCartType = {
	course: Course;
};

function getRate(rate: number): boolean[] {
	const rates: boolean[] = [];
	for (let i = 1; i <= 5; i++) {
		if (i <= rate) {
			rates.push(true);
		} else {
			rates.push(false);
		}
	}
	return rates;
}
export default function CourseCartComponent({ course }: CourseCartType) {
	const addToWishist = () => {
		console.log("Added To Wishest");
	};

	return (
		<div className="roudned-lg shadow-xl relative">
			<button
				onClick={addToWishist}
				type="button"
				className="absolute right-2 top-2 text-cyan-800  bg-slate-500 hover:text-white hover:bg-cyan-800  p-1 rounded-full transition"
			>
				{}
				<BiBookmarkAltPlus className="size-6  cursor-pointer" />
			</button>
			{!course.courseImage && (
				<div className="w-full bg-white">
					<PhotoIcon className="min-w-full max-w-full h-[160px] text-teal-500" />
				</div>
			)}
			{course.courseImage && (
				<div className="w-full bg-white">
					<img
						src={course.courseImage}
						alt="Not Provided With Image"
						className="min-w-full max-w-full h-[200px]"
					/>
				</div>
			)}
			<div className="p-2">
				<div className="flex mb-2">
					{getRate(course.rate).map((r, ind: number) => {
						return (
							<StarIcon
								className={`size-10  p-2 ${
									r ? "text-[#ed9700]" : "text-[#ed970066]"
								}`}
								key={ind}
							/>
						);
					})}
				</div>
				<h2 className="text-xl capitalize p-2 mb-3"> {course.title} </h2>
				<div className="flex items-center mb-4">
					<span className="flex items-center mr-4">
						<UsersIcon className="size-10 p-2 text-teal-800" />
						{course.users}
					</span>
					<span className="flex items-center">
						<ClockIcon className="size-10 p-2 text-teal-800" />
						{course.time}
					</span>
				</div>
				<div className="flex items-center mb-4 border-b-2 border-b-gray-500 pb-5">
					{course.teacher.image && (
						<img
							src={course.teacher.image}
							alt=""
							className="rounded-full size-12 p-1 border-2 border-teal-500 mr-3"
						/>
					)}
					{!course.teacher.image && (
						<div className="bg-teal-700 text-bold rounded-full p-2 text-white mr-3">
							{`${course.teacher.firstName.charAt(
								0
							)}${course.teacher.firstName.charAt(0)}`}
						</div>
					)}
					{course.teacher.firstName} {course.teacher.lastName}
				</div>

				<div className="pb-2 flex justify-between items-center">
					{course.price}
					<button className="bg-teal-800 text-white rounded-lg py-2 px-4 flex items-center font-bold hover:bg-teal-700 transition capitalize ">
						<ShoppingCartIcon className="size-6 me-3" />
						enrolled{" "}
					</button>
				</div>
			</div>
		</div>
	);
}
