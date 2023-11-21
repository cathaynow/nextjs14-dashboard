import style from "../../../ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "../../../lib/action";

const AddUserPage = () => {
  return (
    <div className={style.container}>
      <form action={addUser} className={style.form}>
        <input type="text" placeholder="사용자명" name="username" required />
        <input type="email" placeholder="이메일" name="email" required />
        <input
          type="password"
          placeholder="패스워드"
          name="password"
          required
        />
        <input type="number" placeholder="전화번호" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="주소"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
