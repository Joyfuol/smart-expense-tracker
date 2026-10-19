import Transaction from "./transaction.js";
import ExpenseTracker from "./expenseTracker.js";



const menuToggle = document.querySelector(".menu-toggle");
const sidebarMenu = document.querySelector("#sidebar-menu");

if (menuToggle && sidebarMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = sidebarMenu.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  sidebarMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      sidebarMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}


