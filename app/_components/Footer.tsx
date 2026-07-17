import Link from "next/link";
import { GrLinkTop } from "react-icons/gr";
import { CheckLocation } from "../../lib/functions";
import { GiCoffeeMug } from "react-icons/gi";
import { SuccessContent, ErrorContent } from "../_components/modal-content";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { underlineDrawAmber, underlineDrawNeutral } from "./UnderlineDraw";

const bottomLinks = [
	{
		name: "Github",
		link: "https://github.com/zamarwint"
	},
	{
		name: "X/Twitter",
		link: "https://x.com/zamrwt"
	},
	{
		name: "YouTube",
		link: "https://youtube.com/@zamfcs"
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/zamfcs"
	}
]

const Footer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [result, setResult] = useState(false);

	const toggleModal = () => {
		setIsOpen(true);
	};

	const handleCopy = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setResult(true);
			toggleModal();
		} catch {
			setResult(false);
			toggleModal();
		}
	};

	return (
		<>
			<footer
				id="contact"
				className="flex flex-col dark:bg-black dark:text-white gap-5 py-40 items-center justify-center w-full"
			>
				<div className="text-center font-semibold">
					<h1 className="text-6xl md:text-8xl">Reach out to me</h1>
					<p className="py-4 text-neutral-500 dark:text-neutral-400 font-normal text-xl">
						Select the options below to copy my contact information.
					</p>
				</div>
				<div className="select-none flex flex-col gap-12 py-10 text-center w-xl md:text-left">
					<div className="flex flex-col md:flex-row items-center justify-around gap-10 lg:gap-0">
						<div
							onClick={() => handleCopy("wintzamar@gmail.com")}
							className="cursor-pointer"
						>
							<div>Email</div>
							<div className="text-gray-500 hover:text-gray-400">
								••••••••••••••••••••
							</div>
						</div>
						<div onClick={() => handleCopy("18763346720")} className="cursor-pointer">
							<div>Phone number</div>
							<div className="text-gray-500 hover:text-gray-400">
								•••••••••••••••••••
							</div>
						</div>
						<div onClick={() => handleCopy("Jamaica")} className="cursor-pointer">
							<div>Address</div>
							<div className="text-gray-500 hover:text-gray-400">
								••••••••••••••••••
							</div>
						</div>
					</div>
				</div>

				{/* See all links and Paypal buttons */}
				<div className="cursor-pointer font-bold flex flex-col md:flex-row items-center justify-center gap-5">
					<a
						href="https://solo.to/zamfc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className="rounded-full px-10 py-5 text-xl" variant="secondary" size="lg">See all links <FiArrowUpRight className="w-7 h-7" /></Button>
					</a>
					<a
						href="https://paypal.me/zamarwint"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className="rounded-full px-10 py-5 text-xl" variant="secondary" size="lg">Buy me a coffee via Paypal <GiCoffeeMug className="w-7 h-7" /></Button>
					</a>
				</div>
			</footer>

			{/* UNDER THE FOOTER */}
			<div className="flex flex-row items-center justify-around bg-neutral-100 w-full p-5 dark:bg-neutral-900 dark:text-white">
				<Link
					href={CheckLocation()}
					className={`text-2xl flex flex-col md:flex-row items-start md:items-center justify-center ${underlineDrawAmber()}`}
				>
					<span>Back to top</span> &nbsp;
					<GrLinkTop className="inline-block w-5 h-5" />
				</Link>
				<Link href="/" className="text-4xl font-semibold cursor-pointer">
					ZW
				</Link>
				<div className="w-3xs md:w-fit flex flex-col hover:text-neutral-600 hover:dark:text-neutral-300 items-end justify-center text-right gap-4 md:gap-0">
					<div className="text-lg tracking-wide">
						Designed & Developed by Zamar Wint
					</div>
					<div>
						<div className="flex flex-col md:flex-row items-end justify-center gap-2">
							{bottomLinks.map((bottomLink, index) => (
								<div key={index} className="flex flex-col items-center md:items-start">
									<a
										href={bottomLink.link}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex flex-row items-center justify-center text-neutral-500 dark:text-neutral-400 ${underlineDrawNeutral()}`}
									>
										{bottomLink.name}
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogHeader className="text-center">
						<DialogTitle className="text-2xl font-bold">{result ? "Success" : "Error"}</DialogTitle>
					</DialogHeader>
					{result ? (
						<DialogDescription className="flex flex-col items-center justify-center gap-4 text-center">
							<SuccessContent />
							Successfully copied to clipboard! I will get back to you as soon as possible.
						</DialogDescription>
					) : (
						<DialogDescription className="flex flex-col items-center justify-center gap-4 text-center">
							<ErrorContent />
							There was an error copying to your clipboard. Please try again.
						</DialogDescription>
					)
					}
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Footer;