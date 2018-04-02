import DeveloperList from "@/components/backoffice/DeveloperList/DeveloperListView";
import SingleDeveloper from "@/components/backoffice/SingleDeveloper/SingleDeveloperView";
import SingleDeveloperEdit from "@/components/backoffice/SingleDeveloperEdit/SingleDeveloperEditView";
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
    name: "SingleDeveloperEdit",
    component: SingleDeveloperEdit
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
