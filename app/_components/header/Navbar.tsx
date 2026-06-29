"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';
import { motion, useScroll } from "framer-motion";
import { scrollToAnchor } from "../../../lib/handyFunctions";
import { Sun, Moon } from 'lucide-react';

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon-lg" className="cursor-pointer rounded-full">
					<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="z-999" align="end">
				<DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

const navigationLinks = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Gallery",
		path: "/gallery",
	},
	{
		label: "Chat",
		path: "/chat",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const pathName = usePathname();

	// PREVENT USER FROM SCROLLING WHEN MOBILE MENU IS ACTIVE
	useEffect(() => {
		if (open) {
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "auto";
		}
	}, [open]);

	// IMPLEMENTATION
	scrollToAnchor();
	return (
		<motion.nav
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{
				duration: 1,
			}}
			className="flex flex-row w-full items-center justify-around py-5 z-999 bg-transparent backdrop-blur-sm fixed"
		>
			{/* LOGO */}
			<Link href="/" className="font-seasons-serif text-4xl font-bold seasons-serif cursor-pointer">
				ZW
			</Link>

			{/* DESKTOP MENU */}
			<div className="hidden lg:flex items-center justify-center gap-2 p-1 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
				{navigationLinks.map((link, index): any => (
					<Link
						key={index}
						href={link.path}
						className={
							pathName === link.path
								? `bg-black dark:bg-white text-white dark:text-black cursor-pointer rounded-full px-4 py-1`
								: "text-black dark:text-white hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black cursor-pointer rounded-full px-4 py-1"
						}
					>
						{link.label}
					</Link>
				))}
			</div>

			{/* CONTACT LINK */}
			<div className="flex flex-row justify-center items-center gap-5">
				<ModeToggle />
				<Link
					href="#contact"
				>
					<Button className="text-xl p-5 rounded-full" variant="secondary" size="lg">Contact Me</Button>
				</Link>
			</div>

			{/* MOBILE MENU ICON */}
			<div className="lg:hidden">
				<div
					onClick={() => setOpen(!open)}
					className="cursor-pointer text-black dark:text-white"
				>
					{open ? <X size={48} /> : <Menu size={48} />}
				</div>
			</div>

			{/* MOBILE MENU */}
			<div
				className={
					open
						? "flex flex-col lg:hidden bg-white/90 dark:bg-neutral-900/90 text-black dark:text-white w-screen h-screen items-left justify-left fixed top-20 left-0 z-999"
						: "hidden"
				}
			>
				{open &&
					navigationLinks.map((link, index): any => (
						<Link
							key={index}
							href={link.path}
							className={
								pathName === link.path
									? `block active:text-amber-900 transition bg-black text-white dark:bg-white dark:text-black w-full p-5`
									: "block active:text-amber-900 transition text-black dark:text-white w-full p-5"
							}
						>
							{link.label}
						</Link>
					))}
			</div>
			<motion.div
				id="scroll-indicator"
				className="fixed top-0 left-0 right-0 h-[5px] w-screen bg-[#ffba00] origin-left z-50"
				style={{
					scaleX: scrollYProgress,
				}}
			/>
		</motion.nav>
	);
};

export default Navbar;
