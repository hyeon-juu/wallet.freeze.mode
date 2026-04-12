const pool = require("../db/connection");
const getItems = async (req, res) => {
  try {
    const { status } = req.query;
    let sql = "SELECT * FROM items";
    const params = [];

    if (status) {
      sql += " WHERE status = ?";
      params.push(status);
    }
    sql += " ORDER BY created_at DESC";

    const [rows] = await pool.query(sql, params);

    res.json(rows);
  } catch (error) {
    console.error("getItems error :", error);
    res.status(500).json({ message: "상품 조회 실패" });
  }
};

module.exports = {
  getItems,
};
