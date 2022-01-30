export const reducer = (state, action) => {
  // state Previous state
  if (action.type === "ADD_ITEM") {
    const newItem = [...state.people, action.payLoad];
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modelContent: "item Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modelContent: "No VALUES in Input",
    };
  }
  if (action.type === "CLOSE_MODEL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id != action.payLoad
    );
    return {
      ...state,
      people: newPeople,
    };
  }
  throw new Error("no Matching Action Type");
};
