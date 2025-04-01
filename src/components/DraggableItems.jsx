import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const DraggableItems = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const [items, setItems] = useState([
    { id: "1", content: "HTML 5" },
    { id: "2", content: "CSS 3" },
    { id: "3", content: "JavaScript" },
    { id: "4", content: "React.Js" },
    { id: "5", content: "Next.Js" },
    { id: "6", content: "Vue.Js" },
    { id: "7", content: "API Integration" },
    { id: "8", content: "BootStrap" },
    { id: "9", content: "Tailwind" },
    { id: "10", content: "Canva UI -UX" },
    { id: "11", content: "WordPress" },
    { id: "12", content: "WP-Elementor" },
    { id: "13", content: "WP-Bakery" },
    { id: "14", content: "WP-Divi" },
    { id: "15", content: "Shopify" },
    { id: "16", content: "Square Space" },
    { id: "17", content: "GohighLevel" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="draggableItems">
        {(provided) => (
          <div
            className={`w-full md:w-[100%] backdrop-filter backdrop-blur-lg over-flow ${
              isDarkMode
                ? "bg-gradient-to-l from-black to-gray-950"
                : "bg-gradient-to-b from-gray-100 to-gray-300"
            } rounded-2xl shadow-md sm:-ml-0 p-2 md:p-4 flex justify-around flex-wrap gap-1 text-md font-semibold`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
         {items.map((item, index) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`backdrop-filter backdrop-blur-lg ${
          isDarkMode
            ? "bg-black border border-gray-500"
            : "bg-white bg-opacity-40"
        } shadow-md rounded-2xl p-2`}
      >
        {item.content}
      </div>
    )}
  </Draggable>
))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableItems;
