import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import data from "@/data.json"

export function Testimonials() {
    const { title, items } = data.testimonials

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-10 max-w-[1280px]">
                <h2 className="text-3xl sm:text-4xl font-black mb-16 text-center tracking-tight text-[#081522]">{title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="h-full bg-slate-50 border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-6 right-6 text-slate-200">
                                    <Quote className="w-12 h-12 rotate-180" />
                                </div>
                                <CardContent className="pt-8 px-8 pb-8">
                                    <div className="flex gap-1 mb-6 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-xl">★</span>
                                        ))}
                                    </div>
                                    <p className="text-slate-700 text-lg mb-8 relative z-10 italic">
                                        "{item.quote}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src={item.avatar} alt={item.author} loading="lazy" />
                                            <AvatarFallback>{item.author[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-bold text-[#081522]">{item.author}</div>
                                            <div className="text-sm text-slate-500">{item.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
