import Link from 'next/link';
import { FooterProps } from './types';
import { FooterLogo, SocialIcon, FooterBottom } from './shared';
// Removed Shadcn imports to avoid dependency issues in this template
// import { Button } from '@/components/ui/button'; 
// import { Input } from '@/components/ui/input'; 

export const DarkFooter = ({ logo, description, socials, bottomText, columns, showNewsletter }: FooterProps) => {
    return (
        <footer className="bg-slate-950 text-slate-50 border-t border-slate-800">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Brand & Newsletter Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <FooterLogo logo={logo} className="brightness-0 invert" /> {/* Invert logo for dark mode if needed */}

                        {description && (
                            <p className="text-slate-400">
                                {description}
                            </p>
                        )}

                        {showNewsletter && (
                            <div className="space-y-4 pt-4">
                                <h4 className="font-semibold">Subscribe to our newsletter</h4>
                                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-50 ring-offset-slate-950 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-50 text-slate-900 hover:bg-slate-50/90 h-10 px-4 py-2"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        )}

                        {socials && socials.length > 0 && (
                            <div className="flex space-x-4 pt-4">
                                {socials.map((social) => (
                                    <Link
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <SocialIcon platform={social.platform} />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {columns?.map((column) => (
                            <div key={column.id} className="space-y-4">
                                <h3 className="font-semibold text-white">{column.title}</h3>
                                <ul className="space-y-2">
                                    {column.links.map((link) => (
                                        <li key={link.id}>
                                            <Link
                                                href={link.href}
                                                target={link.isExternal ? "_blank" : undefined}
                                                className="text-sm text-slate-400 hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-800 py-8 mt-12 text-center text-sm text-slate-500">
                    <p>{bottomText}</p>
                </div>
            </div>
        </footer>
    );
};
