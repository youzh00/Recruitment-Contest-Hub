import { jwtVerify } from "jose";

export default async function verifyAuth(token) {
  try {
    const verifiedToken = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return verifiedToken.payload;
  } catch {
    throw new Error("Invalid token");
  }
}
