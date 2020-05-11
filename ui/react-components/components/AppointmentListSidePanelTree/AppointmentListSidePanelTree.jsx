import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import "./AppointmentListSidePanelTree.module.scss";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import classNames from "classnames";

const AppointmentListSidePanelTree = (props) => {
  const { nodes, getChecked, intl } = props;
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const icons = {
    check: (
      <i aria-hidden="true" className={classNames("fa fa-check-square")}></i>
    ),
    uncheck: (
      <i className={classNames("fa fa-square-o")} aria-hidden="true"></i>
    ),
    halfCheck: (
      <i className={classNames("fa fa-check-square")} aria-hidden="true"></i>
    ),
    expandClose: (
      <i className={classNames("fa fa-plus")} aria-hidden="true"></i>
    ),
    expandOpen: (
      <i className={classNames("fa fa-minus")} aria-hidden="true"></i>
    ),
    expandAll: "",
    collapseAll: (
      <i aria-hidden="true" className={classNames("fa fa-check-square")}></i>
    ),
    parentClose: "",
    parentOpen: "",
    leaf: "",
  };

  return (
    <div data-testid="tree">
      <CheckboxTree
        nodes={nodes || []}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => {
          getChecked(checked);
          setChecked(checked);
        }}
        onExpand={(expanded) => {
          setExpanded(expanded);
        }}
        icons={icons}
      />
    </div>
  );
};

AppointmentListSidePanelTree.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(AppointmentListSidePanelTree);
