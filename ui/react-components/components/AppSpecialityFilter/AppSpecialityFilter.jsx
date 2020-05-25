import React, { useState } from "react";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import classNames from "classnames";
import { faBackground } from "./AppSpecialityFilter.module.scss";
import "rc-tree/assets/index.css";
import Tree from "rc-tree";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rcTree = (props) => {
  const { nodes, checkedItems, intl, checkList } = props;

  const switcherIcon = (obj) => {
    if (obj.isLeaf) return "";
    if (obj.expanded)
      return (
        <FontAwesomeIcon
          className={classNames(faBackground)}
          icon={faMinus}
        ></FontAwesomeIcon>
      );
    return (
      <FontAwesomeIcon
        className={classNames(faBackground)}
        icon={faPlus}
      ></FontAwesomeIcon>
    );
  };

  return (
    <div data-testid="tree">
      <Tree
        className={classNames("myCls")}
        checkable
        checkedKeys={checkList}
        onCheck={(checked, info) => {
          checkedItems(checked, info);
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
