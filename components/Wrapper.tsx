"use client"
import {OpenInV0Button} from "@/components/open-in-v0-button";
import {ReactNode, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { Button } from "@/registry/default-style/ui/button";
import {cn} from "@/lib/utils";

type Props = {
    title: string
    name: string
    children: ReactNode,
    className?:string
}
const Wrapper = ({title, name, children,className}: Props) => {
    const [reloadKey, setReloadKey] = useState(0);
    const [isReloading, setIsReloading] = useState(false);

    const handleReload = () => {
        setIsReloading(true);
        setReloadKey(prevKey => prevKey + 1);
        setTimeout(() => {
            setIsReloading(false);
        }, 500); // Shorter duration for quicker visual feedback
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
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

    const childVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            className={cn("flex flex-col gap-4 border rounded-lg p-4 relative",className)}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>
                <div className="flex items-center gap-2">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button variant="ghost" size="icon" onClick={handleReload}>
                            <motion.div
                                animate={{ rotate: isReloading ? 360 : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <RefreshCw className="h-4 w-4" />
                            </motion.div>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <OpenInV0Button name={name} className="w-fit"/>
                    </motion.div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={reloadKey}
                    variants={childVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}
export default Wrapper
