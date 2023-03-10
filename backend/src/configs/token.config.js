import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();


const acessToken =function(user) {
    return jwt.sign({
        id: user.id,
        role: user.role,
    }, 
    process.env.JWT_ACCESS_KEY,
    {expiresIn: "1h"})
}

const refreshToken = function(user) {
    return jwt.sign(
        {
            id: user.id,
            admin: user.admin,
          },
          process.env.JWT_REFRESH_KEY,
          { expiresIn: "365d" }
        );
}

const requestRefreshToken = async function(request, response) {
    const refreshTokens = [];
    const refreshToken = request.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json("You're not authenticated");
      }
      if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json("Refresh token is not vaild");
      }
      jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
        if (err) return res.status(403).json("Refresh is not vaild");
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
        const newAccessToken = authController.generateAcessToken(user);
        const newRefreshToken = authController.generateRefreshToken(user);
        refreshTokens.push(newRefreshToken);
  
        res.cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        res.status(200).json({ accessToken: newAccessToken });
      });
}

export {
    acessToken,
    refreshToken
}