import DeveloperList from "@/components/backoffice/DeveloperList";
import SingleDeveloper from "@/components/backoffice/SingleDeveloper";
import EditDeveloper from "@/components/backoffice/EditDeveloper";
import ManageLinks from "@/components/backoffice/ManageLinks";

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
  },
  {
    path: "developer/:id/links",
    name: "ManageLinks",
    component: ManageLinks
  }
];
