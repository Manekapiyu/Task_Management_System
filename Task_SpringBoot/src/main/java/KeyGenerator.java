import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;
import java.util.Base64;

class JwtKeyGenerator {
    public static void main(String[] args) {
        SecretKey key = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256); // 256-bit key
        String base64Key = Base64.getEncoder().encodeToString(key.getEncoded());
        System.out.println("Your Base64 secret key: " + base64Key);
    }
}
