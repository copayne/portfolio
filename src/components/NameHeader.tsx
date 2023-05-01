const NameHeader = () => (
  // <div>
  //   <p className=>
  //     Cody
  //   </p>
  //   <p>
  //     Payne
  //   </p>
  // </div>
  <p className="bg-light-primary dark:bg-dark-primary border-light-primary dark:border-dark-primary sm:text-[2rem] font-medium">
    <span className="bg-light-background dark:bg-dark-background text-light-primary dark:text-dark-primary"> 
      Cody
    </span>
    <span className="text-light-background dark:text-dark-background bg-light-primary dark:bg-dark-primary">
      Payne
    </span>
  </p>
);

export default NameHeader;