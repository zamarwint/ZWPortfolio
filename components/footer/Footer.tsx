import { FaGithub } from "react-icons/fa";
import { BsPaypal, BsTwitterX, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { GrLinkTop } from "react-icons/gr";
import { checkLocation } from "./../../lib/handyFunctions";
import { TbArrowForward } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SuccessContent, ErrorContent } from "../../components/modal-content";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

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
		} catch (err) {
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
				<div className="text-6xl md:text-8xl text-center md:text-left">
					Reach out to me
				</div>
				<div className="select-none flex flex-col gap-12 py-10 lg:py-20 w-full text-center md:text-left">
					<div className="flex flex-col md:flex-row items-center justify-center gap-10">
						<div
							onClick={() => handleCopy("wintzamar@gmail.com")}
							className="cursor-pointer"
						>
							<div>Email</div>
							<div className="text-gray-500 hover:text-gray-400">
								wintzamar@gmail.com
							</div>
						</div>
						<div>
							<div>Phone number</div>
							<div className="text-gray-500 hover:text-gray-400">
								+1 (876) 334-6720
							</div>
						</div>
						<div>
							<div>Address</div>
							<div className="text-gray-500 hover:text-gray-400">
								Kingston, Jamaica
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-15">
						<div className="flex flex-col items-center md:items-start">
							<FaGithub className="w-12 h-12 mb-2" />
							<div className="font-hoves-demi-bold text-black dark:text-white">
								Github
							</div>
							<a
								href="https://github.com/zamarwint"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row items-center justify-start text-gray-500 hover:text-gray-400 cursor-pointer"
							>
								<span>zamarwint &nbsp;</span>
								<FaExternalLinkAlt className="inline-block w-3 h-3" />
							</a>
						</div>
						<div className="flex flex-col items-center md:items-start">
							<BsTwitterX className="w-12 h-12 mb-2" />
							<div className="font-hoves-demi-bold text-black dark:text-white">
								Twitter (X)
							</div>
							<a
								href="https://x.com/zamrwt"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row items-center justify-start text-gray-500 hover:text-gray-400 cursor-pointer"
							>
								<span>@zamrwt &nbsp;</span>
								<FaExternalLinkAlt className="inline-block w-3 h-3" />
							</a>
						</div>
						<div className="flex flex-col items-center md:items-start">
							<BsYoutube className="w-12 h-12 mb-2" />
							<div className="font-hoves-demi-bold text-black dark:text-white">
								YouTube
							</div>
							<a
								href="https://youtube.com/@zamfcs"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row items-center justify-start text-gray-500 hover:text-gray-400 cursor-pointer"
							>
								<span>@zamfcs &nbsp;</span>
								<FaExternalLinkAlt className="inline-block w-3 h-3" />
							</a>
						</div>
						<div className="flex flex-col items-center md:items-start">
							<BsPaypal className="w-12 h-12 mb-2" />
							<div className="font-hoves-demi-bold text-black dark:text-white">
								PayPal
							</div>
							<a
								href="https://paypal.me/zamarwint"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row items-center justify-start text-gray-500 hover:text-gray-400 cursor-pointer"
							>
								<span>paypal &nbsp;</span>
								<FaExternalLinkAlt className="inline-block w-3 h-3" />
							</a>
						</div>
					</div>
				</div>

				{/* Chat with me and See all links buttons */}
				<div className="cursor-pointer font-hoves-demi-bold flex flex-col md:flex-row items-center justify-center gap-5">
					<Link
						href="/chat"
					>
						<Button className="rounded-full px-10 py-5 text-xl" variant="secondary" size="lg"><TbArrowForward className="w-6 h-6" /> Chat with me</Button>
					</Link>
					<a
						href="https://solo.to/zamfc"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className="rounded-full px-10 py-5 text-xl" variant="secondary" size="lg">See all links <FiArrowUpRight className="w-7 h-7" /></Button>
					</a>
				</div>
			</footer>

			{/* UNDER THE FOOTER */}
			<div className="flex flex-row items-center justify-around bg-neutral-100 w-full p-5 dark:bg-neutral-900 dark:text-white">
				<Link
					href={checkLocation()}
					className="text-2xl flex flex-col md:flex-row items-center justify-center gap-2 cursor-pointer relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
				>
					<span>Back to top</span>
					<GrLinkTop className="inline-block w-5 h-5" />
				</Link>
				<Link href="/" className="text-4xl font-medium cursor-pointer">
					ZW
				</Link>
				<div className="hover:text-neutral-600 hover:dark:text-neutral-300 text-right">
					<div>
						Designed and Developed <br /> by Zamar Wint
					</div>
					<div>© 2026.</div>
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