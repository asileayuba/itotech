import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import data from "@/data.json"

export function Founders() {
    // Check if data.founders exists before destructuring to avoid crashes if data is missing/cached wrong
    const { items } = data.founders || { title: "", subtitle: "", items: [] }

    if (!items.length) return null;

    return (
        <section className="py-24 bg-background-light">
            <div className="container mx-auto px-4 sm:px-10 max-w-[960px]">
                {items.map((founder, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 items-center"
                    >
                        <div className="w-48 h-48 shrink-0 relative">
                            <div className="absolute inset-0 bg-secondary rounded-full blur opacity-20 translate-y-2"></div>
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-full h-full object-cover rounded-full border-4 border-white relative z-10 shadow-lg"
                                loading="lazy"
                                width={192}
                                height={192}
                            />
                            <a
                                href={(founder as any).linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-0 right-0 z-20 bg-white p-2 rounded-full text-[#0077b5] shadow-md hover:scale-110 transition-transform"
                                aria-label="Connect on LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-primary mb-1">{founder.name}</h2>
                            <p className="text-secondary font-medium text-sm uppercase tracking-wide mb-6">{founder.role}, ITOTECH</p>
                            <blockquote className="text-lg text-slate-700 italic font-light mb-6">
                                "{founder.bio}"
                            </blockquote>
                            {(founder as any).signature && (
                                <img
                                    src={(founder as any).signature}
                                    alt="Signature"
                                    className="h-10 opacity-60 mx-auto md:mx-0"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
