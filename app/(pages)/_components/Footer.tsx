"use client";

import Link from "next/link";
import { CheckLocation } from "../../../lib/functions";
import { GiCoffeeMug } from "react-icons/gi";
import { ErrorContent } from "../../_components/modal-content";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { underlineDrawAmber, underlineDrawNeutral } from "./../../_components/UnderlineDraw";
import { Check, Copy, MoveUp } from "lucide-react";
import { cn } from "@/lib/utils";

const bottomLinks = [
	{
		name: "Github",
		link: "https://github.com/zamarwint"
	},
	{
		name: "X (Twitter)",
		link: "https://x.com/zwbless"
	},
	{
		name: "YouTube",
		link: "https://youtube.com/@zamfcs"
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/zwbless"
	}
]

const Footer = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isCopiedEmail, setIsCopiedEmail] = useState<boolean>(false);
	const [isCopiedPhoneNumber, setIsCopiedPhoneNumber] = useState<boolean>(false);
	const [isCopiedAddress, setIsCopiedAddress] = useState<boolean>(false);

	const toggleModal = () => {
		setIsOpen(true);
	};

	const handleCopy = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			toggleModal();
		}
	};

	const handleCopyEmail = () => {
		setIsCopiedEmail(true);
		handleCopy("wintzamar@gmail.com")

		setTimeout(() => {
			setIsCopiedEmail(false);
		}, 3000)
	}

	const handleCopyPhoneNumber = () => {
		setIsCopiedPhoneNumber(true);
		handleCopy("18763346720")

		setTimeout(() => {
			setIsCopiedPhoneNumber(false);
		}, 3000)
	}

	const handleCopyAddress = () => {
		setIsCopiedAddress(true);
		handleCopy("Jamaica")

		setTimeout(() => {
			setIsCopiedAddress(false);
		}, 3000)
	}

	return (
		<footer
			className="size-full flex flex-col items-center justify-around"
		>
			<div className="w-[90%] md:w-[80%] select-none flex flex-col items-center justify-center gap-20 text-center border-x border-foreground/10 pb-50">
				<div className="text-center font-semibold">
					<h1 className="text-6xl md:text-8xl" id="contact">Reach out to me</h1>
					<p className="py-4 px-4 md:px-0 text-muted-foreground font-normal text-xl">
						Select the options below to copy my contact information.
					</p>
				</div>

				<div className="w-3xl flex flex-col md:flex-row items-center justify-around gap-10 lg:gap-0 md:text-left">
					<div className="cursor-pointer">
						<h3 className="font-semibold">Email</h3>
						<div className="text-muted-foreground hover:text-gray-500 inline-flex items-center gap-2">
							<span>••••••••••••••••••••</span>
							<span onClick={handleCopyEmail}>{isCopiedEmail ? <Check size={18} /> : <Copy size={18} />}</span>
						</div>
					</div>
					<div className="cursor-pointer">
						<h3 className="font-semibold">Phone number</h3>
						<div className="text-muted-foreground hover:text-gray-500 inline-flex items-center gap-2">
							<span>•••••••••••••••••••</span>
							<span onClick={handleCopyPhoneNumber}>{isCopiedPhoneNumber ? <Check size={18} /> : <Copy size={18} />}</span>
						</div>
					</div>
					<div className="cursor-pointer">
						<h3 className="font-semibold">Address</h3>
						<div className="text-muted-foreground hover:text-gray-500 inline-flex items-center gap-2">
							<span>••••••••••••••••••</span>
							<span onClick={handleCopyAddress}>{isCopiedAddress ? <Check size={18} /> : <Copy size={18} />}</span>
						</div>
					</div>
				</div>

				{/* See all links and Buy me a coffee buttons */}
				<div className="size-full cursor-pointer flex flex-col md:flex-row items-center justify-center gap-5">
					<Button className="rounded-lg py-8 px-15" variant="secondary" size="lg">
						<Link
							href="https://solo.to/zwbless"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2"
						>
							<span className="text-xl md:text-2xl">See all links</span>
							<FiArrowUpRight className="w-7 h-7" />
						</Link>
					</Button>
					<Button className="rounded-lg py-8 px-15" variant="secondary" size="lg">
						<Link
							href="https://buymeacoffee.com/zwbless"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2"
						>
							<span className="text-xl md:text-2xl">Buy me a coffee</span>
							<GiCoffeeMug className="w-7 h-7" />
						</Link>
					</Button>
				</div>
			</div>

			{/* AT THE VERY BOTTOM */}
			<div className="size-full flex items-center gap-8 justify-around p-10 bg-foreground/2">
				<div className="flex items-center justify-center">
					<Link
						href={CheckLocation()}
						className={cn(underlineDrawAmber(), "text-xl flex items-center justify-center")}
					>
						<span>Back to top</span> &nbsp;
						<MoveUp className="size-5" />
					</Link>
				</div>
				<Link href="/" className="text-4xl font-semibold cursor-pointer">
					<h1>ZW</h1>
				</Link>
				<div className="w-3xs md:w-fit flex flex-col items-end justify-center text-right gap-4 md:gap-0">
					<h1 className="text-lg font-medium tracking-wide">
						Designed & Developed by Zamar Wint
					</h1>
					<div>
						<div className="flex flex-col md:flex-row items-end justify-center gap-2">
							{bottomLinks.map((bottomLink, index) => (
								<div key={index} className="flex flex-col items-center md:items-start">
									<Link
										href={bottomLink.link}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex flex-row items-center justify-center text-muted-foreground ${underlineDrawNeutral()}`}
									>
										{bottomLink.name}
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogHeader className="text-center">
						<DialogTitle className="text-2xl font-bold">Error</DialogTitle>
					</DialogHeader>
					<DialogDescription className="flex flex-col items-center justify-center gap-4 text-center">
						<ErrorContent />
						There was an error copying to your clipboard. Please try again.
					</DialogDescription>
				</DialogContent>
			</Dialog>
		</footer>
	);
};

export default Footer;