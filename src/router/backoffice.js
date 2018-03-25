import DeveloperList from "@/components/backoffice/DeveloperList";
import SingleDeveloper from "@/components/backoffice/SingleDeveloper";

export default [
  {
    path: "developer-list",
    name: "DeveloperList",
    component: DeveloperList
  },
  {
    path: "developer/:id",
    name: "SingleDeveloper",
    component: SingleDeveloper
  }
];
