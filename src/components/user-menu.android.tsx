import {
  Host,
  DropdownMenu,
  DropdownMenuItem,
  OutlinedButton,
  Text,
  Icon,
} from '@expo/ui/jetpack-compose';
import { useState } from 'react';

const homeIcon = require('./assets/home.xml');

export default function BasicDropdownMenuExample() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Host matchContents>
      <DropdownMenu
        expanded={isExpanded}
        onDismissRequest={() => setIsExpanded(false)}>
        <DropdownMenu.Trigger>
          <OutlinedButton onClick={() => setIsExpanded(true)}>
            <Text>Show menu</Text>
          </OutlinedButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Items>
          <DropdownMenuItem
            onClick={() => {
              setIsExpanded(false);
              console.log('Settings pressed');
            }}>
            <DropdownMenuItem.Text>
              <Text>Settings</Text>
            </DropdownMenuItem.Text>
            <DropdownMenuItem.LeadingIcon>
              <Icon source={homeIcon} size={24} />
            </DropdownMenuItem.LeadingIcon>
          </DropdownMenuItem>
        </DropdownMenu.Items>
      </DropdownMenu>
    </Host>
  );
}
