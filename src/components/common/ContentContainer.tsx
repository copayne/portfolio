import type { ReactNode } from "react";

interface ContentContainer {
    children: ReactNode,
    id: string,
  }
  
const ContentContainer = ({ id, children }: ContentContainer) => (
  <div id={id} className="container min-h-[85vh] max-w-screen-lg mx-4">
    {children}
  </div>
)

export default ContentContainer;