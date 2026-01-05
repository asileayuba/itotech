import { motion } from "framer-motion"
import { Terminal, LineChart, Palette, Megaphone } from "lucide-react"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import data from "@/data.json"

const iconMap: Record<string, any> = {
    terminal: Terminal,
    analytics: LineChart,
    palette: Palette,
    campaign: Megaphone,
}

export function Programs() {
    const { title, subtitle, items } = data.programs

    return (
        <section id="programs" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-10 max-w-[1280px]">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight text-[#081522]">{title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Terminal
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                                    <CardHeader className="pb-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <CardTitle className="text-lg font-bold text-[#081522]">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-500 text-sm">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
