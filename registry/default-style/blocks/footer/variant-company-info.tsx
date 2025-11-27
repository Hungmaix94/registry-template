import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FooterProps } from './types';
import { FooterLogo, SocialIcon, FooterBottom } from './shared';

export const CompanyInfoFooter = ({ logo, description, socials, bottomText, columns, contacts }: FooterProps) => {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info Column */}
                    <div className="space-y-6">
                        <FooterLogo logo={logo} />
                        {description && (
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        )}

                        {contacts && (
                            <div className="space-y-3">
                                {contacts.address && (
                                    <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                                        <MapPin className="w-5 h-5 shrink-0" />
                                        <span>{contacts.address}</span>
                                    </div>
                                )}
                                {contacts.email && (
                                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                        <Mail className="w-5 h-5 shrink-0" />
                                        <a href={`mailto:${contacts.email}`} className="hover:text-primary transition-colors">
                                            {contacts.email}
                                        </a>
                                    </div>
                                )}
                                {contacts.phone && (
                                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                        <Phone className="w-5 h-5 shrink-0" />
                                        <a href={`tel:${contacts.phone}`} className="hover:text-primary transition-colors">
                                            {contacts.phone}
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}

                        {socials && socials.length > 0 && (
                            <div className="flex space-x-4 pt-2">
                                {socials.map((social) => (
                                    <Link
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <SocialIcon platform={social.platform} />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Links Columns - Render remaining columns */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {columns?.map((column) => (
                            <div key={column.id} className="space-y-4">
                                <h3 className="font-semibold text-foreground">{column.title}</h3>
                                <ul className="space-y-2">
                                    {column.links.map((link) => (
                                        <li key={link.id}>
                                            <Link
                                                href={link.href}
                                                target={link.isExternal ? "_blank" : undefined}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
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

                <FooterBottom text={bottomText} />
            </div>
        </footer>
    );
};
