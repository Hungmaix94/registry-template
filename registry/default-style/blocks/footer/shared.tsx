import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube, Music2, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SocialLink, StrapiImage } from './types';

export const SocialIcon = ({ platform, className }: { platform: SocialLink['platform']; className?: string }) => {
    const icons = {
        facebook: Facebook,
        twitter: Twitter,
        instagram: Instagram,
        linkedin: Linkedin,
        github: Github,
        youtube: Youtube,
        tiktok: Music2,
    };

    const Icon = icons[platform] || Globe;

    return (
        <div className={cn(
            "p-2 rounded-full bg-secondary/10 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110",
            className
        )}>
            <Icon className="w-5 h-5" />
        </div>
    );
};

export const FooterLogo = ({ logo, className }: { logo?: { data: { attributes: StrapiImage } }; className?: string }) => {
    if (!logo?.data?.attributes?.url) return null;

    const { url, alternativeText, width, height } = logo.data.attributes;
    // Simple check for relative URL
    const imageUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${url}`;

    return (
        <div className={cn("relative inline-block group", className)}>
            <Image
                src={imageUrl}
                alt={alternativeText || 'Logo'}
                width={width || 120}
                height={height || 40}
                className="object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
        </div>
    );
};

export const FooterBottom = ({ text, className }: { text?: string; className?: string }) => {
    if (!text) return null;
    return (
        <div className={cn("border-t border-border/40 py-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground", className)}>
            <p>{text}</p>
            <div className="flex gap-6 text-xs">
                <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
        </div>
    );
};
