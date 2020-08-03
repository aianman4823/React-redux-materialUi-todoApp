import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

//作成するコンポネントのスタイルを設定する
const styles = theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1) // 通常のCSSの場合ハイフンで区切る(margin-right)ところを繋いで大文字にする
  },
  rightIcon: {
    marginRight: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
});

//今回は色々な書き方に慣れるためにわざとconst, function, classをバラバラにしています。
function IconLabelButton(props) {
  const {
    classes,
    type,
    disabled,
    variant,
    color,
    value,
    iconClassName,
    onClick
  } = props;
  return (
    <Button
      variant={variant}
      color={color}
      className={classes.button}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {value}
      {iconClassName === "delete" && ( //外から渡されたiconClassNameの値によって変化するように
        <DeleteIcon
          className={classNames(classes.rightIcon, classes.iconSmall)}
        />
      )}
      {iconClassName === "save" && (
        <SaveIcon
          className={classNames(classes.rightIcon, classes.iconSmall)}
        />
      )}
    </Button>
  );
}

IconLabelButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelButton);
