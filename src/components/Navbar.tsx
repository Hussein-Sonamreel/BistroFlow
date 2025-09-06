// components/Navbar.tsx
"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";

export const Navbar: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isMenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const navigation = [
		{ name: "About", href: "/#about" },
		{ name: "Skills", href: "/#skills" },
		{ name: "Projects", href: "/#projects" },
		{ name: "Contact", href: "/#contact" },
	];

	const menuVariants: Variants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
	};

	return (
		<header ref={ref} className="relative">
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-black/0 border-transparent"
						: "bg-black/50 border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between p-6 mx-auto">
					
					{/* Your Logo */}
					<Link href="/" className="duration-200">
						<Image
							src="/hs-logo.png" // The path to your logo in the /public folder
							alt="Hussein Salim Logo"
							width={40}
							height={40}
							className="rounded-full"
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex justify-between gap-8">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								{item.name}
							</Link>
						))}
					</div>
					
					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={() => setMenuOpen(!isMenuOpen)} className="text-zinc-300 hover:text-zinc-100">
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Panel */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						variants={menuVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						className="md:hidden fixed top-20 left-0 w-full bg-black/90 backdrop-blur-lg z-40 p-8 shadow-lg"
					>
						<div className="flex flex-col items-center space-y-8 text-xl">
							{navigation.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setMenuOpen(false)}
									className="text-zinc-300 hover:text-white"
								>
									{item.name}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

// This is a named export, so we must import it with curly braces
export default Navbar;