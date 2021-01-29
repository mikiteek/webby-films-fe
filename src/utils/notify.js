import {toast} from "react-toastify";

const successOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const errorOptions = {
  position: "top-center",
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const successAddDataNotify = () => {
  toast.success("You have success added data", successOptions);
}

const successDeleteDataNotify = () => {
  toast.success("You have success deleted data", successOptions);
}

const errorNotify = (error) => {
  toast.error(error, errorOptions);
}

export {
  successAddDataNotify,
  successDeleteDataNotify,
  errorNotify,
};