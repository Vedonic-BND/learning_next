import "../styles/global.css";
import Link from "next/link";
import { Router } from "next/router";

export default function App({ Component, pageProps }) {
	return (
		<>
			<div>
				<h1>OurSite</h1>
				<nav className="header-nav">
					<ul>
						<li>
							<Link
								className={Router.pathname == "/" ? "active" : ""}
								href="/"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={Router.pathname == "/blog" ? "active" : ""}
								href="/blog"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								className={Router.pathname == "/" ? "active" : ""}
								href="/about"
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Component {...pageProps} />
			<p>Footer</p>
		</>
	);
}
