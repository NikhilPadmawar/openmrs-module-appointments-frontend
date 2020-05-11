const getFilteredNodesOnToggle = (transformedTreeData, filteredCheckedData) => {
  const filteredNodesList = transformedTreeData
    .filter(
      (element) =>
        filteredCheckedData.some((checked) => element.key === checked) ||
        (element.children &&
          element.children.some((subElement) =>
            filteredCheckedData.some((checked) => subElement.key === checked)
          ))
    )
    .map((element) => {
      const newfilteredNodesList = Object.assign(
        {},
        element,
        element.children
          ? {
              children: element.children.filter((subElement) =>
                filteredCheckedData.some(
                  (checked) => subElement.key === checked
                )
              ),
            }
          : null
      );
      return newfilteredNodesList;
    });
  return filteredNodesList;
};

export default getFilteredNodesOnToggle;
