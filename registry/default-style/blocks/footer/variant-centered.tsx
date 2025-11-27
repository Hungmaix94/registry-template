import Link from 'next/link';
import { FooterProps } from './types';
import { FooterLogo, SocialIcon, FooterBottom } from './shared';

export const CenteredFooter = ({ logo, description, socials, bottomText, columns }: FooterProps) => {
    // Flatten links from all columns for the inline menu
    const allLinks = columns?.flatMap(col => col.links) || [];

    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col items-center text-center space-y-8">
                    <FooterLogo logo={logo} />

                    {/* Inline Menu */}
                    {allLinks.length > 0 && (
                        <nav>
                            <ul className="flex flex-wrap justify-center gap-6">
                                {allLinks.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            href={link.href}
                                            target={link.isExternal ? "_blank" : undefined}
                                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    {description && (
                        <p className="text-muted-foreground max-w-2xl">
                            {description}
                        </p>
                    )}

                    {socials && socials.length > 0 && (
                        <div className="flex space-x-6">
                            {socials.map((social) => (
                                <Link
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <SocialIcon platform={social.platform} className="w-6 h-6" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <FooterBottom text={bottomText} />
            </div>
        </footer>
    );
};
