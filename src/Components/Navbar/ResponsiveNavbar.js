import React from 'react'
import ResponsiveMenu from 'react-responsive-navbar';

export default function ResponsiveNavbar() {
    return (
        <ResponsiveMenu
        menuOpenButton={'X'}
        menuCloseButton={'Y'}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        }
      />
    )
}
