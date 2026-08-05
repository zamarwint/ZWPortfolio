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
import { Check, Copy, Eye, EyeOff, MoveUp } from "lucide-react";
import { cn } from "@/lib/utils";

const footerButtons = [
	{
		text: "See all links",
		href: "https://solo.to/zwbless",
		icon: <FiArrowUpRight className="size-7" />,
		disabled: false,
	},
	{
		text: "Buy me a coffee (Coming soon)",
		href: "/",
		icon: <GiCoffeeMug className="size-7" />,
		disabled: true,
	}
]

const footerBottomLinks = [
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

	const [canSeeEmail, setCanSeeEmail] = useState<boolean>(false);
	const [canSeePhoneNumber, setCanSeePhoneNumber] = useState<boolean>(false);
	const [canSeeAddress, setCanSeeAddress] = useState<boolean>(false);

	// Opening error dialog
	const toggleModal = () => {
		setIsOpen(true);
	};

	// handle functions for copying email, phone number, and address

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

	// handle functions for showing email, phone number, and address

	const handleCanSeeEmail = () => {
		setCanSeeEmail(true);
		setTimeout(() => {
			setCanSeeEmail(false);
		}, 3000)
	}

	const handleCanSeePhoneNumber = () => {
		setCanSeePhoneNumber(true);
		setTimeout(() => {
			setCanSeePhoneNumber(false);
		}, 3000)
	}

	const handleCanSeeAddress = () => {
		setCanSeeAddress(true);
		setTimeout(() => {
			setCanSeeAddress(false);
		}, 3000)
	}

	return (
		<footer
			className="size-full flex flex-col items-center justify-around"
		>
			<div className="w-[90%] lg:w-[80%] px-10 select-none flex flex-col items-center justify-center gap-20 text-center border-x border-t border-foreground/10 py-50">
				<div className="text-center font-semibold">
					<h1 className="text-6xl lg:text-8xl" id="contact">Reach out to me</h1>
					<p className="py-4 px-4 lg:px-0 text-muted-foreground font-normal text-xl">
						Select the options below to copy my contact information.
					</p>
				</div>

				<div className="w-3xl flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-0 lg:text-left">
					<div className="cursor-pointer">
						<h3 className="font-semibold">Email</h3>
						<div className="text-muted-foreground hover:text-gray-500 inline-flex items-center gap-2">
							<span>{canSeeEmail ? "wintzamar@gmail.com" : "••••••••••••••••••••"}</span>
							<span onClick={handleCanSeeEmail}>{canSeeEmail ? <EyeOff size={18} /> : <Eye size={18} />}</span>
							<span onClick={handleCopyEmail}>{isCopiedEmail ? <Check size={18} /> : <Copy size={18} />}</span>
						</div>
					</div>
					<div className="cursor-pointer">
						<h3 className="font-semibold">Phone number</h3>
						<div className="text-muted-foreground hover:text-gray-500 inline-flex items-center gap-2">
							<span>{canSeePhoneNumber ? "18763346720" : "•••••••••••••••••••"}</span>
							<span onClick={handleCanSeePhoneNumber}>{canSeePhoneNumber ? <EyeOff size={18} /> : <Eye size={18} />}</span>
							<span onClick={handleCopyPhoneNumber}>{isCopiedPhoneNumber ? <Check size={18} /> : <Copy size={18} />}</span>
						</div>
					</div>
					<div className="cursor-pointer">
						<h3 className="font-semibold">Address</h3>
						<div className="text-muted-foreground hover:text-gray-500 inline-flex items-center gap-2">
							<span>{canSeeAddress ? "Jamaica" : "••••••••••••••••••"}</span>
							<span onClick={handleCanSeeAddress}>{canSeeAddress ? <EyeOff size={18} /> : <Eye size={18} />}</span>
							<span onClick={handleCopyAddress}>{isCopiedAddress ? <Check size={18} /> : <Copy size={18} />}</span>
						</div>
					</div>
				</div>

				{/* See all links and Buy me a coffee buttons */}
				<div className="size-full cursor-pointer flex flex-col lg:flex-row items-center justify-center gap-5">
					{footerButtons.map((button, key) => (
						<Button key={key} className="rounded-lg py-8 px-15" variant="outline" size="lg" disabled={button.disabled}>
							<Link
								href={button.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2"
							>
								<span className="text-xl lg:text-2xl text-wrap">{button.text}</span>
								{button.icon}
							</Link>
						</Button>
					))}
				</div>
			</div>

			{/* AT THE VERY BOTTOM */}
			<div className="size-full bg-foreground/2 border-t border-foreground/10 flex flex-col items-center justify-center">
				<div className="border-x border-foreground/10 w-[90%] lg:w-[80%] h-full flex items-center gap-8 justify-between p-10">
					<div className="flex items-center justify-center">
						<Link
							href={CheckLocation()}
							className={cn(underlineDrawAmber(), "text-xl flex items-center justify-center hover:text-amber-900 dark:hover:text-amber-500")}
						>
							<span>Back to top</span> &nbsp;
							<MoveUp className="size-5" />
						</Link>
					</div>
					<Link href="/" className="text-4xl font-semibold cursor-pointer">
						<h1>ZW</h1>
					</Link>
					<div className="w-3xs lg:w-fit flex flex-col items-end justify-center text-right gap-4 lg:gap-0">
						<h1 className="text-lg font-medium tracking-wide">
							Designed & Developed by Zamar Wint
						</h1>
						<div>
							<div className="flex flex-col lg:flex-row items-end justify-center gap-2">
								{footerBottomLinks.map((bottomLink, index) => (
									<div key={index} className="flex flex-col items-center lg:items-start">
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
			</div>
		</footer>
	);
};

export default Footer;