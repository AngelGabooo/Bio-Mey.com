// api/debug.js
module.exports = (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Las funciones serverless de Vercel funcionan correctamente",
    timestamp: new Date().toISOString()
  });
};