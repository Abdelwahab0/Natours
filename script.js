const Navigation = () => {
  Array.from(document.querySelectorAll(".navigation__link")).forEach((e) =>
    e.addEventListener("click", () => {
      const link = e.href.split("#")[1];
      document.querySelector(".navigation__checkbox").checked = false;
      console.log(link);
    })
  );
};
Navigation();
