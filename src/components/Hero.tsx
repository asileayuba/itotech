import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import data from "@/data.json"

export function Hero() {
    const { badge, title, description, cta_primary, cta_secondary } = data.hero

    return (
        <section id="hero" className="relative overflow-hidden bg-[#081522] text-white pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-[1280px]">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm uppercase tracking-wide bg-white/10 text-white hover:bg-white/20 border-0">
                            <Sparkles className="w-3 h-3 mr-2 inline" /> {badge}
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
                    >
                        {title.split(" ").map((word, i) => (
                            <span key={i} className={word === "technology" ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400" : ""}>
                                {word}{" "}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            {cta_primary.href && cta_primary.href !== "#" ? (
                                <a href={cta_primary.href} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="rounded-full text-base h-12 px-8 bg-white text-[#081522] hover:bg-white/10 hover:text-white">
                                        {cta_primary.label}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </a>
                            ) : (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span tabIndex={0} className="cursor-not-allowed">
                                            <Button disabled size="lg" className="rounded-full text-base h-12 px-8 bg-white text-[#081522] opacity-70 cursor-not-allowed pointer-events-none">
                                                {cta_primary.label}
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Coming Soon</p>
                                    </TooltipContent>
                                </Tooltip>
                            )}
                            <a href={cta_secondary.href} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 border-white/20 text-[#081522] hover:bg-white/10 hover:text-white">
                                    {cta_secondary.label}
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
