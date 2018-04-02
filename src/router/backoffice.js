import DeveloperList from "@/components/backoffice/DeveloperList";
import SingleDeveloper from "@/components/backoffice/SingleDeveloper";
import EditDeveloper from "@/components/backoffice/EditDeveloper";
import ManageLinks from "@/components/backoffice/ManageLinks";
import ManageForms from "@/components/backoffice/ManageForms";

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
  },
  {
    path: "developer/:id/forms",
    name: "ManageForms",
    component: ManageForms
  }
];
