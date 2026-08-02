"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from 'lucide-react';
import { motion, useScroll } from "framer-motion";
import { ScrollToAnchor } from "../../../lib/functions";
import { Sun, Moon } from 'lucide-react';

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useIsMobile } from "@/hooks/use-mobile";

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

export default function Navbar() {
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
	ScrollToAnchor();
	return (
		<motion.header
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{
				duration: 1,
			}}
			className="w-full mb-5 flex items-center justify-center bg-transparent backdrop-blur-sm fixed top-0 z-999"
		>
			<nav className="w-[90%] md:w-[80%] py-5 flex items-center justify-between border-x border-foreground/10 px-10">
				{/* LOGO */}
				<Link href="/" className="text-4xl font-bold cursor-pointer">
					ZW
				</Link>

				{/* DESKTOP NAV */}
				<div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-2 lg:p-1 lg:rounded-full bg-foreground/5 border border-foreground/6">
					{navigationLinks.map((link, index) => (
						<Link
							key={index}
							href={link.path}
							className={
								pathName === link.path
									? `bg-foreground text-background cursor-pointer rounded-full px-4 py-1`
									: "bg-transparent text-foreground hover:bg-foreground hover:text-background cursor-pointer rounded-full px-4 py-1"
							}
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* CONTACT BUTTON FOR DESKTOP AND MOBILE */}
				<div className="flex flex-row justify-center items-center gap-5">
					<ModeToggle />
					<Button className="text-xl px-8 py-6 rounded-md" size="lg">
						<Link
							href="#contact"
							className="flex items-center justify-center gap-2"
						>
							{!useIsMobile() && <span className="text-xl">Contact Me</span>}
							<Phone className="size-4" />
						</Link>
					</Button>
				</div>

				{/* MOBILE NAV */}
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
						navigationLinks.map((link, index) => (
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
			</nav>
			<motion.div
				id="scroll-indicator"
				className="fixed top-0 left-0 right-0 h-0.5 w-screen bg-amber-900 dark:bg-amber-500 origin-left z-50"
				style={{
					scaleX: scrollYProgress,
				}}
			/>
		</motion.header>
	);
};