import React from "react";
import clsx from "clsx";
import { Link, navigate } from "@reach/router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Dropdown from "react-bootstrap/Dropdown";
import Cookies from "js-cookie";
import logo from "../assets/icon/logo.png";
import "../assets/style/style.css";
import "../assets/style/global.css";
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  topwrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(8) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(10) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerPaper: {
    backgroundColor: "#c9a993",
  },
}));

export default function VariantDrawer(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    Cookies.remove("accessEmail");
    navigate("/login");
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{
            backgroundImage: "linear-gradient(to right, #c9a993, #cbb2a1)",
          }}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
                [classes.drawerPaper]: open,
              })}
            >
              <img src={logo} height="40" width="40" />
            </IconButton>
            <div className={classes.topwrap}>
              <Typography variant="h6" noWrap>
                SkinLogic
              </Typography>
              <div style={{ display: "flex" }}>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <img
                      style={{
                        height: "35px",
                        borderRadius: "50%",
                        width: "35px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdr9qvYDbxDukbXL8OOpDCa7kqsh9dTXP3w&usqp=CAU"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div style={{ paddingLeft: "25px" }}>
                      Signed in as
                      <br />
                      <h6 style={{ marginTop: "5px" }}>
                        {Cookies.get("accessEmail")}
                      </h6>
                    </div>
                    <hr style={{ margin: "0px" }} />
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            [classes.drawerPaper]: open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
              [classes.drawerPaper]: !open || open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            {/* <img src={FullLogo} height="45" width="160" /> */}
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <Link to="/">
                <ListItemIcon>
                  <Tooltip title="Home">
                    <img
                      src="https://img.icons8.com/material-sharp/384/ffffff/home.png"
                      height="55"
                      width="55"
                    />
                  </Tooltip>
                </ListItemIcon>
              </Link>
              <h5 className="pl-2" onClick={() => navigate("/")}>
                Home
              </h5>
            </ListItem>
            <ListItem button>
              <Link to="/test">
                <ListItemIcon>
                  <Tooltip title="Take a Test">
                    <img
                      src="https://img.icons8.com/ios-filled/50/ffffff/health-graph.png"
                      height="55"
                      width="55"
                    />
                  </Tooltip>
                </ListItemIcon>
              </Link>
              <h5 className="pl-2" onClick={() => navigate("/test")}>
                Take a Test
              </h5>
            </ListItem>

            <ListItem button>
              <Link to="/doctor">
                <ListItemIcon>
                  <Tooltip title="See a Doctor">
                    <img
                      src="https://img.icons8.com/ios-filled/300/ffffff/doctor-giving-advice.png"
                      height="55"
                      width="55"
                    />
                  </Tooltip>
                </ListItemIcon>
              </Link>
              <h5
                className="pl-2"
                onClick={() =>
                  navigate(
                    "https://www.google.com/search?q=dermatologist+near+me&client=ms-android-samsung-gs-rev1&sxsrf=ALeKk00maJRKDUCzpbsHBWOXi-3JMKR1ww%3A1619685616917&ei=8HCKYPHGN8XYz7sP76ahgAc&oq=dermatologist+near+me&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAELEDMgIIADICCAAyAggAMgYIABAHEB4yBggAEAcQHjICCAAyBggAEAcQHjICCAAyBggAEAcQHjoHCAAQsQMQQzoFCAAQkQI6AggmUOVDWOVjYM1maABwAngAgAH6AogB6haSAQgwLjE0LjAuMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=gws-wiz&ved=0ahUKEwjx_t-Oh6PwAhVF7HMBHW9TCHAQ4dUDCA4&uact=5"
                  )
                }
              >
                See a Doctor
              </h5>
            </ListItem>

            <ListItem button>
              <Link to="/mentalsupport">
                <ListItemIcon>
                  <Tooltip title="Mental Support">
                    <img
                      src="https://img.icons8.com/ios-filled/50/ffffff/mental-health.png"
                      height="55"
                      width="55"
                    />
                  </Tooltip>
                </ListItemIcon>
              </Link>
              <h5
                className="pl-2 "
                onClick={() =>
                  navigate(
                    "https://www.google.com/search?q=psychologist+near+me&client=ms-android-samsung-gs-rev1&sxsrf=ALeKk02tVISl1dJfoaw4jQIDAnQjh7XvdA%3A1619667374302&ei=rimKYJT4Ee2Z4-EPo7i7sAw&oq=psychologist+neae&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAEYADIHCAAQyQMQCjIFCAAQkgMyBQgAEJIDMgQIABAKMgQIABAKMgQIABAKMgQIABAKMgQIABAKOgcIABBHELADOgQIABBDOgcIABDJAxBDOgIIADoFCAAQyQNQsRJYqxpg3CNoAXAAeACAAaYBiAHtBpIBAzAuNpgBAKABAcgBCMABAQ&sclient=mobile-gws-wiz-serp"
                  )
                }
              >
                Mental Support
              </h5>
            </ListItem>
            <ListItem button>
              <Link to="/blogs">
                <ListItemIcon>
                  <Tooltip title="Blogs For Me">
                    <img
                      src="https://img.icons8.com/ios-filled/384/ffffff/blog.png"
                      height="55"
                      width="55"
                    />
                  </Tooltip>
                </ListItemIcon>
              </Link>
              <h5
                className="pl-2"
                onClick={() => navigate("https://www.skincancer.org/blog/")}
              >
                Blogs For Me
              </h5>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
}
