import { useEffect, useState } from "react";
import { getItems, getSummary } from "./api/itemApi";

function HomePage() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchItems();
    fetchSummary();
  }, []);

  const fetchItems = async () => {
    const res = await getItems("saved");
    setItems(res.data);
  };
  const fetchSummary = async () => {
    const res = await getSummary();
    setTotal(res.data.totalSavedMoney);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>지갑 동결건조</h1>
      <h2>참은 금액: {total.toLocaleString()}</h2>
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.price.toLocaleString()}</p>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;
