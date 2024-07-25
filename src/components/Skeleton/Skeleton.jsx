import styles from './styles.module.css';

function Skeleton({ count = 1, type = 'banner', direction = 'column' }) {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === 'column' ? styles.columnList : styles.rowList
          }
        >
          {[...Array(count)].map((_, index) => (
            // Додано повернення JSX елементів всередині методу map
            <li
              key={index}
              className={type === 'banner' ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === 'banner' ? styles.banner : styles.item}></li>
      )}
    </>
  );
}

export default Skeleton;
