'use client';

import React, {FC, ReactElement, useEffect, useState} from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {usePathname} from 'next/navigation';
import AppNavMenu from '@/components/AppNavMenu';

const AppNavMenuMobile: FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <span className={'md:hidden'}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shadow-md" title={'Toggle navigation menu'}>
            <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"/>
          </Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col items-center justify-center w-auto p-0">
          <AppNavMenu className={'w-20 items-center flex-col justify-center'}/>
        </SheetContent>
      </Sheet>
    </span>
  );
};

export default AppNavMenuMobile;
