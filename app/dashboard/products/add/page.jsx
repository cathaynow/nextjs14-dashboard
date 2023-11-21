import style from "../../../../app/ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "../../../lib/action";

const AddProductPage = () => {
  return (
    <div className={style.container}>
      <form action={addProduct} className={style.form}>
        <input type="text" placeholder="제품명" name="title" required />
        <select name="category" id="category">
          <option value="tshirt">티셔츠</option>
          <option value="pants">바지</option>
          <option value="acc">악세사리</option>
        </select>
        <input type="number" placeholder="가격" name="price" />
        <input type="number" placeholder="재고" name="stock" />
        <input type="text" placeholder="색상" name="color" />
        <input type="number" placeholder="사이즈" name="size" />
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="16"
          placeholder="제품설명"
        ></textarea>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
