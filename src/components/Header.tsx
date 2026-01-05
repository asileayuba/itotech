import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import data from "@/data.json"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { logo, nav, cta } = data.header

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const targetId = href.substring(1) // Remove the '#'
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
            setIsOpen(false) // Close mobile menu after clicking
        }
    }

    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#f1f2f4] bg-white/95 backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-10">
                <a href="#" onClick={scrollToTop} className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                    <img src="/itotech_icon.png" alt="Itotech Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-contain" />
                    <span className="text-xl sm:text-2xl font-black tracking-tight">{logo}</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {nav.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.href)}
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-secondary"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href={cta.href} target="_blank" rel="noopener noreferrer">
                        <Button className="rounded-full px-6 font-bold shadow-lg shadow-primary/20">{cta.label}</Button>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-16 left-0 right-0 border-b bg-background shadow-xl border-t border-border/50"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {nav.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="text-sm font-medium py-2 hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a href={cta.href} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className="w-full rounded-full">{cta.label}</Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
