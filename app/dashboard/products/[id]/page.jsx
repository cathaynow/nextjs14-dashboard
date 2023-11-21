import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>제품명</label>
          <input type="text" name="username" placeholder="Cathay Pacific" />
          <label>가격</label>
          <input type="number" name="price" placeholder="2000" />
          <label>재고</label>
          <input type="number" name="stock" placeholder="23" />
          <label>색상</label>
          <input type="text" name="color" placeholder="화이트" />
          <label>사이즈</label>
          <textarea type="text" name="size" placeholder="100" />
          <label>카테고리</label>
          <select name="isAdmin" id="isAdmin">
            <option value="tshirt">티셔츠</option>
            <option value="pants">바지</option>
            <option value="acc">악세사리</option>
          </select>
          <label>제품설명</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="제품설명"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
