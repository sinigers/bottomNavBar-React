import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = {
  root: {
    width: 360
  }
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: "recents"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Menu"
          value="menu"
          icon={<Icon>menu</Icon>}
        />
        <BottomNavigationAction
          label="Recent"
          value="recent"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        {/* <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} /> */}
        <BottomNavigationAction
          label="Glossary"
          value="glossary"
          icon={<Icon>menu_book</Icon>}
        />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabelBottomNavigation);
