const getFilteredNodesOnSearch = (transformedTreeData, searchText) => {
  const searchFilteredNodesList = transformedTreeData
    .filter((element) => {
      return (
        element.title.trim().toLowerCase().includes(searchText.toLowerCase()) ||
        (element.children &&
          element.children.some((subElement) =>
            subElement.title
              .trim()
              .toLowerCase()
              .includes(searchText.toLowerCase())
          ))
      );
    })
    .map((ele) => {
      const filteredList = Object.assign(
        {},
        ele,
        ele.title.trim().toLowerCase().includes(searchText.toLowerCase())
          ? ele
          : ele.children
          ? {
              children: ele.children.filter((subElement) =>
                subElement.title
                  .trim()
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              ),
            }
          : null
      );
      return filteredList;
    });
  return searchFilteredNodesList;
};

export default getFilteredNodesOnSearch;
