import React, { ReactNode } from "react";
import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface ListItemProps {
  href: string;
  title: string;
  children?: ReactNode; // Allow children to be passed
}

const ListItem: React.FC<ListItemProps> = ({ href, title, children }) => (
  <li>
    <Link href={href}>
      <NavigationMenuLink asChild>
        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </Link>
  </li>
);

export default ListItem;
