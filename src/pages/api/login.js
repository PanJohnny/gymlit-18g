export const get = ({ params, request }) => {
    // Get headers
    const headers = request.headers;

    if (!headers.has("username") || !headers.has("password"))
        return {
            status: 401,
            body: "No password or name in headers"
        }

    const name = headers.get("username");
    const pass = headers.get("password");

    if (name == import.meta.env.NAME && pass == import.meta.env.PASSWORD) {
        return {
            status: 200,
            body: JSON.stringify({
                secret: import.meta.env.SECRET
            })
        }
    } else {
        return {
            status: 401,
            body: "Invalid name or password"
        }
    }

}