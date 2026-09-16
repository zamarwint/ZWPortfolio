import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Eye, EyeOff } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ErrorContent } from "@/app/_components/modal-content";
import { FiArrowUpRight } from "react-icons/fi";
import { GiCoffeeMug } from "react-icons/gi";
import TypewriterEffect from "@/app/_components/typewriter";

const footerButtons = [
  {
    text: "See all links",
    href: "https://solo.to/zwbless",
    icon: <FiArrowUpRight className="size-5" />,
    disabled: false,
  },
  {
    text: "Buy me a coffee (Coming soon)",
    href: "/",
    icon: <GiCoffeeMug className="size-5" />,
    disabled: true,
  },
];

function ErrorDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold font-funnel-display">
            Error
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col items-center justify-center gap-4 text-center">
          <ErrorContent />
          There was an error copying to your clipboard. Please try again.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default function Contact() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCopiedEmail, setIsCopiedEmail] = useState<boolean>(false);
  const [isCopiedPhoneNumber, setIsCopiedPhoneNumber] =
    useState<boolean>(false);
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
    handleCopy("wintzamar@gmail.com");

    setTimeout(() => {
      setIsCopiedEmail(false);
    }, 3000);
  };

  const handleCopyPhoneNumber = () => {
    setIsCopiedPhoneNumber(true);
    handleCopy("18763346720");

    setTimeout(() => {
      setIsCopiedPhoneNumber(false);
    }, 3000);
  };

  const handleCopyAddress = () => {
    setIsCopiedAddress(true);
    handleCopy("Jamaica");

    setTimeout(() => {
      setIsCopiedAddress(false);
    }, 3000);
  };

  // handle functions for showing email, phone number, and address

  const handleCanSeeEmail = () => {
    setCanSeeEmail(true);
    setTimeout(() => {
      setCanSeeEmail(false);
    }, 3000);
  };

  const handleCanSeePhoneNumber = () => {
    setCanSeePhoneNumber(true);
    setTimeout(() => {
      setCanSeePhoneNumber(false);
    }, 3000);
  };

  const handleCanSeeAddress = () => {
    setCanSeeAddress(true);
    setTimeout(() => {
      setCanSeeAddress(false);
    }, 3000);
  };

  return (
    <motion.section
      id="contact"
      className="max-w-full px-[4vw] pb-20 pt-24 font-funnel-display"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 1,
      }}
    >
      <p className="mb-4 flex items-center gap-2 text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        <TypewriterEffect
          words={[
            "Contact Me using one of the options below",
            "I am online most of the time, so you can expect a response within 24 hours",
            "I'm looking for a challenging role in the cybersecurity or software engineering field",
          ]}
          cursor={true}
          cursorBlink={false}
          typeSpeed={35}
          delSpeed={25}
          delaySpeed={2000}
        />
      </p>
      <h2 className="mb-8 text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-tight font-editorial-new italic">
        Let&apos;s build something secure.
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          {/*
            Replace the masked values below with your real email / phone /
            address, or wire up a reveal-on-click handler here.
          */}
          <div className="border-t border-border">
            <div className="flex items-center justify-between border-b border-border py-4">
              <span className="text-sm">Email</span>
              <div className="flex items-center gap-2 text-xs transition-all duration-300 ease-in-out">
                <span className="tracking-[0.2em]">
                  {canSeeEmail ? "wintzamar@gmail.com" : "••••••••••••••"}
                </span>
                <span onClick={handleCanSeeEmail} className="cursor-pointer">
                  {canSeeEmail ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
                <span onClick={handleCopyEmail} className="cursor-pointer">
                  {isCopiedEmail ? <Check size={18} /> : <Copy size={18} />}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-border py-4">
              <span className="text-sm">Phone</span>
              <div className="flex items-center gap-2 text-xs transition-all duration-300 ease-in-out">
                <span className="tracking-[0.2em]">
                  {canSeePhoneNumber ? "18763346720" : "•••••••••••••"}
                </span>
                <span
                  onClick={handleCanSeePhoneNumber}
                  className="cursor-pointer"
                >
                  {canSeePhoneNumber ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
                <span
                  onClick={handleCopyPhoneNumber}
                  className="cursor-pointer"
                >
                  {isCopiedPhoneNumber ? (
                    <Check size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-border py-4">
              <span className="text-sm">Address</span>
              <div className="flex items-center gap-2 text-xs transition-all duration-300 ease-in-out">
                <span className="tracking-[0.2em]">
                  {canSeeAddress ? "Jamaica" : "•••••••••••"}
                </span>
                <span onClick={handleCanSeeAddress} className="cursor-pointer">
                  {canSeeAddress ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
                <span onClick={handleCopyAddress} className="cursor-pointer">
                  {isCopiedAddress ? <Check size={18} /> : <Copy size={18} />}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm">
            Details are kept private to avoid spam scrapers — reach out through
            the links to get them directly.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          {footerButtons.map((button, index) => (
            <Button
              key={index}
              variant="outline"
              disabled={button.disabled}
              className="border border-border p-6 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Link
                href={button.href}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2"
              >
                {button.text} {button.icon}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <ErrorDialog
        isOpen={isOpen}
        setIsOpen={() => {
          setIsOpen(!isOpen);
        }}
      />
    </motion.section>
  );
}
