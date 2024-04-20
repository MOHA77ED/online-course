import CourseCartComponent from "./CourseCartComponent";
import courseImage1 from "../../../assets/images/course1.jpg";
import courseImage2 from "../../../assets/images/course2.jpg";
import courseImage3 from "../../../assets/images/course3.jpg";

const course1 = {
	title: "Introduction to JS",
	rate: 2,
	users: 5,
	courseImage: courseImage1,
	time: "02h 20m",
	teacher: {
		image: courseImage1,
		firstName: "Mohammed",
		lastName: "Naji",
	},
	price: "200",
};
const course2 = {
	title: "Introduction to JS",
	rate: 2,
	users: 5,
	courseImage: courseImage2,
	time: "02h 20m",
	teacher: {
		image: courseImage2,
		firstName: "Mohammed",
		lastName: "Naji",
	},
	price: "200",
};
const course3 = {
	title: "Introduction to JS",
	rate: 2,
	users: 5,
	courseImage: courseImage3,
	time: "02h 20m",
	teacher: {
		image: courseImage3,
		firstName: "Mohammed",
		lastName: "Naji",
	},
	price: "200",
};
export default function Courses() {
	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 container">
				<CourseCartComponent course={course1} />
				<CourseCartComponent course={course2} />
				<CourseCartComponent course={course3} />
			</div>
		</>
	);
}
