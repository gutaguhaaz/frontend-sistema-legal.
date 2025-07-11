import { Route } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";
import { ContactGridComponent } from "./contact-grid/contact-grid.component";
import { SupportComponent } from "./support/support.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";

export const APPS_ROUTE: Route[] = [
  {
    path: "chat",
    component: ChatComponent,
  },
  {
    path: "contact-grid",
    component: ContactGridComponent,
  },
  {
    path: "support",
    component: SupportComponent,
  },
  {
    path: "dragdrop",
    component: DragDropComponent,
  },
  {
    path: "calculator",
    loadComponent: () => import("./calculator/calculator.component").then(m => m.CalculatorComponent),
  },
];
