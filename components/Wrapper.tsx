"use client"
import {OpenInV0Button} from "@/components/open-in-v0-button";
import {ReactNode, useState} from "react";
import {motion} from "framer-motion";
import {RefreshCw} from "lucide-react";
import {Button} from "@/registry/default-style/ui/button";
import {cn} from "@/lib/utils";

type Props = {
    title: string
    name: string
    children: ReactNode,
    className?: string
}
const Wrapper = ({title, name, children, className}: Props) => {
    const [isReloading, setIsReloading] = useState(false);

    const handleReload = () => {
        setIsReloading(true);
        setTimeout(() => {
            setIsReloading(false);
        }, 500); // Shorter duration for quicker visual feedback
    };

    const containerVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div
            className={cn("flex flex-col gap-4 border rounded-lg p-4 relative", className)}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>
                <div className="flex items-center gap-2">
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <Button variant="ghost" size="icon" onClick={handleReload}>
                            <RefreshCw className="h-4 w-4"/>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <OpenInV0Button name={name} className="w-fit"/>
                    </motion.div>
                </div>
            </div>
            {!isReloading ? <div>
                {children}
            </div> : null}

        </div>
    )
}
export default Wrapper
