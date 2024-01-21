import * as jose from 'jose'


export const decodeToken = async (token: string) => {
  try {
    const key = process.env.NEXT_PUBLIC_KEY_JWT;
    const algorithm = "RS256";
    const PublicKey = await jose.importSPKI(key, algorithm);
    const { payload, protectedHeader } = await jose.jwtVerify(token, PublicKey);
    return payload;
  } catch (e) {
    console.log(e);
  }
};
