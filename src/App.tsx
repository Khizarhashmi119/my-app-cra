import * as React from "react";

import { DATA } from "./data";

import styles from "./app.module.css";

function App() {
  const [searchText, setSearchText] = React.useState("");

  const columnHeaderRef = React.useRef<
    Record<string, HTMLTableCellElement | null>
  >({});

  const timeout = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    timeout.current = setTimeout(() => {
      const columnHeaderName = Object.keys(columnHeaderRef.current).find(
        (columnHeaderName) =>
          columnHeaderName.toLowerCase().includes(searchText.toLowerCase())
      );

      if (columnHeaderName) {
        columnHeaderRef.current[columnHeaderName]?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 1000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [searchText]);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setSearchText(event.currentTarget.value);

  return (
    <div className={styles.app}>
      <input
        className={styles["search-input"]}
        type="search"
        value={searchText}
        onChange={handleSearch}
      />
      <table className={styles["users-table"]}>
        <thead>
          <tr>
            {Object.keys(DATA[0]).map((column) => (
              <th
                key={column}
                className={styles["column-header"]}
                ref={(element) => (columnHeaderRef.current[column] = element)}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DATA.map((user) => (
            <tr key={user.username}>
              {Object.entries(user).map(([_, value]) => (
                <td
                  className={styles["data-item"]}
                  key={`${user.username}-${value}`}
                >
                  {value.toString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
