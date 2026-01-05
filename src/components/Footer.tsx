import { Instagram, Linkedin, Twitter } from "lucide-react"
import data from "@/data.json"

export function Footer() {
    const { description, links, copyright } = data.footer

    return (
        <footer className="bg-[#081522] text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-10 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/footer_icon.png" alt="Itotech Logo" className="size-8 rounded-lg object-contain" />
                            <h2 className="text-xl font-black tracking-tight">ITOTECH</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {description}
                        </p>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="font-bold text-white mb-6">{title}</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                {title === "Quick Links" ? (
                                    data.header.nav.map((navItem) => (
                                        <li key={navItem.label}>
                                            <a
                                                href={navItem.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const targetId = navItem.href.substring(1);
                                                    const element = document.getElementById(targetId);
                                                    if (element) {
                                                        element.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }}
                                                className="hover:text-secondary transition-colors"
                                            >
                                                {navItem.label}
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    items.map((item) => (
                                        <li key={item}>
                                            {title === "Programs" ? (
                                                <span>{item}</span>
                                            ) : (
                                                <a href="#" className="hover:text-white transition-colors">
                                                    {item}
                                                </a>
                                            )}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter Column Removed */}
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>{copyright}</p>
                    <div className="flex gap-4">
                        {data.footer.social.map((social, i) => {
                            let Icon = Twitter;
                            if (social.platform === 'Instagram') Icon = Instagram;
                            if (social.platform === 'LinkedIn') Icon = Linkedin;

                            return (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#081522] transition-colors text-white"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
