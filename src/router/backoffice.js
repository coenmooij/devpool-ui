import DeveloperList from "@/components/backoffice/DeveloperList";
import SingleDeveloper from "@/components/backoffice/SingleDeveloper";
import EditDeveloper from "@/components/backoffice/EditDeveloper";

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
  },
  {
    path: "developer/:id/edit",
    name: "EditDeveloper",
    component: EditDeveloper
  }
];
