import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CssBaseline, Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CloseOutlined } from "@material-ui/icons";
import { PROJECT_LOGO} from "../Component/Images/logo.png";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = ({ article }) => {
  const {
    bangaloreProjectsList,
    bangaloreProject1ContentType,
    bangaloreSlide1ContentType,
  } = article.fields;
  const arr3 = [...bangaloreProject1ContentType, ...bangaloreSlide1ContentType];
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    mainPageApi().then((data) => {
      setData(data);
    });
  }, []);
  const classes = useStyles();

  return (
    <div>
      <div className="top_head">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <Image src={PROJECT_LOGO} alt=""/>
              </Typography>
              <ul className="navigation-menu mobBlock">
                <li>
                  <a href="#why-prestige">
                    <span>Why Prestige</span>
                  </a>
                </li>
                {/* <li className="has-submenu ">
                  <a href="/#">
                    <span>
                      Projects <span className="menu-arrow"></span>
                    </span>
                  </a>
                  <ul className="submenu">
                    {bangaloreProjectsList.map((item, i) => (
                      <li key={i}>
                        <a href={arr3[i]} target="_new">
                          {bangaloreProjectsList[i]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
                <li>
                 contact
                </li>
                <li>
                  luxury homes
                </li>
                <li>
                  xyz
                </li>
              </ul>
              <div>
                <IconButton
                  onClick={handleDrawer}
                  edge="start"
                  className={`${classes.menuButton} `}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon className="menu_icon" />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div
              style={{ height: "100vh", padding: "20px 40px", width: "415px" }}
            >
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}
                color="primary"
                style={{ position: "absolute", right: "0", top: "-3px" }}
              >
                <CloseOutlined color="primary" />
              </IconButton>
              <div>
                <div className="demo-list">
                  <ul
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <li>
                     Why prestige
                    </li>
                    <li>
                      Contact Us
                    </li>
                    <li>
                        Luxury homes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};





// import React from 'react'
// import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


// export default function ProjectHome() {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//   <Container>
//     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link>
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
//     </div>
//   )
// }





// import React from 'react'
// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'

// export default function ProjectHome() {
//   return (
//     <div>
//   <Navbar
//     color="light"
//     expand="md"
//     light
//   >
//     <NavbarBrand href="/">
//       reactstrap
//     </NavbarBrand>
//     <NavbarToggler onClick={function noRefCheck(){}} />
//     <Collapse navbar>
//       <Nav
//         className="me-auto"
//         navbar
//       >
//         <NavItem>
//           <NavLink href="/components/">
//             Components
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="https://github.com/reactstrap/reactstrap">
//             GitHub
//           </NavLink>
//         </NavItem>
//         <UncontrolledDropdown
//           inNavbar
//           nav
//         >
//           <DropdownToggle
//             caret
//             nav
//           >
//             Options
//           </DropdownToggle>
//           <DropdownMenu right>
//             <DropdownItem>
//               Option 1
//             </DropdownItem>
//             <DropdownItem>
//               Option 2
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem>
//               Reset
//             </DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </Nav>
//       <NavbarText>
//         Simple Text
//       </NavbarText>
//     </Collapse>
//   </Navbar>
// </div>
//   )
// }
