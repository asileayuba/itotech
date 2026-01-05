import { motion } from "framer-motion"
import { Code2, Users, Briefcase } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import data from "@/data.json"

const iconMap: Record<string, any> = {
    code: Code2,
    groups: Users,
    work: Briefcase,
}

export function Services() {
    const { title, subtitle, items } = data.services

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemAnim = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-10 max-w-[1280px]">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight text-[#081522]">{title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Code2
                        return (
                            <motion.div key={index} variants={itemAnim}>
                                <Card className="h-full border-none shadow-none bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-xl bg-white border shadow-sm flex items-center justify-center mb-4 text-primary">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-xl font-bold text-[#081522]">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
