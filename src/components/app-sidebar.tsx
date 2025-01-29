import * as React from "react"
import { ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
  menuItems: [
    {
      menuItem: "Home",
     href :"/admin/dashboard"

    },
    {
      menuItem: "Driver List",
      href :"/admin/dashboard/driver-list"
    },
   
  ],
 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex justify-center items-center h-16">
      <Link
          href="/"
          className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-400 transition-colors"
        >
          MK25
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <Link href={item.href}>
                  <SidebarMenuButton>
                    <ChevronRight />
                    {item.menuItem}
                  </SidebarMenuButton>
                  </Link>
                  {/* <SidebarMenuBadge>{item.state}</SidebarMenuBadge> */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.tree.map((item, index) => (
                <Tree key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}


