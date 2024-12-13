interface IDummyTodo {
  id: number;
  taskTitle: string;
}

export const dummyTodos = <IDummyTodo[]>[
  {
    taskTitle: "Doing the dishes",
  },
  {
    taskTitle: "Taking out the trash",
  },
  {
    taskTitle: "Doing the laundry",
  },
  {
    taskTitle: "Vacuuming the living room"
  },
  {
    taskTitle: "Watering the plants"
  },
  {
    taskTitle: "Cooking dinner"
  },
  {
    taskTitle: "Organizing the bookshelf"
  },
];
