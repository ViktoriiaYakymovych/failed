import { IoIosClose } from "react-icons/io";

const Modal = ({ onClose }) => {
  return (
    <>
      <div>
        <p>Create trip</p>
        <button onClick={onClose}>
          <IoIosClose />
        </button>
        <form>
          <label>
            City
            <input type="text" />
          </label>
          <label>
            Start date
            <input type="date" />
          </label>
          <label>
            {" "}
            End Date
            <input type="date" />
          </label>
          <div>
            <button onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
