import Link from "next/link";
import React from "react";

function Navigation() {
	return (
		<ul >
			<li>
				<Link href="/about">about</Link>
			</li>
			<li>
				<Link href="/account">account</Link>
			</li>
			<li>
				<Link href="/cabins">cabins</Link>
			</li>
		</ul>
	);
}

export default Navigation;
