const fs = require('fs');
const path = require('path');

// Read the menuItems.json file
const menuItems = JSON.parse(fs.readFileSync(path.join(__dirname, 'menuItems.json'), 'utf8'));

// Define the interfaces (not required in JavaScript but kept for clarity)
interface MenuItem {
  menuDesc: string;
  redirectUrl: string;
  isActive: boolean;
  isDept: boolean;
  isEntity: boolean;
  isAuditor: boolean | null;
  parentMenuId: any;
  orderNo: number;
  defaultMenu: string;
  glyphiconsClass: string;
  menuId?: number;
}

interface MenuItemsFromAPI {
  status: boolean;
  statusCode: null;
  statusMessage: null;
  response: MenuItem[];
}

// Function to add menuId to each MenuItem
function addMenuId(data: MenuItemsFromAPI): MenuItemsFromAPI {
  data.response.forEach((menu, index) => {
    menu.menuId = index + 1;
  });
  return data;
}

// Update the menu items with menuId
const updatedData = addMenuId(menuItems);

// Save the updated data to a new JSON file
fs.writeFileSync(path.join(__dirname, 'updatedMenuItems.json'), JSON.stringify(updatedData, null, 2));

console.log('Updated menu items saved to updatedMenuItems.json');
