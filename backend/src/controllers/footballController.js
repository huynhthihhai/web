// src/controllers/footballController.js

// 🔴 Lấy trận đang diễn ra (LIVE)
export const getLiveMatches = async (req, res) => {
    try {
        const response = await fetch(
            "https://v3.football.api-sports.io/fixtures?live=all",
            {
                method: "GET",
                headers: {
                    "x-apisports-key": process.env.FOOTBALL_API_KEY
                }
            }
        );

        const data = await response.json();

        res.json(data.response); // trả data gọn
    } catch (error) {
        res.status(500).json({
            message: "Lỗi lấy trận live",
            error: error.message
        });
    }
};

// 📅 Lấy trận hôm nay
export const getTodayMatches = async (req, res) => {
    try {
        const today = new Date().toISOString().split("T")[0];

        const response = await fetch(
            `https://v3.football.api-sports.io/fixtures?date=${today}`,
            {
                method: "GET",
                headers: {
                    "x-apisports-key": process.env.FOOTBALL_API_KEY
                }
            }
        );

        const data = await response.json();

        res.json(data.response);
    } catch (error) {
        res.status(500).json({
            message: "Lỗi lấy trận hôm nay",
            error: error.message
        });
    }
};
export const getMatchDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?id=${id}`,
      {
        headers: {
          "x-apisports-key": process.env.FOOTBALL_API_KEY
        }
      }
    );

    const data = await response.json();

    res.json(data.response[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};