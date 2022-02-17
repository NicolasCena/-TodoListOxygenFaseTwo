export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO": {
        console.log(action.payload)
        localStorage.setItem('todosLocal', JSON.stringify([...state.todo, action.payload]))
        return {
          ...state,
          todo: [...state.todo, action.payload],
        };
      }
      case "DONE_TODO": {
          const newTodos = state.todo.filter(todo => todo.id !== action.payload.id);
          localStorage.setItem('todosLocal', JSON.stringify(newTodos))
          localStorage.setItem('todosDoneLocal', JSON.stringify([...state.todoDone, action.payload]))
        return {
          ...state,
          todo: newTodos,
          todoDone: [...state.todoDone, action.payload],
        };
      }
      case "DELETE_TODO": {
          const newDoneList = state.todoDone.filter( todo => todo.id !== action.payload.id);
          localStorage.setItem('todosDoneLocal', JSON.stringify(newDoneList))
        return {
          ...state,
          todoDone: newDoneList,
        };
      }
      case "RETURN_TODO": {
        const newDoneList = state.todoDone.filter( todo => todo.id !== action.payload.id);
        localStorage.setItem('todosLocal', JSON.stringify([...state.todo, action.payload]));
        localStorage.setItem('todosDoneLocal', JSON.stringify(newDoneList))
      return {
        ...state,
        todo: [...state.todo, action.payload],
        todoDone: newDoneList,
      };
    }
      case "SET_TODOSDONE": {
      return {
        ...state,
        todoDone: action.payload,
      }
    }
    case "SET_TODOS": {
      return {
        ...state,
        todo: action.payload,
      }
    }
    case "LOADING": {
      return {
        ...state,
        flag: action.payload,
      }
    }


      default:

    }
  };
  