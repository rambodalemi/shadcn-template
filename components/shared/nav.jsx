import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../ui/toggle-mode";

const subMenuItemsOne = [
  {
    title: "Blog",
    description: "The latest industry news, updates, and info",
    icon: <Book className="size-5 shrink-0" />,
  },
  {
    title: "Compnay",
    description: "Our mission is to innovate and empower the world",
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: "Careers",
    description: "Browse job listing and discover our workspace",
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: "Support",
    description:
      "Get in touch with our support team or visit our community forums",
    icon: <Zap className="size-5 shrink-0" />,
  },
];

const subMenuItemsTwo = [
  {
    title: "Help Center",
    description: "Get all the answers you need right here",
    icon: <Zap className="size-5 shrink-0" />,
  },
  {
    title: "Contact Us",
    description: "We are here to help you with any questions you have",
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: "Status",
    description: "Check the current status of our services and APIs",
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: "Terms of Service",
    description: "Our terms and conditions for using our services",
    icon: <Book className="size-5 shrink-0" />,
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="hidden p-6 bg-white justify-between lg:flex fixed top-0 left-0 w-full z-50 backdrop-blur-md [--animation-delay:400ms] gap-4 border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src="https://www.shadcnblocks.com/images/block/block-1.svg"
              className="w-8"
              alt="logo"
            />
            <span className="text-xl font-bold">Shadcn Blocks</span>
          </div>
          <div className="flex items-center">
            <Link
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost",
                })
              )}
              href="#"
            >
              Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="text-muted-foreground">
                  <NavigationMenuTrigger>
                    <span>Products</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-80 p-3">
                      <NavigationMenuLink>
                        {subMenuItemsOne.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              className={cn(
                                "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href="#"
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-muted-foreground">
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-80 p-3">
                      <NavigationMenuLink>
                        {subMenuItemsTwo.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              className={cn(
                                "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                              href="#"
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </NavigationMenuLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost",
                })
              )}
              href="#"
            >
              Pricing
            </Link>
            <Link
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({
                  variant: "ghost",
                })
              )}
              href="#"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"}>Log in</Button>
          <Button>Sign up</Button>
          <ModeToggle />
        </div>
      </nav>
      <div className="block p-6 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://www.shadcnblocks.com/images/block/block-1.svg"
              className="w-8"
              alt="logo"
            />
            <span className="text-xl font-bold">Shadcn Blocks</span>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"} size={"icon"}>
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://www.shadcnblocks.com/images/block/block-1.svg"
                      className="w-8"
                      alt="logo"
                    />
                    <span className="text-xl font-bold">Shadcn Blocks</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="my-8 flex flex-col gap-4">
                <Link href="#" className="font-semibold">
                  Home
                </Link>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="products" className="border-b-0">
                    <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                      Products
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                      {subMenuItemsOne.map((item, idx) => (
                        <Link
                          key={idx}
                          className={cn(
                            "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                          href="#"
                        >
                          {item.icon}
                          <div>
                            <div className="text-sm font-semibold">
                              {item.title}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resources" className="border-b-0">
                    <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                      Resources
                    </AccordionTrigger>
                    <AccordionContent className="mt-2">
                      {subMenuItemsTwo.map((item, idx) => (
                        <Link
                          key={idx}
                          className={cn(
                            "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                          href="#"
                        >
                          {item.icon}
                          <div>
                            <div className="text-sm font-semibold">
                              {item.title}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link href="#" className="font-semibold">
                  Pricing
                </Link>
                <Link href="#" className="font-semibold">
                  Blog
                </Link>
              </div>
              <div className="border-t pt-4">
                <div className="grid grid-cols-2 justify-start">
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "justify-start text-muted-foreground"
                    )}
                    href="#"
                  >
                    Press
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "justify-start text-muted-foreground"
                    )}
                    href="#"
                  >
                    Contact
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "justify-start text-muted-foreground"
                    )}
                    href="#"
                  >
                    Imprint
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "justify-start text-muted-foreground"
                    )}
                    href="#"
                  >
                    Sitemap
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "justify-start text-muted-foreground"
                    )}
                    href="#"
                  >
                    Legal
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                      }),
                      "justify-start text-muted-foreground"
                    )}
                    href="#"
                  >
                    Cookie Settings
                  </Link>
                </div>
                <div className="mt-2 flex flex-col gap-3">
                  <Button variant={"outline"}>Log in</Button>
                  <Button>Sign up</Button>
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navbar;
