import DeveloperList from "@/components/backoffice/DeveloperList/DeveloperListView";
import SingleDeveloper from "@/components/backoffice/SingleDeveloper";
import EditDeveloper from "@/components/backoffice/EditDeveloper";
import SingleDeveloperLinks from "@/components/backoffice/SingleDeveloperLinks/SingleDeveloperLinksView";
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
    name: "SingleDeveloperLinks",
    component: SingleDeveloperLinks
  },
  {
    path: "developer/:id/forms",
    name: "ManageForms",
    component: ManageForms
  }
];
