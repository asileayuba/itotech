import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import data from "@/data.json"

export function Features() {
    const { badge, title, description, points, image_alt, image_src } = data.features

    return (
        <section id="features" className="py-24 bg-[#081522] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-10 max-w-[1280px]">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 relative"
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-800 relative z-10">
                            <img
                                src={image_src}
                                alt={image_alt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-400 hidden">
                                <div className="text-center p-8">
                                    <span className="block text-4xl mb-2">🖼️</span>
                                    {image_alt}
                                </div>
                            </div>
                        </div>
                        {/* Decorative pattern */}
                        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full z-0 blur-3xl" />
                    </motion.div>

                    <div className="flex-1">
                        <Badge variant="outline" className="mb-6 text-secondary border-secondary/20 bg-secondary/10">
                            {badge}
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {points.map((point: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col gap-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        <span className="text-white font-bold">{point.title}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 pl-7">{point.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
