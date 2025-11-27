"use client"
import {OpenInV0Button} from "@/components/open-in-v0-button";
import {ReactNode} from "react";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";

type Props = {
    title: string
    name: string
    children: ReactNode,
    className?: string
}
const Wrapper = ({title, name, children, className}: Props) => {

    return (
        <div
            className={cn("flex flex-col gap-4 border rounded-lg p-4 relative", className)}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>
                <div className="flex items-center gap-2">
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <OpenInV0Button name={name} className="w-fit"/>
                    </motion.div>
                </div>
            </div>
            {children}

        </div>
    )
}
export default Wrapper
