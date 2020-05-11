import React from "react";
import classNames from "classnames";

const transformTreeData = (arr) => {
  return arr.map((ele) => {
    let children;
    if (ele.serviceTypes.length !== 0) {
      children = transformChild(ele.serviceTypes);
    }
    const newNode = {
      title: ele.name,
      key: ele.uuid,
      ...ele,
    };
    if (ele.color)
      newNode["icon"] = ele.color && (
        <i
          className={classNames("fa fa-stop")}
          style={{ color: ele.color }}
          aria-hidden="true"
        ></i>
      );
    else
      newNode["icon"] = (
        <i
          className={classNames("fa fa-stop")}
          style={{ color: "transparent" }}
          aria-hidden="true"
        ></i>
      );
    if (ele.serviceTypes.length != 0) newNode["children"] = children;
    return newNode;
  });
};

const transformChild = (arr) => {
  return arr.map((ele) => {
    const newNode = {
      title: ele.name + " " + `[${ele.duration} min]`,
      key: ele.uuid,
      ...ele,
    };
    if (ele.color)
      newNode["icon"] = ele.color && (
        <i
          className={classNames("fa fa-stop")}
          style={{ color: ele.color }}
          aria-hidden="true"
        ></i>
      );
    else
      newNode["icon"] = (
        <i
          className={classNames("fa fa-stop")}
          style={{ color: "transparent" }}
          aria-hidden="true"
        ></i>
      );
    return newNode;
  });
};

export default transformTreeData;
