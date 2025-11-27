import Link from 'next/link';
import { FooterProps } from './types';
import { FooterLogo, SocialIcon, FooterBottom } from './shared';

export const MultiColumnFooter = ({ logo, description, socials, bottomText, columns }: FooterProps) => {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <FooterLogo logo={logo} />
                        {description && (
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
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

                    {/* Links Columns */}
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

                <FooterBottom text={bottomText} />
            </div>
        </footer>
    );
};
