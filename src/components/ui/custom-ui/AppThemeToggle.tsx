'use client';

import React, {FC, ReactElement} from 'react';
import {useTheme} from 'next-themes';
import {DropdownMenu, DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu';
import {Button} from '@/components/ui/button';
import {Moon, Sun} from 'lucide-react';
import {DropdownMenuContent, DropdownMenuItem} from '@/components/ui/dropdown-menu';
import {AppThemeEnum} from '@/shared/types/appTheme.enum';

const AppThemeToggle: FC = (): ReactElement => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="shadow-md" title={'Change theme menu'}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(AppThemeEnum.SYSTEM)}>
          System
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme(AppThemeEnum.LIGHT)}>
          Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme(AppThemeEnum.DARK)}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppThemeToggle;
