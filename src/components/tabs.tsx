import { useState } from "react";

interface TabsProps {
  children?: React.ReactNode[] | React.ReactNode;
}

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(children[0].props.title);

  return (
    <div className="flex flex-col gap-x-5 w-[500px]">
      <ul className="flex gap-x-10 justify-between items-center border-b">
        {children.map((child) => {
          const title = child.props.title;
          return (
            <li
              key={title}
              className={`cursor-pointer ${
                title === activeTab ? "border-b-2 border-b-blue-600" : ""
              }`}
              onClick={() => setActiveTab(title)}
            >
              {title}
            </li>
          );
        })}
      </ul>

      {children.map((child) => {
        if (child.props.title === activeTab) {
          return <div key={child.props.title}>{child}</div>;
        }
      })}
    </div>
  );
};
