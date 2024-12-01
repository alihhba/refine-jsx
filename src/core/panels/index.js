/* eslint-disable @typescript-eslint/no-unused-vars */

import guestRoutes from "./guests/routes.jsx";
import guestResources from "./guests/resources.jsx";

export const panels = {
  guest: {
    resources: guestResources,
    routes: guestRoutes,
  },
};

export default panels;
