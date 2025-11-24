import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Heart, MessageSquare } from "lucide-react"
import {Button} from "@/components/ui/button";

interface InstagramPost {
  id: string;
  imageUrl: string;
  permalink: string; // Link to the Instagram post
  likes?: number;
  comments?: number;
}

interface InstagramProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionTitle?: string;
  sectionDescription?: string;
  posts: InstagramPost[];
  profileLink?: string;
  variant?: "grid-simple" | "grid-overlay" | "carousel"; // Define 3 variations
}

export default function Instagram({
  sectionTitle,
  sectionDescription,
  posts,
  profileLink,
  variant = "grid-simple",
  className,
  ...props
}: InstagramProps) {
  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", className)} {...props}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            {sectionTitle && <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{sectionTitle}</h2>}
            {sectionDescription && <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{sectionDescription}</p>}
          </div>
        </div>

        {variant === "grid-simple" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {posts.map((post) => (
              <Link key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
                <Image
                  src={post.imageUrl}
                  alt={`Instagram post by ${post.id}`}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </Link>
            ))}
          </div>
        )}

        {variant === "grid-overlay" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {posts.map((post) => (
              <Link key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="relative group">
                <Image
                  src={post.imageUrl}
                  alt={`Instagram post by ${post.id}`}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  {post.likes !== undefined && (
                    <span className="flex items-center text-white text-lg font-semibold">
                      <Heart className="h-5 w-5 mr-1" fill="white" /> {post.likes}
                    </span>
                  )}
                  {post.comments !== undefined && (
                    <span className="flex items-center text-white text-lg font-semibold">
                      <MessageSquare className="h-5 w-5 mr-1" fill="white" /> {post.comments}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {variant === "carousel" && (
          <div className="flex overflow-x-auto gap-4 py-2">
            {posts.map((post) => (
              <Link key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-64 relative group">
                <Image
                  src={post.imageUrl}
                  alt={`Instagram post by ${post.id}`}
                  width={256}
                  height={256}
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  {post.likes !== undefined && (
                    <span className="flex items-center text-white text-lg font-semibold">
                      <Heart className="h-5 w-5 mr-1" fill="white" /> {post.likes}
                    </span>
                  )}
                  {post.comments !== undefined && (
                    <span className="flex items-center text-white text-lg font-semibold">
                      <MessageSquare className="h-5 w-5 mr-1" fill="white" /> {post.comments}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {profileLink && (
          <div className="mt-8 text-center">
            <Link href={profileLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Follow us on Instagram</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
