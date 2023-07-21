import s from "./Categories.module.scss";

const Categories = ({ chooseCategory }) => {
  const categories = [
    {
      key: "all",
      name: "Всі товари",
    },
    {
      key: "household goods",
      name: "Товари для дому",
    },
    {
      key: "everything for cleaning",
      name: "Все для прибирання",
    },
    {
      key: "fishing goods",
      name: "Товари для риболовлі",
    },
  ];
  return (
    <div className={s.categories}>
      {categories.map((item) => (
        <div
          key={item.key}
          className={s.categoriesItem}
          onClick={() => chooseCategory(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
