import { configure } from "@storybook/react";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faPrint,
  faPlus,
  faMinus,
  faStop,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPrint, faPlus, faMinus, faStop, faSearch, faTimes);

dom.watch();
configure(
  require.context("../react-components", true, /\.stories\.js$/),
  module
);
