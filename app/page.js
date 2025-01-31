import Counter from "@/components/Counter";

async function page() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	console.log(data);
	return (
		<div>
			<h1>Home page</h1>
			<ul>
				{data.map((item) => (
					<li className="text-blue-500" key={item.id}>
						{item.username}
					</li>
				))}
			</ul>
			<Counter />
		</div>
	);
}

export default page;
