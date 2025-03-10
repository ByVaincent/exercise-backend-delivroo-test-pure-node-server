require("dotenv").config();

const getDatas = async (req, res, datas) => {
  try {
    const token = process.env.API_TOKEN;

    const rawDatas = await fetch(
      " https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/menu/paris/3eme-temple/sub-arc-subway-rambuteau?day=today&geohash=u09wj8rk5bqr&time=ASAP",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!rawDatas.ok) {
      throw { status: 500, message: "The api doesn't response" };
    }

    const datas = await rawDatas.json();

    res.writeHead(200, { "Content-Type": "application.json" });

    res.write(JSON.stringify(datas));
    res.end();
  } catch (error) {
    res.writeHead(error.status || 500, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({ message: error.message || "Internal server error" })
    );
    res.end();
  }
};

module.exports = getDatas;
