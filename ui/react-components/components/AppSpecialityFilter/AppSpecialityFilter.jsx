import React, { useState } from "react";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./AppSpecialityFilter.module.scss";
import "rc-tree/assets/index.css";
import Tree from "rc-tree";
import { useEffect } from "react";

const rcTree = (props) => {
  const { nodes, getChecked, intl } = props;
  const [checked, setChecked] = useState([]);

  const switcherIcon = (obj) => {
    if (obj.isLeaf) return "";
    if (obj.expanded)
      return <i className={classNames("fa fa-minus")} aria-hidden="true"></i>;
    return <i className={classNames("fa fa-plus")} aria-hidden="true"></i>;
  };

  return (
    <div data-testid="tree">
      <Tree
        className={classNames("myCls")}
        checkable
        checkedKeys={checked}
        onCheck={(checked) => {
          getChecked(checked);
          setChecked(checked);
        }}
        treeData={nodes || []}
        switcherIcon={switcherIcon}
      />
    </div>
  );
};

rcTree.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(rcTree);
