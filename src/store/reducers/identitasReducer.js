import { toast } from "react-toastify";

const identitasReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_IDENTITAS": {
      toast.success("Data telah ditambah.", action.idendtias);
      return state;
    }
    case "ADD_IDENTITAS_ERR": {
      toast.error("Terjadi Error");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("Data telah dihapus");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("Gagal menghapus data");
      return state;
    }
    default:
      return state;
  }
};

export default identitasReducer;
