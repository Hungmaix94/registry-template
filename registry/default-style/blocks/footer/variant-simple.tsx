import Link from 'next/link';
import { FooterProps } from './types';
import { FooterLogo, SocialIcon, FooterBottom } from './shared';

export const SimpleFooter = ({ logo, description, socials, bottomText }: FooterProps) => {
    return (
        <footer className="bg-background border-t border-border/50">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
                    <FooterLogo logo={logo} className="scale-110" />

                    {description && (
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {description}
                        </p>
                    )}

                    {socials && socials.length > 0 && (
                        <div className="flex items-center gap-4">
                            {socials.map((social) => (
                                <Link
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform hover:-translate-y-1"
                                >
                                    <SocialIcon platform={social.platform} />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <FooterBottom text={bottomText} className="mt-16 pt-8 border-t border-border/40" />
            </div>
        </footer>
    );
};
