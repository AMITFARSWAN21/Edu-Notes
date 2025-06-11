import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);

export function NavigationMenu({ className, children, viewport = true, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("group/navigation-menu relative flex max-w-max items-center justify-center", className)}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("group flex list-none items-center gap-4", className)}
      {...props}
    />
  );
}

export function NavigationMenuItem({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Item className={cn("relative", className)} {...props} />
  );
}

export function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="ml-1 size-3 transition group-data-[state=open]:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
  );
}

export function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn("absolute top-full mt-2 w-56 bg-white shadow-md rounded-md p-2 z-50", className)}
      {...props}
    />
  );
}

export function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn("block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md", className)}
      {...props}
    />
  );
}

export function NavigationMenuViewport({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Viewport
      className={cn("absolute top-full left-0 mt-1 w-full rounded-md shadow-md", className)}
      {...props}
    />
  );
}
