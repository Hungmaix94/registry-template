"use client"
import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { Button } from "@/registry/default-style/ui/button";
import { cn } from "@/lib/utils";
import { OpenInV0Button } from "@/components/open-in-v0-button";

interface WithLoadingWrapperProps {
  children: ReactNode;
}

export default function WithLoadingWrapper({
  children,
}: WithLoadingWrapperProps) {
  const [isReloading, setIsReloading] = useState(false);

  const handleReload = () => {
    setIsReloading(true);
    setTimeout(() => {
      setIsReloading(false);
    }, 300);
  };

  return (
    <div>
      <div className="relative py-10">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={'absolute right-1 top-0 z-20'}>
          <Button variant="ghost" size="icon" onClick={handleReload}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </motion.div>
        {!isReloading ? children : <div className="flex items-center justify-center h-full min-h-[100px] ">Loading...</div>}
      </div>
    </div>
  );
}
