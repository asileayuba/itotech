import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import data from "@/data.json"

const iconMap: Record<string, any> = {
    location_on: MapPin,
    mail: Mail,
    call: Phone,
}

export function CTASection() {
    const { title, description, contact_info, form_title, subtitle, card_title, card_desc, button } = data.cta_section

    return (
        <section id="plans" className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 25%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 25%)"
            }} />

            <div className="container mx-auto px-4 sm:px-10 max-w-[1280px] relative z-10">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">

                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl sm:text-5xl font-black">{title}</h2>
                        <p className="text-blue-100 text-lg max-w-xl">{description}</p>

                        <div className="space-y-4 pt-4">
                            {contact_info.map((info, i) => {
                                const Icon = iconMap[info.icon]
                                return (
                                    <div key={i} className="flex items-center gap-4 text-blue-100">
                                        {Icon && <Icon className="w-5 h-5 text-secondary" />}
                                        <span>{info.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white text-slate-900 border-none shadow-2xl overflow-hidden">
                                <div className="bg-blue-50 p-6 text-center border-b border-blue-100">
                                    <h3 className="text-xl font-bold text-primary mb-1">{form_title}</h3>
                                    <p className="text-sm text-slate-500">{subtitle}</p>
                                </div>
                                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[240px] gap-6 text-center">
                                    <div className="w-20 h-20 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                                        <Calendar className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-semibold">{card_title}</h4>
                                        <p className="text-slate-500 text-sm">{card_desc}</p>
                                    </div>
                                    {button.href && button.href !== "#" ? (
                                        <a href={button.href} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button className="w-full" size="lg">
                                                {button.label}
                                            </Button>
                                        </a>
                                    ) : (
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span tabIndex={0} className="w-full cursor-not-allowed">
                                                    <Button disabled className="w-full pointer-events-none" size="lg">
                                                        {button.label}
                                                    </Button>
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Coming Soon</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
