import { ChangeEvent, MouseEvent, useState } from "react";
import { publish } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const navigate = useNavigate();

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    const response = await publish(title, description, price);
    if (response) {
      navigate("/");
    }
  };

  return (
    <>
      <h1>Ajouter un article</h1>
      <div>
        <div>
          <label htmlFor="titleInput">Titre:</label>
          <input
            id="titleInput"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            value={title}
          />
        </div>
        <div>
          <label htmlFor="descriptionInput">Description:</label>
          <input
            id="descriptionInput"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
            value={description}
          />
        </div>
        <div>
          <label htmlFor="priceInput">Prix:</label>
          <input
            id="priceInput"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPrice(+e.target.value)
            }
            value={price}
          />
        </div>
        <button onClick={handleSubmit}>Ajouter l'article</button>
      </div>
    </>
  );
};

export default Publish;
